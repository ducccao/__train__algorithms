let log = console.log;

function tickThePrisoner(n) {
  // input: integer n
  // ouput: index array of it plus one

  let rs = [];

  for (let i = 0; i < n; ++i) rs.push(i + 1);
  return rs;
}

function tickTheCandies(m) {
  // input: integer n
  // ouput: index array of it plus one

  let rs = [];

  for (let i = 0; i < m; ++i) rs.push(i + 1);
  return rs;
}

// higher level rotaion
function superRotateLeft(a, d) {
  let stuff = d % a.length;
  log(stuff);
  let b = [];

  for (let i = 0; i < a.length; i++) {
    b[stuff++] = a[i];
    if (stuff === a.length) stuff = 0;
  }

  return b;
}

function candyHandle(n, m, s) {
  // 1 2 3

  // 0 0 1 - i = 0
  // 2 3 4 - i = 1
  // 5 6 7 - i = 2
  // -> return 3

  let rs = [];
  let flag = 0;
  let index_to_push_default_value = s - 1;
  for (let i = 0; i < n; i++) {
    let temp = [];
    let flag_2 = 0;

    temp[index_to_push_default_value] = 1;

    if (index_to_push_default_value === n - 1) {
      for (let j = index_to_push_default_value - 1; j >= 0; j--) {
        temp[j] = 0;
      }
      flag = 1;
    }

    if (flag === 1) {
      rs.push(temp);
      break;
    }
  }

  log(rs);
}

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  // 3 7 3
  // 1 2 3 - prisoners array - n = 3
  // 1 2 3 4 5 6 7 - candy array - m = 7
  // s = 3 - index of prisoner to start to distribute the candies

  // 1 2 3 - z3 - 0 1 2 -> so use divisor of n
  //  0 1 2 + 1 to raise the index of prisoner (1,2,3)
  // so x%n+1
  // find x

  // m = 7 candy, index from 0 to 2 so test sub by 1
  // s = 3 start index to give the candy, test sub by 1
  // add them

  // 0 0 1
  // 2 3 4
  // 5 6 7

  // -> 3

  // n+m = 10

  // 3+7-2=8
  // 8%3 = 2
  // 2+1 = 3

  //((s - 1 + m - 1) % n) + 1;

  return ((m - 1 + s - 1) % n) + 1;
}

let n = 3;
let m = 7;
let s = 3;

log(saveThePrisoner(n, m, s));
