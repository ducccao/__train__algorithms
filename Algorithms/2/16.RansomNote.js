const x = ["give", "me", "one", "grand", "today", "night"];
const y = ["give", "one", "grand", "today"];

// Assuming that magazine parametter is x, note is y and function name is f

// check each element of y is in x ?
// if all elements are in then goto (1) - else NO

// (1) if all elements of y are in x - Problem
// + counting the appearance of x and y each element (2)
// if each element of x are the same value with y and the count value is more than or equal then YES
// else NO

// (2) counting the appearance of x and y each element - Problem
// + Find a distinct array of x and y (3)
// + When we got a distinct element array then we can count easier

// (3) Find a distinct array - Problem
// Using two loop, if a[i]=a[j] then cut it and i-- to check this position again.

function distinctArray(x) {
  const a = [...x];
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] === a[i]) {
        a.splice(j, 1);
        i--;
      }
    }
  }
  return a;
}

function countAppearanceOfArray(x) {
  let a = distinctArray(x);
  let ret = [];

  for (let ea of a) {
    let count = 0;
    for (let j = 0; j < x.length; ++j) {
      if (ea === x[j]) {
        count++;
      }
    }
    ret.push({
      value: ea,
      count,
    });
  }
  return ret;
}

function areAllElementsyInx(x, y) {
  for (let ey of y) {
    let flag = 0;
    for (let ex of x) {
      if (ex === ey) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return false;
    }
  }
  return true;
}

// Complete the checkMagazine function below.
function f(x, y) {
  const areAllyInx = areAllElementsyInx(x, y);

  if (areAllyInx === false) console.log("No");
  else {
    let xCounter = countAppearanceOfArray(x);
    let yCounter = countAppearanceOfArray(y);
    // console.log(xCounter);
    // console.log(yCounter);
    let fatherFlag = 1;
    for (let ey of yCounter) {
      let flag = 1;
      for (let ex of xCounter) {
        if (ex.value === ey.value) {
          if (ex.count < ey.count) {
            flag = 0;
          }
        }
      }
      if (flag === 0) {
        fatherFlag = 0;
        break;
      }
    }

    if (fatherFlag === 1) console.log("Yes");
    else console.log("No");
  }
}

f(x, y);

function distinctArray(x) {
  let a = [...x];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j, 1);
        i--;
      }
    }
  }
  return a;
}

function countEleInArray() {
  let a = [1, 1, 2, 2, 4, 3, 1, 5];
  let checker = [...distinctArray(a)];
  const ret = [];

  for (let i = 0; i < checker.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (checker[i] === a[j]) {
        count++;
      }
    }
    ret.push({
      value: checker[i],
      count,
    });
  }
  console.log(ret);
}
//countEleInArray();
// i = 0, x[i]=1 {1:1}
// i = 1, x[1]=1, {1:2}
// i = 2, x[2]=2, [{1:2},{2:1}]
// i = 3, x[3]=2, [{1:2},{2:2}]
