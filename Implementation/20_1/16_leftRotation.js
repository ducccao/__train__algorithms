let log = console.log;
let table = console.table;
// reference an array
function transferArray(a) {
  let rs = [];
  for (let i = 0; i < a.length; i++) rs.push(a[i]);

  return rs;
}

// rotation method
function rotateLeft(a) {
  let b = transferArray(a);

  let tail = b[0];

  for (let i = 0; i < b.length; i++) {
    b[i] = b[i + 1];
  }

  b[b.length - 1] = tail;

  return b;
}

// rotation without reference array
function rotateLeft2(a) {
  let tail = a[0];

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i + 1];
  }

  a[a.length - 1] = tail;

  return a;
}

// higher level rotaion
function superRotateLeft(a, d) {
  let stuff = d % a.length;
  let b = [];

  for (let i = 0; i < a.length; i++) {
    b[stuff++] = a[i];
    if (stuff === a.length) stuff = 0;
  }

  return b;
}

//
function testRolLeft(a, d) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    let index = (i + d + 1) % a.length;
    b.push(a[index]);
  }
  log(b);
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    let sumid = i + d;
    let mod = sumid % a.length;
    let index = (i + d) % a.length;
    console.table({ i, d, sumid, index });
    //log(index);
    b.push(a[index]);
  }

  return b;
}

//i = 0 1 2 3 4
//    1 2 3 4 5 - len = 5,
//i+d=2 3 4 5 6
//mod len = 2 3 4 0 1

let a = [1, 2, 3, 4, 5];
let d = 3;

log(rotLeft(a, d));

// 1 2 3 4 5 - 5

// 2 3 4 5 1 - 1
// 3 4 5 1 2 - 2
// 4 5 1 2 3 - 3
// 5 1 2 3 4 - 4
// 1 2 3 4 5 - 5

// 4 5 1 2 3 - 3
// a[0] = a[3], a[1]=a[4], a[2]=a[0], a[3]=a[1], a[4]=a[2]

// 6 = 1, 7 = 2, 8 = 3, 9 = 4, 10 = 5
// 5 = n.length, d mod len(n)
