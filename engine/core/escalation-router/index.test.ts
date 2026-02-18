import { describe, expect, it } from "vitest";

import { routeEscalation, shouldEscalate } from "./index";

describe("shouldEscalate", () => {
  it("escalates at threshold", () => {
    expect(shouldEscalate(0.5, 0.5)).toBe(true);
  });

  it("does not escalate below threshold", () => {
    expect(shouldEscalate(0.49, 0.5)).toBe(false);
  });

  it("throws for invalid threshold", () => {
    expect(() => shouldEscalate(0.5, 1.5)).toThrow(RangeError);
  });
});

describe("routeEscalation", () => {
  it("routes to E3 for critical risk", () => {
    expect(routeEscalation({ criScore: 0.8 })).toBe("E3");
  });

  it("routes to E2 for severe drift", () => {
    expect(routeEscalation({ criScore: 0.3, driftSeverity: "severe" })).toBe("E2");
  });

  it("routes to E1 for mandatory review", () => {
    expect(routeEscalation({ criScore: 0.2, mandatoryReview: true })).toBe("E1");
  });

  it("routes to E0 when policy is clean", () => {
    expect(routeEscalation({ criScore: 0.2 })).toBe("E0");
  });
});
