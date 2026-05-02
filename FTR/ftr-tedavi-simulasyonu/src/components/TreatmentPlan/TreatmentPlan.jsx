// src/components/TreatmentPlan/TreatmentPlan.jsx

import React from 'react';
import './TreatmentPlan.css';
import therapyPrograms from '../../data/therapyData';

function computeBmi(heightCm, weightKg) {
    const h = Number(heightCm);
    const w = Number(weightKg);
    if (!Number.isFinite(h) || !Number.isFinite(w) || h <= 0 || w <= 0) {
        return null;
    }
    const m = h / 100;
    const bmi = w / (m * m);
    return Math.round(bmi * 10) / 10;
}

/** WHO aralıkları — yalnızca genel bilgilendirme; tanı/tedavi içermez. */
function bmiInformativeLabel(bmi) {
    if (bmi < 18.5) return 'Genel tablolarda düşük kilo aralığı';
    if (bmi < 25) return 'Genel tablolarda normal kilo aralığı';
    if (bmi < 30) return 'Genel tablolarda fazla kilo aralığı';
    return 'Genel tablolarda obezite aralığı';
}

function formatPainSeverity(painSeverity) {
    const map = {
        '1-3': '1–3 (Hafif)',
        '4-6': '4–6 (Orta)',
        '7-10': '7–10 (Yüksek)',
    };
    return map[painSeverity] || painSeverity || '—';
}

/** Simülasyon metni; tıbbi iddia veya kişisel tedavi planı değildir. */
function getIntensityGuidance(painSeverity) {
    switch (painSeverity) {
        case '1-3':
            return 'Bu simülasyonda hafif ağrı aralığı seçildiğiniz için, hareketleri kendi hızınızda ve rahat hissettiğiniz düzeyde uygulamanız önerilir. Gerçek şikâyetinizde mutlaka uzman değerlendirmesi alınız.';
        case '4-6':
            return 'Bu simülasyonda orta düzey aralık seçildiğiniz için, tempoyu ani artırmadan ve gerektiğinde dinlenme aralıklarıyla ilerlemeniz önerilir. Bu ifade yalnızca bilgilendirme amaçlıdır; kişisel plan için uzmanınıza danışınız.';
        case '7-10':
            return 'Bu simülasyonda yüksek ağrı aralığı işaretlendiğinde, egzersizleri zorlamadan ve ağrıyı artırmayacak şekilde ilerlemeniz önerilir (simülasyon uyarısıdır, tıbbi yönlendirme değildir). Şiddetli veya artan ağrıda sağlık kuruluşuna başvurunuz.';
        default:
            return 'Ağrı şiddeti seçilmediği için yoğunluk önerisi gösterilemiyor; formu eksiksiz doldurduğunuzdan emin olun.';
    }
}

// TreatmentPlan bileşeni, hasta verilerini (patientData) prop olarak alır.
const TreatmentPlan = ({ patientData, onShowChart, onBackToForm }) => {
    
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
                    <h1 style={{ color: '#ff6b6b' }}>Hata! Tedavi Programı Bulunamadı.</h1>
                    <p>Lütfen geri dönüp Problem Bölgesi&apos;ni seçtiğinizden emin olun.</p>
                    {onBackToForm && (
                        <div className="plan-footer plan-footer-actions">
                            <button
                                type="button"
                                className="plan-back-button"
                                onClick={onBackToForm}
                                aria-label="Hasta formuna geri dön"
                            >
                                Forma dön
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    const program = selectedProgram;

    const bmi = computeBmi(patientData?.height, patientData?.weight);
    const painSeverity = patientData?.painSeverity;
    const intensityNote = getIntensityGuidance(painSeverity);

    return (
        <div className="plan-page-background">
            <div className="plan-container">
                
                <div className="plan-header">
                    <h1>Tedavi Programınız Hazır!</h1>
                    <p>
                        Sn. {patientData?.name} {patientData?.surname?.toUpperCase() || 'Hasta'},{' '}
                        {problemArea} bölgeniz için oluşturulan özel FTR programı aşağıdadır.
                    </p>
                </div>

                <section className="plan-patient-summary" aria-labelledby="patient-summary-heading">
                    <h2 id="patient-summary-heading">Hasta özeti (simülasyon)</h2>
                    <p className="patient-summary-lead">
                        Aşağıdaki bilgiler formda girdiğiniz değerlerden oluşturulmuştur; tanı veya tedavi kararı
                        içermez.
                    </p>

                    <div className="patient-summary-grid">
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Yaş</span>
                            <span className="patient-summary-value">{patientData?.age || '—'}</span>
                        </div>
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Cinsiyet</span>
                            <span className="patient-summary-value">{patientData?.gender || '—'}</span>
                        </div>
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Boy / Kilo</span>
                            <span className="patient-summary-value">
                                {patientData?.height && patientData?.weight
                                    ? `${patientData.height} cm / ${patientData.weight} kg`
                                    : '—'}
                            </span>
                        </div>
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Kan grubu</span>
                            <span className="patient-summary-value">{patientData?.bloodType || '—'}</span>
                        </div>
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Problem bölgesi</span>
                            <span className="patient-summary-value">{problemArea}</span>
                        </div>
                        <div className="patient-summary-item">
                            <span className="patient-summary-label">Ağrı şiddeti (form)</span>
                            <span className="patient-summary-value">{formatPainSeverity(painSeverity)}</span>
                        </div>
                    </div>

                    {patientData?.detailedProblem?.trim() && (
                        <div className="patient-summary-problem">
                            <span className="patient-summary-label">Belirttiğiniz durum</span>
                            <p className="patient-summary-problem-text">{patientData.detailedProblem.trim()}</p>
                        </div>
                    )}

                    {bmi != null && (
                        <div className="patient-summary-bmi">
                            <p>
                                <strong>VKİ (bilgilendirme):</strong> {bmi} kg/m² — {bmiInformativeLabel(bmi)}.
                            </p>
                            <p className="patient-summary-disclaimer">
                                VKİ, yaygın tablolarda kullanılan genel bir göstergedir; vücut yapınız, kas kütlesi veya
                                özel durumlar nedeniyle tek başına yorumlanmamalıdır. Bu simülasyon tanı koymaz.
                            </p>
                        </div>
                    )}

                    <div className="patient-summary-intensity">
                        <span className="patient-summary-label">Program yoğunluğu (simülasyon notu)</span>
                        <p className="patient-summary-intensity-text">{intensityNote}</p>
                    </div>
                </section>
                
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
                
                <div className="plan-footer plan-footer-actions">
                    {onBackToForm && (
                        <button
                            type="button"
                            className="plan-back-button"
                            onClick={onBackToForm}
                            aria-label="Hasta formuna geri dön"
                        >
                            Forma dön
                        </button>
                    )}
                    <button
                        type="button"
                        className="home-button"
                        onClick={onShowChart}
                        aria-label="İyileşme grafiği sayfasına geç"
                    >
                        Tedavi Zamanlaması Grafiği
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default TreatmentPlan;