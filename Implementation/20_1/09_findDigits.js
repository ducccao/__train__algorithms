let log = console.log;

// count
function countAppearNum(n) {
  if (n >= 0 && n <= 9) {
    return 1;
  }
  return 1 + countAppearNum(n / 10);
}

// Complete the findDigits function below.
function findDigits(n) {
  let count = 0;
  let temp = n;
  for (let i = 0; i < countAppearNum(n); i++) {
    let check_divisor = temp % 10;
    if (n % check_divisor === 0) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }
  return count;
}

let n = 120;
log(findDigits(n));

// 120, -  1  2 - 2
