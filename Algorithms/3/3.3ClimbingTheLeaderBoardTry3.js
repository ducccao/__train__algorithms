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
  /**
   * 0   1   2  3   4
   * 100 150 90 80 70, pivot  = 2
   *          |
   *  ^             ^
   *  + check from the left to pivot, if ele[i] is less than pivot then point to next index
   *  + check from the right to pivot, if ele[i] is greater than  pivot then point to previous index
   *  + increment the left pointer and decrement the right pointer
   *  +
   * ^        |     ^
   *
   *
   */

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

function binarySearchCustom(a, ele, start, end) {
  /**
   * Input: sorted array descending, element to find
   * Output: index of element
   *
   * Idea:
   * + if starting index is greater than ending index return false
   * + compute the middle index
   * + compare the middle index with ele if equal return index
   * + if a[mid] > ele then search(a,ele,mid+1,end)
   * + else then search(a,ele,start,mid-1)
   */

  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (a[mid] === ele) return mid;

  if (a[mid] > ele) return binarySearchCustom(a, ele, mid + 1, end);
  return binarySearchCustom(a, ele, start, mid - 1);
}

function rankingEleInArray(a, ele) {
  /**
   * 100 90 90 80 70 , ele = 70
   * -> 4
   * 1 2 2 3 4
   *
   * carry: carry the unique ele in arr
   * ret: check ele in array is exists or not, then add it, index is a ret
   *
   * after get index, then it will be a rank
   * loop ret then if ele in ret = ele then return index
   */
  const carry = {};
  let ret = [];

  for (let i = 0; i < a.length; ++i) {
    if (carry[a[i]]) {
    } else {
      ret.push(a[i]);
      carry[a[i]] = (carry[a[i]] || 0) + 1;
    }
  }
  ret = quickSort(ret, 0, ret.length - 1);

  // This search algorithm work in O(n)

  // Use Binary seach O(log(n))
  // console.log(a);
  const index = binarySearchCustom(ret, ele, 0, ret.length - 1);

  return index + 1;
}

function climbingLeaderboard(ranked, player) {
  // Write your code here
  /**
   * 100 90 90 80 -> 1 2 2 3
   * 70 80 105 -> 4 3 1
   *
   * solution 1
   * 100 90 90 80 70 -> 1 2 2 3 4
   * ret=[4]
   * 100 90 90 80 80 -> 1 2 2 3 2
   * ret=[4,2]
   * 100 90 90 80 105 -> 2 3 3 4 1
   * ret=[4,2,1]
   *
   *
   * Step 1: loop ranked, loop p
   * Step 2: get rank of player [i]
   *
   * This solution has the time complexity is O(n^2+ n*log(n) +log(n))
   */

  /**
   *
   *
   *
   */
  const ret = [];
  // how to open this loop
  for (let ele of player) {
    ranked.push(ele);
    ret.push(rankingEleInArray(ranked, ele));
    ranked.pop();
  }

  return ret;
}

const ip = '100 100 50 40 40 20 10';
const ipp = '5 25 50 120';
const ranked = ip.split(' ').map((e) => +e);
const player = ipp.split(' ').map((e) => +e);
console.log(climbingLeaderboard(ranked, player));
