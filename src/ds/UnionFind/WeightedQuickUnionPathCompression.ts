import { UnionFind } from "./interface";

class WeightedQuickUnionPathCompression<T> implements UnionFind {
  private ids: number[];
  private sizes: number[];
  private counter: number;

  // initialize list of elements with N disjoint sets where N is the length of the list
  // initialize size list to keep track of weights for each tree
  constructor(l: number) {
    this.ids = [];
    this.sizes = [];
    this.counter = l;
    for (let i = 0; i < l; i++) {
      this.ids.push(i);
      this.sizes.push(1);
    }
  }

  public count(): number {
    return this.counter;
  }
  public connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }

  public find(d: number): number {
    if (this.ids[d] === d) {
      return d;
    }
    // flatten each reference to point to root
    this.ids[d] = this.find(this.ids[d]);
    return this.ids[d];
  }
  public union(a: number, b: number): void {
    if (a !== b) {
      const _a = this.find(a);
      const _b = this.find(b);
      if (this.sizes[_b] > this.sizes[_a]) {
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

/*
import { UnionFind } from "./interface";

class WeightedQuickUnionPathCompression implements UnionFind {
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

  // uses path compressiion to amortize access to o(1)
  public find(a: number): number {
    if (a === this.ids[a]) {
      return a;
    }
    this.ids[a] = this.find(this.ids[a]);
    return this.ids[a];
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

export { WeightedQuickUnionPathCompression };




*/

export { WeightedQuickUnionPathCompression };
