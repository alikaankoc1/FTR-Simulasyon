/**
 * Hasta formu alan doğrulaması — boş dönerse gönderim geçerlidir.
 * @param {Record<string, string>} data
 * @returns {Record<string, string>}
 */
export function validatePatientForm(data) {
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
