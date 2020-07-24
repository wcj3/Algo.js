import { BinarySearchTree, BNode } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree<string, number>;
  beforeEach(() => {
    bst = new BinarySearchTree<string, number>((a, b) => {
      if (a.charAt(0) < b.charAt(0)) {
        return -1;
      } else if (a.charAt(0) > b.charAt(0)) {
        return 1;
      }
      return 0;
    });
  });
  // size and put go hand in hand
  describe("size + put", () => {
    it("should return count of adding 1 node", () => {
      const n = new BNode("a", 10);
      bst.put(n);
      expect(bst.size()).toBe(1);
    });
    it("should return count of adding 2 nodes", () => {
      const n = new BNode("a", 10);
      const z = new BNode("b", 20);
      bst.put(n);
      bst.put(z);
      expect(bst.size()).toBe(2);
    });
    it("should update existing node and not increment count", () => {
      const n = new BNode("a", 10);
      const z = new BNode("a", 20);
      bst.put(n);
      bst.put(z);
      expect(bst.size()).toBe(1);
    });
  });

  describe("get", () => {
    it("should access element", () => {
      const n = new BNode("a", 10);
      const z = new BNode("a", 20);
      bst.put(n);
      bst.put(z);
      expect(bst.get("a")).toBe(20);
    });

    it("should return null when tree is empty", () => {
      expect(bst.get("a")).toBeNull();
    });
  });

  describe("delete", () => {
    it("should detete an element with no children", () => {
      bst.put(new BNode("a", 10));
      bst.put(new BNode("b", 20));
      bst.delete("b");
      expect(bst.print()).toBe("a");
    });
    it("should detete an element with one children", () => {
      bst.put(new BNode("a", 10));
      bst.put(new BNode("b", 20));
      bst.put(new BNode("c", 20));
      bst.delete("b");
      expect(bst.print()).toBe("a,c");
    });

    it("should delete parent with 2 children", () => {
      const bst: BinarySearchTree<number, number> = new BinarySearchTree<
        number,
        number
      >((a, b) => a - b);
      bst.put(new BNode(10, 10));
      bst.put(new BNode(7, 10));
      bst.put(new BNode(3, 10));
      bst.put(new BNode(9, 10));
      bst.put(new BNode(14, 10));
      bst.put(new BNode(12, 10));
      bst.put(new BNode(16, 10));
      bst.put(new BNode(15, 10));
      bst.delete(14);
      expect(bst.print()).toBe("10,7,3,9,15,12,16");
    });
  });

  describe("print", () => {
    it("should print proper tree with b as left node", () => {
      bst.put(new BNode("b", 10));
      bst.put(new BNode("z", 20));
      bst.put(new BNode("a", 20));
      expect(bst.print()).toBe("b,a,z");
    });

    it("should print all items in tree", () => {
      const bst: BinarySearchTree<number, number> = new BinarySearchTree<
        number,
        number
      >((a, b) => a - b);
      bst.put(new BNode(10, 10));
      bst.put(new BNode(7, 10));
      bst.put(new BNode(3, 10));
      bst.put(new BNode(9, 10));
      bst.put(new BNode(14, 10));
      bst.put(new BNode(12, 10));
      bst.put(new BNode(16, 10));
      expect(bst.print()).toBe("10,7,3,9,14,12,16");
    });
  });
});
