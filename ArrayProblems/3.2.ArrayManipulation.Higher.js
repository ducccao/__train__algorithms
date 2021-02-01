function arrayManipulation(n, queries) {
  let arr = [];

  for (let i = 0; i < n; ++i) {
    arr.push(0);
  }
  //console.log(arr);
  //console.log(arr);

  for (let q of queries) {
    arr[q[0] - 1] += q[2];
    if (q[1] !== arr.length) {
      arr[q[1]] -= q[2];
    }
  }

  let max = 0;
  let temp = 0;

  for (let a of arr) {
    temp += a;
    console.log(a);
    if (temp > max) {
      max = temp;
    }
    //console.log(temp);
  }
  return max;
}

const n = 10;
const q = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
];

console.log(arrayManipulation(n, q));
