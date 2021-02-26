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

  console.log("End!");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertTail(data) {
    const node = new DoublyLinkedListNode(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }
};
function printDoublyLinkedList(node, sep, ws) {
  while (node != null) {
    console.log(node.data);

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}
function reverse(head) {}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new DoublyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertTail(llistItem);
    }

    let llist1 = reverse(llist.head);

    printDoublyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
