function f(x, y) {
  const a = [];
  for (let i = 0; i < x; ++i) a.push(i + 1);

  const _and = [];
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      _and.push(a[i] & a[j]);
    }
  }

  let temp_max = _and[0];
  let ret = 0;
  for (let i = 0; i < _and.length; ++i) {
    if (temp_max <= _and[i]) {
      temp_max = _and[i];
      if (temp_max < y) {
        ret = temp_max;
      }
    }
  }

  console.log(ret);
}

f(5, 2);
