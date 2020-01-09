import { HeapSort } from "../src/HeapSort/HeapSort";
import { InsertionSort } from "../src/InsertionSort/InsertionSort";
import { MergeSort } from "../src/MergeSort";
import { QuickSort } from "../src/QuickSort/QuickSort";
import { QuickSort3 } from "../src/QuickSort/QuickSort3";
import { SelectionSort } from "../src/SelectionSort/SelectionSort";
import { timer } from "./timer";
// Supports -l for list of sorts and -s for size of array

const sizeIndex = process.argv.findIndex(e => e === "-d");
const sizeArg = +process.argv[sizeIndex + 1];
const listIndex = process.argv.findIndex(e => e === "-l");
const compSorts = process.argv[listIndex + 1];
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
let sorts;
const sortKeys = {
  QuickSort: QuickSort,
  QuickSort3: QuickSort3,
  MergeSort: MergeSort,
  HeapSort: HeapSort,
  SelectionSort: SelectionSort,
  InsertionSort: InsertionSort
};
if (listIndex > -1) {
  sorts = compSorts.split(",").map(e => sortKeys[e]);
} else {
  sorts = [
    SelectionSort,
    InsertionSort,
    HeapSort,
    QuickSort,
    QuickSort3,
    MergeSort
  ];
}

console.log("Starting test...");
for (let i = 0; i < sorts.length; i++) {
  // Initialize test data
  timer(sorts[i].name, sizeArg, () =>
    sorts[i](createArr(sizeArg), (a: number, b: number) => a - b)
  );
}
