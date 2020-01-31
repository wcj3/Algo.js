import Stack from "../index";
describe("Stack", () => {
  describe("push", () => {
    let stack;

    it("should add new elements", () => {
      stack = new Stack();
      stack.push(9);
      stack.push(10);
      expect(stack.size()).toBe(2);
    });
  });
  describe("pop", () => {
    let stack;
    it("should add remove head of list", () => {
      stack = new Stack();
      stack.push(9);
      stack.push(10);
      expect(stack.pop()).toBe(10);
    });
    it("should return null when list is empty", () => {
      stack = new Stack();
      expect(stack.pop()).toBeNull();
    });
  });
});
