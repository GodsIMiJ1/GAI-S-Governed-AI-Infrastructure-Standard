export type CriBand = "LOW" | "MODERATE" | "HIGH" | "CRITICAL";

const MIN_SCORE = 0;
const MAX_SCORE = 1;

function assertProbabilityLike(name: string, value: number): void {
  if (!Number.isFinite(value) || value < MIN_SCORE || value > MAX_SCORE) {
    throw new RangeError(`${name} must be a finite number between 0 and 1`);
  }
}

/**
 * Deterministic CRI calculation using normalized inputs.
 * Formula: CRI = probability * severity
 */
export function calculateCri(probability: number, severity: number, decimals = 4): number {
  assertProbabilityLike("probability", probability);
  assertProbabilityLike("severity", severity);
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 10) {
    throw new RangeError("decimals must be an integer between 0 and 10");
  }

  return Number((probability * severity).toFixed(decimals));
}

export function mapCriBand(criScore: number): CriBand {
  assertProbabilityLike("criScore", criScore);
  if (criScore >= 0.75) {
    return "CRITICAL";
  }
  if (criScore >= 0.5) {
    return "HIGH";
  }
  if (criScore >= 0.25) {
    return "MODERATE";
  }
  return "LOW";
}
