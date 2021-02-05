function countConsecutiveOne(s) {
  let ret = [];
  for (let i = 0; i < s.length; ++i) {
    let c = 0;
    if (s[i] === "1") {
      let staPos = i;
      for (let j = staPos; j < s.length; j++) {
        if (s[j] !== "1") break;
        else c++;
      }
      ret.push({
        index: i,
        value: s[i],
        count: c,
      });
    }
  }
  //console.log(ret);
  return ret;
  // 011110000010111000
}

function decTobin(n) {
  let ret = "";
  let retA = [];
  while (n != 0) {
    let mod = n % 2;
    retA.push(mod);
    n = Math.floor(n / 2);
  }
  retA.reverse();

  for (let i = 0; i < retA.length; ++i) {
    ret += retA[i];
  }

  //  console.log(ret);
  const countConsecutiveObject = countConsecutiveOne(ret);
  const countA = countConsecutiveObject.map((c) => c.count);
  const ret2 = Math.max(...countA);
  console.log(ret2);
}

const n = 125;
console.log(decTobin(n));
