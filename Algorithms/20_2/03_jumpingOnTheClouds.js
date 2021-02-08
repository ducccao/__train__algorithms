function jumpingOnClouds(c, k) {
  var energy = 100;
  const n = c.length;
  var temp = 0;
  let i = -1;

  while (i !== 0) {
    var jump_pos = (temp + k) % n;
    console.log("i ", temp);
    console.log("jumpos: ", jump_pos);

    const ele = c[temp];

    if (ele === 1) {
      energy -= 2;
      energy--;
    } else {
      energy--;
    }

    temp = jump_pos;

    i = temp;
  }

  return energy;
}

var c2 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
var c = [0, 0, 1, 0, 0, 1, 1, 0];
var k = 3;

// i = 0, n = 10, jump = (0+3)%10=3, e=100-1-2=97, i=3
// i  = 3 , e = 97-1 = 96 , jump = (3+3)%10 = 6
// i= 6, e=96-3=93, jump=(6+3)%10=9
// i=9 , e=93-1=92, jump=(9+3)%10= 2
// i=2,e=92-2-1=89, jump=(2+3)%10=5
// i=5,e=89-2-1=86, jump=(5+3)%10=8
// i=8,e=85, jump=(8+3)%10=1
// i=1,e=82,jump=(1+3)%10=4

console.log(jumpingOnClouds(c2, k));
// mang
// 0 - energy sub by 1
// 1 - energy sub by 2
// k = 2 - jump array

// 0 0 1 1 0 0 1 0 0
// k =  2
// i =
