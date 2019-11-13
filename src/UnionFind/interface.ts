interface UnionFind {
  count(): number;
  connected(a: number, b: number): boolean;
  find(a: number): number;
  union(a: number, b: number): void;
}

export { UnionFind };
