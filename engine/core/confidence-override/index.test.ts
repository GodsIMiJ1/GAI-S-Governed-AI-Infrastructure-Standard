import { describe, expect, it } from "vitest";

import { requiresHumanOverride } from "./index";

describe("requiresHumanOverride", () => {
  it("requires override below threshold", () => {
    expect(requiresHumanOverride(0.79, 0.8)).toBe(true);
  });

  it("does not require override at threshold", () => {
    expect(requiresHumanOverride(0.8, 0.8)).toBe(false);
  });
});
