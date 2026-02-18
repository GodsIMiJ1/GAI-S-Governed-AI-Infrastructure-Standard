/**
 * Placeholder confidence override trigger.
 */
export function requiresHumanOverride(confidence: number, minConfidence = 0.8): boolean {
  return confidence < minConfidence;
}
