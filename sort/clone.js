/**
 * Created by lenovo on 2018/2/24.
 */
const createBinaryTree = require('../tree/createTree');
let arr = [8, 2, 5, 3, 10,9, 13, 11, 32, 7];

let tree = createBinaryTree(arr);
function firstSort(tree) {
  if (tree !== null) {
    // console.log(tree.key);
    firstSort(tree.left);
    firstSort(tree.right);
  }
}
firstSort(tree);

function clone(tree) {
  let newTree = {};
  if (tree !== null) {
    newTree.key = tree.key;
    newTree.left = tree.left && clone(tree.left);
    newTree.right = tree.right && clone(tree.right);
  }
  return newTree;
}

let newTree = clone(tree);

tree.key = 22;
console.log(JSON.stringify(tree));


