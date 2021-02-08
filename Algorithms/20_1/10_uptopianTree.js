let log = console.log;

// Complete the utopianTree function below.
function utopianTree(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 2;
  }

  if (n % 2 === 0) {
    return utopianTree(n - 1) + 1;
  }
  return utopianTree(n - 1) * 2;
}

let n = 4;
log(utopianTree(n));
