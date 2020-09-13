let log = console.log;
let table = console.table;
function my_factorial(n) {
  // 3! = 6
  // n!=1.2.3.....(n-1).n

  // example n = 3
  // fac(3)
  // fac(2)*3

  // fac(2)
  // fac(1)*2

  // fac(1)
  // 1*1 -> fac(1)=1

  // -> fac(2)=1*2
  // -> fac(3)=1*2*3

  if (n === 1) return 1;
  return my_factorial(n - 1) * n;
}

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

// 123
// 3 case
// swap 1 by 1
// swap 1 by 2
// swap 1 by 3
// case 1 - swap 1 by 1
// 1 - 23 - swap 2 by 2, swap 2 by 3
// 123 - 132
// left = 0
// 123

// 1 2 3 l=0, r=2
// i = 0 to 2
// 123
// + per(123,1,2)
// i=1, i<=2,
// 123
// per(123,2,2)
// log - 123
//
//

function swap(a, left, i) {
  let temp1 = a[left];
  a[left] = a[i];
  a[i] = temp1;
}

/*

 abc
 + swap a with a - abc
      swap 
 + swap a witch b - bac

 + swap a with c - cba

123
+ 123
  + 123
  + 132
+ 213
  + 213
  + 231
+ 321
  + 321
  + 312


   per(abc,0,2)
   # level 1
   + i = 0
      swap(a[0],a[i]) - swap(a,a) -> abc
      per(a,1,2)
      swap(a[0],a[i]) - swap(a,a) -> abc
      
   + i = 1
      swap(a[0],a[i]) - swap(a,b) -> bac
      per(a,1,2)
      swap(a[0],a[i]) - swap(a,b) -> abc

   + i = 2
      swap(a[0],a[i]) - swap(a,b) -> cba
      per(a,1,2)
      swap(a[0],a[i]) - swap(a,b) -> abc

  # level 2
  + per(a,1,2) - abc
    + i = 1
        swap(a[1],a[i]) - swap(b,b) -> abc
        per(a,2,2) ->> log abc
        swap(a[1],a[i]) - swap(b,b) -> abc
    + i = 2
        swap(a[1],a[i]) - swap(b,c) -> acb
        per(a,2,2) ->> log acb
        swap(a[1],a[i]) - swap(c,b) -> abc

  + per(a,1,2) - bac
      + i = 1
          swap(a[1],a[i]) - swap(a,a) -> bac
          per(a,2,2) - log bac
          swap(a[1],a[i]) - swap(a,a) -> bac
      + i = 2
          swap(a[1],a[i]) - swap(a,c) -> bca
          per(a,2,2) - log bca
          swap(a[1],a[i]) - swap(c,a) -> bac

  +  per(a,1,2) - cba
      + i = 1
          swap(a[1],a[i]) - swap(b,b) -> cba
          per(a,2,2) - log cba
          swap(a[1],a[i]) - swap(b,b) -> cba
      + i = 2
          swap(a[1],a[i]) - swap(b,a) -> cab
          per(a,2,2) - log cab
          swap(a[1],a[i]) - swap(c,a) -> cab
    

*/

function permutation(a, left, right) {
  if (left === right) {
    log(a);
  } else {
    for (let i = left; i <= right; ++i) {
      // swap father
      swap(a, left, i);
      // log("a = ", a, " i = ", i);

      // swap child
      permutation(a, left + 1, right);

      // backtrack
      swap(a, left, i);
      // log("a backtrack = ", a);
    }
  }
}

function createArrayFromN(n) {
  let rs = [];

  let i = 1;

  while (i <= n) {
    rs.push(i);
    i++;
  }

  return rs;
}

function main() {
  let array = createArrayFromN(3);

  let permutes = permutation(array, 0, 2);
}

main();
