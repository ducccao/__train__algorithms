function distictArr(a) {
  let ret = [...a];

  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] === a[i]) {
        ret.splice(i, 1);
      }
    }
  }

  return ret;
}

function rankedInit(scores, point) {
  let distinctScores = distictArr(scores);
  // console.log(distinctScores);
  distinctScores.sort((a, b) => b - a);

  //  console.log(distinctScores);

  for (let i = 1; i <= distinctScores.length; ++i) {
    if (distinctScores[i - 1] === point) {
      return i;
    }
  }
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  let ret = [];
  for (let i = 0; i < alice.length; ++i) {
    let temp = [...scores, alice[i]];
    let reti = rankedInit(temp, alice[i]);
    console.log(reti);
    ret.push(reti);
  }

  return ret;
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];

console.log(climbingLeaderboard(scores, alice));
