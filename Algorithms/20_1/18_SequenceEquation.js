let log = console.log;

function isEven(n) {
  return !(n & 1);
}

for (let i = 0; i < 10; i++) {
  log(i, " = ", isEven(i));
}

// 1010 xor 1
// 0001
// 1011

// 1010 & 1
// 0001
// 0000

let s = 3;
log(s.toString(2));
