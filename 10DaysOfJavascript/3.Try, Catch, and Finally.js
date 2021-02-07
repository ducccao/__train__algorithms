function reverseString(s) {
  try {
    if (typeof s === "number") {
      var ret2 = 0;
      for (let i = s; i != 0; i = Math.floor(i / 10)) {
        const div = i % 10;
        ret2 = ret2 * 10 + div;
      }
      console.log(ret2);

      return;
    }

    var t = s.split("");
    for (let i = 0; i < t.length / 2; ++i) {
      const c = t[i];
      t[i] = t[t.length - 1 - i];
      t[t.length - 1 - i] = c;
    }

    //   console.log(t);
    const ret = t.join("");
    console.log(ret);
  } catch (e) {
    console.log(e);
  } finally {
  }
}

//var s = "1234";
var s = Number(1234);
reverseString(s);
