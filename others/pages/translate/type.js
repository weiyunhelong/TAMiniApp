// others/pages/translate/type.js
var langtool = require('../../../utils/language.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    oid: 0,//来源语言
    gid:0,//目标语言
    typeval:1,//语言的类型
    langlist:[],//语言列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log("接受所有的参数:");
    console.log(options);
    //接受参数
    that.setData({
      oid:parseInt(options.oid),
      gid: parseInt(options.gid),
      typeval:parseInt(options.type)
    })

    //查询列表
    that.SearchList();
  },
  //查询列表
  SearchList:function(){
    var that=this;
    //获取列表
    var langlist = langtool.searchlist(that.data.oid, that.data.gid, that.data.typeval);
    console.log("语言列表数据:");
    console.log(langlist);
    //赋值部分
    that.setData({
      langlist: langlist
    })
  },
  //选择语言类型
  chkopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    var typeval=that.data.typeval;

    if(typeval==1){
      getApp().globalData.olangid=id;
    }else{
      getApp().globalData.glangid = id;
    }
    //返回到上一个页面
    wx.navigateBack({
      delta:1
    })
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