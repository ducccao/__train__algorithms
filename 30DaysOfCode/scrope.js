var a = null;

function scope() {
  this.a = null;
  this.change = (a, data) => {
    a = data;
  };
  this.display = (a) => {
    console.log(a);
  };
}

let sc = new scope();
sc.change(a, 500);

sc.display(a);
