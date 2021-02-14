let log = console.log;

// get all array which is hour glass
function getHourglassArray(arr, row, col) {
  var rs = [];

  for (let j = row; j < row + 3; j++) {
    var temp = [];
    for (let k = col; k < col + 3; k++) {
      temp.push(arr[j][k]);
    }
    rs.push(temp);
  }

  rs[1].pop();
  rs[1].shift();

  return rs;
}

// get sum arr 1 dimensional
function sumAnArray(arrOnedimensional) {
  let s = 0;
  for (let i = 0; i < arrOnedimensional.length; i++) s += arrOnedimensional[i];
  return s;
}

// sum it
function sum(arrGlassSum) {
  var rs = [];

  for (let i = 0; i < 16; i++) {
    let temp_sum = [];
    for (let j = 0; j < 3; j++) {
      temp_sum.push(sumAnArray(arrGlassSum[i][j]));
    }
    rs.push(sumAnArray(temp_sum));
  }

  return rs;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let array_hour_glass = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      array_hour_glass.push(getHourglassArray(arr, i, j));
    }
  }

  let array_sum = sum(array_hour_glass);

  return Math.max(...array_sum);
}

var arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
log(hourglassSum(arr));
