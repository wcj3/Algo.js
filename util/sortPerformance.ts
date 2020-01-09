import { HeapSort } from "../src/HeapSort/HeapSort";
import { InsertionSort } from "../src/InsertionSort/InsertionSort";
import { MergeSort } from "../src/MergeSort";
import { QuickSort } from "../src/QuickSort/QuickSort";
import { QuickSort3 } from "../src/QuickSort/QuickSort3";
import { SelectionSort } from "../src/SelectionSort/SelectionSort";
import { timer } from "./timer";

const sizeArg = +process.argv[2];
const rand = size => Math.floor(Math.random() * size);

function add(r, arr, size) {
  if (arr.indexOf(r) !== -1) {
    return add(rand(size), arr, size);
  }
  return r;
}

function createArr(size) {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    const r = rand(size);
    arr.push(add(r, arr, size));
  }
  return arr;
}
const sorts = [
  SelectionSort,
  InsertionSort,
  HeapSort,
  QuickSort,
  QuickSort3,
  MergeSort
];

console.log("Starting test...");
for (let i = 0; i < sorts.length; i++) {
  // Initialize test data
  timer(sorts[i].name, sizeArg, () =>
    sorts[i](createArr(sizeArg), (a: number, b: number) => a - b)
  );
}
