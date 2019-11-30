import { QuickSort } from "../QuickSort";
describe("QuickSort", () => {
  it("should sort numbers", () => {
    expect(QuickSort<number>([7, 6, 3, 1, 2, 4], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      6,
      7
    ]);
  });

  it("should sort numbers scenario 2", () => {
    expect(QuickSort<number>([5, 1, 2, 3, 4], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it("should sort strings", () => {
    expect(
      QuickSort<String>(["alpha", "charlie", "cat", "beta"], (a, b) => {
        if (a.charAt(0) < b.charAt(0)) {
          return -1;
        } else if (a.charAt(0) > b.charAt(0)) {
          return 1;
        }
        return 0;
      })
    ).toEqual(["alpha", "beta", "cat", "charlie"]);
  });
});
