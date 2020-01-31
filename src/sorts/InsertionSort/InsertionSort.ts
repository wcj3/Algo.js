import { compare } from "../../utils/interfaces";
// InsertionSsort
// Swaps and comparisons are always quadratic
// Can be improved to be almost linear by adding conditional to loop test

/* Analysis 
  Worst case
  Comparisons: O(n) + O(n^2/2) === O(n^2)
  Exchanges: O(n) + 0(n-2)/2 === O(n^2)
  // Note that this implementation has lower cost than traditional insertion sort since array access is cut in half
*/

export function InsertionSort<T>(elements: T[], compare: compare<T>): T[] {
  let exchanges = false;
  // finds smallest element and moves larger elements one position to the right
  for (let i = elements.length - 1; i > 0; i--) {
    if (compare(elements[i], elements[i - 1]) < 0) {
      const temp = elements[i - 1];
      elements[i - 1] = elements[i];
      elements[i] = temp;
      exchanges = true;
    }
  }

  if (!exchanges) return elements;

  for (let i = 2; i < elements.length; i++) {
    const curr = elements[i];
    let j = i;
    // sort current index while it's less than index - 1 - 0
    // greater elements move to right one position until position is found (half-exchange)
    while (compare(curr, elements[j - 1]) < 0) {
      elements[j] = elements[j - 1];
      j--;
    }
    elements[j] = curr;
  }
  return elements;
}
