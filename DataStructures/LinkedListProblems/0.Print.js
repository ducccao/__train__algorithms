class NodeSignlyLinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertNode(data) {
    let newNode = new NodeSignlyLinkedList(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }
}

function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

let llist = new SinglyLinkedList();
llist.insertNode(1);
llist.insertNode(2);
llist.insertNode(3);

printLinkedList(llist.head);
