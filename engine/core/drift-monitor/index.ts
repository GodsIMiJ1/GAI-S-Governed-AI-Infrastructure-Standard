/**
 * Placeholder drift detector.
 */
export function isDrifted(metric: number, threshold = 0.2): boolean {
  return metric > threshold;
}
