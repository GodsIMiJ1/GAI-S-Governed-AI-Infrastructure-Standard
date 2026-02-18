export type DriftSeverity = "none" | "minor" | "moderate" | "severe" | "critical";

export interface DriftThresholds {
  minor: number;
  moderate: number;
  severe: number;
  critical: number;
}

const DEFAULT_THRESHOLDS: DriftThresholds = {
  minor: 0.1,
  moderate: 0.2,
  severe: 0.35,
  critical: 0.5
};

function assertNonNegative(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError(`${name} must be a finite number greater than or equal to 0`);
  }
}

function assertOrderedThresholds(thresholds: DriftThresholds): void {
  assertNonNegative("minor", thresholds.minor);
  assertNonNegative("moderate", thresholds.moderate);
  assertNonNegative("severe", thresholds.severe);
  assertNonNegative("critical", thresholds.critical);
  if (
    thresholds.minor > thresholds.moderate ||
    thresholds.moderate > thresholds.severe ||
    thresholds.severe > thresholds.critical
  ) {
    throw new RangeError("drift thresholds must be monotonically increasing");
  }
}

export function classifyDrift(metric: number, thresholds: DriftThresholds = DEFAULT_THRESHOLDS): DriftSeverity {
  assertNonNegative("metric", metric);
  assertOrderedThresholds(thresholds);

  if (metric >= thresholds.critical) {
    return "critical";
  }
  if (metric >= thresholds.severe) {
    return "severe";
  }
  if (metric >= thresholds.moderate) {
    return "moderate";
  }
  if (metric >= thresholds.minor) {
    return "minor";
  }
  return "none";
}

export function isDrifted(metric: number, threshold = 0.2): boolean {
  assertNonNegative("metric", metric);
  assertNonNegative("threshold", threshold);
  return metric > threshold;
}
