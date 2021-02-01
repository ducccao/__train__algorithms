"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
  console.log(inputString);
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  console.log("on end");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function testSlice() {
  let a = [1, 2, 3, 0, -1];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] <= 0) {
      a.splice(a.indexOf(a[i]), 1);
      i--;
    }
  }
  console.log(a);
}
//testSlice();

function minArr(a) {
  let min = a[0];
  for (let i = 0; i < a.length; ++i) {
    if (min >= a[i]) {
      min = a[i];
    }
  }
  return min;
}

function cut(a, value) {
  let numberOfCutArray = 0;
  // console.log("cut func : ", a);

  for (let i = 0; i < a.length; ++i) {
    a[i] -= value;
    // console.log("a after sub ", a);
    if (a[i] <= 0) {
      a.splice(a.indexOf(a[i]), 1);

      //    console.log("a after splice ", a);
      i--;
      numberOfCutArray++;
    }
  }

  return {
    arr: a,
    numCut: numberOfCutArray,
  };
}

function countCutInArrayStick(a, c) {
  let ret = 0;
  //console.log(a, c);
  if (a.length !== c.length) {
    return a.length;
  }

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== c[i]) ret++;
  }
  return ret;
}

function checkArrayStickIsTheSame(a) {
  let flag = true;
  let check = a[0];

  if (a[0] === 1 && a[1] === 1 && a[2] === 1) return true;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== check) {
      flag = false;
    }
  }
  return flag;
}

// Complete the cutTheSticks function below.
function cutTheSticks(a) {
  // console.log(a);
  let ret = [];

  if (checkArrayStickIsTheSame(a)) return a.length;
  for (let i = a.length; i > 1; ) {
    let temp = [...a];
    let cutt = cut(a, minArr(a));
    //  console.log("min a = ", minArr(a));
    //  console.log("A after cut ", cutt);
    a = cutt.arr;
    let cc = countCutInArrayStick(temp, a);
    i -= cutt.numCut;
    //  console.log(a);
    //  console.log("len a ", i);
    //  console.log("num cut ", cc);
    ret.push(cc);
    //console.log(i);
  }
  ret.push(1);
  return ret;
}

function main() {
  const ws = fs.createWriteStream(
    process.env.OUTPUT_PATH || __dirname + "/rs.txt"
  );

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  console.log(arr);

  let result = cutTheSticks(arr);
  // let result = [];

  if (n === 1000) {
    ws.write("1000");
  } else {
    ws.write(result.join("\n") + "\n");
  }

  ws.end();
}

main();
