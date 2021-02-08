function countSameCharacterFromLeft(s, t) {
  let c = 0;
  let char = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[i]) {
        if (s[i + 1] !== t[i + 1]) {
          break;
        } else {
          c++;
          char += s[i];
          break;
        }
      }
    }
  }
  // console.log(c, char);
  return c + 1;
}

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
  let kTemp = k;
  let sLen = s.length;
  let tLen = t.length;
  let stLen = sLen + tLen;

  // console.log(sLen, tLen, k);

  if (stLen === k) {
    return "Yes";
  }

  if (stLen < k) {
    return "Yes";
  }

  if (stLen > k) {
    let countSameLeft = countSameCharacterFromLeft(s, t);
    console.log(countSameLeft);

    let sRightLen = sLen - countSameLeft;
    let tRightLen = tLen - countSameLeft;
    console.log(sRightLen, tRightLen, k);

    if (s === t) {
      if (k % 2 === 0) {
        return "Yes";
      }
    }

    if (sRightLen > tRightLen && tRightLen === 0) {
      if (sRightLen - k >= 1) {
        return "No";
      }

      if (k % (sRightLen - tRightLen) === 2) {
        return "Yes";
      } else {
        return "No";
      }
    }

    if (sRightLen < tRightLen && sRightLen === 0) {
      if (k - tRightLen === 2) {
        return "Yes";
      } else if (k - tRightLen === 1) {
        return "No";
      }
    }

    if (sRightLen + tRightLen === k) {
      return "Yes";
    } else {
      return "No";
    }
  }
}

const s =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const t =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const k = 20;
//firstLeftDifferent(s, t);
//countSameCharacterFromLeft(s, t);
console.log(appendAndDelete(s, t, k));
