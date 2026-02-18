/**
 * Placeholder escalation gate.
 * Blocks output at or above threshold.
 */
export function shouldEscalate(criScore: number, threshold = 0.5): boolean {
  return criScore >= threshold;
}
