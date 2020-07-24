import HashTable from "../index";

describe("HashTable", () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable<string, number>((a, b) => {
      if (a.charAt(0) < b.charAt(0)) {
        return -1;
      } else if (a.charAt(0) > b.charAt(0)) {
        return 1;
      }
      return 0;
    });
  });
  describe("hashTableCode", () => {
    it("should give the same value the same hashTableCode", () => {
      const hashTable1 = hashTable.hash("12");
      const hashTable2 = hashTable.hash("12");

      expect(hashTable1 === hashTable2).toBeTruthy();
    });
    it("should give positive values only", () => {
      const hashTable1 = hashTable.hash("helloo");

      expect(hashTable1).toBeGreaterThan(-1);
    });
  });
  describe("put", () => {
    it("should set value", () => {
      hashTable.put("1", 1);
      expect(hashTable.size()).toBe(1);
    });
    it("should handle collisions", () => {
      hashTable.put("1", 1);
      hashTable.put("1", 2);
      expect(hashTable.size()).toBe(1);
      expect(hashTable.get("1")).toBe(2);
    });
  });
  describe("size", () => {
    it("should return size of 1", () => {
      hashTable.put("1", 1);
      expect(hashTable.size()).toBe(1);
    });
    it("should return size of 1", () => {
      hashTable.put("1", 1);
      hashTable.put("a", 18);
      hashTable.put("z", 8);
      expect(hashTable.size()).toBe(3);
    });
  });

  describe("get", () => {
    let numhashTable = new HashTable<string, number>((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }, 2);
    let strhashTable = new HashTable<string, number>((a, b) => {
      if (a.charAt(0) < b.charAt(0)) {
        return -1;
      } else if (a.charAt(0) > b.charAt(0)) {
        return 1;
      }
      return 0;
    }, 2);

    beforeEach(() => {
      numhashTable.put("3", 1);
      numhashTable.put("2", 10);
      numhashTable.put("1", 100);
      strhashTable.put("a", 1);
      strhashTable.put("b", 10);
      strhashTable.put("c", 100);
    });
    it("should get values with collisions", () => {
      expect(numhashTable.get("1")).toBe(100);
      expect(numhashTable.get("2")).toBe(10);
      expect(numhashTable.get("3")).toBe(1);
      expect(numhashTable.print()).toBe("1: [100,1] 2: [10]");
    });
  });

  describe("delete", () => {
    beforeEach(() => {
      hashTable.put("1", 1);
      hashTable.put("a", 18);
      hashTable.put("z", 8);
    });

    xit("should remove key and value", () => {
      hashTable.delete("1");
      expect(hashTable.size()).toBe(2);
      expect(hashTable.get("1")).toBe(null);
    });
  });

  describe("contains", () => {
    beforeEach(() => {
      hashTable.put("1", 1);
      hashTable.put("a", 18);
      hashTable.put("z", 8);
    });

    xit("should detect key", () => {
      expect(hashTable.contains("z")).toBeTruthy();
    });
  });
});
