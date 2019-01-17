/**
 * 获取时间戳
 * param data string 需要转换的时间字符串 yyyy-mm-dd
 */
const strtotime = date=>{
  date = date.replace(/-/g, '/');
  return new Date(date).getTime();
}

const timetostr = time=>{
  var date = new Date(time);
      var  y  =  date.getFullYear();
      var  m  =  date.getMonth()  +  1;
      m  =  m  <  10  ?  ('0'  +  m)  :  m;
      var  d  =  date.getDate();
      d  =  d  <  10  ?  ('0'  +  d)  :  d;
      var  h  =  date.getHours();
      h  =  h  <  10  ?  ('0'  +  h)  :  h;
      return  y  +  '-'  +  m  +  '-'  +  d;
}

/**
 * 获取当前的时间戳
 */
function timestamp() {
 return parseInt(new Date().getTime());
}


module.exports={
  strtotime: strtotime,
  timetostr:timetostr,
  timestamp: timestamp,
}