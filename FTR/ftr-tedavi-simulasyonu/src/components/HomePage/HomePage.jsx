import React from 'react';
import './HomePage.css';

const HomePage = ({ onStartTreatment }) => {
  return (
    <div className="home-page">
      <main className="homepage-container" aria-labelledby="home-main-title">
        
        {/* Ortalama Yuvarlak FTR Logosu */}
        <div className="ftr-logo">
          FTR
        </div>

        <h1 id="home-main-title" className="main-title">
          FTR TEDAVİ SİMÜLASYONUNA HOŞ GELDİNİZ
        </h1>

        {/* Açıklama Metni */}
        <p className="description-text">
          Kişiselleştirilmiş fizik tedavi önerilerinizi alın, sağlıklı yaşama ilk adımı atın. 
          Uzman sistemimiz, sizin için en uygun tedavi programını oluşturacak.
        </p>

        <button
          type="button"
          className="start-button"
          onClick={onStartTreatment}
          aria-label="Tedavi programı oluşturma formuna geç"
        >
          Tedavi Programı Oluştur
        </button>
        
        {/* Alt Metin */}
        <p className="footer-text">
          Modern teknoloji ile kişiselleştirilmiş tedavi önerileri
        </p>
      </main>
    </div>
  );
};

export default HomePage;
