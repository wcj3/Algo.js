import HeapSort from "../index";
describe("Heap Sort", () => {
  it("should sort number", () => {
    expect(HeapSort<number>([2, 4, 1, 3, 6], (a, b) => a - b)).toEqual([
      1,
      2,
      3,
      4,
      6
    ]);
  });
  // 2
  // 4 1
  // 3 6

  // it("should sort strings", () => {
  //   expect(
  //     HeapSort<String>(
  //       ["alpha", "charlie", "cat", "beta"],
  //       (a, b) => a.charAt(0) < b.charAt(0)
  //     )
  //   ).toEqual(["alpha", "beta", "cat", "charlie"]);
  // });
});
