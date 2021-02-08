function rotateLeftTrigger(a) {
  const b = [];
  for (let i = 0; i < a.length; ++i) {
    b.push(a[i + 1]);
  }
  b[b.length - 1] = a[0];
  return b;
}

function rotateLeft(d, a) {
  // Write your code here

  for (let j = 0; j < d; j++) {
    a = rotateLeftTrigger(a);
  }

  return a;
}

const d = 2;
const arr = [1, 2, 3, 4, 5];

rotateLeft(d, arr);
