import { describe, expect, it } from "vitest";

import { classifyDrift, isDrifted } from "./index";

describe("isDrifted", () => {
  it("flags drift above threshold", () => {
    expect(isDrifted(0.21, 0.2)).toBe(true);
  });

  it("does not flag drift at threshold", () => {
    expect(isDrifted(0.2, 0.2)).toBe(false);
  });

  it("classifies drift severity bands", () => {
    expect(classifyDrift(0.05)).toBe("none");
    expect(classifyDrift(0.1)).toBe("minor");
    expect(classifyDrift(0.2)).toBe("moderate");
    expect(classifyDrift(0.35)).toBe("severe");
    expect(classifyDrift(0.5)).toBe("critical");
  });

  it("throws for malformed thresholds", () => {
    expect(() =>
      classifyDrift(0.2, {
        minor: 0.2,
        moderate: 0.1,
        severe: 0.3,
        critical: 0.4
      })
    ).toThrow(RangeError);
  });
});
