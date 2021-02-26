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

class SinglyLinkedList {
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
}

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function logll(head) {
  var cur = head;
  while (cur !== null) {
    console.log(cur.data);
    cur = cur.next;
  }
}

function reverse(head) {
  // 1 2 3 4
  // 4 3 2 1
  const save = [];
  var cur = head;

  while (cur) {
    save.push(cur.data);
    cur = cur.next;
  }

  var secur = head;
  for (let i = save.length - 1; i >= 0; i--, secur = secur.next) {
    secur.data = save[i];
  }

  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    let llist1 = reverse(llist.head);

    printSinglyLinkedList(llist1, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
