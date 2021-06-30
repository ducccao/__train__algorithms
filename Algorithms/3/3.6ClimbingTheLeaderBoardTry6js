function distinctArr(a) {
  const carry = {};
  const ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (!carry[a[i]]) {
      ret.push(a[i]);
      carry[a[i]] = (carry[a[i]] || 0) + 1;
    }
  }
  return ret;
}

function climbingLeaderboard(ranked, player) {
  /**
   * Try 6 idea
   *
   * compare ranks[j--] vs score[i++]
   *
   * 0   1  2  3  4
   * 100 50 40 20 10
   * 5 25 50 120
   *
   *
   * score = 5
   *  i=5-1=4
   *    (5>=10?)
   *      ret=[4+2=6]
   * score = 25
   *  i=4
   *    25>10? i=3
   *  i=3
   *    25>20? i=2
   *  i=2
   *    25>40?
   *      ret=[6,2+2=4]
   *
   *
   */
  const ranks = distinctArr(ranked);
  let j = ranks.length - 1;
  const ret = [];

  for (let i = 0; i < player.length; ++i) {
    for (; j >= 0; ) {
      if (player[i] < ranks[j]) {
        ret.push(j + 2);
        break;
      } else {
        j--;
      }
    }
    if (j < 0) ret.push(1);
  }

  return ret;
}

const ip = '100 100 50 40 40 20 10';
const ipp = '5 25 50 120';
const ranked = ip.split(' ').map((e) => +e);
const player = ipp.split(' ').map((e) => +e);
console.log(climbingLeaderboard(ranked, player));
