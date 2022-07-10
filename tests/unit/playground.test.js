import { multiply } from "@/playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two number", () => {
    expect(5 - 3).toBe(2);
  });

  describe("multiply", () => {
    it("multiply two numbers together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
