let l = console.log;

// move element a to index b
function moving(q, element, index_move) {
  let len = q.length;
  for (let i = len - 1; i >= index_move; i--) {
    q[i] = q[i - 1];
  }
  q[index_move] = element;
  return q;
}

// 1 2 3 4
// 1 2 3 3
// 1 2 2 3
// 1 4 2 3

// 1 x 2 3
// a[3]=a[2], a[2]=a[1]

// 1 4 2 3
// 1 4 2 3

// 1 4 2 3
//

// transfer the array
function transferArray(q) {
  let rs = [];
  let q_len = q.length;
  for (let i = 0; i < q_len; i++) rs.push(q[i]);
  rs.sort();
  return rs;
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  var rs = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      rs = "Too chaotic";
      break;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) rs++;
    }
  }
  return rs;
}

var q1 = [2, 1, 5, 3, 4];
var q2 = [2, 5, 1, 3, 4];
var q3 = [5, 1, 2, 3, 7, 8, 6, 4];
var q4 = [1, 2, 5, 3, 7, 8, 6, 4];
var q5 = [1, 2, 3, 4, 5, 6, 7, 8];
// 1 2 5 3 7 8 6 4

// 1 2 3 4 5 6 7 8

// 1 2 5 3 4 6 7 8 - 2
// 1 2 5 3 7 4 6 8 - 2
// 1 2 5 3 7 8 4 6 - 2
// 1 2 5 3 7 8 6 4 - 1

// 2 1 5 3 4 - 1 2 3 4 5

l(minimumBribes(q4));
