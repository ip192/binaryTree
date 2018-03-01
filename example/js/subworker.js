/**
 * Created by lenovo on 2018/3/1.
 */
onmessage=function(event){
  var data=JSON.parse(event.data);//将数据提取出来
  var start=data.start;
  var end=data.end;
  var count=data.count;
  var result='';
  debugger;
  for(var n=start;n<=end;n++){
    for(var i=2;i<=Math.sqrt(n);i++){
      if(n%i==0)continue;
    }
    result+=(n+',');//搜集质数
  }
    debugger;
  var sub=new Worker('subworker.js');//再次启动worker线程
  var info={result:result,count:count};
  sub.postMessage(info);//把要处理的数据传入启动线程中
  sub.onmessage=function(event){
//发送消息,将会触发前台JavaScript脚本中worker对象的onmessage方法
    postMessage(event.data);
  }
}