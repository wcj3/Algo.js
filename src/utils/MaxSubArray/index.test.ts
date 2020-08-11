import MaxSubArray from "./index";
import { MaxSubArrayBrute } from "./MaxSubArray";

describe("MaxSubArray", () => {
  it("should find max subarray (divide and conquer)", () => {
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
      start: 7,
      sum: 43,
      end: 11,
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
