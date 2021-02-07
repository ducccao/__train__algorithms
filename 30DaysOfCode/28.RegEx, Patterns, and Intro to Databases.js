function checkOnlyLowercase(n) {
  const nonLowercaseLetters = /[^a-z]/g;
  return !nonLowercaseLetters.test(n);
}
function checkName(n) {
  const check = checkOnlyLowercase(n);
  return check;
}

function checkMail(email) {
  const checkLowercase = checkOnlyLowercase(email);
  if (checkLowercase === false) {
    return false;
  }
  const re = /@./g;
  return re.test(email);
}

function f(x, y) {
  if (y.match(/(@gmail.com)$/g)) {
    return x;
  }
}

f("riyaS", "ria@gmai.com");
