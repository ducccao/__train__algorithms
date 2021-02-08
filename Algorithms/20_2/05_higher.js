// Complete the squares function below.
function squares(a, b) {
  let ret = 0;
  let x = 1;
  while (x * x < a) {
    x++;
  }
  while (x * x <= b) {
    ret++;
    x++;
  }
  return ret;
}

const a = 3;
const b = 9;

console.log(squares(a, b));

// 3 4 5 6 7 8 9
