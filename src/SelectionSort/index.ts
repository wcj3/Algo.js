// Selection sort
// PROPERTIES ->
// sorts (0 -> i) in ascending order
// Selects the smallest item and swaps it with element being processed
// Swaps are linear but the comparisons are always quadratic
// Not stable
export default function<T>(
  elements: T[],
  compareLessThan: (element: T, key: T) => Boolean
) {
  for (let i = 0; i < elements.length; i++) {
    let min = i;
    for (let u = i + 1; u < elements.length; u++) {
      // invariant: a[i] is the smallest of a[u]...n elements
      if (compareLessThan(elements[u], elements[min])) {
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
