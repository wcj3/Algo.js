import { HeapSort } from "../src/HeapSort/HeapSort";
import { InsertionSort } from "../src/InsertionSort/InsertionSort";
import { SelectionSort } from "../src/SelectionSort/SelectionSort";
import { log } from "./log";

const size = 3500;
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
let mockData, copy;
const sorts = [HeapSort, InsertionSort, SelectionSort];

console.log("Starting test...");
for (let i = 0; i < 3; i++) {
  let testData;
  // Initialize test data
  if (i === 0) {
    mockData = createArr();
    copy = [...mockData];
  }
  testData = [...copy];
  log(sorts[i].name, size, () =>
    sorts[i](testData, (a: number, b: number) => a - b)
  );
}
