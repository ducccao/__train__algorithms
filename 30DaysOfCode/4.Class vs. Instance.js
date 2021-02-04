class Person {
  constructor(initialAge) {
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
      this.age = 0;
      return;
    } else {
      this.age = initialAge;
    }
  }
  yearPasses() {
    this.age++;
  }
  amIOld() {
    if (this.age < 13 && this.age >= 0) {
      console.log("You are young.");
      return;
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
      return;
    } else {
      console.log("You are old.");
      return;
    }
  }
}

// function convertStringToArray(s) {
//   let ret = [];
//   for (let i = 0; i < s[0]; i++) {
//     ret.push(0);
//   }

//   for (let i = 0; i < s.length; ++i) {
//     console.log(s[i]);
//     console.log();
//   }
// }
// const s = `4
// -1
// 10
// 16
// 18`;
// convertStringToArray(s);
