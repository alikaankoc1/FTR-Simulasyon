import React from 'react';
import './HomePage.css';

const HomePage = ({ onStartTreatment }) => {
  return (
    /* 🔵 ARKA PLAN WRAPPER */
    <div className="home-page">

      {/* İÇERİK */}
      <div className="homepage-container">
        
        {/* Ortalama Yuvarlak FTR Logosu */}
        <div className="ftr-logo">
          FTR
        </div>

        {/* Ana Başlık */}
        <h1 className="main-title">
          FTR TEDAVİ SİMÜLASYONUNA HOŞ GELDİNİZ
        </h1>

        {/* Açıklama Metni */}
        <p className="description-text">
          Kişiselleştirilmiş fizik tedavi önerilerinizi alın, sağlıklı yaşama ilk adımı atın. 
          Uzman sistemimiz, sizin için en uygun tedavi programını oluşturacak.
        </p>

        {/* Buton */}
        <button 
          className="start-button"
          onClick={onStartTreatment}
        >
          Tedavi Programı Oluştur
        </button>
        
        {/* Alt Metin */}
        <p className="footer-text">
          Modern teknoloji ile kişiselleştirilmiş tedavi önerileri
        </p>
        
      </div>
    </div>
  );
};

export default HomePage;
