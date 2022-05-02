import { sum } from "../operations.js";
describe("test operations module", () => {
  it("should solver a sum", () => {
    const value = sum(1, 4);
    expect(value).toBe(5);
  });
});
