function maxCost(cost, labels, dailyCount) {
  // Write your code here
  let c = 0;
  const ret = [];

  for (let i = 0; i < cost.length; ++i) {
    let t = [];

    if (labels[i] === "legal") {
      c++;
    }

    if (c === dailyCount) {
      for (let j = i; j > i - dailyCount; j--) {
        t.push(cost[j]);
        for (let k = j; k > j - dailyCount - 1; k--) {
          if (labels[k] === "illegal") {
            t.push(cost[k]);
          }
        }
      }

      c = 0;
      ret.push(t);
    }
  }

  const sumRet = [];

  for (let i = 0; i < ret.length; ++i) {
    let s = 0;
    for (let j = 0; j < ret[i].length; ++j) {
      s += ret[i][j];
    }
    sumRet.push(s);
  }

  console.log(ret);

  if (sumRet.length === 0) {
    return 0;
  }
  return Math.max(...sumRet);
}

const cost = [0, 3, 2, 3, 4];
const labels = ["legal", "legal", "illegal", "legal", "legal"];
const dailyCount = 1;
console.log(maxCost(cost, labels, dailyCount));

// 0 1 2 3 4 5
// i = 0 , c = 1 = dlc, ret=[c[0]]
// i = 1 , c = 1 = dlc, ret=[c[0],c[1]],
// i = 2 , c = 0  , ret=[[c[0],c[1]]
// i = 3 , c = 1 = dlc, ret=[[c[0],c[1],[c[2],c[3]]]
// i = 4 , c = 1 = d;c , ret=[[c[0],c[1],[c[2],c[3]],c[4]]
