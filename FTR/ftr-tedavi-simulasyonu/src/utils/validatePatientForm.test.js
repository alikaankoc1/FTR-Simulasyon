import { describe, it, expect } from 'vitest';
import { validatePatientForm } from './validatePatientForm.js';

const validLike = {
  name: 'Ayşe',
  surname: 'Yılmaz',
  age: '35',
  gender: 'Kadın',
  height: '165',
  weight: '62',
  bloodType: 'A+',
  problemArea: 'Bel',
  painSeverity: '4-6',
  detailedProblem: 'Bel ağrısı uzun süredir devam ediyor.',
};

describe('validatePatientForm', () => {
  it('boş formda birden fazla hata döner', () => {
    const empty = {
      name: '',
      surname: '',
      age: '',
      gender: '',
      height: '',
      weight: '',
      bloodType: '',
      problemArea: '',
      painSeverity: '',
      detailedProblem: '',
    };
    const err = validatePatientForm(empty);
    expect(Object.keys(err).length).toBeGreaterThan(3);
    expect(err.name).toBeDefined();
  });

  it('geçerli veride hata dönmez', () => {
    expect(Object.keys(validatePatientForm(validLike)).length).toBe(0);
  });

  it('kısa açıklamayı reddeder', () => {
    const err = validatePatientForm({
      ...validLike,
      detailedProblem: 'kısa',
    });
    expect(err.detailedProblem).toBeDefined();
  });
});
