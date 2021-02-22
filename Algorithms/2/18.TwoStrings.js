"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.on("SIGINT", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
  process.stdout.write("Ended STDIN\n");
  process.exit();
});

function readLine() {
  return inputString[currentLine++];
}

Object.size = function (o) {
  let c = 0;
  for (let i in o) {
    c++;
  }
  return c;
};

// Complete the twoStrings function below.
function f(x, y) {
  let ret = {};
  var flag = false;

  for (let i of x) {
    ret[i] = (ret[i] || 0) + 1;
  }

  for (let j of y) {
    ret[j] = (ret[j] || 0) - 1;
  }

  let check = [];

  for (let k in ret) {
    if (ret[k] < 0) {
      for (let l = -1; l >= ret[k]; l--) {
        check.push(0);
      }
    }
  }

  if (check.length < y.length) {
    flag = true;
  } else {
    flag = false;
  }

  return flag ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(__dirname + "/output.txt");

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = f(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}

// x,y
// Counting each character of x
// Subtracting Count Object by y
// if sub[i] > 0 then yes - else no
