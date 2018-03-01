/**
 * Created by lenovo on 2018/2/27.
 */
function recursion(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursion(--num);
}



function recursion1(num, sum) {
  if (num === 1) {
    return sum;
  }
  sum = (sum || 1) + num;
  return recursion(num--, sum);
}

console.time('1----:');
console.log(recursion(10000));
console.timeEnd('1----:');
console.time('2----:');
console.log(recursion1(10000));
console.timeEnd('2----:');