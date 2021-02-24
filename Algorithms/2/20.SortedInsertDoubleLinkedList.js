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
  process.stdout.write("End!");
  process.exit(1);
});

function readLine() {
  return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const newNode = new DoublyLinkedListNode(nodeData);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
  }
};

function printDoublyLinkedList(node, sep, ws) {
  while (node !== null) {
    //ws.write(String(node.data));
    console.log(node.data);

    node = node.next;

    if (node !== null) {
      ws.write(sep);
    }
  }
}
function logList(node) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}
// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
  // Solution
  // + if head = null then ret = node
  // + if head.data > data then ret = node-head
  // + loop - check data > cur.data ? if in the end cur.data < data then ret = head-...-cur-node
  // + else mean that we got the cur.data > data then ret = head-...-preCur-node-cur-...

  var node = new DoublyLinkedListNode(data);

  if (head === null) {
    return node;
  }

  if (head.data > data) {
    node.next = head;
    head.prev = node;
    return node;
  }

  var cur = head;
  while (data > cur.data) {
    // using ref because if we use cur then it insert node at the end
    let ref = cur;
    cur = cur.next;

    if (ref.next === null) {
      ref.next = node;
      node.next = null;
      node.prev = ref;
      return head;
    }
  }

  var prevCur = cur.prev;
  prevCur.next = node;
  node.next = cur;
  cur.prev = node;
  node.prev = prevCur;

  return head;
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/output.txt");

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new DoublyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    const data = parseInt(readLine(), 10);

    let llist1 = sortedInsert(llist.head, data);

    printDoublyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
