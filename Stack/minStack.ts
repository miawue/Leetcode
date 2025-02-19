function getElementFromEnd<T>(arr: T[], indexFromEnd: number): T | undefined {
  if (indexFromEnd < 0 || indexFromEnd >= arr.length) {
      return undefined;
  }
  return arr[arr.length - 1 - indexFromEnd];
}

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val)
    const minStackLastElem = getElementFromEnd(this.minStack, 0)
    if (this.minStack.length === 0 || val <= minStackLastElem!) {
      this.minStack.push(val)
    }
  }

  pop(): void {
    const popped = this.stack.pop()
    const minStackLastElem = getElementFromEnd(this.minStack, 0)
    if (minStackLastElem === popped) {
      this.minStack.pop()
    }
  }

  top(): number | undefined {
      return getElementFromEnd(this.stack, 0)
  }

  getMin(): number | undefined {
      return getElementFromEnd(this.minStack, 0)
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2

const minStack2 = new MinStack();
minStack2.push(-1);
console.log(minStack2.top()); // -1
console.log(minStack2.getMin()); // -1
minStack2.pop();
