const holidayData = require('../../data/holidays.js');
const dateUtil = require('../../utils/dateUtil.js')
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
    })
    this.setData({
      holidays: mHolidays
    })
  }
})