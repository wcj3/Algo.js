// SymbolTable
import { compare } from "../../utils/interfaces";
class SymbolTable<Key, Value> {
  private keys: Key[];
  private vals: Value[];
  private compare: compare<Key>;
  private len: number;
  constructor(compare: compare<Key>) {
    this.keys = [];
    this.vals = [];
    this.compare = compare;
    this.len = 0;
  }

  get(key: Key) {
    if (this.size() === 0) return null;
    const i = this.rank(key);
    if (i < this.size() && this.compare(this.keys[i], key) === 0) {
      return this.vals[i];
    }
    return null;
  }
  put(key: Key, value: Value) {
    const rnk = this.rank(key);
    // update duplicate
    if (rnk < this.len && this.compare(this.keys[rnk], key) === 0) {
      this.vals[rnk] = value;
      return;
    }
    // move larger items over one spot
    for (let j = this.len; j > rnk; j--) {
      this.keys[j] = this.keys[j - 1];
      this.vals[j] = this.vals[j - 1];
    }
    this.keys[rnk] = key;
    this.vals[rnk] = value;
    this.len++;
  }

  size(): number {
    return this.len;
  }

  delete(key: Key) {
    if (this.contains(key)) {
      const rank = this.rank(key);
      this.keys.splice(rank, 1);
      this.vals.splice(rank, 1);
      this.len--;
    }
  }

  contains(key: Key) {
    return this.get(key) != null;
  }
  // number of keys less than key
  private rank(key: Key): number {
    // precondition: accepts a low, high index, using a list and key from closure
    // postconidtion: finds postion of index or returns negative 1
    const search = (low: number, high: number): number => {
      const mid: number = Math.floor(low + (high - low) / 2);
      if (this.keys[mid] === key) {
        return mid;
      }
      if (low > high) {
        return low;
      }
      key < this.keys[mid] ? (high = mid - 1) : (low = mid + 1);
      return search(low, high);
    };
    return search(0, this.keys.length - 1);
  }
}

// BinarySearch modified to return low index when indices cross

export default SymbolTable;
