/**
 * Created by lenovo on 2018/2/27.
 */
function createTree(arr) {
  let root = null;
  for (let i = 0; i < arr.length; i ++) {
    let node = new Node(arr[i]);
    insertNode(root, node);
  }

  function Node(ele) {
    this.value = ele;
    this.left = null;
    this.right = null;
  }


  function insertNode(node, newNode) {
    if (!root) {
      root = newNode;
    } else {
      if (node.value > newNode.value) {
        node.left === null ? node.left = newNode : insertNode(node.left, newNode);
      } else {
        node.right === null ? node.right = newNode : insertNode(node.right, newNode);
      }
    }
  }

  return root;
}


let arr = [8, 2, 5, 3, 10,9, 13, 11, 32, 7];

let tree = new createTree(arr);


function searchTree(tree) {
  if (tree !== null) {
    searchTree(tree.left);
    console.log(tree.value);
    searchTree(tree.right);
  }
}
searchTree(tree);