import { QuickUnion } from "../QuickUnion";

describe("QuickUnion", () => {
  let quickUnion: any;
  beforeEach(() => {
    quickUnion = new QuickUnion(10);
  });

  describe("count", () => {
    it("should return count of initial components", () => {
      expect(quickUnion.count()).toBe(10);
    });

    it("should return count of initial components", () => {
      quickUnion = new QuickUnion(10);
      quickUnion.union(1, 8);
      expect(quickUnion.count()).toBe(9);
    });
  });

  describe("union", () => {
    it("should connect two objects", () => {
      quickUnion = new QuickUnion(10);
      quickUnion.union(1, 8);
      expect(quickUnion.print()).toEqual([0, 8, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should handle multiple unions", () => {
      quickUnion = new QuickUnion(10);
      quickUnion.union(4, 3);
      quickUnion.union(3, 8);
      expect(quickUnion.print()).toEqual([0, 1, 2, 8, 3, 5, 6, 7, 8, 9]);
    });
  });

  describe("connected", () => {
    it("should determine if two objects are connected", () => {
      quickUnion = new QuickUnion(10);
      quickUnion.union(1, 8);
      quickUnion.union(4, 1);
      expect(quickUnion.connected(4, 8)).toBeTruthy();
    });
    it("should determine if two objects aren't connected", () => {
      quickUnion = new QuickUnion(10);
      quickUnion.union(1, 8);
      quickUnion.union(2, 8);
      expect(quickUnion.connected(4, 8)).toBeFalsy();
    });
  });
});
