"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (stdin) => {
  inputString += stdin;
});

process.on("SIGINT", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((s) => s.replace(/\s*$/, ""));

  main();
  console.log("Ended Process!");
  process.exit(1);
});

function readLine() {
  return inputString[currentLine++];
}

class SinglyLinkedListNode {
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
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
}

function printSinglyLinkedList(node, sep, ws) {
  while (node !== null) {
    ws.write(String(node.data));

    node = node.next;

    if (node !== null) {
      ws.write(sep);
    }
  }
}

function insertNodeAtPosition(headPure, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  let head = headPure;
  let c = 0;

  while (head !== null) {
    //    console.log(head);

    if (c === position) {
      const savePos = head.next;
      console.log(savePos);
      head.next = newNode;
      newNode.next = savePos;
      break;
    } else {
      head = head.next;
      c++;
    }
  }

  return headPure;
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/output.txt");

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    llist.insertNode(llistItem);
  }

  const data = parseInt(readLine(), 10);

  const position = parseInt(readLine(), 10);

  let llist_head = insertNodeAtPosition(llist.head, data, position);

  printSinglyLinkedList(llist_head, " ", ws);
  ws.write("\n");

  ws.end();
}
