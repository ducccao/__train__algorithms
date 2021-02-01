function minOfArr(a) {
  let min = a[0];
  for (item of a) {
    if (item <= min && item > 0) {
      min = item;
    }
  }

  return min;
}

function cut(a, min) {
  for (let i = 0; i < a.length; ++i) {
    a[i] -= min;
  }
  return a;
}
function initStick(a) {
  console.log(a);
}

// Complete the cutTheSticks function below.
function cutTheSticks(a) {
  initStick(a);
  console.table([2, 2], ["sticks-length", "length-of-cut", "sticks-cut"]);
}

const arr = [5, 4, 4, 2, 2, 8];
cutTheSticks(arr);

// sticks-length        length-of-cut   sticks-cut
// 5 4 4 2 2 8             2               6
// 3 2 2 _ _ 6             2               4
// 1 _ _ _ _ 4             1               2
// _ _ _ _ _ 3             3               1
// _ _ _ _ _ _           DONE            DONE
