export class PriorityQueue<T> {
  private heap: T[];
  private _size: number;
  private compareTo: Function;
  private identifier?: string;

  constructor(compare: (a, b) => number, identifier?: string) {
    this.heap = new Array();
    this._size = 0;
    this.compareTo = compare;
    this.identifier = identifier;
  }

  private sink(parent: number) {
    for (
      let child = parent * 2 + 1;
      child < this.size();
      child = parent * 2 + 1
    ) {
      // promote sibling
      if (this.compareTo(this.heap[child + 1], this.heap[child]) > 0) {
        child++;
      } else if (this.compareTo(this.heap[parent], this.heap[parent]) > 0) {
        break;
      }
      this.exchange(parent, child);
      child = parent;
    }
  }
  private swim(child: number) {
    for (
      let parent = Math.floor(child / 2);
      child > 0;
      parent = Math.floor(child / 2)
    ) {
      if (this.compareTo(this.heap[parent], this.heap[child]) >= 0) {
        break;
      }
      this.exchange(parent, child);
      child = parent;
    }
  }

  private delete(id: number) {}

  private changeKey() {}

  public peek(): T {
    return this.heap[0];
  }

  private exchange(a: number, b: number) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  enqueue(item: T) {
    this.heap.push(item);
    this._size++;
    if (this.size() > 1) {
      this.swim(this.size() - 1);
    }
  }

  dequeue(): T | null {
    const first = this.heap[0];
    this._size--;
    this.exchange(0, this.size());
    if (this.size() > 1) {
      this.sink(0);
    }
    return first || null;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this._size;
  }
}
