/**
 * Created by lenovo on 2018/2/24.
 */
function createBinaryTree(arr) {

  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  let root = null;

  function insertNode(node, newNode) {
    if (node.key > newNode.key) {
      node.left === null ? node.left = newNode : insertNode(node.left, newNode);
    } else {
      node.right === null ? node.right = newNode : insertNode(node.right, newNode);
    }
  }

  function insert(key) {
    let node = new Node(key);
    if (root === null) {
      root = node;
    } else {
      insertNode(root, node);
    }

    return root;
  }

  arr.forEach(e => {
    insert(e);
  });

  return root;
}

let arr = [8, 2, 5, 3, 9, 11, 32, 7];

let tree = new createBinaryTree(arr);

console.log(tree);