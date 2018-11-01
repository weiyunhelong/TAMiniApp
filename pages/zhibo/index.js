// pages/zhibo/index.js
var MD5 = require('../../utils/md5.js');
var timer = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewUrl: "https://live.vhall.com/webinar/inituser/785654111",
    state: 0,
    status: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.getplayerstate(1);
    that.getplayerstate(2);
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
    var that = this;
    var timer = setInterval(function() {
      console.log("5s钟刷新!!!");
      that.updatestatus();
    }, 5000)
  },
  //得到状态值
  getplayerstate: function(typeval) {
    var that = this;

    var timenow = (new Date()).getTime();

    var sign = MD5.hexMD5("cd09347f7780d594acbb3e8954a45a54app_key05616266e330a463d294bb693aa769d2auth_type2signed_at" + timenow + "webinar_id785654111cd09347f7780d594acbb3e8954a45a54");

    //请求接口获取状态值
    wx.request({
      url: 'https://e.vhall.com/api/vhallapi/v2/webinar/state',
      data: {
        webinar_id: "785654111",
        auth_type: 2,
        app_key: "05616266e330a463d294bb693aa769d2",
        signed_at: timenow,
        sign: sign
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        if (typeval == 1) {
          that.setData({
            state: parseInt(res.data.data),
          })
        } else {
          that.setData({
            status: parseInt(res.data.data),
          })
        }
      }
    })
  },
  //请求接口
  updatestatus: function() {
    var that = this;

    that.getplayerstate(2);

    let tmpUrl = that.data.webviewUrl;
    var state = that.data.state;
    var status = that.data.status;
    if (status != state) {
      that.setData({
        state: status,
        webviewUrl: ""
      })
      setTimeout(function () {
        console.log("AAA");
        that.setData({
          webviewUrl: tmpUrl
        })
      }, 100);
    }
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
    clearInterval(timer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    var that = this;
    console.log("下拉刷新");

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