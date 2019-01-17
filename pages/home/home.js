const holidayData = require('../../data/holidays.js');
const dateUtil = require('../../utils/dateUtil.js')
const colorUtil = require('../../utils/colorUtil.js')
Page({
  data: {
    holidays: ""
  },
  onLoad: function() {
    this.init();
  },

  /**
   * 初始化˝
   */
  init: function() {
    this.filterHolidays();
  },

  /**
   * 过滤已经过去的节假日 以及 顺序排序
   */
  filterHolidays: function() {
    // 过滤已经过去的节假日
    var mHolidays = holidayData.holidays.filter(function(e) {
      return dateUtil.timestamp() < (e.days * 60 * 60 * 24 + dateUtil.strtotime(e.date));
    });

    // 顺序排序
    mHolidays.sort(function(a, b) {
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);
      return aDate - bDate;
    });

    // 求出倒计时天数
    for (var index in mHolidays) {
      // 倒计时天数
      mHolidays[index].countDay = Math.ceil((dateUtil.strtotime(mHolidays[index].date) - dateUtil.timestamp()) / 60 / 60 / 24 / 1000);

      // 假日最后一天
      mHolidays[index].endDate = dateUtil.timetostr(dateUtil.strtotime(mHolidays[index].date) + (mHolidays[index].days - 1) * 60 * 60 * 24 * 1000);

      // item container color
      mHolidays[index].color = colorUtil.randomRGB();
    }
    this.setData({
      holidays: mHolidays
    })
  },

  onShareAppMessage: function () {
    return {
      title: '假期小助手',
      path: '/pages/home/home',
      success: function (res) {
        
      }
    };
  }
})