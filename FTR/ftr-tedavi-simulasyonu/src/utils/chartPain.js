/**
 * Grafik başlangıç ağrı ölçeği (0–100; gösterimde /10).
 * @param {string | undefined} painSeverity
 * @returns {number}
 */
export function getStartPainFromSeverity(painSeverity) {
  if (!painSeverity) return 90;

  if (painSeverity === "1-3") return 30;
  if (painSeverity === "4-6") return 60;
  if (painSeverity === "7-10") return 90;

  const num = parseInt(painSeverity, 10);
  if (!Number.isNaN(num)) {
    return num * 10;
  }

  return 50;
}
