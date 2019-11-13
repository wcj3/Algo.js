import { Node } from "./Node";
import { SinglyLinkedList } from "./SinglyLinkedList";

export class LinkedList<T> extends SinglyLinkedList<T> {
  // precondition: list of nodes or a null head/tail
  // postcondition: updates head and tail for new list, else adds to head of list
  // Big o: o(1)
  prepend(data: T) {
    const node = new Node<T>(data);
    if (this.head === null) {
      this._head = node;
      this._tail = this.head;
    } else {
      const old = this.head;
      this._head = node;
      this._head.next = old;
      old.prev = this.head;
    }
  }

  append(data: T) {
    const node = new Node<T>(data);
    const prev = this.tail;
    // set head and tail
    if (this._head === null) {
      this._head = node;
      this._tail = this.head;
    } else {
      prev!.next = node;
      this._tail = node;
      this._tail.prev = prev;
    }
  }

  remove(): T | null {
    if (this._head) {
      let old = this._head.data;
      if (this._head.next) {
        this._head.next.prev = null;
      }
      this._head = this._head.next;
      return old;
    }
    return null;
  }

  removeTail(): T | null {
    if (this._tail) {
      const node = this._tail;
      this._tail = this._tail.prev;
      this._tail!.next = null;
      return node.data;
    }
    return null;
  }

  removeAt(index: number): T | null {
    let curr = this.head;
    let old: Node<T> | null = this.head;
    if (this.head === null) {
      return this.head;
    }
    for (let i = 0; curr !== null; i++) {
      if (index === i) {
        old = curr;
        // check if removing head
        if (i === 0 || i == this.size() - 1) {
          return i === 0 ? this.remove() : this.removeTail();
        }
        if (old.prev) {
          old.prev.next = old.next;
        }
        if (old.next) {
          old.next.prev = old.prev;
        }
        break;
      }
      curr = curr.next;
    }
    return old!.data;
  }

  concat(list: LinkedList<T>) {
    if (list.head) {
      if (this.tail) {
        list.head.prev = this.tail;
        this.tail.next = list.head;
        this._tail = list.head;
      } else {
        this._head = list._head;
        this._tail = this.head;
      }
    }
  }
}
