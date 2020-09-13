let log = console.log;

// shift right the remain elements and put the last to head
function cookingStuff(a) {
  // 1 2 3
  // x 1 2
  let temp = a[a.length - 1];
  for (let i = a.length - 1; i >= 0; i--) a[i] = a[i - 1];
  a[0] = temp;
  return a;
}
// 1 2 3 4 - k = 2
// 4 1 2 3 - i = 0, a[3-2]=a[1]=4=a[3], i =1, a[n-k-1-1]=a[3-]
// 3 4 1 2 - a[3-2]= a[1]=4, a[n-k-1-i]= a[]
// k % n = 2%4= 2
// b[2++]=a[i]
// 1 2 3 4
// x x 1 x
// x x 1 2
// 3 x 1 2
// 3 4 1 2

function supperCookingStuff(a, k) {
  let stuff = k % a.length;
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b[stuff++] = a[i];
    if (stuff === a.length) stuff = 0;
  }
  return b;
}

// 1 2 3 4 - 2
// 4 1 2 3
// 3 4 1 2
function rotateArray(a, k) {
  let relationshipKandA = k % a.length;
  let b = [];
  for (let i = 0; i < a.length; ++i) {
    b[relationshipKandA++] = a[i];
    if (relationshipKandA === a.length) relationshipKandA = 0;
  }
  return b;
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
  let b = [];
  b = supperCookingStuff(a, k);

  let c = [];
  for (let i = 0; i < queries.length; i++) {
    c.push(b[queries[i]]);
  }

  log(c);
}

let a = [1, 2, 3];
let k = 2;
let queries = [0, 1, 2];

log(circularArrayRotation(a, k, queries));

// 1 2 3 - k =  2
// 3 1 2
// 2 3 1
// -> Put the last ele to head
// shift right the remain ele
