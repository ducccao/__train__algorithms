function distinctArray(a) {
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] === a[i]) {
        a.splice(a.indexOf(a[i]), 1);
      }
    }
  }
  return a;
}

function uniqueArray(a) {
  return [...new Set(a.map((ele) => ele))];
}

function countAppearEleInArray(a) {
  let ret = [];
  let temp = [...a];

  let uniqueA = uniqueArray(temp);

  for (let i = 0; i < uniqueA.length; ++i) {
    let count = 0;
    for (let j = 0; j < a.length; ++j) {
      if (a[j] === uniqueA[i]) {
        count++;
      }
    }
    ret.push({
      value: uniqueA[i],
      count,
    });
  }

  return ret;
}

// Complete the equalizeArray function below.
function equalizeArray(a) {
  let ret = 0;
  let count = [];
  let ele = [];

  let appearEle = countAppearEleInArray(a);
  for (let e of appearEle) {
    count.push(e.count);
    ele.push(e.value);
  }

  let max = Math.max(...count);

  for (let i = 0; i < count.length; ++i) {
    if (count[i] != max) ret += count[i];
  }

  console.log(ele);
  console.log(count);

  console.log(Math.max(...count));

  return ret;
}

function convertStringNumToArrayNum(a) {
  //console.log(a);
  let ret = [];
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== " " && a[i + 1] === " " && a[i - 1] === " ") {
      ret.push(Number(a[i]));
    }
    if (a[i] !== " " && a[i + 1] !== " ") {
      let temp = Number(a[i] + a[i + 1]);
      //  console.log(temp);
      ret.push(temp);
    }
  }
  ret.pop();
  // console.log(ret);
  return ret;
}

//const a = [1, 2, 3, 1, 2, 3, 3, 3];
//const a = [3, 3, 2, 1, 3];
const input =
  "35 65 69 28 12 69 37 80 80 50 80 50 15 57 79 69 57 65 15 69 57 50 65 2 14 64 15 65 65 5 15 64 57 37 50 12 64 37 28 20 80 80 50";

const a = convertStringNumToArrayNum(input);
console.log(equalizeArray(a));
