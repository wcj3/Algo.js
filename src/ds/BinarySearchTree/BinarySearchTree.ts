import { compare } from "../../utils/interfaces";
type BinNode<K, V> = BNode<K, V> | null;
class BinarySearchTree<K, V> {
  private root: BinNode<K, V>;
  private compare: compare<K>;

  constructor(cmp: compare<K>) {
    this.compare = cmp;
    this.root = null;
  }

  get(node: K) {
    return this._get(node, this.root);
  }

  private _get(lookupNode: K, root: BinNode<K, V>) {
    if (root == null) return null;
    const cmp = this.compare(root.key, lookupNode);
    if (cmp < 0) {
      return this._get(lookupNode, root.right);
    } else if (cmp > 0) {
      return this._get(lookupNode, root.left);
    }
    return root.value;
  }

  put(nodeToInsert: BNode<K, V>) {
    // change key's value or add new value
    nodeToInsert.size = 1;
    this.root = this._put(nodeToInsert, this.root);
  }

  private _put(nodeToInsert: BNode<K, V>, root: BinNode<K, V>) {
    // add new node if root is null
    if (root == null) {
      return nodeToInsert;
    }
    // check left child for lesser
    // check right child for greater
    const cmp = this.compare(nodeToInsert.key, root.key);
    if (cmp < 0) {
      root.left = this._put(nodeToInsert, root.left);
    } else if (cmp > 0) {
      root.right = this._put(nodeToInsert, root.right);
    } else {
      // update value for same key
      root.value = nodeToInsert.value;
    }
    // update size
    root.size = this.subtreeSize(root.left) + this.subtreeSize(root.right) + 1;
    return root;
  }
  subtreeSize(n: BinNode<K, V>): number {
    return n ? n.size : 0;
  }

  /* Delete this code and try again */
  delete(key: K) {
    if (!this.root) return this.root;
    this.root = this._delete(key, this.root);
  }

  private min(root: BNode<K, V>): BNode<K, V> {
    if (root.left == null) return root;
    return this.min(root.left);
  }

  private deleteMin(root: BNode<K, V>) {
    if (root.left == null) return root.right;
    root.left = this.deleteMin(root.left);
    return root;
  }

  private _delete(key: K, root: BinNode<K, V>): BNode<K, V> | null {
    // return undefined if root is falsy
    //  delete node with children by promoting the child (finding minimum in the right tree aka successor)
    if (!root) return null;
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      root.left = this._delete(key, root.left);
    } else if (cmp > 0) {
      root.right = this._delete(key, root.right);
    } else {
      // handle single child
      if (root.right == null) return root.left;
      if (root.left == null) return root.right;
      const toDelete = root;
      // find minium node in the right tree
      root = this.min(toDelete.right as BNode<K, V>);
      root.right = this.deleteMin(toDelete.right as BNode<K, V>);
      // restore left node
      root.left = toDelete.left;
    }
    root.size = this.subtreeSize(root.left) + this.subtreeSize(root.right);
    return root;
  }
  size(): number {
    return this.root ? this.root.size : 0;
  }

  print(): string {
    const vals = [];
    if (this.root) {
      this.preorder(this.root, vals);
    }
    return vals.toString();
  }

  private preorder(n: BinNode<K, V> | undefined, list: K[]) {
    if (n) {
      list.push(n.key);
      this.preorder(n.left, list);
      this.preorder(n.right, list);
    }
  }
}

export { BinarySearchTree };
export { BNode };

class BNode<K, V> {
  key: K;
  value: V;
  size: number;
  left: BinNode<K, V>;
  right: BinNode<K, V>;
  constructor(key: K, value: V, size: number = 0) {
    this.key = key;
    this.value = value;
    this.size = size;
    this.right = null;
    this.left = null;
  }
}
