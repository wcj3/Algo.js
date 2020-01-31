import { MergeSort } from "../MergeSort";
describe("MergeSort", () => {
  it("should sort numbers", () => {
    expect(MergeSort<number>([4, 1, 3, 2], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4
    ]);
  });

  it("should sort numbers scenario 2 (insertion)", () => {
    expect(MergeSort<number>([5, 1, 2, 3, 4], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it("should sort numbers scenario 2 (MergeSort)", () => {
    expect(
      MergeSort<number>(
        [5, 1, 2, 3, 4, 6, 8, 7, 10, 9, 11, 14, 13, 12, 16, 15, 17],
        (a, b) => a - b
      )
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });

  it("should sort strings", () => {
    expect(
      MergeSort<String>(["alpha", "charlie", "cat", "beta"], (a, b) => {
        if (a.charAt(0) < b.charAt(0)) {
          return -1;
        } else if (a.charAt(0) > b.charAt(0)) {
          return 1;
        }
        return 0;
      })
    ).toEqual(["alpha", "beta", "charlie", "cat"]);
  });
});
