"use strict";

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

// process.stdin.on("end", function () {
//   inputString = inputString
//     .replace(/\s*$/, "")
//     .split("\n")
//     .map((str) => str.replace(/\s*$/, ""));

//   console.log("Ended STDIN\n");
//   main();
// });

function readline() {
  return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function f(x, y) {
  var map = {};
  var rep = true;

  for (let i of x) {
    map[i] = (map[i] || 0) + 1;
  }

  for (let j of y) {
    map[j] = (map[j] || 0) - 1;
  }

  for (let k in map) {
    console.log("k = ", k);
    if (map[k] < 0) {
      rep = false;
      break;
    }
  }
  console.log(map);

  console.log(rep ? "Yes" : "No");
}

function main() {
  const mn = readline().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const x = readline().split(" ");

  const y = readline().split(" ");

  f(x, y);
}
