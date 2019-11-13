import { BinarySearch } from "../BinarySearch";

describe("BinarySearch", () => {
  it("should return position of key", () => {
    expect(BinarySearch([1, 2, 3, 4, 20, 45, 45, 60], 20)).toBe(4);
  });
  it("should return -1 when key doesn't exist", () => {
    expect(BinarySearch([1, 2, 3, 4, 20, 45, 45, 60], 77)).toBe(-1);
  });
});
