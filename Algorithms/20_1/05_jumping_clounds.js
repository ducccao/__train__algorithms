l = console.log;

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  l(c);
  var j = 0;
  var len = c.length;
  for (let i = 0; i < len; i++) {
    if (c[i] === 0) {
      if (c[i + 2] === 0 && c[i + 1] === 0) {
        j++;
        i++;
        continue;
      }
      j++;
    }
  }

  l(j - 1);
}

var c2 = [0, 0, 1, 0, 0, 1, 0];
var c = [0, 0, 0, 0, 1, 0];
jumpingOnClouds(c);
