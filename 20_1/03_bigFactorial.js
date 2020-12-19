let log = console.log;

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function calculate_factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
  let rs = BigInt(calculate_factorial(n)).toString(10);
  return rs;
}

function main() {
  const n = 25;

  log(extraLongFactorials(n));
}
