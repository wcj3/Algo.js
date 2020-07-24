class TreeNode<T> {
  val: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree<K> {
  root: TreeNode<K>;
  constructor(root) {
    this.root = root;
  }

  reverse() {
    let treeAsStr: any[] = [];
    function _reverse(node) {
      if (node === null) return;
      treeAsStr.push(node.val);
      const oldLeft = node.left;
      node.left = node.right;
      node.right = oldLeft;
      _reverse(node.left);
      _reverse(node.right);
    }
    _reverse(this.root);
    return treeAsStr;
  }
  private _isSymmetric(node) {
    if (node.left === null && node.right === null) {
      return true;
    } else if (node.left === null || node.right === null) {
      return true;
    }
    return this._isSymmetric(node.left) && this._isSymmetric(node.right);
  }
  isSymmetric(): boolean {
    return this._isSymmetric(this.root);
  }
}

export { TreeNode };
export default BinaryTree;
