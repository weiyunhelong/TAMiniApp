// pages/testcom/index.js
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;

    //获取页面的数据
    that.InitaData();
  },
  //获取页面的数据
  InitaData:function(){
    var that=this;
    
    //请求接口获取页面数据
    wx.request({
      url: requesturl +'/page/mini/detail',
      data: {
        page_id:1
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("页面的数据:");
        console.log(res);

        that.setData({
          datalist:res.data
        })
        //设置标题
        wx.setNavigationBarTitle({
          title: res.data[0].detail.data[0].name
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})