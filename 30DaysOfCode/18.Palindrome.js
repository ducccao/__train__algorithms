class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(ele) {
    this.items.push(ele);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  log() {
    let i = this.items.length;

    while (i-- > 0) console.log(this.items[i]);
  }
}

class Stack {
  constructor() {
    this.items = [];
  }
  push(ele) {
    this.items.push(ele);
  }
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  log() {
    let i = -1;
    while (++i < this.items.length) {
      console.log(this.items[i]);
    }
  }
}

// const q = new Queue();
// const s = new Stack();

// s.push(1);
// s.push(2);
// s.push(3);
// //s.log();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.log();

function Solution() {
  //Write your code here
  this.stack = new Stack();
  this.queue = new Queue();

  this.pushCharacter = (s) => {
    this.stack.push(s);
  };
  this.popCharacter = () => {
    return this.stack.pop();
  };

  this.enqueueCharacter = (s) => {
    this.queue.enqueue(s);
  };
  this.dequeueCharacter = () => {
    return this.queue.dequeue();
  };
}
