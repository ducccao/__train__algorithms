let log = console.log;

// split a half scores
function breakTheScores(scores) {
  let mid = Math.floor(scores.length / 2);
  let left_scores = [];
  let right_scores = [];

  for (let i = 0; i < mid; i++) {
    left_scores.push(scores[i]);
    right_scores.push(scores[scores.length - i - 1]);
  }

  if (scores.length % 2 !== 0) {
    right_scores.push(scores[mid]);
  }

  return {
    left_scores,
    right_scores,
  };
}

// handle scores
function handleScores(scores, size) {
  // 100 90 90 80 75 60
  // 1   2  2  3  4  5

  let a = [];

  for (let i = 0; i < scores.length; i++) {
    let left__right = breakTheScores(scores);

    let left_break = breakTheScores(left__right.left_scores);
    let right_break = breakTheScores(left__right.right_scores);

    a.push(left__right);
  }

  log(a);
  // 0   1   2  3  4  5  6
  // 100 90 90 80 80 75 60
  // 1  2    3  4  5 6
  //  1 2   2  3   4 5
  // rank = len = 6
  // if a[i]=a[j]= rank = 6-(i+j)-1 = 3
  // a[3]=a[4] => rank = 6-i= 6-3 = 3
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  log(scores);
  handleScores(scores);
}

let scores = [100, 90, 90, 80, 75, 60];
let alice = [50, 65, 77, 90, 102];

climbingLeaderboard(scores, alice);
