import { SinglyLinkedList } from "./../LinkedList/SinglyLinkedList";
export default class Queue<T> {
  private list: SinglyLinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList<T>();
  }
  enqueue(item: T) {
    this.list.append(item);
  }

  dequeue(): T | null {
    return this.list.remove();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size();
  }
}
