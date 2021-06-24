"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.on("SIGINT", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'calculateMaximumProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER x
 */

function calculateMaximumProfit(cost, x) {
  // Write your code here
  //console.log(cost, x);

  // 10 20 14 40 50 , 70
  // 10

  // 3 4 1, 8
  // 3 4
  // 1 4 = 5

  // 3 4 1
  // 1 2 4 = 7

  var ret = [];
  for (let i = 0; i < cost.length; ++i) {
    var c = cost[i];
    var cos = 0;
    for (let j = i + 1; j < cost.length; ++j) {
      c += cost[j];

      if (c > x) break;
      else {
        cos = 0;
        cos += Math.pow(2, j) + Math.pow(2, i);

        ret.push(cos);
      }
    }
  }

  return Math.floor(Math.max(...ret)) % (Math.pow(10, 9) + 7);
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/ret.txt");

  const costCount = parseInt(readLine().trim(), 10);

  let cost = [];

  for (let i = 0; i < costCount; i++) {
    const costItem = parseInt(readLine().trim(), 10);
    cost.push(costItem);
  }

  const x = parseInt(readLine().trim(), 10);

  const result = calculateMaximumProfit(cost, x);

  ws.write(result + "\n");

  ws.end();
}
