/**
 * Created by lenovo on 2018/2/24.
 */
const createBinaryTree = require('../tree/createTree');
let arr = [8, 2, 5, 3, 10,9, 13, 11, 32, 7];

let tree = createBinaryTree(arr);
function middleSort(tree) {
  if (tree !== null) {
    middleSort(tree.left);
    console.log(tree.key);
    middleSort(tree.right);
  }
}

function search(tree, key) {
  if (tree === null) {
    return tree;
  } else {
    if (tree.key === key) return tree.key;
    if (tree.key > key) {
      return search(tree.left, key);
    } else if (tree.key < key) {
      return search(tree.right, key);
    }
    return null;
  }
}

function searchMinOrMax(tree, mark) {
  if (mark === 'min') {
    if (tree.left !== null) {
      return searchMinOrMax(tree.left, mark);
    } else {
      return tree.key;
    }
  } else {
    if (tree.right !== null) {
      return searchMinOrMax(tree.right, mark);
    } else {
      return tree.key;
    }
  }
}

console.log(searchMinOrMax(tree, 'max'));