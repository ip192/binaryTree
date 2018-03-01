/**
 * Created by lenovo on 2018/2/24.
 */
const createBinaryTree = require('../tree/createTree');
let arr = [8, 2,1, 5, 3,   10,9, 13, 11, 32, 7];

let tree = createBinaryTree(arr);

function findMinNode(node) {
  if (node === null) return node;
  while (node && node.left) {
    node = node.left;
  }
  return node;
}
function deleteKey(tree, key) {
  if (tree === null) {
    return false;
  } else {
    if (tree.key === key) {
      if (tree.left === null && tree.right === null) {
        tree = null;
        return tree;
      } else if (tree.left === null) {
        tree = tree.right;
        return tree;
      } else if (tree.right === null) {
        tree = tree.left;
        return tree;
      } else {
        let minNode = findMinNode(tree.right);
        tree.key = minNode.key;
        tree.right = deleteKey(tree.right, minNode.key);
      }
    }
    if (tree.key > key) {
      tree.left = deleteKey(tree.left, key);
      return tree;
    } else if (tree.key < key) {
      tree.right =deleteKey(tree.right, key)
      return tree;
    }
    return false;
  }
}


deleteKey(tree, 2);

console.log(JSON.stringify(tree));