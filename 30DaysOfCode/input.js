var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How many test cases ?", function (tc) {
  console.log(tc);

  for (let i = 0; i < +tc; ++i) {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", (e) => {
      console.log(e);
      rl.close();
    });
  }
});
