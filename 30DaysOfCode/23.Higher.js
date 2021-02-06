this.levelOrder = function (root) {
  // Add your code here
  // To print values separated by spaces use process.stdout.write(someValue + ' ')
  if (root) {
    let queue = [root];
    console.log(queue.length);
    console.log(queue);

    while (queue.length) {
      let tree = queue.shift();
      //process.stdout.write(tree.data + " ");
      console.log(tree.data + " ");

      if (tree.left) {
        queue.push(tree.left);
      }
      if (tree.right) {
        queue.push(tree.right);
      }
    }
    return queue;
  }
};
