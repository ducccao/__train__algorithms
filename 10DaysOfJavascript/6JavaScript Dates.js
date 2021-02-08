function f(x) {
  const check = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const ret = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var day = new Date(x);
  console.log(day.toDateString());
  var checker = day.toDateString().split(" ");
  for (let i = 0; i < check.length; ++i) {
    if (check[i] === checker[0]) return ret[i];
  }
}

const x = "11/10/2010";
console.log(f(x));
