function swap(a, i, j) {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
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
  for (let i = 0; i < a.length; ++i) {
    if (!carry[a[i]]) {
      ret.push(a[i]);
      carry[a[i]] = (carry[a[i]] || 0) + 1;
    }
  }
  return ret;
}

function climbingLeaderboard(ranked, player) {
  /**
   * Try 5 idea
   *
   * 100 90 90 80
   * 5   25 30 120
   *
   */

  let ret = [];

  for (let i = 0; i < player.length; ++i) {
    ranked.push(player[i]);
    let check = uniqueEleArr(ranked);

    check = quickSort(check, 0, check.length - 1);

    for (let j = 0; j < check.length; ++j) {
      if (check[j] === player[i]) {
        ret.push(j + 1);
        break;
      }
    }
    ranked.pop();
  }
  return ret;
}

const ip = '100 100 50 40 40 20 10';
const ipp = '5 25 50 120';
const ranked = ip.split(' ').map((e) => +e);
const player = ipp.split(' ').map((e) => +e);
console.log(climbingLeaderboard(ranked, player));
