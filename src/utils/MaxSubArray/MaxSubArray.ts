export function MaxSubArray(data: number[]) {
  return _MaxSubArray(data, 0, data.length - 1);
}

function _MaxSubArray(
  data: number[],
  low: number,
  high: number
): { start: number; end: number; sum: number } {
  if (high === low) return { start: low, end: high, sum: 0 };
  const mid = Math.floor((low + high) / 2);
  let { start: leftLow, end: leftHigh, sum: leftSum } = _MaxSubArray(
    data,
    low,
    mid
  );
  let { start: rightLow, end: rightHigh, sum: rightSum } = _MaxSubArray(
    data,
    low,
    mid
  );
  let {
    start: crossLow,
    end: crossHigh,
    sum: crossSum,
  } = findMaxCrossingSubarray(data, low, mid, high);
  // determine left side is greater
  if (leftSum >= rightSum && leftSum >= crossSum) {
    return {
      start: leftLow,
      end: leftHigh,
      sum: leftSum,
    };
  }
  // check if right side is greater
  else if (rightSum >= leftSum && rightSum >= crossSum) {
    return {
      start: rightLow,
      end: rightHigh,
      sum: rightSum,
    };
  }
  return {
    start: crossLow,
    end: crossHigh,
    sum: crossSum,
  };
}
function findMaxCrossingSubarray(
  data: number[],
  low: number,
  mid: number,
  high: number
) {
  const results: any = {
    start: null,
    end: null,
    sum: null,
  };
  // holds the greatest sum found so far
  let leftSum = Number.NEGATIVE_INFINITY;
  let rightSum = Number.NEGATIVE_INFINITY;
  // holds the sum of left and right paritions, respectively
  let sum = 0;
  // stores boundies of maxSubarray
  let maxLeft = low;
  let maxRight = high;
  // check left partition maxValue (should capture begin of range)
  for (let i = mid; i > 0; i--) {
    sum += data[i] - data[i - 1];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i - 1;
    }
  }
  // reset sum
  sum = 0;
  // check right partition maxValue (should capture end of range)
  for (let i = mid + 1; i <= high; i++) {
    sum += data[i] - data[i - 1];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = i;
    }
  }
  results.start = maxLeft;
  results.end = maxRight;
  const left = leftSum === Number.NEGATIVE_INFINITY ? 0 : leftSum;
  const right = rightSum === Number.NEGATIVE_INFINITY ? 0 : rightSum;
  results.sum = left + right;
  return results;
}
export function MaxSubArrayBrute(data: number[]) {
  let max = {
    buyIndex: null,
    profit: null,
    sellIndex: null,
  };
  data.forEach((num, buyIndex) => {
    let change = 0;
    for (let i = buyIndex + 1; i < data.length; i++) {
      change += data[i] - data[i - 1];
      if (change > (max as any).profit) {
        (max as any).buyIndex = buyIndex;
        (max as any).profit = change;
        (max as any).sellIndex = i;
      }
    }
  });
  return max;
}
