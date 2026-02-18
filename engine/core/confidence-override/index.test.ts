import { describe, expect, it } from "vitest";

import { evaluateOverride, requiresHumanOverride } from "./index";

describe("requiresHumanOverride", () => {
  it("requires override below threshold", () => {
    expect(requiresHumanOverride(0.79, 0.8)).toBe(true);
  });

  it("does not require override at threshold", () => {
    expect(requiresHumanOverride(0.8, 0.8)).toBe(false);
  });

  it("requires override for high risk despite confidence", () => {
    const result = evaluateOverride({
      confidence: 0.95,
      riskBand: "HIGH"
    });
    expect(result.required).toBe(true);
    expect(result.reasons).toContain("high_risk_band");
  });

  it("throws on invalid confidence", () => {
    expect(() => evaluateOverride({ confidence: -1 })).toThrow(RangeError);
  });
});
