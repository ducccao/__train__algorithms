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

function binarySearch(a, ele, start, end) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (a[mid] === ele) return mid;

  if (a[mid] > ele) return binarySearch(a, ele, mid + 1, end);

  return binarySearch(a, ele, start, mid - 1);
}

function distinctArray(a) {
  const carry = {},
    ret = [];
  for (let ele of a) {
    if (!carry[ele]) {
      ret.push(ele);
      carry[ele] = (carry[ele] || 0) + 1;
    }
  }
  return ret;
}

function climbingLeaderboard(ranked, player) {
  const ret = [];

  for (let i = 0; i < player.length; ++i) {
    ranked.push(player[i]);

    var checkRank = distinctArray(ranked);

    checkRank = quickSort(checkRank, 0, checkRank.length - 1);

    const playerRank = binarySearch(
      checkRank,
      player[i],
      0,
      checkRank.length - 1
    );

    ret.push(playerRank + 1);

    ranked.pop();
  }
  return ret;
}

const ip = '100 100 50 40 40 20 10';
const ipp = '5 25 50 120';
const ranked = ip.split(' ').map((e) => +e);
const player = ipp.split(' ').map((e) => +e);
console.log(climbingLeaderboard(ranked, player));
