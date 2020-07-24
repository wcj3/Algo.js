import { compare } from "../../utils/interfaces";
import InsertionSort from "../InsertionSort";
export function QuickSort<T>(data: T[], compare: compare<T>) {
  const low = 0;
  const high = data.length - 1;
  if (data.length < 15) {
    InsertionSort(data, compare);
  } else {
    sort(data, low, high, compare);
  }
  return data;
}

/* Helper funcs */
function sort(data: any[], l: number, h: number, compare: compare<any>) {
  if (l >= h) return;
  const middle = Math.round((l + h) / 2);
  const median = medianOfThree(data, l, middle, h, compare);
  // moves median back to
  exchange(data, l, median);
  const stopAt = partition(data, l, h, compare);
  sort(data, l, stopAt - 1, compare);
  sort(data, stopAt + 1, h, compare);
}

// selects an optimal pivot for an even split
function medianOfThree(
  data: any[],
  low: number,
  middle: number,
  high: number,
  compare: any
) {
  // swap high with low if lesser than low index
  if (compare(data[high], data[low]) < 0) {
    exchange(data, high, low);
  }
  // swaps middle with high if greater than highest index
  if (compare(data[middle], data[high]) > 0) {
    exchange(data, middle, high);
  }
  // swaps middle with low if less than lower index
  if (compare(data[middle], data[low]) < 0) {
    exchange(data, middle, low);
  }
  return middle;
}

function partition(
  data: any[],
  low: number,
  high: number,
  compare: compare<any>
): number {
  let left = low + 1;
  let right = high;
  // iterate left side until greater value is found
  while (left < right) {
    while (compare(data[left], data[low]) < 0) {
      left++;
    }
    // iterate right until less value is found
    while (compare(data[right], data[low]) > 0) {
      right--;
    }
    // swap only if indices haven't crossed
    if (left < right) {
      exchange(data, left, right);
    }
  }
  exchange(data, low, right);
  return right;
}

function exchange(data: any[], a: number, b: number) {
  const temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}
