function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);
    } else {
      if (root.data >= data) {
        if (root.left) this.insert(root.left, data);
        else root.left = new Node(data);
      } else {
        if (root.right) this.insert(root.right, data);
        else root.right = new Node(data);
      }
    }

    return this.root;
  };

  this.levelOrder = function (root) {
    if (root) {
      let queue = [root];

      while (queue.length) {
        let tree = queue.shift();
        process.stdout.write(tree.data + " ");

        if (tree.left) queue.push(tree.left);
        if (tree.right) queue.push(tree.right);
      }
      return queue;
    }
  };
}

var root = null;
var bst = new BinarySearchTree();

root = bst.insert(root, 3);
root = bst.insert(root, 5);
root = bst.insert(root, 4);
root = bst.insert(root, 7);
root = bst.insert(root, 2);
root = bst.insert(root, 1);
//console.log(root);

bst.levelOrder(root);
