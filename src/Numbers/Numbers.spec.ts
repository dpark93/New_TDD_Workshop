import { sum } from "./Numbers";
import { subtract } from "./Numbers"
import { multiply } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("subtract() should subtract two numbers", () => {
    expect(subtract(4, 2)).toEqual(2);
  });

  test("multiply() should multiply two numbers", () => {
    expect(multiply(4, 2)).toEqual(8);
  });

});
