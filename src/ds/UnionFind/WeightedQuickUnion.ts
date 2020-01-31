import { UnionFind } from "./interface";

class WeightedQuickUnion implements UnionFind {
  private ids: number[];
  private sizes: number[];
  private counter: number;
  constructor(len: number) {
    this.ids = new Array(len);
    this.sizes = new Array(len);
    this.counter = len;
    for (let i = 0; i < len; i++) {
      this.ids[i] = i;
      this.sizes[i] = 1;
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
      // make the smaller root point to the larger one
      if (this.sizes[_a] < this.sizes[_b]) {
        this.ids[_a] = _b;
        this.sizes[_b] += this.sizes[_a];
      } else {
        this.ids[_b] = _a;
        this.sizes[_a] += this.sizes[_b];
      }
      this.counter--;
    }
  }

  public print(): number[] {
    return this.ids;
  }
}

export { WeightedQuickUnion };
