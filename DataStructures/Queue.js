// Queue
// Insert at the end of the queue and is removed from the front of the queue
// LAST IN FIRST OUT
// LIFO

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // Add element to the queue

    this.items.push(element);
  }
  dequeue() {
    // Remove element from the queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    // Returns the front element of the queue
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    for (let i = this.items.length - 1; i >= 0; i--) console.log(this.items[i]);
  }
}

function main() {
  var aa = [1, 2, 3];
  aa.shift();

  var nq = new Queue();
  nq.enqueue(1);
  nq.enqueue(2);
  nq.enqueue(3);
  // console.log(nq.front());

  nq.dequeue();

  // nq.printQueue();
}

function generatePrintBinary(n) {
  var q = new Queue();
  q.enqueue("1");

  while (n-- > 0) {
    console.log(n);
    q.enqueue(q.front() + n);
  }
  q.printQueue();
}

main();
generatePrintBinary(10);
