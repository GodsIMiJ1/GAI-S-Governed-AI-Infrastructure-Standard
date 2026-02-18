export interface LangChainGuardrailInput<T> {
  value: T;
  criScore: number;
  confidence: number;
  threshold?: number;
  minConfidence?: number;
}

export interface LangChainGuardrailOutput<T> {
  value: T;
  blocked: boolean;
  tags: string[];
}

function assertRange(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new RangeError(`${name} must be a finite number between 0 and 1`);
  }
}

export function guardrailMiddleware<T>(input: LangChainGuardrailInput<T>): LangChainGuardrailOutput<T> {
  const threshold = input.threshold ?? 0.5;
  const minConfidence = input.minConfidence ?? 0.8;
  assertRange("criScore", input.criScore);
  assertRange("confidence", input.confidence);
  assertRange("threshold", threshold);
  assertRange("minConfidence", minConfidence);

  const tags: string[] = [];
  if (input.criScore >= threshold) {
    tags.push("escalate:cri");
  }
  if (input.confidence < minConfidence) {
    tags.push("escalate:confidence");
  }

  return {
    value: input.value,
    blocked: tags.length > 0,
    tags
  };
}
