// others/pages/coin/detail.js
var cointool = require('../../../utils/coin.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    oid:0,//源类型
    gid:0,//目标类型
    typeval:1,//方式
    coinlist:[],//货币列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接收参数
    that.setData({
      oid: parseInt(options.oid),//源类型
      gid: parseInt(options.gid),//目标类型
      typeval: parseInt(options.type),//方式
    })

    //获取列表数据
    that.InitData();
  },
  //获取列表数据
  InitData:function(){
    var that=this;
    
    //参数部分
    var oid = that.data.oid,//源类型
      gid = that.data.gid,//目标类型
      typeval = that.data.typeval;//方式
     
    //获取到货币列表
    var coinlist = cointool.searchlist(oid,gid,typeval);
     console.log("货币列表的值:");
    console.log(coinlist); 
    //赋值部分
    that.setData({
      coinlist: coinlist
    })
  },
  //选择类型
  chkopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    var oid = that.data.oid,//源类型
      gid = that.data.gid,//目标类型
      typeval = that.data.typeval;//方式

    if (typeval==1){
      getApp().globalData.ocoinid=id;
      getApp().globalData.gcoinid = gid;

      wx.redirectTo({
        url: '../coin/index',
      })
    }  else{
      getApp().globalData.ocoinid = oid;
      getApp().globalData.gcoinid = id;

      wx.redirectTo({
        url: '../coin/index',
      })
    }
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