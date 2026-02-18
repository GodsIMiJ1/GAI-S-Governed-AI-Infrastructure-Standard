/**
 * Placeholder CRI scoring engine.
 * CRI = probability * severity
 */
export function calculateCri(probability: number, severity: number): number {
  return probability * severity;
}
