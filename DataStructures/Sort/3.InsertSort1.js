function shiftRightArray(a, ele, pos) {
  // function shift right element in array
  // Input: 1 2 3 4 5, 3
  // Output: 1 2 3 4 4

  // 1 2 3 4 5, 2
  // 1 2 3 3 5

  // i=pos, a[i+1]=a[i]

  // a[i] = a[i-1]
  a[pos + 1] = a[pos];
}

function insertEleIntoArr(a, ele, pos) {
  // function insert an element into array at the position pos
  // Input: 1 2 4 6 8, 3, 2
  // Ouput: 1 2 3 4 6 8

  // Solution
  // ret = [], len=a.length+1
  // ret[pos]=ele
  // if i!== pos then pouring ele of a into ret

  var ret = [];
  ret.length = a.length + 1;

  // pouring a[i] to ret
  for (let i = 0; i < pos; i++) {
    ret[i] = a[i];
  }

  // if i=pos then add it
  ret[pos] = ele;

  // pouring i=pos+1 to len of a to ret
  for (let i = pos; i < ret.length - 1; ++i) {
    ret[i + 1] = a[i];
  }

  return ret;
}

function shiftRight(a, pos) {
  /**
   * 1 2 3 4 5, 3
   * 1 2 3 4 4
   * a[pos+1]=a[pos]
   *
   */
  a[pos + 1] = a[pos];
}

function insertionSort1(n, a) {
  /**
 * 
 * 
Input:
2 4 6 8 3

Output:
2 4 6 8 8 
2 4 6 6 8 
2 4 4 6 8 
2 3 4 6 8 


solution
+ let carry=3=a[a.length-1]
+ reverse traversal array
+ if(a[i]>carry) then shift right a[i]
+ else then insert at i+1 pos
 * 
 */

  let carry = a[n - 1];

  for (let i = n - 1; i >= 0; --i) {
    if (a[i] > carry) {
      shiftRight(a, i);
      console.log(a.join(' '));
    }
  }

  for (let i = a.length - 1; i >= 0; --i) {
    if (a[i] < carry) {
      a[i + 1] = carry;
      console.log(a.join(' '));
      break;
    }
  }

  if (a[0] > carry) {
    a[0] = carry;
    console.log(a.join(' '));
  }
}

const ip = `2 3 4 5 6 7 8 9 10 1`;
const arr = ip.split(' ').map((e) => parseInt(e));
const n = arr.length;
insertionSort1(n, arr);
