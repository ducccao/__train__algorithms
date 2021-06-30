function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
function partition(a, left, right) {
  var pivot = a[Math.floor((left + right) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (a[i] > pivot) {
      i++;
    }

    while (a[j] < pivot) {
      j--;
    }

    if (i <= j) {
      swap(a, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(a, left, right) {
  var index;

  if (a.length > 1) {
    index = partition(a, left, right);

    if (left < index - 1) {
      quickSort(a, left, index - 1);
    }

    if (index < right) {
      quickSort(a, index, right);
    }
  }
  return a;
}

function uniqueEleArr(a) {
  const carry = {};
  const ret = [];
  for (let ele of a) {
    if (!carry[ele]) {
      ret.push(ele);
      carry[ele] = (carry[ele] || 0) + 1;
    }
  }
  return ret;
}

function climbingLeaderboard(ranked, player) {
  /**
   * Try 4 idea
   *
   *
   */

  let carry = {};
  let ret = [];

  // O(n*(nlogn+n))

  for (let i = 0; i < player.length; ++i) {
    ranked.push(player[i]);
    carry = {};
    var uniqueRanked = uniqueEleArr(ranked);
    uniqueRanked = uniqueRanked.sort((a, b) => b - a);
    // uniqueRanked = quickSort(uniqueRanked, 0, uniqueRanked.length - 1);

    console.log(uniqueRanked);
    for (let j = 0; j < uniqueRanked.length; ++j) {
      carry[uniqueRanked[j]] = (carry[uniqueRanked[j]] || 0) + j + 1;
    }

    ranked.pop();
    ret.push(carry[player[i]]);
  }
  return ret;
}

const ip = '100 100 50 40 40 20 10';
const ipp = '5 25 50 120';
const ranked = ip.split(' ').map((e) => +e);
const player = ipp.split(' ').map((e) => +e);
console.log(climbingLeaderboard(ranked, player));
