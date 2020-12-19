let log = console.log;

function countBadStudents(a) {
  let count = 0;
  for (let i = 0; i < a.length; ++i) if (a[i] > 0) count++;
  return count;
}

function countGoodStudents(a) {
  let count = 0;
  for (let g = 0; g < a.length; g++) {
    if (a[g] <= 0) count++;
  }
  return count;
}

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  return countGoodStudents(a) >= k ? "NO" : "YES";
}

let k = 2;
let a = [0, -1, 2, 1];

log(angryProfessor(k, a));
