l = console.log;

// count character a from a string
function countAFromAstring(s) {
  var c = 0;
  var len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === "a") c++;
  }
  return c;
}

// get counted a from repeated string
function countAInRepeatOfString(s, n) {
  return countAFromAstring(s) * Math.floor(n / s.length);
}

// get divisor string of origin string
function getDivisorString(s, divisor) {
  var rs = "";
  for (let i = 0; i < divisor; i++) rs += s[i];
  return rs;
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  var len = s.length;
  var divisor = n % len;

  if (len === 0) return 0;

  if (n > len) {
    // count 'a' character from repeated string
    var c1 = countAInRepeatOfString(s, n);
    // get divisor string
    var divisor_string = getDivisorString(s, divisor);
    // count 'a' from it
    var c2 = countAFromAstring(divisor_string);

    return c1 + c2;
  }

  // get divisor string
  var divisor_string = getDivisorString(s, divisor);
  // count 'a' from it
  var c2 = countAFromAstring(divisor_string);

  return c2;
}

var s = "abca";
var n = 10;

l(repeatedString(s, n));
// ab, n= 3
// ab a

// ababa, n = 3
// aba

// if n > s.len

// aba, n = 10
// aba aba aba a

// abc, n = 10
// abc abc abc a, 2 = n % s.len
// 1  2   3,  3 = 10/

// abcd, n = 10
// abcd abcd ab

// abca, n = 10
// abca abca ab
