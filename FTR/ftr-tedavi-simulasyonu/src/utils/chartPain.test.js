import { describe, it, expect } from 'vitest';
import { getStartPainFromSeverity } from './chartPain.js';

describe('getStartPainFromSeverity', () => {
  it('şiddet aralıklarına göre ölçek üretir', () => {
    expect(getStartPainFromSeverity('1-3')).toBe(30);
    expect(getStartPainFromSeverity('4-6')).toBe(60);
    expect(getStartPainFromSeverity('7-10')).toBe(90);
  });

  it('tanımsızda varsayılan yüksek değer', () => {
    expect(getStartPainFromSeverity(undefined)).toBe(90);
  });

  it('sayısal string için x10', () => {
    expect(getStartPainFromSeverity('5')).toBe(50);
  });
});
