const x = `6
31415926535897932384626433832795
1
3
10
3
5`;
const ip = x.split('\n');

function swap(a, i, j) {
  var t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function bigSorting(a) {
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i].length !== a[j].length) {
      } else {
        if (a[i].length > a[j].length) {
          swap(a, i, j);
        }
      }
    }
  }
}
// bigSorting(ip);
// console.log(bigSorting(ip));

console.log('31415926535897932384626433832795' > '5');
