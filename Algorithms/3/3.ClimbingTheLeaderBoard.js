const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];

function raningArr(a, saveValue) {
  // 100 90 90 80
  // -> 1 2 2 3
  // solution
  // check a[i] is max ? then curr_rank=1
  // check the value i

  // make not references value
  const ret = a.slice().sort((a, b) => b - a);

  // indexOf just take the value and return the first index that match use this toy !!

  const ranks = a.map(function (ele) {
    return ret.indexOf(ele) + 1;
  });
  // save pos rank
  let savePosRank = -1;
  for (let i = 0; i < ret.length; ++i) {
    if (ret[i] === saveValue) {
      savePosRank = i + 1;
      break;
    }
  }

  return [ranks, savePosRank];
}

function climbingLeaderboard(ranked, player) {
  // Write your code here
  /**
   * 100 90 90 80 -> 1 2 2 3
   * 70 80 105 -> 4 2 1
   *
   * solution 1
   * 100 90 90 80 70 -> 1 2 2 3 4
   * ret=[4]
   * 100 90 90 80 80 -> 1 2 2 3 2
   * ret=[4,2]
   * 100 90 90 80 105 -> 2 3 3 4 1
   * ret=[4,2,1]
   *
   *
   */

  const ret = [];

  for (let i = 0; i < player.length; ++i) {
    let check_rank = [...ranked, player[i]];
    console.log(check_rank);
    let ranking = raningArr(check_rank, player[i]);
    console.log(ranking);
    let pos = i;
    // console.log(check_rank);
  }
  raningArr(ranked);
}

climbingLeaderboard(ranked, player);
