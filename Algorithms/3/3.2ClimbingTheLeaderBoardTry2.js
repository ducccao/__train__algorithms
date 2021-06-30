function binarySearchCustom(a, ele, start, end) {
  /**
   * Input: sorted array ascending, element to find
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

function rankingEleInArray(ar, ele) {
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
  const ret = [];

  const a = [...ar].sort((a, b) => b - a);

  for (let i = 0; i < a.length; ++i) {
    if (carry[a[i]]) {
    } else {
      ret.push(a[i]);
      carry[a[i]] = (carry[a[i]] || 0) + 1;
    }
  }

  // This search algorithm work in O(n)
  for (let i = 0; i < ret.length; ++i) {
    if (ret[i] === ele) {
      return i + 1;
    }
  }

  // Use Binary seach O(log(n))
  const index = binarySearchCustom(ret, ele, 0, ret.length);
  return index + 1;
}

function raningArr(a, saveValue) {
  // 100 90 90 80
  // -> 1 2 2 3
  // solution
  // check a[i] is max ? then curr_rank=1
  // check the value i

  // make not references value
  const ret = a.slice().sort((a, b) => b - a);

  // indexOf just take the value and return the first index that match use this toy !!

  const ranks = a.map(function (ele) {
    return ret.indexOf(ele) + 1;
  });
  // save pos rank
  let savePosRank = -1;
  for (let i = 0; i < ret.length; ++i) {
    if (ret[i] === saveValue) {
      savePosRank = i + 1;
      break;
    }
  }

  return [ranks, savePosRank];
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
   */

  var checkRank = [...ranked];
  const ret = [];

  // for (let i = 0; i < player.length; ++i) {
  //   // instead of pour array like this it's take so much resources
  //   // push and pop it - it will take less resources
  // }

  for (let ele of player) {
    checkRank.push(ele);
    ret.push(rankingEleInArray(checkRank, ele));
    checkRank.pop();
  }

  return ret;
}

const ranked = [100, 90, 90, 80, 75, 60];
const player = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(ranked, player));
