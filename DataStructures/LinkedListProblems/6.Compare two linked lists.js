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

function lengthList(head) {
  let ret = 0;
  for (var i = head; i !== null; i = i.next) {
    ret++;
  }
  return ret;
}

function CompareLists(llist1, llist2) {
  const lenList1 = lengthList(llist1);
  const lenList2 = lengthList(llist2);

  if (lenList1 !== lenList2) {
    return 0;
  }

  var flag = 1;
  for (
    let i = llist1, j = llist2;
    i !== null, j !== null;
    i = i.next, j = j.next
  ) {
    if (i.data !== j.data) {
      flag = 0;
      break;
    }
  }

  return flag;
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

    let result = CompareLists(llist1.head, llist2.head);

    ws.write((result ? 1 : 0) + "\n");
  }

  ws.end();
}
