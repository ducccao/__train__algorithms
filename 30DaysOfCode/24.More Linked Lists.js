function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.removeDuplicates = function (head) {
    var curNode = head;
    var container = [];

    while (curNode) {
      container.push(curNode.data);
      curNode = curNode.next;
    }
    var removed = removeDupplicateArray(container);
    head = null;

    for (let i = 0; i < removed.length; ++i) {
      head = this.insert(head, removed[i]);
    }
    return head;
  };
  this.insert = function (head, data) {
    var p = new Node(data);
    if (head === null) {
      head = p;
    } else if (head.next === null) {
      head.next = p;
    } else {
      var start = head;
      while (start.next !== null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };
  this.display = function (head) {
    var start = head;
    while (start !== null) {
      console.log(start);
      start = start.next;
    }
  };
}

var head = null;
var data = 5;
var ll = new Solution();
head = ll.insert(head, data);
head = ll.insert(head, 6);
head = ll.insert(head, 7);

//ll.display(head);

const aa = `3
9
9
11
11
11
11
89
89
100
100
101
102
103
108
200
250
250
250
250`;

function getInput(a) {
  const b = a.split("\n");
  for (let i = 0; i < b.length; ++i) b[i] = Number(b[i]);
  return b;
}

function removeDupplicateArray(b) {
  let a = [...b];
  console.log(a);
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[j] === a[i]) {
        a.splice(j, 1);
        i--;
      }
    }
  }

  console.log(a);
  return a;
}

//const b = [1, 2, 2, 3, 3, 4];
const b = getInput(aa);
removeDupplicateArray(b);
