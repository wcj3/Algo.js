import { compare } from "../../utils/interfaces";
import InsertionSort from "../InsertionSort";

export function MergeSort<T>(data: T[], compare: compare<T>) {
  if (data.length < 15) {
    InsertionSort(data, compare);
    return data;
  }
  const aux = new Array(data.length);
  sort(data, aux, 0, data.length - 1, compare);
  return data;
}

// divides the array into halves until optimal subproblem is reached
function sort(
  data: any[],
  aux: any[],
  leftIndex: number,
  rightIndex: number,
  compare: compare<any>
) {
  if (rightIndex <= leftIndex) return;
  let n = data.length;
  const mid = Math.floor((leftIndex + rightIndex) / 2);
  sort(data, aux, leftIndex, mid, compare);
  sort(data, aux, mid + 1, rightIndex, compare);
  merge(data, aux, leftIndex, mid, mid + 1, rightIndex, compare);
}

// merges the left and right partitions
function merge(
  data: any[],
  aux: any[],
  leftStart: number,
  leftEnd: number,
  rightStart: number,
  rightEnd: number,
  compare: compare<any>
) {
  // copy data array content to aux
  for (let i = leftStart; i <= rightEnd; i++) {
    aux[i] = data[i];
  }
  for (let i = leftStart; i <= rightEnd; i++) {
    // use right index when left partition is out bounds
    if (leftStart > leftEnd) {
      data[i] = aux[rightStart++];
    }
    // use left index when right partition is out of bounds
    else if (rightStart > rightEnd) {
      data[i] = aux[leftStart++];
    }
    // use riht index if right partition is less than left
    else if (compare(aux[rightStart], aux[leftStart]) < 0) {
      data[i] = aux[rightStart++];
    }
    // default to right index
    else {
      data[i] = aux[leftStart++];
    }
  }
}
