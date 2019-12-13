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
  var pivot = data[Math.floor((high + low) / 2)];
  let i = low; //left pointer
  let j = high; //right pointer
  while (i <= j) {
    while (compare(data[i], pivot) < 0) {
      i++;
    }
    while (compare(data[j], pivot) > 0) {
      j--;
    }
    if (i <= j) {
      exchange(data, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}

function exchange(data: any[], a: number, b: number) {
  const temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}
