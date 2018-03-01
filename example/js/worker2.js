/**
 * Created by lenovo on 2018/3/1.
 */
onmessage=function(event){
  debugger;
  var origin=JSON.parse(event.data);//将数据提取出来
  var data = origin.data;
  var Worker = origin = origin.worker;
  var start=data.start;
  var end=data.end;
  var count=data.count;
  var result='';
    for(var n=start;n<=end;n++){
      for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)continue;
      }
      result+=(n+',');//搜集质数
    }

  postMessage('hello world');
}
