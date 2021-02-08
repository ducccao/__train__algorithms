function isInt(n) {
  let natural_part = n / 10;
}

// Complete the squares function below.
function squares(a, b) {
  let count = 0;
  for (let i = a; i <= b; ++i) {
    let isqrt = Math.sqrt(i);
    let iflosqlt = Math.floor(isqrt);
    //  console.log("i = ", isqrt);
    // console.log("i round = ", iflosqlt);
    if (isqrt - iflosqlt === 0) {
      count++;
    }
  }
  return count;
}

const a = 3;
const b = 9;

console.log(squares(a, b));
