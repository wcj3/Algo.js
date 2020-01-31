// Big o: log n
function BinarySearch<T>(list: T[], key: T): number {
  // precondition: accepts a low, high index, using a list and key from closure
  // postconidtion: finds postion of index or returns negative 1
  function search(low: number, high: number): number {
    const mid: number = Math.floor(low + (high - low) / 2);
    if (list[mid] === key) {
      return mid;
    }
    if (low > high) {
      return -1;
    }
    key < list[mid] ? (high = mid - 1) : (low = mid + 1);
    return search(low, high);
  }
  return search(0, list.length - 1);
}

export { BinarySearch };
