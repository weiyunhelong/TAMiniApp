// others/pages/coin/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*被兑换的部分*/
    oflag: "/resources/flag/zhongguo.png", //国旗
    ocountry: "中国", //国家
    oenname: "CNY", //国家缩写
    omoney: 0, //被兑换的钱

    /*兑换后的部分*/
    gflag: "/resources/flag/yingguo.png", //国旗
    gcountry: "英镑", //国家
    genname: "GBP", //国家缩写
    gmoney: 0, //兑换后的钱
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '货币计算',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})