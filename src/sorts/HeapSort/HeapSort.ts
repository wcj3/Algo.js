import { compare } from "../../utils/interfaces";
export function HeapSort<T>(data: T[], compare: compare<T>): T[] {
  let size = data.length - 1;
  let parent = Math.floor(size / 2);
  // heap construction
  for (let i = parent; i >= 0; i--) {
    sink<T>(i);
  }
  // sortdown
  for (let i = size; i > 1; i--) {
    exchange<T>(0, i);
    size--;
    sink(0);
  }
  return data;
  function sink<T>(_parent: number) {
    for (let child = _parent * 2 + 1; child < size; child = _parent * 2 + 1) {
      if (compare(data[child + 1], data[child]) > 0) {
        child++;
      } else if (compare(data[_parent], data[child]) > 0) {
        break;
      }
      exchange(_parent, child);
      _parent = child;
    }
  }

  function exchange<T>(_parent: number, child: number) {
    const temp = data[_parent];
    data[_parent] = data[child];
    data[child] = temp;
  }
}
