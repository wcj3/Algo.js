import { compare } from "./../../util/interfaces";
export function QuickSort<T>(data: T[], compare: compare<T>) {
  let low = 0;
  let high = data.length - 1;
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
  const pivot = Math.floor((right + left) / 2);
  while (left < right) {
    // look for greater element
    while (compare(data[left], data[pivot]) < 0) {
      left++;
    }
    // look for lesser elemenet
    while (compare(data[right], data[pivot]) > 0) {
      right--;
    }
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
