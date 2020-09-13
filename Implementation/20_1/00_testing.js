l = console.log;

// get the repeat string
function getRepeatString(s, n) {
  let rs = "";
  let len = s.length;
  let repeat = Math.floor(n / len);
  for (let i = 0; i < repeat; i++) {
    rs += s;
  }

  let divisor = n % len;
  for (let i = 0; i < divisor; i++) {
    rs += s[i];
  }

  return rs;
}

// Complete the repeatedString function below.
function repeatedString(s, n) {}

// abc , 10
// abc abc abc a
// abc - len = 3, divisor of 3 is 1

var s = "abc";
var n = 10;
l(getRepeatString(s, n));
