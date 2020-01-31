import { compare } from "../../utils/interfaces";
import InsertionSort from "../InsertionSort";

export function MergeSort<T>(data: T[], compare: compare<T>) {
  if (data.length < 15) {
    InsertionSort(data, compare);
    return data;
  }
  sort(data, compare);
  return data;
}

function sort(data: any[], compare: compare<any>) {
  let n = data.length;
  const aux = new Array(data.length);
  for (let len = 1; len < n; len *= 2) {
    for (let low = 0; low < n - len; low += len + len) {
      const mid = low + len - 1;
      const high = Math.min(low + len + len - 1, n - 1);
      merge(data, aux, low, mid, high, compare);
    }
  }
}

function merge(
  data: any[],
  aux: any[],
  low: number,
  mid: number,
  high: number,
  compare: compare<any>
) {
  let lAux = low;
  let hAux = mid + 1;
  // copy to aux array
  for (let i = low; i <= high; i++) {
    aux[i] = data[i];
  }

  for (let i = low; i <= high; i++) {
    if (lAux > mid) {
      data[i] = aux[hAux++];
    } else if (hAux > high) {
      data[i] = aux[lAux++];
    } else if (compare(aux[hAux], aux[lAux]) < 0) {
      data[i] = aux[hAux++];
    } else {
      data[i] = aux[lAux++];
    }
  }
}
