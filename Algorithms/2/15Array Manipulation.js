function isBelong(q1, q2, range) {}

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let max = 0;

  for (let q of queries) {
    max += q[2];
  }

  let range = [0, n - 1];
  let len = queries.length;

  // 6 12 // 6
}

const n = 10;
const q = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

console.log(arrayManipulation(n, q));

function continueTest() {
  let a = [1, 2, 3, 4, 5];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 3) {
      continue;
    }
  }
}

continueTest();
