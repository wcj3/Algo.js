import { compare } from "./../../utils/interfaces";
class BNode<Key, Value> {
  key: Key;
  value: Value;
  color: "red" | "black";
  size: number;
  left: BNode<Key, Value> | null;
  right: BNode<Key, Value> | null;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
    this.color = "red";
    this.size = 1;
    this.left = null;
    this.right = null;
  }
}

class RedBlack<K, V> {
  root: BNode<K, V> | null;
  private compare: compare<K>;

  constructor(cmp: compare<K>) {
    this.root = null;
    this.compare = cmp;
  }
  private isRed(node: BNode<K, V> | null) {
    return node?.color === "red";
  }

  // flip each child and parent colors
  private flipColors(node: BNode<K, V>) {
    node.color = "red";
    node.right!.color = "black";
    node.left!.color = "red";
  }
  private rotateLeft(node: BNode<K, V>): BNode<K, V> {
    const newRoot = node.right!;
    node.right = newRoot.left;
    newRoot.left = node;
    node.color = "red";
    newRoot.color = "black";
    newRoot.size = node.size;
    node.size = 1 + this.size(node.left) + this.size(node.right);
    return newRoot;
  }

  private rotateRight(node: BNode<K, V>): BNode<K, V> {
    const newRoot = node.left!;
    newRoot.right = node;
    node.left = newRoot.right;
    newRoot.color = "black";
    node.color = "red";
    newRoot.size = node.size;
    node.size = 1 + this.size(node.left) + this.size(node.right);
    return newRoot;
  }

  public put(node: BNode<K, V>) {
    this.root = this._put(node, this.root);
    this.root.color = "black";
  }

  private _put(
    nodeToInsert: BNode<K, V>,
    root: BNode<K, V> | null
  ): BNode<K, V> {
    // adding to null link
    if (!root) return nodeToInsert;
    const cmp = this.compare(nodeToInsert.key, root.key);
    if (cmp > 0) {
      root.left = this._put(root.right!, nodeToInsert);
    } else if (cmp < 0) {
      root.right = this._put(root.left!, nodeToInsert);
    } else {
      root.value = nodeToInsert.value;
    }
    // check for left rotation
    if (this.isRed(root.right) && !this.isRed(root.left)) {
      root = this.rotateLeft(root);
    }
    // check for right rotation
    if (this.isRed(root.left) && !this.isRed(root.left!?.left)) {
      root = this.rotateRight(root);
    }
    // flip colors
    if (this.isRed(root.left) && this.isRed(root.right)) {
      this.flipColors(root);
    }
    nodeToInsert.size = 1 + this.size(root.left) + this.size(root.right);
    return nodeToInsert;
  }

  public size(node: BNode<K, V> | null) {
    return this.root ? this.root.size : 0;
  }

  print(): string {
    const vals = [];
    if (this.root) {
      this.preorder(this.root, vals);
    }
    return vals.toString();
  }

  public get(key: K) {
    return this._get(this.root, key);
  }

  public _get(n: BNode<K, V> | null, key: K) {
    if (n) {
      if (n.key === key) {
        return n;
      }
      this._get(n.left, key);
      this._get(n.right, key);
    }
  }

  private preorder(n: BNode<K, V> | null, list: K[]) {
    if (n) {
      list.push(n.key);
      this.preorder(n.left, list);
      this.preorder(n.right, list);
    }
  }
}

export default RedBlack;
export { BNode };
