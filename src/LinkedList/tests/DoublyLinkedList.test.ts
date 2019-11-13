import { LinkedList } from "../index";

describe("DoublyLinkedList", () => {
  let linkedList: LinkedList<any>;
  describe("size", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should return length of items in list", () => {
      linkedList.append(5);
      linkedList.append(10);
      expect(linkedList.size()).toEqual(2);
    });
    it("should return length of items in list after removal", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.remove();
      expect(linkedList.size()).toEqual(1);
    });
  });

  describe("isEmpty", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should return false when the list is not empty", () => {
      linkedList.append(5);
      linkedList.append(10);
      expect(linkedList.isEmpty()).toBe(false);
    });
    it("should return true when the list is empty", () => {
      expect(linkedList.isEmpty()).toBeTruthy();
    });
  });

  describe("append", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should add an item to tail of the list", () => {
      linkedList.append(5);
      linkedList.append(10);
      expect(linkedList.toString()).toEqual("5,10");
    });
    it("should add an item to head of the list after prepend", () => {
      linkedList.prepend(5);
      linkedList.prepend(10);
      linkedList.append(1);
      expect(linkedList.toString()).toEqual("10,5,1");
    });

    it("should be able to access previous elements from tail", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(1);
      const access: any[] = [];
      let tail = linkedList.tail;
      while (tail !== null) {
        access.push(tail!.data);
        tail = tail.prev;
      }
      expect(access).toEqual([1, 10, 5]);
    });

    it("should be able to access next elements from head", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(1);
      const access: any[] = [];
      let head = linkedList.head;
      while (head !== null) {
        access.push(head!.data);
        head = head.next;
      }
      expect(access).toEqual([5, 10, 1]);
    });
  });

  describe("prepend", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should add an item to head of the list", () => {
      linkedList.prepend(5);
      linkedList.prepend(10);
      expect(linkedList.toString()).toEqual("10,5");
    });

    it("should add an item to head of the list after append", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.prepend(1);
      expect(linkedList.toString()).toEqual("1,5,10");
    });

    it("should be able to access previous elements from tail", () => {
      linkedList.prepend(5);
      linkedList.prepend(10);
      linkedList.prepend(1);
      const access: any[] = [];
      let tail = linkedList.tail;
      while (tail !== null) {
        access.push(tail!.data);
        tail = tail.prev;
      }
      expect(access).toEqual([5, 10, 1]);
    });

    it("should be able to access next elements from head", () => {
      linkedList.prepend(5);
      linkedList.prepend(10);
      linkedList.prepend(1);
      const access: any[] = [];
      let head = linkedList.head;
      while (head !== null) {
        access.push(head!.data);
        head = head.next;
      }
      expect(access).toEqual([1, 10, 5]);
    });
  });
  describe("remove", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should remove head of a list", () => {
      linkedList.append(5);
      linkedList.append(10);
      const n = linkedList.remove();
      expect(n).toEqual(5);
    });
    it("should update head after removal", () => {
      linkedList.append(5);
      linkedList.append(10);
      const n = linkedList.remove();
      expect(linkedList.head!.data).toEqual(10);
    });
    it("should update head prev reference after removal", () => {
      linkedList.append(5);
      linkedList.append(10);
      const n = linkedList.remove();
      expect(linkedList.head!.prev).toBeNull();
    });
    it("shouldn't remove head of an empty list", () => {
      const n = linkedList.remove();
      expect(n).toBe(null);
    });
  });

  describe("removeAt", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should remove element from specified index", () => {
      linkedList.append(15);
      linkedList.append(100);
      expect(linkedList.removeAt(1)).toBe(100);
    });
    it("should remove element from specified index after n appends", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList.append(53);
      linkedList.append(1000);
      expect(linkedList.removeAt(4)).toBe(53);
    });
    it("should remove element from specified index after n appends", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList.append(53);
      linkedList.append(1000);
      linkedList.removeAt(4);
      expect(linkedList.size()).toBe(5);
    });
    it("should remove head", () => {
      linkedList.append(5);
      expect(linkedList.removeAt(0)).toBe(5);
    });
    it("should remove head and set head to null", () => {
      linkedList.append(5);
      linkedList.removeAt(0);
      expect(linkedList.head).toBeNull();
    });
    it("should remove tail", () => {
      linkedList.append(5);
      linkedList.append(10);
      expect(linkedList.removeAt(1)).toBe(10);
    });
    it("should remove tail and reset tail", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.removeAt(1);
      expect(linkedList.tail!.data).toBe(5);
    });

    it("should have size 0 when list is empty", () => {
      linkedList.append(5);
      linkedList.removeAt(0);
      expect(linkedList.size()).toEqual(0);
    });
    it("should be able to traverse list from head to tail after removeAt", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList.append(53);
      linkedList.append(1000);
      linkedList.removeAt(4);
      let node = linkedList.head;
      const arr: any[] = [];
      while (node) {
        arr.push(node.data);
        node = node.next;
      }
      expect(arr).toEqual([15, 100, 51, 75, 1000]);
    });
    it("should be able to traverse list from tail to head after removeAt", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList.append(53);
      linkedList.append(1000);
      linkedList.removeAt(4);
      let node = linkedList.tail;
      const arr: any[] = [];
      while (node) {
        arr.push(node.data);
        node = node.prev;
      }
      expect(arr).toEqual([1000, 75, 51, 100, 15]);
    });
  });

  describe("concat", () => {
    let linkedList2: any;
    beforeEach(() => {
      linkedList = new LinkedList<number>();
      linkedList2 = new LinkedList<number>();
    });
    it("should concat two lists", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList2.append(1);
      linkedList2.append(2);
      linkedList2.append(3);
      linkedList.concat(linkedList2);
      let node = linkedList.head;
      const arr: any[] = [];
      while (node) {
        arr.push(node.data);
        node = node.next;
      }
      expect(arr).toEqual([15, 100, 51, 75, 1, 2, 3]);
    });
    it("should concat an empty list", () => {
      linkedList.append(15);
      linkedList.append(100);
      linkedList.append(51);
      linkedList.append(75);
      linkedList.concat(linkedList2);
      let node = linkedList.head;
      const arr: any[] = [];
      while (node) {
        arr.push(node.data);
        node = node.next;
      }
      expect(arr).toEqual([15, 100, 51, 75]);
    });

    it("should concat a non-null list to an empty list", () => {
      linkedList2.append(15);
      linkedList2.append(100);
      linkedList2.append(51);
      linkedList2.append(75);
      linkedList.concat(linkedList2);
      let node = linkedList.head;
      const arr: any[] = [];
      while (node) {
        arr.push(node.data);
        node = node.next;
      }
      expect(arr).toEqual([15, 100, 51, 75]);
    });
  });
});
