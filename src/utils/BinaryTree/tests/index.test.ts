import BinaryTree, { TreeNode } from "../index";

describe("BinaryTree", () => {
  let bt: any;

  beforeEach(() => {
    const left1 = new TreeNode(
      2,
      new TreeNode(4, null, null),
      new TreeNode(5, null, null)
    );
    const right1 = new TreeNode(
      3,
      new TreeNode(6, null, null),
      new TreeNode(7, null, null)
    );
    const root = new TreeNode(1, left1, right1);
    bt = new BinaryTree(root);
  });
  describe("invert", () => {
    it("should invert a binary tree", () => {
      expect(bt.invert()).toMatchSnapshot();
    });

    it("should invert incomplete tree", () => {
      const left1 = new TreeNode(
        2,
        null,
        new TreeNode(
          4,
          new TreeNode(7, null, null),
          new TreeNode(8, null, null)
        )
      );
      const right1 = new TreeNode(
        3,
        new TreeNode(5, null, null),
        new TreeNode(6, null, null)
      );
      const root = new TreeNode(1, left1, right1);
      const inv = new BinaryTree(root);
      expect(inv.invert()).toMatchSnapshot();
    });
  });

  describe("isSymmetric", () => {
    it("should detect symmetric tree", () => {
      expect(bt.isSymmetric()).toBeTruthy();
    });
  });

  describe("print", () => {
    it("should print complete tree", () => {
      const left1 = new TreeNode(
        2,
        new TreeNode(4, null, null),
        new TreeNode(5, null, null)
      );
      const right1 = new TreeNode(
        3,
        new TreeNode(6, null, null),
        new TreeNode(7, null, null)
      );
      const root = new TreeNode(1, left1, right1);
      bt = new BinaryTree(root);
      expect(bt.print()).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    });

    it("should print incomplete tree", () => {
      const left1 = new TreeNode(
        2,
        null,
        new TreeNode(
          5,
          new TreeNode(17, null, null),
          new TreeNode(18, null, null)
        )
      );
      const right1 = new TreeNode(
        3,
        new TreeNode(6, null, null),
        new TreeNode(7, null, null)
      );
      const root = new TreeNode(1, left1, right1);
      bt = new BinaryTree(root);
      expect(bt.print()).toMatchSnapshot();
    });
  });
});
