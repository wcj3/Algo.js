import InsertionSort from "../InsertionSort";
import { compare } from "./../../util/interfaces";
export function QuickSort<T>(data: T[], compare: compare<T>) {
  let low = 0;
  let high = data.length - 1;
  if (high < 15) {
    InsertionSort(data, compare);
  }
  sort(data, low, high, compare);
  return data;
}

/* Helper funcs */
function sort(data: any[], l: number, h: number, compare: compare<any>) {
  if (h <= l) return;
  const stopAt = partition(data, l, h, compare);
  sort(data, l, stopAt - 1, compare);
  sort(data, stopAt + 1, h, compare);
}

function partition(
  data: any[],
  low: number,
  high: number,
  compare: compare<any>
): number {
  let left = low;
  let right = high;
  const pivot = low;
  while (left < right) {
    // look for greater element
    left = leftToRight(data, left, pivot, high, compare);
    // look for lesser elemenet
    right = rightToLeft(data, right, pivot, low, compare);
    if (left >= right) {
      break;
    }
    exchange(data, left, right);
  }
  exchange(data, low, right);
  return right;
}

function exchange(data: any[], a: number, b: number) {
  const temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}

function leftToRight(
  data: any[],
  left: number,
  pivot: number,
  bound: number,
  compare: compare<any>
) {
  if (compare(data[left], data[pivot]) > 0 || left === bound) {
    return left;
  }
  return leftToRight(data, ++left, pivot, bound, compare);
}

function rightToLeft(
  data: any[],
  right: number,
  pivot: number,
  bound: number,
  compare: compare<any>
) {
  if (compare(data[right], data[pivot]) < 0 || right === bound) {
    return right;
  }
  return rightToLeft(data, --right, pivot, bound, compare);
}
