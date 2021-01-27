function processs(a, q) {
  for (let i = q[0] - 1; i <= q[1] - 1; ++i) {
    if (a[i] === undefined) {
      a[i] = 0;
    }
    a[i] += q[2];
  }
  return a;
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, q) {
  let a = [];

  a.length = n;

  let ret = [];

  // console.log(firstArr);

  for (let i = 0; i < q.length; ++i) {
    ret = processs(a, q[i]);
  }

  ret.length--;

  return Math.max(...ret);
}

const n = 10;
const q = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
];

console.log(arrayManipulation(n, q));
