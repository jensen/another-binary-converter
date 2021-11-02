import { toDecimal } from "utils/calculator";

describe("Calculator", () => {
  it("should convert from binary to decimal", () => {
    expect(toDecimal("00000000")).toBe(0);
    expect(toDecimal("00000001")).toBe(1);
    expect(toDecimal("10111")).toBe(23);
    expect(toDecimal("100000")).toBe(32);
    expect(toDecimal("10000000")).toBe(128);
    expect(toDecimal("11111111")).toBe(255);
  });
});
