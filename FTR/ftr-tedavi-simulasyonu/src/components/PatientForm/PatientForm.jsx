// src/components/PatientForm/PatientForm.jsx

import React, { useState } from "react";
import "./PatientForm.css";
import therapyPrograms from '../../data/therapyData';

const initialForm = {
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
};

function validateForm(data) {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Ad zorunludur.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Ad en az 2 karakter olmalıdır.";
  }

  if (!data.surname.trim()) {
    errors.surname = "Soyad zorunludur.";
  } else if (data.surname.trim().length < 2) {
    errors.surname = "Soyad en az 2 karakter olmalıdır.";
  }

  const ageNum = Number(data.age);
  if (data.age === "" || Number.isNaN(ageNum)) {
    errors.age = "Yaş zorunludur.";
  } else if (ageNum < 1 || ageNum > 120) {
    errors.age = "Geçerli bir yaş giriniz (1–120).";
  }

  if (!data.gender) {
    errors.gender = "Cinsiyet seçiniz.";
  }

  const heightNum = Number(data.height);
  if (data.height === "" || Number.isNaN(heightNum)) {
    errors.height = "Boy (cm) zorunludur.";
  } else if (heightNum < 50 || heightNum > 250) {
    errors.height = "Boy 50–250 cm aralığında olmalıdır.";
  }

  const weightNum = Number(data.weight);
  if (data.weight === "" || Number.isNaN(weightNum)) {
    errors.weight = "Kilo (kg) zorunludur.";
  } else if (weightNum < 10 || weightNum > 300) {
    errors.weight = "Kilo 10–300 kg aralığında olmalıdır.";
  }

  if (!data.bloodType) {
    errors.bloodType = "Kan grubu seçiniz.";
  }

  if (!data.problemArea) {
    errors.problemArea = "Problem bölgesi seçiniz.";
  }

  if (!data.painSeverity) {
    errors.painSeverity = "Ağrı şiddeti seçiniz.";
  }

  const detail = data.detailedProblem.trim();
  if (!detail) {
    errors.detailedProblem = "Yaşadığınız problemi kısaca açıklayınız.";
  } else if (detail.length < 10) {
    errors.detailedProblem = "Açıklama en az 10 karakter olmalıdır.";
  }

  return errors;
}

const PatientForm = ({ onFormSubmit, onBackToHome }) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    onFormSubmit(formData);
  };

  return (
    <div className="page-background">
      <div className="patient-form-box">
        {onBackToHome && (
          <div className="form-nav-top">
            <button
              type="button"
              className="form-back-button"
              onClick={onBackToHome}
              aria-label="Ana sayfaya dön"
            >
              Ana sayfaya dön
            </button>
          </div>
        )}
        <div className="form-header">
          <h2 id="patient-form-title">FTR Tedavi Simülasyonu</h2>
          <p>Lütfen bilgilerinizi girin ve size özel tedavi programınızı alın</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-labelledby="patient-form-title"
        >
          {/* Ad / Soyad */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="patient-name">Ad *</label>
              <input
                id="patient-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "field-invalid" : undefined}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "error-name" : undefined}
              />
              {errors.name && (
                <p id="error-name" className="field-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="patient-surname">Soyad *</label>
              <input
                id="patient-surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className={errors.surname ? "field-invalid" : undefined}
                aria-invalid={errors.surname ? true : undefined}
                aria-describedby={errors.surname ? "error-surname" : undefined}
              />
              {errors.surname && (
                <p id="error-surname" className="field-error" role="alert">
                  {errors.surname}
                </p>
              )}
            </div>
          </div>

          {/* Yaş / Cinsiyet */}
          <div className="form-row">
            <div className="form-group flex-input">
              <label htmlFor="patient-age">Yaş *</label>
              <div className="input-wrapper">
                <input
                  id="patient-age"
                  type="number"
                  name="age"
                  min={1}
                  max={120}
                  value={formData.age}
                  onChange={handleChange}
                  className={errors.age ? "field-invalid" : undefined}
                  aria-invalid={errors.age ? true : undefined}
                  aria-describedby={errors.age ? "error-age" : undefined}
                />
              </div>
              {errors.age && (
                <p id="error-age" className="field-error" role="alert">
                  {errors.age}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="patient-gender">Cinsiyet *</label>
              <select
                id="patient-gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? "field-invalid" : undefined}
                aria-invalid={errors.gender ? true : undefined}
                aria-describedby={errors.gender ? "error-gender" : undefined}
              >
                <option value="">Seçiniz</option>
                <option value="Kadın">Kadın</option>
                <option value="Erkek">Erkek</option>
                <option value="Diğer">Belirtmek İstemiyorum</option>
              </select>
              {errors.gender && (
                <p id="error-gender" className="field-error" role="alert">
                  {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* Boy – Kilo – Kan Grubu */}
          <div className="form-row three-col">
            <div className="form-group flex-input">
              <label htmlFor="patient-height">Boy (cm) *</label>
              <div className="input-wrapper">
                <input
                  id="patient-height"
                  type="number"
                  name="height"
                  min={50}
                  max={250}
                  value={formData.height}
                  onChange={handleChange}
                  className={errors.height ? "field-invalid" : undefined}
                  aria-invalid={errors.height ? true : undefined}
                  aria-describedby={errors.height ? "error-height" : undefined}
                />
              </div>
              {errors.height && (
                <p id="error-height" className="field-error" role="alert">
                  {errors.height}
                </p>
              )}
            </div>

            <div className="form-group flex-input">
              <label htmlFor="patient-weight">Kilo (kg) *</label>
              <div className="input-wrapper">
                <input
                  id="patient-weight"
                  type="number"
                  name="weight"
                  min={10}
                  max={300}
                  value={formData.weight}
                  onChange={handleChange}
                  className={errors.weight ? "field-invalid" : undefined}
                  aria-invalid={errors.weight ? true : undefined}
                  aria-describedby={errors.weight ? "error-weight" : undefined}
                />
              </div>
              {errors.weight && (
                <p id="error-weight" className="field-error" role="alert">
                  {errors.weight}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="patient-blood">Kan Grubu *</label>
              <select
                id="patient-blood"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className={errors.bloodType ? "field-invalid" : undefined}
                aria-invalid={errors.bloodType ? true : undefined}
                aria-describedby={errors.bloodType ? "error-bloodType" : undefined}
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
              {errors.bloodType && (
                <p id="error-bloodType" className="field-error" role="alert">
                  {errors.bloodType}
                </p>
              )}
            </div>
          </div>

          {/* Problem + Ağrı */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="patient-problem">Problem Bölgeleri *</label>
              <select
                id="patient-problem"
                name="problemArea"
                value={formData.problemArea}
                onChange={handleChange}
                className={errors.problemArea ? "field-invalid" : undefined}
                aria-invalid={errors.problemArea ? true : undefined}
                aria-describedby={
                  errors.problemArea ? "error-problemArea" : undefined
                }
              >
                <option value="">Seçiniz</option>
                {Object.keys(therapyPrograms).map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.problemArea && (
                <p id="error-problemArea" className="field-error" role="alert">
                  {errors.problemArea}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="patient-pain">Ağrı Şiddeti *</label>
              <select
                id="patient-pain"
                name="painSeverity"
                value={formData.painSeverity}
                onChange={handleChange}
                className={errors.painSeverity ? "field-invalid" : undefined}
                aria-invalid={errors.painSeverity ? true : undefined}
                aria-describedby={
                  errors.painSeverity ? "error-painSeverity" : undefined
                }
              >
                <option value="">Seçiniz</option>
                <option value="1-3">1–3 (Hafif)</option>
                <option value="4-6">4–6 (Orta)</option>
                <option value="7-10">7–10 (Yüksek)</option>
              </select>
              {errors.painSeverity && (
                <p id="error-painSeverity" className="field-error" role="alert">
                  {errors.painSeverity}
                </p>
              )}
            </div>
          </div>

          {/* Açıklama */}
          <div className="form-group full-width">
            <label htmlFor="patient-detail">Yaşadığınız Problem *</label>
            <textarea
              id="patient-detail"
              className={`placeholder${errors.detailedProblem ? " field-invalid" : ""}`}
              name="detailedProblem"
              value={formData.detailedProblem}
              onChange={handleChange}
              placeholder="Yaşadığınız problemi detaylı bir şekilde anlatınız..."
              aria-invalid={errors.detailedProblem ? true : undefined}
              aria-describedby={
                errors.detailedProblem ? "error-detailedProblem" : undefined
              }
            />
            {errors.detailedProblem && (
              <p
                id="error-detailedProblem"
                className="field-error"
                role="alert"
              >
                {errors.detailedProblem}
              </p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Tedavi Önerisi Al
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;