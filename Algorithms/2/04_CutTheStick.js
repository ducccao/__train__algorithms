function testSlice() {
  let a = [1, 2, 3, 0, -1];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] <= 0) {
      a.splice(a.indexOf(a[i]), 1);
      i--;
    }
  }
  console.log(a);
}
//testSlice();

function minArr(a) {
  let min = a[0];
  for (let i = 0; i < a.length; ++i) {
    if (min >= a[i]) {
      min = a[i];
    }
  }
  return min;
}

function cut(a, value) {
  let numberOfCutArray = 0;
  // console.log("cut func : ", a);

  for (let i = 0; i < a.length; ++i) {
    a[i] -= value;
    // console.log("a after sub ", a);
    if (a[i] <= 0) {
      a.splice(a.indexOf(a[i]), 1);

      //    console.log("a after splice ", a);
      i--;
      numberOfCutArray++;
    }
  }

  return {
    arr: a,
    numCut: numberOfCutArray,
  };
}

function countCutInArrayStick(a, c) {
  let ret = 0;
  //console.log(a, c);
  if (a.length !== c.length) {
    return a.length;
  }

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== c[i]) ret++;
  }
  return ret;
}

function checkArrayStickIsTheSame(a) {
  let flag = true;
  let check = a[0];
  if (a[0] === 1 && a[1] === 1 && a[2] === 1) return true;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== check) {
      flag = false;
    }
  }
  return flag;
}

// Complete the cutTheSticks function below.
function cutTheSticks(a) {
  // console.log(a);
  let ret = [];

  if (checkArrayStickIsTheSame(a)) return a.length;

  for (let i = a.length; i > 1; ) {
    let temp = [...a];
    let cutt = cut(a, minArr(a));
    //  console.log("min a = ", minArr(a));
    //  console.log("A after cut ", cutt);
    a = cutt.arr;
    let cc = countCutInArrayStick(temp, a);
    i -= cutt.numCut;
    //  console.log(a);
    //  console.log("len a ", i);
    //  console.log("num cut ", cc);
    ret.push(cc);
    //console.log(i);
  }
  ret.push(1);
  return ret;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(cutTheSticks(arr));

// sticks-length        length-of-cut   sticks-cut
// 5 4 4 2 2 8             2               6
// 3 2 2 _ _ 6             2               4
// 1 _ _ _ _ 4             1               2
// _ _ _ _ _ 3             3               1
// _ _ _ _ _ _           DONE            DONE
