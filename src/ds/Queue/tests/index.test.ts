import Queue from "../index";
describe("Queue", () => {
  describe("enqueue", () => {
    let queue;

    it("should add new elements", () => {
      queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(10);
      expect(queue.size()).toBe(2);
    });
  });
  describe("dequeue", () => {
    let queue;
    it("should add remove head of list", () => {
      queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(10);
      expect(queue.dequeue()).toBe(9);
    });
    it("should return null when list is empty", () => {
      queue = new Queue();
      expect(queue.dequeue()).toBeNull();
    });
  });
});
