function minBCWC(bc, wc) {
  return bc <= wc ? bc : wc;
}

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  //   if (w * wc > (z + bc) * b) {
  //     wc = (z + bc) * b;
  //   }

  if (bc > wc + z) {
    let buy = b + w;
    return buy * wc + b * z;
  }

  if (wc > bc + z) {
    wc = bc + z;
  }
  return b * bc + w * wc;
}

const b = 3;
const w = 5;
const bc = 3,
  wc = 4,
  z = 1;
console.log(taumBday(b, w, bc, wc, z));
