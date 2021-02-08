// Complete the reverseArray function below.
function reverseArray(a) {
  const b = [];
  for (let i = 0; i < a.length; ++i) {
    b.push(a[a.length - 1 - i]);
  }
  console.log(b);
}

const a = [1, 2, 3];

console.log(reverseArray(a));
