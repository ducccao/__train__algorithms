function rotateLeftTrigger(a) {
  let t = [1, 2, 3, 4, 5];

  // console.log(t.slice(2, t.length - 1));
  t.slice();

  console.log(t.splice(2, t.length - 1));
}

function mergeArr(a, b) {
  let ret = [...a, ...b];
  return ret;
}

function rotateLeft(d, a) {
  let stuffLeft = a.splice(d, a.length - 1);
  let stuffRight = a.slice(0, d);

  let ret = mergeArr(stuffLeft, stuffRight);

  return ret;
}

const d = 2;
const arr = [1, 2, 3, 4, 5];

// 3 4 5 1 2

rotateLeft(d, arr);
