import { compare } from "../../utils/interfaces";

// Uses SequentialChaining to resolve collisions
type Key = string | number;
export class Node<V> {
  key: Key;
  data: V;
  next: Node<V> | null;
  prev: Node<V> | null;
  size: number;

  constructor(key: Key, data: V, prev?: Node<V> | null) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
    this.size = 0;
  }
}
export default class HashTable<K, V> {
  private compare: compare<K>;
  private keys: Node<V>[];
  private _size: number;
  private;
  constructor(comapre: compare<K>, size: number = 100) {
    this.compare = comapre;
    this.keys = new Array(size);
    this._size = 0;
  }

  // should compute a hash to be used as an array index
  hash(key: string | number) {
    let hash = 17;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        hash = (31 * hash + key.charCodeAt(i)) % this.keys.length;
      }
    }
    return hash;
  }

  put(key: string | number, value: V) {
    const hash = this.hash(key);
    console.log(hash);
    const node = new Node(key, value);
    // check for collision
    if (this.keys[hash]) {
      let e: any = this.keys[hash];
      while (e != null) {
        if (e.key === key) {
          e.data = value;
          break;
        }
        e = e.next;
      }
      node.next = this.keys[hash];
      node.size++;
    } else {
      this._size++;
    }
    this.keys[hash] = node;
  }

  // needs a resize implementation to keep load factor at a reasonable level so we reduce memory usage at scale
  // resize keys array
  resize() {}
  print() {
    let str = "";
    this.keys.forEach(node => {
      str += `${node.key}: [`;
      let n: any = node;
      while (n) {
        str += `${n.data}`;
        if (n.next) {
          str += ",";
        }
        n = n.next;
      }
      str += `] `;
    });
    return str.trim();
  }

  get(key: string | number) {
    const hash = this.hash(key);
    let e: any = this.keys[hash];
    while (e != null) {
      if (e.key === key) {
        return e.data;
      }
      e = e.next;
    }
    return null;
  }

  size() {
    return this._size;
  }
}
