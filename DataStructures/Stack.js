// Stack
// Insert at the end of stack and removed from the end
// LAST IN FIRST OUT or FIRST IN LAST OUT
// LIFO or FILO

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    // Add element at the end of the stack
    this.items.push(element);
  }
  pop() {
    // return a top most  ele  of the stack
    // and remove it from the stack
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  peek() {
    // return the top most ele of the stack
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    for (let i = 0; i < this.items.length; ++i) console.log(this.items[i]);
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

s.pop();

s.printStack();
