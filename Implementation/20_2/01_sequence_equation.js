let log = console.log;

function cloneArray(a) {
  // function: clone an array
  // input: array a
  // output: its clone

  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i]);
  }
  return b;
}

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a bằng b
  return 0;
}

function generateX(p) {
  // function: generate x
  // input: array p
  // output: array x from 1 to p

  let clone = cloneArray(p);

  clone.sort((a, b) => {
    return a - b;
  });

  let max = clone[clone.length - 1];

  let x = [];
  for (let i = 1; i <= max; i++) {
    x.push(i);
  }

  return x;
}

function generatePi(x, p) {
  // function: generate p(y)
  // input: array x, array p
  // output: array p(y)

  let stop_pos = x[x.length - 1];

  let pi = [];
  for (let i = 0; i < stop_pos; i++) {
    pi.push(p[i]);
  }

  return pi;
}

function getppi(p, pi) {
  // function:

  let ppi = [];

  for (let i = 0; i < pi.length; i++) {
    ppi.push(p[pi[i] - 1]);
  }

  return ppi;
}

// Complete the permutationEquation function below.
function permutationEquation(p) {
  // generate x
  let x = generateX(p);

  // generate pi
  let pi = generatePi(x, p);

  // get p(p(i))
  let ppi = getppi(p, pi);

  // get the result
  let y = [];
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < ppi.length; j++) {
      if (x[i] === ppi[j]) {
        y.push(j + 1);
        break;
      }
    }
  }

  return y;
}

// x = 1,2,3
// p(1) = 2, p(2)=3, p(3)=1
//                      i
// x = 1 mod p(3) = p(p(2)) => y = 2
// x = 2 mod p(1) = p(p(3)) => y = 3
// x = 3 mod p(2) = p(p(1)) => y =1

// + generate x done
// + generate p(i) done
// + calculate x mod p(k)
// + calculate p(i) = k ?
// return i

// x = [1,2,3,4,5]
// p(1)=4, p2=3, p3=5, p4=1, p5=2
// pp1=p4=1, pp2=p3=5, pp3=p5=2, pp4=p1=4, pp5=p2=3
// x=1=p4=pp1 -> 1
// x=2=p5=pp3 -> 3
// x=3=p2=pp5 -> 5
// x=4=p1=pp4 -> 4
// x=5=p3=pp2 -> 2

let p2 = [2, 5, 11, 10, 1, 14, 7, 3, 16, 9, 8, 6, 18, 12, 15, 17, 13, 4];
let p = [4, 3, 5, 1, 2];
log(permutationEquation(p2));
