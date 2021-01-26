function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;

  function push(ele) {
    return (this.dataStore[this.top++] = ele);
  }

  function pop() {
    return this.dataStore[--this.top];
  }

  function peek() {
    return this.dataStore[this.top - 1];
  }

  function length() {
    return this.top;
  }

  function clear() {
    this.top = 0;
    this.dataStore.length = 0;
  }
}

const a = new Stack();

a.push(1);
a.push(2);
a.push(3);

console.log(a);
console.log(a.pop());
console.log(a.peek());

a.clear();
console.log("A after clear");
console.log(a);
