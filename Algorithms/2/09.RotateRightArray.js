function f(x) {
  const t = x[x.length - 1];

  for (let i = x.length - 1; i >= 0; --i) {
    x[i] = x[i - 1];
  }
  x[0] = t;
  return x;
}

function rotate(x) {
  console.log(x);
  for (let i = 0; i < 4; ++i) {
    x = f(x);
    console.log(x);
  }
}

var x = [1, 2, 3, 4, 5];
rotate(x);
//console.log(f(x));
