MAXSIZE = 50;

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.isEmpty = isEmpty;
  this.isFull = isFull;
  this.MAXSIZE = MAXSIZE;
  this.maxValue = maxValue;

  function push(ele) {
    return (this.dataStore[this.top++] = ele);
  }

  function pop() {
    this.dataStore[this.top--];
    this.dataStore.length--;
    return this;
  }

  function peek() {
    return this.dataStore[this.top - 1];
  }

  function length() {
    return this.top;
  }

  function isEmpty() {
    return this.top === 0;
  }
  function isFull() {
    return this.top === this.MAXSIZE;
  }

  function maxValue() {
    let max = this.dataStore[0];

    for (let i = 0; i < this.dataStore.length; ++i) {
      if (max <= this.dataStore[i]) {
        max = this.dataStore[i];
      }
    }
    return max;
  }
}

const input = [`1 83`, `3`, `2`, `1 76`];

function processData(input) {
  //let a = `1 97`;

  const stack = new Stack();

  input.forEach((a) => {
    if (+a[0] === 1) {
      const data = a.substr(a.indexOf("1") + a.length - 2, a.length);
      stack.push(data);
      // console.log(stack);
    } else if (+a[0] === 2) {
      stack.pop();
      //   console.log(stack);
    } else if (+a[0] === 3) {
      console.log(stack.maxValue());
    }
  });

  //Enter your code here
}

processData(input);

// let a = [2, 3, 4, 5, 6, 7];
// for (let i = 0; i < a.length; ++i) {
//   a[i] = a[i + 1];
// }
// a.length--;
// console.log(a);
