import { describe, expect, it } from "vitest";

import { guardrailMiddleware } from "./index";

describe("guardrailMiddleware", () => {
  it("passes through safe input", () => {
    const result = guardrailMiddleware({
      value: "answer",
      criScore: 0.1,
      confidence: 0.95
    });
    expect(result.blocked).toBe(false);
    expect(result.tags).toHaveLength(0);
  });

  it("blocks risky input", () => {
    const result = guardrailMiddleware({
      value: "answer",
      criScore: 0.7,
      confidence: 0.6
    });
    expect(result.blocked).toBe(true);
    expect(result.tags).toContain("escalate:cri");
    expect(result.tags).toContain("escalate:confidence");
  });
});
