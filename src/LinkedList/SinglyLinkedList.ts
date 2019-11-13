import { Node } from "./Node";
export class SinglyLinkedList<T> {
  protected _head: Node<T> | null;
  protected _tail: Node<T> | null;

  constructor() {
    this._head = null;
    this._tail = null;
  }

  // precondition: list of nodes or a null head/tail
  // postcondition: updates head and tail for new list, else adds to tail of list
  // Big o: o(1)
  append(data: T) {
    const node = new Node<T>(data);
    // set head and tail
    if (this._head === null) {
      this._head = node;
      this._tail = this._head;
    } else {
      this._tail!.next = node;
      this._tail = node;
    }
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }
  // precondition: list of nodes or a null head/tail
  // postcondition: updates head and tail for new list, else adds to head of list
  // Big o: o(1)
  prepend(data: T) {
    const node = new Node<T>(data);
    if (this._head === null) {
      this._head = node;
      this._tail = this._head;
    } else {
      const old = this._head;
      this._head = node;
      this._head.next = old;
    }
  }
  // precondition: list of nodes or a null head/tail
  // postcondition: removes head from list. If list has a null head, returns null
  // Big o: o(1)
  remove(): T | null {
    if (this._head === null) {
      return null;
    }
    const prev = this._head;
    this._head = this._head.next;
    return prev.data;
  }
  isEmpty() {
    return this.size() === 0;
  }

  size(): number {
    let length = 0;
    let node = this._head;
    while (node !== null) {
      length++;
      node = node.next;
    }
    return length;
  }

  toString(): string {
    const list: any[] = [];
    let node = this._head;
    while (node !== null) {
      list.push(node.data);
      node = node.next;
    }
    return list.toString();
  }

  reverse(): void {
    // precondition: a non-null list, will the head of the list already point to null
    // postcondition: a reversed list
    function iterNode(node: Node<T> | null, next: Node<T> | null) {
      // terminatite if next is null
      if (!next) {
        this._head = node;
        return;
      }
      const nextNode = next.next;
      next.next = node;
      return iterNode.call(this, next, nextNode);
    }
    if (this.head) {
      const head = this.head;
      const next = head.next;
      head.next = null;
      iterNode.call(this, head, next);
    }
  }
}
