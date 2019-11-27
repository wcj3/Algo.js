import { PriorityQueue } from "../PriorityQueue";
describe("PriorityQueue", () => {
  let queue;
  beforeEach(() => {
    queue = new PriorityQueue((a, b) => {
      if (a.status > b.status) {
        return -1;
      } else if (a.status < b.status) {
        return 1;
      }
      return 0;
    }, "id");
  });
  describe("enqueue", () => {
    it("should add new elements", () => {
      queue.enqueue({ id: 1, name: "B", status: 2 });
      queue.enqueue({ id: 2, name: "A", status: 1 });
      expect(queue.size()).toBe(2);
    });
  });
  describe("peek", () => {
    it("should return first item in queue", () => {
      queue.enqueue({ id: 1, name: "B", status: 2 });
      queue.enqueue({ id: 2, name: "A", status: 1 });
      queue.enqueue({ id: 3, name: "A", status: 0 });
      expect(queue.peek()).toEqual({ id: 3, name: "A", status: 0 });
    });
    it("should return first item relative to newer items with the same key", () => {
      queue.enqueue({ id: 1, name: "B", status: 2 });
      queue.enqueue({ id: 2, name: "A", status: 1 });
      queue.enqueue({ id: 3, name: "A", status: 0 });
      queue.enqueue({ id: 4, name: "Z", status: 0 });
      expect(queue.peek()).toEqual({ id: 3, name: "A", status: 0 });
    });
  });

  describe("isEmpty", () => {
    it("should calculate is Queue is empty", () => {
      queue = new PriorityQueue((a, b) => a - b);
      expect(queue.isEmpty()).toBeTruthy();
    });
  });

  describe("dequeue", () => {
    it("should add remove head of list", () => {
      queue.enqueue({ id: 1, name: "B", status: 2 });
      queue.enqueue({ id: 2, name: "A", status: 1 });
      expect(queue.dequeue()).toEqual({ id: 2, name: "A", status: 1 });
    });
    it("should return null when list is empty", () => {
      expect(queue.dequeue()).toBeNull();
    });
  });

  test.todo("Delete index from heap");
  test.todo("Change value of heap");
});
