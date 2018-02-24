/**
 * Created by lenovo on 2018/2/24.
 */
const createBinaryTree = require('../tree/createTree');
let arr = [8, 2, 5, 3, 10,9, 13, 11, 32, 7];

let tree = createBinaryTree(arr);
// function middleSort(tree) {
//   if (tree !== null) {
//     middleSort(tree.left);
//     console.log(tree.key);
//     middleSort(tree.right);
//   }
// }

// function firstSort(tree) {
//   if (tree !== null) {
//     console.log(tree.key);
//     firstSort(tree.left);
//     firstSort(tree.right);
//   }
// }

function endSort(tree) {
  if (tree !== null) {
    endSort(tree.left);
    endSort(tree.right);
    console.log(tree.key);
  }
}


// firstSort(tree);

endSort(tree);