function BubbleSort(a, n) {
  var count = 0;
  for (let i = 0; i < n; ++i) {
    let countSwap = 0;
    for (let j = 0; j < n - 1; ++j) {
      if (a[j] > a[i]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        countSwap++;
      }
    }
    console.log(countSwap);
    if (countSwap === 0) {
      break;
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);

  console.log(a);
}

const a = [5, 4, 3, 2, 1];

BubbleSort(a, a.length);
