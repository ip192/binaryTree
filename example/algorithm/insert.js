/**
 * Created by lenovo on 2018/2/26.
 */
function insert(arr) {

  for (let i = 0; i < arr.length - 1; i ++) {
   if (arr[i + 1] < arr[i]) {
     let flag = i + 1;
     let temp = arr[i + 1];
     for (let j = i; j >= 0; j --) {
       if (temp < arr[j]) {
         arr[j + 1] = arr[j];
         flag = j;
       }
     }
     arr[flag] = temp;
   }
  }
  return arr;
}

let arr = [3, 2, 6, 1, 4, 0,5, 9, 10];
// let arr = [2, 1, 3, 0]
console.log(insert(arr));