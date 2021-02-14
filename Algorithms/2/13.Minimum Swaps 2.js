function swapJS(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

// Complete the minimumSwaps function below.
function minimumSwaps(a) {
  let ret = 0;

  for (let i = 0; i < a.length; i++) {
    console.log(a);
    if (i + 1 === a[i]) continue;

    swapJS(a, i, a[i] - 1);
    ret++;
    i--;
  }

  return ret;
}

var a = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(a));

// i=0 - 6 1 3 2 4 5 7
// i=0 - 5 1 3 2 4 6 7
// i=0 - 4 1 3 2 5 6 7
// i=0 - 2 1 3 4 5 6 7

// a[0]= 6 , a[0]=a[6-1]=a[5]=5, a[5]=6
//
