class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

function insertAtTail(head, data) {
  const newNode = new NodeList(data);

  if (head === null) {
    head = newNode;
    return head;
  }

  let current = new NodeList();
  current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;

  console.log("Current", current);

  console.log(head);

  return head;
}

function main() {
  let llist = new LinkedList();
  for (let i = 0; i < 5; ++i) {
    const llistitem = i;
    const llistHead = insertAtTail(llist.head, llistitem);
    llist.head = llistHead;
  }

  //console.log("result ", llist.head);
}

main();
