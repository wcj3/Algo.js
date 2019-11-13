import { UnionFind } from "./interface";

class QuickFind implements UnionFind {
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

  public find(a: number): number {
    return this.ids[a];
  }

  // precondition: two objects (potentially in the same equivalnce classes)
  // postcondition: two objects will be unioned into same equilvalency class
  public union(a: number, b: number) {
    const _a = this.find(a);
    const _b = this.find(b);
    if (_a !== _b) {
      for (let i = 0; i < this.ids.length; i++) {
        if (this.ids[i] === _a) {
          this.ids[i] = _b;
        }
      }
      this.counter--;
    }
  }

  public print(): number[] {
    return this.ids;
  }
}

export { QuickFind };
