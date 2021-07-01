class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
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

  // assumes complete binary tree
  invert() {
    function _reverse(n) {
      if (n === null) return;
      else if ((n.left == null && n.right) || (n.right == null && n.left)) {
        const oldLeft = n.left;
        n.left = n.right;
        n.right = oldLeft;
      } else {
        if (n.left && n.right) {
          const oldLeft = n.left.val;
          n.left.val = n.right.val;
          n.right.val = oldLeft;
        }
      }
      _reverse(n.left);
      _reverse(n.right);
    }
    const oldRight = this.root.right;
    this.root.right = this.root.left;
    this.root.left = oldRight;
    _reverse(this.root.left);
    _reverse(this.root.right);
    return this.root;
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

  private _levelOrder(node: TreeNode<K>) {
    const nodes: any = [[]];
    const visit: any = [node];
    let level = 0;
    while (visit.length > 0) {
      const q = visit.shift();
      nodes[level].push(q == null ? "null" : q?.val);
      if (q) {
        visit.push(q.left, q?.right);
        level++;
        nodes.push([]);
      }
    }
    return nodes;
  }

  print() {
    return this._levelOrder(this.root);
  }
}

export { TreeNode };
export default BinaryTree;
