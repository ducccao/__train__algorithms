class Calculator {
  constructor() {}
  power(n, p) {
    if (n < 0 || p < 0) {
      const message = `n and p should be non-negative`;
      throw TypeError(message);
    } else {
      const ret = `${Math.pow(n, p)}}`;
      return ret;
    }
  }
}

var myCalculator = new Calculator();
try {
  const ans = myCalculator.power(-2, 2);
  console.log(ans);
} catch (e) {
  console.log(e);
}
