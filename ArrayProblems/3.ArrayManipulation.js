function handleFirstQuery(arr, query) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = query[0] - 1; j <= query[1] - 1; j++) {
      let stuff = query[2];
      arr[j] = stuff;
    }
  }
  return arr;
}

function handleSecondQuery(firstArr, q) {
  for (let i = 0; i < firstArr.length; ++i) {
    for (let j = q[0] - 1; j <= q[1] - 1; ++j) {
      firstArr[j] += q[2];
    }
    break;
  }
  return firstArr;
}

function maxVL(a) {
  return a.sort((a, b) => b - a)[0];
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, q) {
  let initArr = [];
  let i = 1;
  while (i <= n) {
    initArr.push(0);
    i++;
  }

  const firstArr = handleFirstQuery(initArr, q[0]);
  let ret = [];

  for (let i = 1; i < q.length; ++i) {
    ret = handleSecondQuery(firstArr, q[i]);
  }

  console.log(maxVL(ret));
  return maxVL(ret);
}

const n = 5;
const q = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
];

arrayManipulation(n, q);
