import { compare } from "./../../util/interfaces";
export function SelectionSort<T>(elements: T[], compare: compare<T>) {
  for (let i = 0; i < elements.length; i++) {
    let min = i;
    for (let u = i + 1; u < elements.length; u++) {
      // invariant: a[i] is the smallest of a[u]...n elements
      if (compare(elements[u], elements[min]) < 0) {
        min = u;
      }
    }
    // linear swaps
    const temp = elements[min];
    elements[min] = elements[i];
    elements[i] = temp;
  }
  return elements;
}
