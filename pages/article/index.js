// pages/article/index.js
var requesturl = getApp().globalData.requesturl;
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //文章id
    typeval: 1, //攻略(3)，游记(2)，线路(1)
    title: "", //标题
    coverimg: "", //顶部背景图
    iscollect: false, //是否收藏
    collectnum: 40, //收藏个数
    viewnum: 1159, //浏览个数
    info: "", //内容简介部分
    islangtxt: false, //是否是长标题
    datetime: '2018-08-20', //发布日期
    iscollectopt: false,
    backcolor:"",//标签颜色
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      id: parseInt(options.id),
      typeval: parseInt(options.type),
      title: options.title,
      islangtxt: (options.title).length > 8 ? true : false
    })

    //设置顶部的文字
    wx.setNavigationBarTitle({
      title: options.title
    })

    //获取文章内容
    that.getInfo();
  },

  //获取介绍内容
  getInfo: function() {
    var that = this;

    //参数部分
    var id = that.data.id;

    //请求获取详情
    wx.request({
      url: requesturl + '/article/article',
      data: {
        id:id,
        openid: getApp().globalData.openid,
        type:1
      },
      header:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'post',
      success: function(res) {
        console.log("获取到文章的详情:");
        console.log(res);

        that.setData({
          coverimg: res.data.image.image_path,
          collectnum: res.data.favorite_count, //收藏个数
          viewnum: res.data.view_count, //浏览个数
          info: res.data.content, //内容简介部分
          datetime: res.data.create_date, //发布日期
          iscollect: res.data.favorite == 0 ? false : true,
          backcolor: res.data.backcolor,//标签颜色
          typename: res.data.category_name,//类型
        })
      }
    })
  },
  //收藏操作
  collectopt: function() {
    var that = this;
    //参数部分
    var id = that.data.id; //文章id
    var iscollect = that.data.iscollect;

    //收藏个数的更新
    if (!iscollect) {
      that.setData({
        collectnum: that.data.collectnum + 1,
        iscollect: !iscollect,
        iscollectopt: true
      })

    } else {
      that.setData({
        collectnum: that.data.collectnum - 1,
        iscollect: !iscollect,
        iscollectopt: true
      })
    }
    setTimeout(function() {
      that.setData({
        iscollectopt: false
      })
    }, 500);

    //请求添加收藏
    wx.request({
      url: requesturl + '/article/favorite/update',
      data: {
        id: 7,//id,
        status: !iscollect ? 1 : 0,
        openid:getApp().globalData.openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("添加收藏的结果：");
        console.log(res);
      }
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