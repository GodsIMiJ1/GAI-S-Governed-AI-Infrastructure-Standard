import { describe, expect, it } from "vitest";

import { shouldEscalate } from "./index";

describe("shouldEscalate", () => {
  it("escalates at threshold", () => {
    expect(shouldEscalate(0.5, 0.5)).toBe(true);
  });

  it("does not escalate below threshold", () => {
    expect(shouldEscalate(0.49, 0.5)).toBe(false);
  });
});
