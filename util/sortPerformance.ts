import InsertionSort from "../src/InsertionSort";
import SelectionSort from "../src/SelectionSort";
import { log } from "./log";

const size = 2500;
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
const arr1 = createArr();
const arr2 = [...arr1];
console.log("Starting test...");
log("InsertionSort", size, () => InsertionSort(arr1, (a, b) => a < b));
log("SelectionSort", size, () => SelectionSort(arr2, (a, b) => a < b));
