export interface GuardrailContext {
  criScore: number;
  confidence: number;
  threshold?: number;
  minConfidence?: number;
  mandatoryReview?: boolean;
}

export interface GuardrailResult<T> {
  allowed: boolean;
  escalationRequired: boolean;
  reasons: string[];
  payload: T;
}

function assertRange(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new RangeError(`${name} must be a finite number between 0 and 1`);
  }
}

export function withGaisGuardrail<T>(value: T, context: GuardrailContext): GuardrailResult<T> {
  const threshold = context.threshold ?? 0.5;
  const minConfidence = context.minConfidence ?? 0.8;
  assertRange("criScore", context.criScore);
  assertRange("confidence", context.confidence);
  assertRange("threshold", threshold);
  assertRange("minConfidence", minConfidence);

  const reasons: string[] = [];
  if (context.criScore >= threshold) {
    reasons.push("high_cri");
  }
  if (context.confidence < minConfidence) {
    reasons.push("low_confidence");
  }
  if (context.mandatoryReview) {
    reasons.push("mandatory_review");
  }

  const escalationRequired = reasons.length > 0;
  return {
    allowed: !escalationRequired,
    escalationRequired,
    reasons,
    payload: value
  };
}
