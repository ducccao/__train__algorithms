let log = console.log;
let tb = console.table;

const log_arr = (arr) => {
  let rs = "";
  arr.forEach((item, index, array) => {
    rs += item + " ";
  });
  log(rs);
};

function pickingNumbers(a) {
  // Write your code here
  let c_e = count_elements(a);

  let rs = 0;

  for (let i = 1; i < 100; i++) {
    rs = Math.max(rs, c_e[i - 1] + c_e[i]);
  }

  return rs;
}

function count_arr() {
  let a = [];
  for (let i = 0; i < 100; i++) {
    a.push(0);
  }
  return a;
}

function count_elements(a) {
  let c_a = count_arr();
  let c_e = [...c_a];
  a.forEach((ele) => {
    c_e[ele]++;
  });
  return c_e;
}

const main = () => {
  const a = [4, 6, 5, 3, 3, 1];

  const pick = pickingNumbers(a);

  log(pick);
};

main();
