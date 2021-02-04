function reverseA(a) {
  for (let i = 0; i < Math.floor(a.length / 2); ++i) {
    let temp = a[i];
    a[i] = a[a.length - i - 1];
    a[a.length - i - 1] = temp;
  }
  console.log(a.join(" "));
}

function reverseA2(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
  }
}

// a[0]=a[4]
// 0 4
// 1 3
// 2 2
// 1 4 3 2
// 2 3 4 1

const a = [1, 4, 3, 2];
reverseA2(a);
