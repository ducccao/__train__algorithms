function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.insert = function (head, data) {
    node = new Node(data);
    current = head;

    if (current !== null) {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    return head;
  };

  this.display = function (head) {
    var start = head;

    while (start) {
      console.log(start.data);
      start = start.next;
    }
  };
}

function main() {
  var ll = new Solution();

  let data = 3;

  var head = null;
  head = ll.insert(head, data);
  console.log(head);

  //ll.display(head);
}

main();
