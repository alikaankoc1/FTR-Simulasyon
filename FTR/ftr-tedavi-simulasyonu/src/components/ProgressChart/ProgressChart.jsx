import React, { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './ProgressChart.css';

const ProgressChart = ({ onRestart, patientData }) => { // 👈 patientData eklendi

  // 1. Ağrı Başlangıç Değerini Hesaplayan Fonksiyon
  const getStartPain = () => {
    const severity = patientData?.painSeverity;
    
    // Eğer veri yoksa varsayılan 90 dönsün
    if (!severity) return 90;

    // Eğer formdan aralık ("1-3") seçildiyse mantıklı bir başlangıç atayalım
    if (severity === "1-3") return 30; // Hafif ağrı -> 30'dan başlar
    if (severity === "4-6") return 60; // Orta ağrı -> 60'tan başlar
    if (severity === "7-10") return 90; // Şiddetli ağrı -> 90'dan başlar

    // Eğer direkt sayı geliyorsa (Örn: "5" gelirse 50 olsun)
    const num = parseInt(severity);
    if (!isNaN(num)) {
        return num * 10; 
    }

    return 50; // Hata durumunda varsayılan
  };

  const startVal = getStartPain(); // Hesaplanan başlangıç değeri (Örn: 50)

  // 2. Grafik Verilerini Dinamik Oluştur (useMemo performansı artırır)
  const data = useMemo(() => [
    { name: 'Başlangıç', agri: startVal, iyilesme: 10 },
    { name: '1. Hafta',  agri: Math.max(0, startVal - 10), iyilesme: 25 },
    { name: '2. Hafta',  agri: Math.max(0, startVal - 20), iyilesme: 40 },
    { name: '3. Hafta',  agri: Math.max(0, startVal - 30), iyilesme: 55 },
    { name: '4. Hafta',  agri: Math.max(0, startVal - 38), iyilesme: 65 },
    { name: '5. Hafta',  agri: Math.max(0, startVal - 44), iyilesme: 75 },
    { name: '6. Hafta',  agri: Math.max(0, startVal - 48), iyilesme: 85 },
    { name: '8. Hafta',  agri: 0, iyilesme: 95 },
  ], [startVal]);

  return (
    <div className="chart-page-background">
      <div className="chart-container">
        
        {/* Başlık */}
        <div className="chart-header">
            <h1>Tahmini İyileşme Grafiği</h1>
            <p>
                Başlangıç Ağrı Seviyesi: <strong>{startVal / 10} / 10</strong> olarak baz alınmıştır.
            </p>
        </div>

        {/* Grafik Alanı */}
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorIyilesme" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0a81ff" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0a81ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAgri" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#666" />
              
              {/* Y Ekseni artık 0-100 arası sabit */}
              <YAxis domain={[0, 100]} /> 
              
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              
              {/* İyileşme Eğrisi (Mavi) */}
              <Area 
                type="monotone" 
                dataKey="iyilesme" 
                name="Hareket Kabiliyeti (%)" 
                stroke="#0a81ff" 
                fillOpacity={1} 
                fill="url(#colorIyilesme)" 
                strokeWidth={3}
              />
              
              {/* Ağrı Eğrisi (Kırmızı) - Dinamik */}
              <Area 
                type="monotone" 
                dataKey="agri" 
                name="Ağrı Seviyesi (x10)" 
                stroke="#ff4d4f" 
                fillOpacity={1} 
                fill="url(#colorAgri)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Yasal Uyarı Kutusu */}
        <div className="disclaimer-box">
            <div className="disclaimer-icon">⚠️</div>
            <div className="disclaimer-content">
                <h3>Önemli Tıbbi Uyarı</h3>
                <p>
                    Bu program, bir lisans bitirme projesi kapsamında geliştirilmiş bir <strong>simülasyon uygulamasıdır</strong>. 
                    Burada sunulan tedavi programları, egzersizler ve grafik verileri tamamen gösterim amaçlıdır.
                    Gerçek bir rahatsızlığınızda lütfen uzman bir Fizyoterapist veya Hekime danışınız.
                    Bu uygulama tıbbi tavsiye yerine geçmez.
                </p>
            </div>
        </div>

        {/* Ana Sayfaya Dön Butonu */}
        <button className="restart-button" onClick={onRestart}>
            Ana Sayfaya Dön
        </button>

      </div>
    </div>
  );
};

export default ProgressChart;