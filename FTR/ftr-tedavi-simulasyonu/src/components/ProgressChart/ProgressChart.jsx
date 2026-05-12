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
import therapyPrograms from '../../data/therapyData';
import { getStartPainFromSeverity } from '../../utils/chartPain';

const DEFAULT_WEEKS = 8;

/** therapyData `duration` alanından hafta sayısı (örn. "6 Hafta" -> 6). */
function parseWeeksFromDuration(durationStr) {
  if (!durationStr || typeof durationStr !== 'string') return DEFAULT_WEEKS;
  const m = durationStr.match(/(\d+)/);
  if (!m) return DEFAULT_WEEKS;
  const n = parseInt(m[1], 10);
  if (Number.isNaN(n) || n < 1) return DEFAULT_WEEKS;
  if (n > 52) return 52;
  return n;
}

function getProgramWeeks(patientData) {
  const area = patientData?.problemArea;
  const program = area ? therapyPrograms[area] : null;
  return parseWeeksFromDuration(program?.duration);
}

/**
 * Başlangıç + 1..N hafta; eğri seçilen program süresine göre linear interpolasyon.
 */
function buildChartData(startVal, weeks) {
  const w = Math.max(1, weeks);
  const points = [
    {
      name: 'Başlangıç',
      agri: startVal,
      iyilesme: 10,
    },
  ];
  for (let week = 1; week <= w; week += 1) {
    const t = week / w;
    points.push({
      name: `${week}. Hafta`,
      agri: Math.max(0, Math.round(startVal * (1 - t))),
      iyilesme: Math.min(100, Math.round(10 + 85 * t)),
    });
  }
  return points;
}

const ProgressChart = ({ onRestart, patientData }) => {

  const startVal = getStartPainFromSeverity(patientData?.painSeverity);
  const programWeeks = getProgramWeeks(patientData);

  const data = useMemo(
    () => buildChartData(startVal, programWeeks),
    [startVal, programWeeks]
  );

  return (
    <div className="chart-page-background">
      <div className="chart-container">
        
        {/* Başlık */}
        <div className="chart-header">
            <h1>Tahmini İyileşme Grafiği</h1>
            <p>
                Başlangıç ağrı seviyesi: <strong>{startVal / 10} / 10</strong>
                {' · '}
                Simülasyon süresi: <strong>{programWeeks} hafta</strong>
                {patientData?.problemArea && therapyPrograms[patientData.problemArea] ? (
                  <>
                    {' '}
                    ({therapyPrograms[patientData.problemArea].duration}; {patientData.problemArea})
                  </>
                ) : (
                  <> (seçilen bölgeye göre süre bulunamadıysa varsayılan)</>
                )}
            </p>
        </div>

        {/* Grafik Alanı */}
        <div className="chart-wrapper">
          <div className="chart-responsive-host">
            <ResponsiveContainer width="100%" height="100%">
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
        <button
          type="button"
          className="restart-button"
          onClick={onRestart}
          aria-label="Ana sayfaya dön ve form verilerini sıfırla"
        >
          Ana Sayfaya Dön
        </button>

      </div>
    </div>
  );
};

export default ProgressChart;