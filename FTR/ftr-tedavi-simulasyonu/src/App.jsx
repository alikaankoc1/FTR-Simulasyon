import React, { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import PatientForm from './components/PatientForm/PatientForm';
import TreatmentPlan from './components/TreatmentPlan/TreatmentPlan';
import ProgressChart from './components/ProgressChart/ProgressChart';


import './App.css'; 

function App() {
  // Proje adımlarını yönetmek için state: 'home', 'form', 'plan'
  const [currentStep, setCurrentStep] = useState('home'); 
  const [patientData, setPatientData] = useState(null); 
  
  // 1. Tedavi Başlatma Fonksiyonu: currentStep'i 'form'a çevirerek geçişi sağlar
  const startTreatmentHandler = () => {
    setCurrentStep('form'); 
    console.log("-> Form sayfasına geçiş yapıldı.");
  };

  // 2. Form Gönderim Fonksiyonu (Bir sonraki aşamada tamamlanacak)
  const handleFormSubmit = (data) => {
      // Şimdilik sadece konsola çıktı veriyoruz
      console.log("Form verisi alındı:", data);
      setPatientData(data);
      setCurrentStep('plan'); 
      console.log("-> Tedavi Planı sayfasına geçiş yapıldı.");
  };
  
  // Hangi component'in gösterileceğine karar veren ana render fonksiyonu
  const renderContent = () => {
      if (currentStep === 'home') {
          // HomePage'i göster ve butona tıklandığında geçiş fonksiyonunu ver
          return <HomePage onStartTreatment={startTreatmentHandler} />;
      } else if (currentStep === 'form') {
          // Form Componentini göster
          return (
            <div className="content-area">
             
                <PatientForm onFormSubmit={handleFormSubmit} />
            </div>
          );
      }

      else if (currentStep === 'plan') {
          return (
              
              <TreatmentPlan patientData={patientData}
               onShowChart={() => setCurrentStep('chart')}
               />
          );
      }
      else if (currentStep === 'chart') {
    return (
        <ProgressChart 
        patientData={patientData}
            onRestart={() => {
                setCurrentStep('home');
                setPatientData(null); // Verileri sıfırla
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