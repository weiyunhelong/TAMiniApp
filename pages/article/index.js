// pages/article/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//文章id
    typeval:1,//攻略，游记，线路
    title:"",//标题
    iscollect:false,//是否收藏
    collectnum:40,//收藏个数
    viewnum:1159,//浏览个数
    info:"",//内容简介部分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;

     that.setData({
       id:parseInt(options.id),
       typeval:parseInt(options.type),
       title: options.title
     })
      
     //设置顶部的文字
     wx.setNavigationBarTitle({
       title: options.title,
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