class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeSearch {
  constructor() {
    this.root = null;
    this.height = null;
    this.heightLeft = null;
    this.heightRight = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertCorrectPosNode(this.root, newNode);
    }
  }
  insertCorrectPosNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertCorrectPosNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertCorrectPosNode(node.right, newNode);
      }
    }
  }
  remove(data) {
    this.root = this.removeCorrecPosNode(this.root, data);
  }
  removeCorrecPosNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeCorrecPosNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeCorrecPosNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeCorrecPosNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }
  getRootNode() {
    return this.root;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  search(node, data) {
    if (node === null) return null;
    else if (node.data > data) {
      return this.search(node.left, data);
    } else if (node.data < data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
  getHeightLeft(nodeLeft) {
    if (nodeLeft !== null) {
      //console.log(nodeLeft);
      this.heightLeft++;
      return {
        traversal: this.getHeightLeft(nodeLeft.left),
        data: nodeLeft.data,
      };
    }
  }
  getHeightRight(nodeRight) {
    if (nodeRight !== null) {
      this.heightRight++;
      return {
        traversal: this.getHeightRight(nodeRight.right),
        data: nodeRight.data,
      };
    }
  }

  getHeight() {
    if (this.root.left !== null) {
      const data = this.getHeightLeft(this.root.left);
    }
    if (this.root.right !== null) {
      const data = this.getHeightRight(this.root.right);
    }

    return Math.max(...[this.heightLeft, this.heightRight]);
  }
}

var BTS = new BinaryTreeSearch();
BTS.insert(15);
BTS.insert(25);
BTS.insert(10);
BTS.insert(7);
BTS.insert(22);
BTS.insert(17);
BTS.insert(13);
BTS.insert(5);
BTS.insert(9);
BTS.insert(27);

var root = BTS.getRootNode();
//console.log(root);
// BTS.inorder(root);
// BTS.preorder(root);
//BTS.postorder(root);

console.log(BTS.getHeight());

//BTS.remove(27);
//BTS.inorder(root);
