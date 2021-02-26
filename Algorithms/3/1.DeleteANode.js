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

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    //    ws.write(String(node.data));
    console.log(node.data);

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

// Complete the deleteNode function below.

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
function logll(head) {
  var cur = head;
  while (cur !== null) {
    console.log(cur.data);
    cur = cur.next;
  }
}

function deleteNode(head, pos) {
  // Using derivative

  if (pos === 0) {
    head = head.next;
    return head;
  }

  if (pos === 1) {
    head.next = head.next.next;
    return head;
  } else {
    deleteNode(head.next, pos - 1);
  }

  return head;
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/ret.txt ");

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    llist.insertNode(llistItem);
  }

  const position = parseInt(readLine(), 10);

  let llist1 = deleteNode(llist.head, position);

  printSinglyLinkedList(llist1, " ", ws);
  ws.write("\n");

  ws.end();
}
