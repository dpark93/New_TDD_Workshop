// Don't forget to import your functions
import { DriverStatus } from "./Drivers";
import { dStatus } from "./Drivers"

describe("Drivers", () => {
  test("Driver Status should return too young", () => {
    expect(dStatus(5)).toEqual('too young');
  });


  test("Driver Status should return too old", () => {
    expect(dStatus(90)).toEqual('too old');
  });

  test("Driver Status should return eligible", () => {
    expect(dStatus(45)).toEqual('eligible');
  });
});
