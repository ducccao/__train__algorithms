"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.on("SIGINT", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    console.log(node.data);
    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
const SinglyLinkedListNode = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};
const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertNode(data) {
    const node = new SinglyLinkedListNode(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
};

function mergeLists(head1, head2) {
  if (head1 === null && head2 === null) return null;
  if (head1 === null && head2 !== null) return head2;
  if (head2 === null && head1 !== null) return head1;
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/ret.txt");

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
