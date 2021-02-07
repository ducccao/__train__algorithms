const getMaxLessThanK = (n, k) => {
  const set = [];
  for (let i = 1; i <= n; ++i) set.push(i);

  const _ = [];
  for (let i = 0; i < set.length; ++i) {
    for (let j = i + 1; j < set.length; ++j) {
      _.push(set[i] & set[j]);
    }
  }
  console.log(_);

  var ret = null;
  var tmax = _[0];

  if (_.length === 1) return _[0];

  for (let i = 0; i < _.length; ++i) {
    if (tmax < _[i]) {
      tmax = _[i];
      if (tmax < k) {
        ret = tmax;
      }
    }
  }
  return ret;
};

const n = 2;
const k = 2;
console.log(getMaxLessThanK(n, k));
