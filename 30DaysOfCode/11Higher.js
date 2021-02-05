function findHourglass(a) {
  let ret = [];
  for (let i = 0; i < 3; ++i) {
    let hgi = [];
    for (let j = 0; j < 3; ++j) {
      hgi.push(a[i + 1][j + 1]);
    }
    ret.push(hgi);
  }
  console.log(ret);
}

function processs(a) {
  console.log(a);
  findHourglass(a);
}

const a = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

processs(a);
