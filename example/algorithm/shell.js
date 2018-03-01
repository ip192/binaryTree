/**
 * Created by lenovo on 2018/2/26.
 */
function shell(arr) {
  let len = arr.length;

  let times = 2,
    gap = 1;

  while(gap < len / times) {
    gap = gap * times + 1;
  }
  console.log(gap);
  for (gap; gap > 0; gap = parseInt(gap / times)) {
    for (let k = gap  ; k < arr.length; k ++) {
      let temp = arr[k];
      let flag = k;
      for (let j = k - gap; j >= 0; j = j - gap) {
        if (temp < arr[j]) {
          flag = j;
          arr[j + gap] = arr[j];
        }
      }

      arr[flag] = temp;
    }
  }

  return arr;
}

let arr = [3, 2, 6, 1, 4, 0,5, 9, 10];
// let arr = [2, 1, 3, 0]
console.log(shell(arr));