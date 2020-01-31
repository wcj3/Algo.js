import { SymbolTable } from "../index";

describe("SymbolTable", () => {
  let map;
  beforeEach(() => {
    map = new SymbolTable<string, number>((a, b) => {
      if (a.charAt(0) < b.charAt(0)) {
        return -1;
      } else if (a.charAt(0) > b.charAt(0)) {
        return 1;
      }
      return 0;
    });
  });
  describe("put", () => {
    it("should set value", () => {
      map.put("1", 1);
      expect(map.size()).toBe(1);
    });
  });
  describe("size", () => {
    it("should return size of 1", () => {
      map.put("1", 1);
      expect(map.size()).toBe(1);
    });
    it("should return size of 1", () => {
      map.put("1", 1);
      map.put("a", 18);
      map.put("z", 8);
      expect(map.size()).toBe(3);
    });
  });
  describe("get", () => {
    let numMap = new SymbolTable<string, number>((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });
    let strMap = new SymbolTable<string, number>((a, b) => {
      if (a.charAt(0) < b.charAt(0)) {
        return -1;
      } else if (a.charAt(0) > b.charAt(0)) {
        return 1;
      }
      return 0;
    });

    beforeEach(() => {
      numMap.put("3", 1);
      numMap.put("2", 10);
      numMap.put("1", 100);
      strMap.put("a", 1);
      strMap.put("b", 10);
      strMap.put("c", 100);
    });
    it("should get values", () => {
      expect(numMap.get("1")).toBe(100);
      expect(numMap.get("2")).toBe(10);
      expect(numMap.get("3")).toBe(1);
    });

    it("should get values", () => {
      strMap.put("a", 1);
      strMap.put("b", 10);
      strMap.put("c", 100);
      expect(strMap.get("a")).toBe(1);
      expect(strMap.get("b")).toBe(10);
      expect(strMap.get("c")).toBe(100);
    });
  });

  describe("delete", () => {
    beforeEach(() => {
      map.put("1", 1);
      map.put("a", 18);
      map.put("z", 8);
    });

    it("should remove key and value", () => {
      map.delete("1");
      expect(map.size()).toBe(2);
      expect(map.get("1")).toBe(null);
    });
  });

  describe("contains", () => {
    beforeEach(() => {
      map.put("1", 1);
      map.put("a", 18);
      map.put("z", 8);
    });

    it("should detect key", () => {
      expect(map.contains("z")).toBeTruthy();
    });
  });
});
