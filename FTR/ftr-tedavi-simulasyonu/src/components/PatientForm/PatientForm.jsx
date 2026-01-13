// src/components/PatientForm/PatientForm.jsx

import React, { useState } from "react";
import "./PatientForm.css";
import therapyPrograms from '../../data/therapyData';

const PatientForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodType: "",
    problemArea: "",
    painSeverity: "",
    detailedProblem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className="page-background">
      <div className="patient-form-box">
        <div className="form-header">
          <h2>FTR Tedavi Simülasyonu</h2>
          <p>Lütfen bilgilerinizi girin ve size özel tedavi programınızı alın</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Ad / Soyad */}
          <div className="form-row">
            <div className="form-group">
              <label>Ad *</label>
              <input name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Soyad *</label>
              <input
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Yaş / Cinsiyet */}
          <div className="form-row">
            <div className="form-group flex-input">
              <label>Yaş *</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                
              </div>
            </div>

            <div className="form-group">
              <label>Cinsiyet *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="Kadın">Kadın</option>
                <option value="Erkek">Erkek</option>
                <option value="Diğer">Belirtmek İstemiyorum</option> 
              </select>
            </div>
          </div>

          {/* Boy – Kilo – Kan Grubu */}
          <div className="form-row three-col">
            <div className="form-group flex-input">
              <label>Boy (cm) *</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
                
              </div>
            </div>

            <div className="form-group flex-input">
              <label>Kilo (kg) *</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
               
              </div>
            </div>

            <div className="form-group">
              <label>Kan Grubu *</label>
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="A+">A Rh+</option>
                <option value="A-">A Rh-</option>
                <option value="B+">B Rh+</option>
                <option value="B-">B Rh-</option>
                <option value="0+">0 Rh+</option>
                <option value="0-">0 Rh-</option>
                <option value="AB+">AB Rh+</option>
                <option value="AB-">AB Rh-</option>
              </select>
            </div>
          </div>

          {/* Problem + Ağrı */}
          <div className="form-row">
            <div className="form-group">
              <label>Problem Bölgeleri *</label>
              <select
                name="problemArea"
                value={formData.problemArea}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                {/* PROGRAM VERİLERİNDEN DİNAMİK OLARAK SEÇENEKLER OLUŞTURULUYOR */}
                {Object.keys(therapyPrograms).map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Ağrı Şiddeti *</label>
              <select
                name="painSeverity"
                value={formData.painSeverity}
                onChange={handleChange}
              >
                <option value="">Seçiniz</option>
                <option value="1-3">1–3 (Hafif)</option>
                <option value="4-6">4–6 (Orta)</option>
                <option value="7-10">7–10 (Yüksek)</option>
              </select>
            </div>
          </div>

          {/* Açıklama */}
          <div className="form-group full-width">
            <label>Yaşadığınız Problem *</label>
            <textarea className="placeholder"
              name="detailedProblem"
              value={formData.detailedProblem}
              onChange={handleChange}
              placeholder="Yaşadığınız problemi detaylı bir şekilde anlatınız..."
            ></textarea>
          </div>

          <button className="submit-button">Tedavi Önerisi Al</button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;