import { SinglyLinkedList as LinkedList } from "../index";

describe("LinkedList", () => {
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
    beforeEach(() => {});
    it("should return false when the list is not empty", () => {
      linkedList = new LinkedList<number>();
      linkedList.append(5);
      linkedList.append(10);
      expect(linkedList.isEmpty()).toBe(false);
    });
    it("should return true when the list is empty", () => {
      const linkedList = new LinkedList<number>();
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
    it("should add an item to head of the list after prepend", () => {
      linkedList.prepend(5);
      linkedList.prepend(10);
      linkedList.append(1);
      expect(linkedList.toString()).toEqual("10,5,1");
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
    it("shouldn't remove head of an empty list", () => {
      const n = linkedList.remove();
      expect(n).toBe(null);
    });
  });

  describe("remove & insertion", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("head and tail should point to the same node when list is 1", () => {
      linkedList.append(5);
      linkedList.remove();
      linkedList.append(10);
      expect(linkedList.head!.data).toBe(10);
      expect(linkedList.tail!.data).toBe(10);
    });
  });

  describe("reverse", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>();
    });
    it("should reverse list", () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(1);
      linkedList.reverse();
      const access: any[] = [];
      let head = linkedList.head;
      while (head !== null) {
        access.push(head!.data);
        head = head.next;
      }
      expect(access).toEqual([1, 10, 5]);
    });
  });

  //   it("removeAt() should remove element from specified index", () => {
  //     expect(linkedList.removeAt(1)).toBe(10);
  //     expect(linkedList.size()).toEqual(1);
  //   });
  //   it("removeAt() should remove element from specified index after number appends", () => {
  //     linkedList.append(15);
  //     linkedList.append(100);
  //     linkedList.append(51);
  //     linkedList.append(75);
  //     linkedList.append(53);
  //     linkedList.append(1000);
  //     expect(linkedList.removeAt(6)).toBe(53);
  //     expect(linkedList.size()).toEqual(7);
  //   });
  //   it("removeAt() should remove head", () => {
  //     expect(linkedList.removeAt(0)).toBe(5);
  //     expect(linkedList.size()).toEqual(1);
  //   });
  //   it("removeAt() should throw error when index is invalid", () => {
  //     expect(() => linkedList.removeAt(10)).toThrow(
  //       "Out of bounds error. Indice 10 is not valid"
  //     );
  //   });
  //   it("removeAt() should throw error when head is null", () => {
  //     const ll = new LinkedList<number>();
  //     expect(() => ll.removeAt(10)).toThrow(
  //       "Head is null. List needs to be intialized."
  //     );
  //   });
});
