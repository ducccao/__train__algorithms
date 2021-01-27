class NodeSinglyLinkedList {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new NodeSinglyLinkedList(nodeData);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
}

const node1 = new NodeSinglyLinkedList(1);
const node2 = new NodeSinglyLinkedList(2);

let list = new SinglyLinkedList();
list.insertNode(1);

list.insertNode(2);
list.insertNode(3);

console.log(list);
