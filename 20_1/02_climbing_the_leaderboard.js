function distinguishScores(scores) {
  let temp = [...scores];
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] === temp[j]) {
        temp.splice(i, 1);
      }
    }
  }
  return temp;
}

function rankOfTheLeaderBoard(scores) {
  let distingushScores = distinguishScores(scores);
  let ranki = 1;
  let rank = [];
  for (let i = 0; i < distingushScores.length; ++i) {
    rank.push(ranki++);
  }
  //  console.log(rank);
  return rank;
}

function scoresRank(scores, rank) {
  const tScore = [...scores];
  const tRank = [...rank];
  let scrobj = [];

  for (let i = 0; i < tScore.length; ++i) {
    scrobj.push({
      value: tScore[i],
      rank: tRank[i],
    });
  }

  return scrobj;
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  let rank = rankOfTheLeaderBoard(scores);
  let scrobj = scoresRank(distinguishScores(scores), rank);
  console.log(rank);

  let rs = [];

  for (let oj of scrobj) {
    console.log(oj);
  }
  for (let j = 0; j < alice.length; j++) {
    for (let i = 0; i < scores.length; i++) {
      if (alice[j] < scores[scores.length - 1]) {
        rs.push(rank[rank.length - 1]);
        break;
      }

      if (alice[j] > scores[0]) {
        rs.push(rank[0]);
        break;
      }

      for (let oj of scrobj) {
        if (oj.value < alice[j]) {
          rs.push(oj.rank + 1);
          break;
        }
      }
    }
  }
  return rs;
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];

distinguishScores(scores);
rankOfTheLeaderBoard(scores);

console.log(climbingLeaderboard(scores, alice));
