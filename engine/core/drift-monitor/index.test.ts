import { describe, expect, it } from "vitest";

import { isDrifted } from "./index";

describe("isDrifted", () => {
  it("flags drift above threshold", () => {
    expect(isDrifted(0.21, 0.2)).toBe(true);
  });

  it("does not flag drift at threshold", () => {
    expect(isDrifted(0.2, 0.2)).toBe(false);
  });
});
