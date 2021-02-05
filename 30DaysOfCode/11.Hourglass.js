function total(hg) {
  let ret = 0;
  for (let i = 0; i < hg.length; ++i) {
    for (let j = 0; j < hg[i].length; ++j) {
      ret += hg[i][j];
    }
  }
  return ret;
}

// group 4
function findFirstHourglass(a) {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    let temp = [];
    for (let j = 0; j < 3; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;

  return ret;
}

function findSecondHourglass(a) {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    let temp = [];
    for (let j = 1; j < 4; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;

  return ret;
}

function findThirthHourglass(a) {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    let temp = [];
    for (let j = 2; j < 5; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;

  return ret;
}
function findFourthHourglass(a) {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    let temp = [];
    for (let j = 3; j < 6; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;

  return ret;
}

// group 4
function findFifthHourglass(a) {
  let ret = [];
  for (let i = 1; i < 4; ++i) {
    let temp = [];
    for (let j = 0; j < 3; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findSixthHourglass(a) {
  let ret = [];
  for (let i = 1; i < 4; ++i) {
    let temp = [];
    for (let j = 1; j < 4; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

function findSeventhHourglass(a) {
  let ret = [];
  for (let i = 1; i < 4; ++i) {
    let temp = [];
    for (let j = 2; j < 5; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findEighthHourglass(a) {
  let ret = [];
  for (let i = 1; i < 4; ++i) {
    let temp = [];
    for (let j = 3; j < 6; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

// i = stuff , i < stuff + 3; ++i
// stuff ?
// stuff =0  1 2  3

// group 4
function findNinthHourglass(a) {
  let ret = [];
  for (let i = 2; i < 5; ++i) {
    let temp = [];
    for (let j = 0; j < 3; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findTenthHourglass(a) {
  let ret = [];
  for (let i = 2; i < 5; ++i) {
    let temp = [];
    for (let j = 1; j < 4; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findEleventhHourglass(a) {
  let ret = [];
  for (let i = 2; i < 5; ++i) {
    let temp = [];
    for (let j = 2; j < 5; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findTwelfthHourglass(a) {
  let ret = [];
  for (let i = 2; i < 5; ++i) {
    let temp = [];
    for (let j = 3; j < 6; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

// group 4
function findThirteenthHourglass(a) {
  let ret = [];
  for (let i = 3; i < 6; ++i) {
    let temp = [];
    for (let j = 0; j < 3; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

function findFourteenthHourglass(a) {
  let ret = [];
  for (let i = 3; i < 6; ++i) {
    let temp = [];
    for (let j = 1; j < 4; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}
function findFifteenthHourglass(a) {
  let ret = [];
  for (let i = 3; i < 6; ++i) {
    let temp = [];
    for (let j = 2; j < 5; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

function findSixteenthHourglass(a) {
  let ret = [];
  for (let i = 3; i < 6; ++i) {
    let temp = [];
    for (let j = 3; j < 6; ++j) {
      temp.push(a[i][j]);
    }
    ret.push(temp);
  }
  ret[1].pop();
  ret[1][0] = ret[1][1];
  ret[1].length--;
  return ret;
}

function processs(a) {
  //console.log(a);
  // watch the index of row and col

  let hg1 = findFirstHourglass(a);
  let hg2 = findSecondHourglass(a);
  let hg3 = findThirthHourglass(a);
  let hg4 = findFourthHourglass(a);

  let hg5 = findFifthHourglass(a);
  let hg6 = findSixthHourglass(a);
  let hg7 = findSeventhHourglass(a);
  let hg8 = findEighthHourglass(a);

  let hg9 = findNinthHourglass(a);
  let hg10 = findTenthHourglass(a);
  let hg11 = findEleventhHourglass(a);
  let hg12 = findTwelfthHourglass(a);

  let hg13 = findThirteenthHourglass(a);
  let hg14 = findFourteenthHourglass(a);
  let hg15 = findFifteenthHourglass(a);
  let hg16 = findSixteenthHourglass(a);

  let tt1 = total(hg1);
  let tt2 = total(hg2);
  let tt3 = total(hg3);
  let tt4 = total(hg4);

  let tt5 = total(hg5);
  let tt6 = total(hg6);
  let tt7 = total(hg7);
  let tt8 = total(hg8);

  let tt9 = total(hg9);
  let tt10 = total(hg10);
  let tt11 = total(hg11);
  let tt12 = total(hg12);

  let tt13 = total(hg13);
  let tt14 = total(hg14);
  let tt15 = total(hg15);
  let tt16 = total(hg16);

  let ret = [
    tt1,
    tt2,
    tt3,
    tt4,
    tt5,
    tt6,
    tt7,
    tt8,
    tt9,
    tt10,
    tt11,
    tt12,
    tt13,
    tt14,
    tt15,
    tt16,
  ];

  console.log(Math.max(...ret));
}

//   0 1 2
// 0 x x x
// 1   x
// 2 x x x

const a = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

processs(a);
