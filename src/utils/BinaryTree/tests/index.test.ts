import BinaryTree, { TreeNode } from "../index";

describe("BinaryTree", () => {
  let bt: any;

  beforeEach(() => {
    const left1 = new TreeNode(
      2,
      new TreeNode(3, null, null),
      new TreeNode(5, null, null)
    );
    const right1 = new TreeNode(
      7,
      new TreeNode(8, null, null),
      new TreeNode(10, null, null)
    );
    const root = new TreeNode(1, left1, right1);
    bt = new BinaryTree(root);
  });
  describe("reverse", () => {
    it("should reverse a binary tree", () => {
      expect(bt.reverse()).toEqual([1, 7, 10, 8, 2, 5, 3]);
    });
  });

  describe("isSymmetric", () => {
    it("should detect symmetric tree", () => {
      expect(bt.isSymmetric()).toBeTruthy();
    });
  });
});
