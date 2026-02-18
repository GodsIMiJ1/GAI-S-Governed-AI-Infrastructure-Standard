import { describe, expect, it } from "vitest";

import { withGaisGuardrail } from "./index";

describe("withGaisGuardrail", () => {
  it("allows low-risk payloads", () => {
    const result = withGaisGuardrail(
      { message: "ok" },
      {
        criScore: 0.2,
        confidence: 0.95
      }
    );
    expect(result.allowed).toBe(true);
    expect(result.escalationRequired).toBe(false);
  });

  it("escalates high-risk payloads", () => {
    const result = withGaisGuardrail(
      { message: "review" },
      {
        criScore: 0.8,
        confidence: 0.9
      }
    );
    expect(result.allowed).toBe(false);
    expect(result.reasons).toContain("high_cri");
  });
});
