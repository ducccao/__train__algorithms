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
  const ret = [];
  if (y.match(/(@gmail.com)$/g)) {
    ret.push(x);
  }
  console.log(ob);
}

f("riyaS", "ria@gmai.com");
