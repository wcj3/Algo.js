import RedBlack, { BNode } from "../RedBlack";

// TODO: add deletion and more put tests

describe("RedBlack", () => {
  let rbt: any;
  beforeEach(() => {
    rbt = new RedBlack((a: number, b: number) => a - b);
  });
  describe("put", () => {
    it("should add a node to the root", () => {
      rbt.put(new BNode(10, 10));
      expect(rbt.print()).toEqual("10");
    });
    it("should keep root color black", () => {
      rbt.put(new BNode(10, 10));
      expect(rbt.get(10).color).toBe("black");
    });
  });
});
