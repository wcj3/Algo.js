import SelectionSort from "../index";
describe("Selection Sort", () => {
  it("should sort number", () => {
    expect(SelectionSort<number>([2, 4, 1, 3, 6], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      6
    ]);
  });

  it("should sort strings", () => {
    expect(
      SelectionSort<String>(["alpha", "charlie", "cat", "beta"], (a, b) => {
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
