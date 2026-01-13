// src/components/TreatmentPlan/TreatmentPlan.jsx

import React from 'react';
import './TreatmentPlan.css';
// 🟢 Eklendi: therapyData.js dosyasını içe aktarın
import therapyPrograms from '../../data/therapyData'; 


// TreatmentPlan bileşeni, hasta verilerini (patientData) prop olarak alır.
const TreatmentPlan = ({ patientData, onShowChart }) => {
    
    // 🟢 DİNAMİKLEŞTİRME BAŞLANGICI
    
    // 1. Hasta verisinden seçilen problem bölgesini alın.
    const problemArea = patientData?.problemArea;
    
    // 2. Eğer geçerli bir problem bölgesi seçilmişse, therapyPrograms nesnesinden
    // o bölgeye ait programı çekin.
    const selectedProgram = problemArea ? therapyPrograms[problemArea] : null;

    // 3. Eğer program bulunamazsa veya patientData yoksa, bir uyarı veya varsayılan değer gösterin.
    if (!selectedProgram) {
        return (
            <div className="plan-page-background">
                <div className="plan-container">
                    <h1 style={{color: '#ff6b6b'}}>Hata! Tedavi Programı Bulunamadı.</h1>
                    <p>Lütfen geri dönüp Problem Bölgesi'ni seçtiğinizden emin olun.</p>
                </div>
            </div>
        );
    }
    
    // 4. Artık 'program' yerine 'selectedProgram' değişkenini kullanacağız.
    const program = selectedProgram;
    
    // Geri dönme butonu için basit bir yer tutucu fonksiyon (App.jsx'ten gönderilecek)
    // const handleGoBack = () => {
    //     // Geri dönüş işlevi buraya gelecek
    // };


    return (
        <div className="plan-page-background">
            <div className="plan-container">
                
                {/* 📋 Başlık Alanı */}
                <div className="plan-header">
                    <h1>Tedavi Programınız Hazır!</h1>
                    {/* patientData?.name: Adı büyük harfle, soyadı küçük harfle gösterme örneği */}
                    <p>Sn. {patientData?.name} {patientData?.surname?.toUpperCase() || "Hasta"}, {problemArea} bölgeniz için oluşturulan özel FTR programı aşağıdadır.</p>
                </div>
                
                {/* 🎯 Genel Bilgiler */}
                <div className="plan-info-section">
                    <h2>{program.title}</h2>
                    <div className="info-grid">
                        <div className="info-box">
                            <h3>Hedef</h3>
                            <p>{program.goal}</p>
                        </div>
                        <div className="info-box">
                            <h3>Süre</h3>
                            <p className="highlight">{program.duration}</p>
                        </div>
                        <div className="info-box">
                            <h3>Sıklık</h3>
                            <p className="highlight">{program.frequency}</p>
                        </div>
                    </div>
                </div>

                {/* 🤸 Egzersizler */}
                <div className="plan-section exercises-section">
                    <h2>1. Temel Egzersizler</h2>
                    {program.exercises.map((exercise, index) => (
                        <div key={index} className="exercise-card">
                            <div className="exercise-content">
                                <h3>{index + 1}. {exercise.name}</h3>
                                <p>{exercise.description}</p>
                            </div>
                            {/* İleride Resim/Video Buraya Eklenebilir */}
                            {/* <div className="exercise-image">
                                <img src={`/images/${exercise.image}`} alt={exercise.name} />
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* 💡 Genel Tavsiyeler */}
                <div className="plan-section advice-section">
                    <h2>2. Yaşam Tarzı Önerileri</h2>
                    <ul>
                        {program.advice.map((item, index) => (
                            <li key={index}>
                                <span className="advice-dot">●</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* ↩️ Geri Dön Butonu */}
                <div className="plan-footer">
                    <button 
                        className="home-button" 
                        onClick={onShowChart}
                    >
                        Tedavi Zamanlaması Grafiği
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default TreatmentPlan;