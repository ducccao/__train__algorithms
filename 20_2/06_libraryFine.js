// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 !== y2) {
    let y = y1 - y2;
    if (y < 0) {
      return 0;
    }
    return 10000;
  }
  if (m1 !== m2) {
    let m = m1 - m2;
    if (m < 0) {
      return 0;
    }
    return m * 500;
  }
  let d = d1 - d2;
  if (d <= 0) {
    return 0;
  }
  return 15 * d;
}

const d1 = 9;
const m1 = 6;
const y1 = 2015;

const d2 = 6;
const m2 = 6;
const y2 = 2015;

libraryFine(d1, m1, y1, d2, m2, y2);
