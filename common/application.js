
/**
 * 判断用户是否已经登录
 */
function isLogin(){
  if (wx.getStorageSync('headimg') && wx.getStorageSync('nickname')){
    return true;
  }
  return false;
}

module.exports = {
  isLogin: isLogin
}