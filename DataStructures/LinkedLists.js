class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addLast(data) {
    var node = new NodeList(data);
    var current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

let node1 = new NodeList(1);
let node2 = new NodeList(2);
let node3 = new NodeList(3);
node2.next = node3;
node1.next = node2;

console.log(node1);

let list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);

console.log("List after insert ", list);
