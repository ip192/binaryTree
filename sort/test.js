/**
 * Created by lenovo on 2018/2/24.
 */
setImmediate(() => console.log(2));
setTimeout(() => console.log(1));

process.nextTick(() => console.log(3));
Promise.resolve().then(() => console.log(4));
(() => console.log(5))();