var a = 5;
var b = 10;

function foo(strings, ...values) {
  let a = values[0];
  let b = values[1];
  let c = values[2];
  console.log(c);
  return `sum ${a + b}
  Product ${a * b}
  Division ${a / b}
  `;
}

//console.log(foo`num1 ${2} Num2 ${3} Num3 ${33}`);

function bar(s, g, ...a) {
  console.log(a);
}

// bar`${1} ${2} ${3}`;

function sides(literals, ...expressions) {
  // ES6 allows destructuring of arrays into multiple variables
  const [a, p] = expressions;
  console.log([a, p]);

  // Perform this operation only once and assign to variable
  //   const root = Math.sqrt(p * p - 16 * a);
  //   const s1 = (p + root) / 4;
  //   const s2 = (p - root) / 4;
  // s2 will always be smaller because of the (-/+) above
  return [s2, s1];
}
const s1 = 14;
const s2 = 10;

console.log(
  sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`
);
