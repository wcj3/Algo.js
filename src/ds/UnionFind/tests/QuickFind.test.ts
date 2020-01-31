import { QuickFind } from "../QuickFind";

describe("QuickFind", () => {
  let quickFind: any;
  beforeEach(() => {
    quickFind = new QuickFind(10);
  });

  describe("count", () => {
    it("should return count of initial components", () => {
      expect(quickFind.count()).toBe(10);
    });

    it("should return count of initial components", () => {
      quickFind = new QuickFind(10);
      quickFind.union(1, 8);
      expect(quickFind.count()).toBe(9);
    });
  });

  describe("union", () => {
    it("should connect two objects", () => {
      quickFind = new QuickFind(10);
      quickFind.union(1, 8);
      expect(quickFind.print()).toEqual([0, 8, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should handle multiple unions", () => {
      quickFind = new QuickFind(10);
      quickFind.union(3, 4);
      quickFind.union(3, 8);
      expect(quickFind.print()).toEqual([0, 1, 2, 8, 8, 5, 6, 7, 8, 9]);
    });
  });

  describe("connected", () => {
    it("should determine if two objects are connected", () => {
      quickFind = new QuickFind(10);
      quickFind.union(1, 8);
      quickFind.union(2, 8);
      expect(quickFind.connected(1, 8)).toBeTruthy();
    });
    it("should determine if two objects aren't connected", () => {
      quickFind = new QuickFind(10);
      quickFind.union(1, 8);
      quickFind.union(2, 8);
      expect(quickFind.connected(4, 8)).toBeFalsy();
    });
  });
});
