function getInput(_input) {
  const spliter = _input.split(`\n`);
  const ret = [];
  for (let i = 0; i < spliter.length; ++i) {
    ret.push(Number(spliter[i]));
  }
  ret.shift();
  return ret;
}

function f(x) {
  console.log(x);

  for (let i = 0; i < x.length; ++i) {
    if (x[i] < 2) {
      console.log("Not prime");
    } else if (x[i] === 2) {
      console.log("Prime");
    } else if (x[i] % 2 === 0) {
      console.log("Not prime");
    } else {
      var co = 0;
      for (let love = 3; love <= Math.floor(x[i] / 2); love++) {
        const you = x[i] % love;
        if (you === 0) {
          console.log(`Not prime`);
          co = 1;
          break;
        }
      }
      if (co !== 1) console.log(`Prime`);
    }
  }
}

const _input = `1
4
9
16
25
36
49
64
81
100
121
144
169
196
225
256
289
324
361
400
441
484
529
576
625
676
729
784
841
907`;
const x = getInput(_input);
f(x);

// Check Divisor from 2 to n that is okay
// But why 2 to sqrt(n) is correct ?
// Assume that we got a*b = n
// Suppose that a>sqrt(n) && b > sqrt(n)
// Then a*b > n -> contraditcs !!
// So from 2 to sqrt(n) is okay !!!
