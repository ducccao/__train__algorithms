let log = console.log;

// create the array contains i to j
function createArray(i, j) {
  var rs = [];
  for (let index = 0; index < j - i + 1; index++) {
    rs.push(index + i);
  }
  return rs;
}

// get length of the number
function lenNumber(n) {
  let len = 0;
  let temp = n;
  while (temp !== 0) {
    temp = Math.floor(temp / 10);
    len++;
  }
  return len;
}

// reverse the number
function reverseNumber(n) {
  let length_number = lenNumber(n);
  let temp = n;
  let rs = 0;
  for (let i = 0; i < length_number; i++) {
    rs = rs * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return rs;
}

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  var array_by_ij = createArray(i, j);
  let result = 0;
  for (let i = 0; i < array_by_ij.length; i++) {
    if (Math.abs(array_by_ij[i] - reverseNumber(array_by_ij[i])) % k === 0)
      result++;
  }
  return result;
}

let i = 20;
let j = 23;
let k = 6;
log(beautifulDays(i, j, k));

// 21 - 23
// 21 22 23
// 23 - 21 = 2
// 21

// 21 22 23 123
// 12 22 32 321
// 123 - 321
// 12 - 1234 - 4321
// 123 -4
// 12 - 3
// 1 - 2
// 4321
// 4*10+n%10

// get length of the number
// length - 1234
// 1234/10 = 123  -1
// 12 - 2
// 1 - 3
// 1/10 = 0 - 4
