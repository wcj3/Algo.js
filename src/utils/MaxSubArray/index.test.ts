import MaxSubArray from "./index";
import { MaxSubArrayBrute } from "./MaxSubArray";

describe("MaxSubArray", () => {
  describe(" (divide and conquer)", () => {
    it("should find max subarray", () => {
      const arr = [100];
      expect(MaxSubArray(arr)).toEqual({
        start: 0,
        end: 0,
        sum: 100,
      });
    });

    it("should find max negativesubarray", () => {
      const arr = [-2, -2];
      expect(MaxSubArray(arr)).toEqual({
        start: 0,
        end: 0,
        sum: -2,
      });
    });
    it("should find max subarray", () => {
      const arr = [
        100,
        113,
        110,
        85,
        105,
        102,
        86,
        63,
        81,
        101,
        94,
        106,
        101,
        79,
        94,
        90,
        97,
      ];
      expect(MaxSubArray(arr)).toEqual({
        start: 0,
        sum: 1607,
        end: 16,
      });
    });
  });

  it("should find max subarray", () => {
    const arr = [
      100,
      113,
      110,
      85,
      105,
      102,
      86,
      63,
      81,
      101,
      94,
      106,
      101,
      79,
      94,
      90,
      97,
    ];
    expect(MaxSubArrayBrute(arr)).toEqual({
      buyIndex: 7,
      profit: 43,
      sellIndex: 11,
    });
  });
});
