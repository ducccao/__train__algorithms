const x = [
  9, 9, 8, 8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4,
  5, 5, 9, 9, 9, 9, 9, 9
];

function cutArr(a, pos) {
  // 1 2 3 4, 1
  // -> 1 3 4

  // solution
  // loop i=pos, make a[i]=a[i+1]
  // update len

  for (let i = pos; i < a.length; ++i) {
    a[i] = a[i + 1];
  }
  a.length--;
  return a;
}

function f(x) {
  /**
   * 1 2 2 2 3 3
   * -> 1 2 3
   *
   * solution 1
   * loop i
   * loop j all behind i
   * check a[i]=a[j] ? cut a[j]
   * update j
   */

  let ret = [...x];

  for (let i = 0; i < ret.length; ++i) {
    for (let j = i + 1; j < ret.length; ++j) {
      if (ret[j] === ret[i]) {
        ret = cutArr(ret, j);
        j--;
      }
    }
  }
  console.log(ret);
  // o(n^3)
}

function f2(x) {
  // solution 2
  // let carry var carries number in x
  // if the number is not exists before then ret add it
  // else do nothing
  let carry = {};
  let ret = [];

  for (let i = 0; i < x.length; ++i) {
    if (carry[x[i]]) {
    } else {
      ret.push(x[i]);
      carry[x[i]] = (carry[x[i]] || 0) + x[i];
    }
  }

  console.log(ret);
  // o(n)
}
f2(x);
