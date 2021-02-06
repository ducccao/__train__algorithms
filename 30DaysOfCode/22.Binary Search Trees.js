function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);
      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(node.right, data);
      } else {
        root.right = new Node(data);
      }
    }
    return this.root;
  };

  this.leftHeight = 0;
  this.leftTraversal = function (nodeLeft) {
    if (nodeLeft !== null) {
      this.leftHeight++;
      return this.leftTraversal(this.root.left);
    }
  };

  this.rightHeight = 0;
  this.rightTraversal = function (nodeRight) {
    if (nodeRight !== null) {
      this.rightHeight++;
      return this.rightTraversal(this.root.right);
    }
  };

  this.getHeight = function (root) {
    function calHeight(root, maxHeight = -1) {
      if (root) {
        maxHeight++;
        return Math.max(
          calHeight(root.left, maxHeight),
          calHeight(root.right, maxHeight)
        );
      } else {
        return maxHeight;
      }
    }

    return calHeight(root);
  };
}
