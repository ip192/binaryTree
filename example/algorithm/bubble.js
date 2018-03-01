/**
 * Created by lenovo on 2018/2/26.
 */

const swap = require('./swap');

let k = 0;
function bubble(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 1; j < arr.length - i; j ++) {
      k ++;
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function bubble2(arr) {
  let len = arr.length;
  while(len > 1) {
    let t = 1;
    for (let j = 1; j < len; j ++) {
      k ++;
      if (arr[j] < arr[j - 1]) {
        t = j;
        swap(arr, j, j - 1);
      }
    }
    len = t;
  }
  return arr;
}

function bubble3(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0 ; i --) {
    console.log('len: ', len);
    for (let j = 1; j < len; j ++) {
      k ++;
      if (arr[j] < arr[j - 1]) {
        t = j;
        swap(arr, j, j - 1);
      }
    }
    len = t;
  }
  return arr;
}

let arr = [3, 2, 6, 1, 4, 0,5, 9, 10];
// let arr = [2, 1, 3, 0]
console.log(bubble3(arr));

console.log(k);