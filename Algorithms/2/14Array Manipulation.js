function initA(n) {
  const a = [];
  for (let i = 0; i < n; ++i) a.push(0);
  return a;
}
// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let a = initA(n);

  for (let q of queries) {
    for (let j = q[0] - 1; j < q[1]; j++) {
      a[j] += q[2];
    }
  }

  return Math.max(...a);
}

const n = 10;
const q = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

console.log(arrayManipulation(n, q));
