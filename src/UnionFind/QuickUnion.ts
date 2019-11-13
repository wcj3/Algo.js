import { UnionFind } from "./interface";

class QuickUnion implements UnionFind {
  private ids: number[];
  private counter: number;
  constructor(len: number) {
    this.ids = new Array(len);
    this.counter = len;
    for (let i = 0; i < len; i++) {
      this.ids[i] = i;
    }
  }

  public count(): number {
    return this.counter;
  }

  public connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }

  // worst case n array accesses
  public find(a: number): number {
    if (a === this.ids[a]) {
      return a;
    }
    return this.find(this.ids[a]);
  }

  // precondition: two objects (potentially in the same equivalnce classes)
  // postcondition: two objects will be unioned into same equilvalency class
  public union(a: number, b: number) {
    const _a = this.find(a);
    const _b = this.find(b);
    if (_a !== _b) {
      this.ids[_a] = _b;
      this.counter--;
    }
  }

  public print(): number[] {
    return this.ids;
  }
}

export { QuickUnion };
