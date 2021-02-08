// Complete the matchingStrings function below.
function matchingStrings(s, q) {
  // console.log(s, q);
  let ret = [];

  for (let i = 0; i < q.length; ++i) {
    let count = 0;
    for (let j = 0; j < s.length; ++j) {
      if (q[i] === s[j]) {
        count++;
      }
    }
    ret.push(count);
  }

  //console.log(ret);
  return ret;
}

const s = ["ab", "ab", "abc"];
const q = ["ab", "abc", "bc"];

matchingStrings(s, q);
