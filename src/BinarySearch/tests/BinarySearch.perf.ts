import { log } from "../../../util/timer";
import { BinarySearch } from "../BinarySearch";

const arr: number[] = [];
const size = 10000;
const rand = () => Math.floor(Math.random() * size);

function add(r) {
  if (arr.indexOf(r) !== -1) {
    return add(rand());
  }
  return r;
}

for (let i = 0; i < size; i++) {
  const r = rand();
  arr.push(add(r));
}
const nums = arr.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  return a > b ? 1 : 0;
});

const n = rand();
console.log("looking for", n);
log(() => BinarySearch(nums, n));
