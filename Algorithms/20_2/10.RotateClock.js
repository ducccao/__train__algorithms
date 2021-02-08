function f(x) {
  const t = [...x];
  t.unshift(t.pop());
  return t;
}
const a = [1, 2, 3, 4, 5];

function rotateClock(x) {
  for (let i = 0; i < 4; ++i) {
    x = f(x);
    console.log(x);
  }
}

//console.log(f(a));
rotateClock(a);
