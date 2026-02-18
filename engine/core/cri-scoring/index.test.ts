import { describe, expect, it } from "vitest";

import { calculateCri } from "./index";

describe("calculateCri", () => {
  it("returns probability multiplied by severity", () => {
    expect(calculateCri(0.4, 0.5)).toBe(0.2);
  });
});
