"use strict";
// process.stdin.on("data", function (data) {
//   main(String(data).split("\n"));
// });

// function main(input) {
//   var date1 = new Date(input[0]);
//   console.log(date1.toString());
//   console.log(date1.toISOString());

//   var date2 = new Date(input[1]);
//   console.log(date2.toString());
//   console.log(date2.toISOString());
// }

process.stdin.on("data", function (data) {
  main(String(data));
});

function main(input) {
  console.log(input);
}
