/**
 * 获取时间戳
 * param data string 需要转换的时间字符串 yyyy-mm-dd
 */
const strtotime = date=>{
  date = date.replace(/-/g, '/');
  return new Date(date).getTime();
}

/**
 * 获取当前的时间戳
 */
function timestamp() {
 return parseInt(new Date().getTime());
}

module.exports={
  strtotime: strtotime,
  timestamp: timestamp
}