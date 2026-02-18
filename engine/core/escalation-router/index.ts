export type EscalationTier = "E0" | "E1" | "E2" | "E3";
export type DriftSeverity = "none" | "minor" | "moderate" | "severe" | "critical";

export interface EscalationContext {
  criScore: number;
  lowConfidence?: boolean;
  mandatoryReview?: boolean;
  driftSeverity?: DriftSeverity;
  priorPolicyViolations?: number;
}

function assertRange(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new RangeError(`${name} must be a finite number between 0 and 1`);
  }
}

export function routeEscalation(context: EscalationContext): EscalationTier {
  assertRange("criScore", context.criScore);
  const drift = context.driftSeverity ?? "none";
  const priorViolations = context.priorPolicyViolations ?? 0;

  if (context.criScore >= 0.75 || drift === "critical" || priorViolations >= 3) {
    return "E3";
  }
  if (context.criScore >= 0.5 || drift === "severe") {
    return "E2";
  }
  if (context.lowConfidence || context.mandatoryReview || drift === "moderate") {
    return "E1";
  }
  return "E0";
}

export function shouldEscalate(criScore: number, threshold = 0.5): boolean {
  assertRange("criScore", criScore);
  assertRange("threshold", threshold);
  return criScore >= threshold;
}
