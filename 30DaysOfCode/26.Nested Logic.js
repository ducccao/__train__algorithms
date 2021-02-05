function processData(_) {
  //Enter your code here
  const [dr, mr, yr, dd, md, yd] = [_[0], _[1], _[2], _[3], _[4], _[5]];

  if (yr !== yd) {
    const y = yr - yd;
    if (y < 0) {
      return 0;
    }
    return 10000;
  } else {
    const m = mr - md;
    const d = dr - dd;

    if (m > 0) {
      return m * 500;
    } else {
      if (d > 0) {
        return d * 15;
      } else {
        return 0;
      }
    }
  }
}

function getNumberInput(input) {
  const spliter = input.split(`\n`);
  const spliter2 = [];
  var ret = [];
  for (let i = 0; i < spliter.length; ++i) {
    spliter2.push(spliter[i].split(" "));
  }

  for (let i = 0; i < spliter2.length; ++i) {
    for (let j = 0; j < spliter2[i].length; ++j) {
      ret.push(Number(spliter2[i][j]));
    }
  }
  return ret;
}

const input = `9 6 2015
6 6 2015`;

const _ = getNumberInput(input);
getNumberInput(input);
console.log(processData(_));
