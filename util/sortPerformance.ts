import { HeapSort } from "../src/HeapSort/HeapSort";
import { InsertionSort } from "../src/InsertionSort/InsertionSort";
import { QuickSort } from "../src/QuickSort/QuickSort";
import { SelectionSort } from "../src/SelectionSort/SelectionSort";
import { timer } from "./timer";

const size = 3000;
const rand = () => Math.floor(Math.random() * size);

function add(r, arr) {
  if (arr.indexOf(r) !== -1) {
    return add(rand(), arr);
  }
  return r;
}

function createArr() {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    const r = rand();
    arr.push(add(r, arr));
  }
  return arr;
}
const sorts = [SelectionSort, InsertionSort, HeapSort, QuickSort];

console.log("Starting test...");
for (let i = 0; i < sorts.length; i++) {
  let testData;
  // Initialize test data
  timer(sorts[i].name, size, () =>
    sorts[i](createArr(), (a: number, b: number) => a - b)
  );
}
