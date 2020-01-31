import equals from "./index";

describe("Array Equality", () => {
  // test("Similar array with values at different indices", () => {
  //   expect(equals([1, 2], [2, 1])).toBeFalsy();
  // });
  // test("Second array does not match the first", () => {
  //   expect(equals([1, 2], [5, 1])).toBeFalsy();
  // });
  test("Throws error with differing types", () => {
    expect(() => equals([1, 2], "Hello")).toThrow();
  });
});
