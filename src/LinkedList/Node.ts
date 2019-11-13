export class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(data: T, prev?: Node<T> | null) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
