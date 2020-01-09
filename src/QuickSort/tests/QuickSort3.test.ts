import { QuickSort3 } from "../QuickSort3";
describe("QuickSort", () => {
  it("should sort numbers", () => {
    expect(QuickSort3<number>([7, 6, 3, 1, 2, 4], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      6,
      7
    ]);
  });

  it("should sort numbers scenario 2 (insertion)", () => {
    expect(QuickSort3<number>([5, 1, 2, 3, 4], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it("should sort numbers scenario 2 (quickSort3)", () => {
    expect(
      QuickSort3<number>(
        [5, 1, 2, 3, 4, 6, 8, 7, 10, 9, 11, 14, 13, 12, 16, 15, 17],
        (a, b) => a - b
      )
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });

  it("should sort strings", () => {
    expect(
      QuickSort3<String>(["alpha", "charlie", "cat", "beta"], (a, b) => {
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
