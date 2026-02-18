import { describe, expect, it } from "vitest";

import { calculateCri, mapCriBand } from "./index";

describe("calculateCri", () => {
  it("returns probability multiplied by severity", () => {
    expect(calculateCri(0.4, 0.5)).toBe(0.2);
  });

  it("rounds to configured precision", () => {
    expect(calculateCri(0.3333, 0.7777, 3)).toBe(0.259);
  });

  it("throws for out-of-range inputs", () => {
    expect(() => calculateCri(1.2, 0.5)).toThrow(RangeError);
  });
});

describe("mapCriBand", () => {
  it("maps all threshold boundaries", () => {
    expect(mapCriBand(0.24)).toBe("LOW");
    expect(mapCriBand(0.25)).toBe("MODERATE");
    expect(mapCriBand(0.5)).toBe("HIGH");
    expect(mapCriBand(0.75)).toBe("CRITICAL");
  });
});
