import { LinkedList } from "./../LinkedList";
export default class Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }
  push(item: T) {
    this.list.append(item);
  }

  pop(): T | null {
    return this.list.removeAt(this.list.size() - 1);
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size();
  }
}
