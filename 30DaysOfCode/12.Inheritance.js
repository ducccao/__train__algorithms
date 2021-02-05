class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  constructor(firstName, lastName, identification, testScore) {
    super(firstName, lastName, identification, testScore);
    this.testScore = testScore;
  }
  avg() {
    let s = 0;
    for (let i = 0; i < this.testScore.length; ++i) {
      s += this.testScore[i];
    }
    return Math.floor(s / this.testScore.length);
  }

  calculate() {
    const a = this.avg();
    console.log(a);
    if (90 <= a && a <= 100) {
      return "O";
    } else if (80 <= a && a < 90) {
      return "E";
    } else if (70 <= a && a < 80) {
      return "A";
    } else if (55 <= a && a < 70) {
      return "P";
    } else if (40 <= a && a < 55) {
      return "D";
    } else if (a < 40) {
      return "T";
    } else {
      return "O";
    }
  }
}

let s = new Student("duc", "cao", "11", [
  100,
  90,
  80,
  75,
  90,
  88,
  84,
  88,
  78,
  67,
]);
s.printPerson();

console.log(s.calculate());
