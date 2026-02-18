export interface OverrideDecision {
  required: boolean;
  reasons: string[];
}

export interface OverrideContext {
  confidence: number;
  minConfidence?: number;
  mandatoryReview?: boolean;
  riskBand?: "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
  driftSeverity?: "none" | "minor" | "moderate" | "severe" | "critical";
}

function assertRange(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new RangeError(`${name} must be a finite number between 0 and 1`);
  }
}

export function evaluateOverride(context: OverrideContext): OverrideDecision {
  assertRange("confidence", context.confidence);
  const minConfidence = context.minConfidence ?? 0.8;
  assertRange("minConfidence", minConfidence);

  const reasons: string[] = [];
  if (context.confidence < minConfidence) {
    reasons.push("low_confidence");
  }
  if (context.mandatoryReview) {
    reasons.push("mandatory_review_policy");
  }
  if (context.riskBand === "HIGH" || context.riskBand === "CRITICAL") {
    reasons.push("high_risk_band");
  }
  if (context.driftSeverity === "severe" || context.driftSeverity === "critical") {
    reasons.push("severe_drift");
  }

  return { required: reasons.length > 0, reasons };
}

export function requiresHumanOverride(confidence: number, minConfidence = 0.8): boolean {
  return evaluateOverride({ confidence, minConfidence }).required;
}
