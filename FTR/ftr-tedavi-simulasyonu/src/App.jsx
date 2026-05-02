import React, { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import PatientForm from './components/PatientForm/PatientForm';
import TreatmentPlan from './components/TreatmentPlan/TreatmentPlan';
import ProgressChart from './components/ProgressChart/ProgressChart';


import './App.css'; 

function App() {
  /** Akış: home → form → plan → chart */
  const [currentStep, setCurrentStep] = useState('home');
  const [patientData, setPatientData] = useState(null);

  const startTreatmentHandler = () => {
    setCurrentStep('form');
  };

  const handleFormSubmit = (data) => {
    setPatientData(data);
    setCurrentStep('plan');
  };

  const renderContent = () => {
      if (currentStep === 'home') {
          return <HomePage onStartTreatment={startTreatmentHandler} />;
      }
      if (currentStep === 'form') {
          return (
            <div className="content-area">
                <PatientForm
                  onFormSubmit={handleFormSubmit}
                  onBackToHome={() => setCurrentStep('home')}
                />
            </div>
          );
      }
      if (currentStep === 'plan') {
          return (
              <TreatmentPlan
                patientData={patientData}
                onShowChart={() => setCurrentStep('chart')}
                onBackToForm={() => setCurrentStep('form')}
              />
          );
      }
      if (currentStep === 'chart') {
        return (
            <ProgressChart
                patientData={patientData}
                onRestart={() => {
                    setCurrentStep('home');
                    setPatientData(null);
                }}
            />
        );
      }
      return null;
  };

  return (
    <div className="App">
        {renderContent()}
    </div>
  );
}

export default App;