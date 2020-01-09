import InsertionSort from "../InsertionSort";
import { compare } from "./../../util/interfaces";
// 3 way quick sort
export function QuickSort3<T>(data: T[], compare: compare<T>) {
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
  if (h <= l) return;
  let lt = l;
  let i = l + 1;
  let gt = h;
  const v = data[l];
  while (i <= gt) {
    const cmp = compare(data[i], v);
    if (cmp < 0) {
      exchange(data, lt++, i++);
    } else if (cmp > 0) {
      exchange(data, i, gt--);
    }
  }
  sort(data, l, lt - 1, compare);
  sort(data, gt + 1, h, compare);
}

function exchange(data: any[], a: number, b: number) {
  const temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}
