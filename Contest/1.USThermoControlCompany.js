"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minimumCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. WEIGHTED_INTEGER_GRAPH tree
 *  2. INTEGER u
 *  3. INTEGER v
 */

/*
 * For the weighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
 *
 */

function minimumCost(treeNodes, treeFrom, treeTo, treeWeight, u, v) {}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const treeNodesEdges = readLine().split(" ");

  const treeNodes = parseInt(treeNodesEdges[0], 10);
  const treeEdges = parseInt(treeNodesEdges[1], 10);

  let treeFrom = [];
  let treeTo = [];
  let treeWeight = [];

  for (let i = 0; i < treeEdges; i++) {
    const treeFromToWeight = readLine().split(" ");

    treeFrom.push(parseInt(treeFromToWeight[0], 10));
    treeTo.push(parseInt(treeFromToWeight[1], 10));
    treeWeight.push(parseInt(treeFromToWeight[2], 10));
  }

  const u = parseInt(readLine().trim(), 10);

  const v = parseInt(readLine().trim(), 10);

  const result = minimumCost(treeNodes, treeFrom, treeTo, treeWeight, u, v);

  ws.write(result + "\n");

  ws.end();
}
