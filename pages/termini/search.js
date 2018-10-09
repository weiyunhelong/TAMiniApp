// pages/termini/search.js
var requesturl = getApp().globalData.requesturl; //接口请求的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt: "", //搜索的值
    issearchfocus: false, //是否聚焦
    page: 1, //页码
    lat: 0, //经纬度
    lng: 0, //经纬度
    resultlist: [], //搜索结果列表
    /*数据展示部分*/
    historylist: [], //热门搜索列表
    hotsearchlist: [], //历史记录
    isshowhistory: true, //是否显示历史记录
    isshownocontent: false, //搜索无果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //搜索框聚焦
  searchfopt: function() {
    this.setData({
      issearchfocus: true
    })
  },
  //获取搜索框的值
  getsearchtxt: function(e) {
    var that = this;
    //参数部分
    var txtval = e.detail.value;
    this.setData({
      searchtxt: txtval,
      issearchfocus: true,
      isshownocontent: true,
      isshowclear: txtval.length > 0 ? true : false
    })
    if (txtval != '') {
      //搜索结果
      that.getsearchresult();
    }
  }, //清除操作
  clearsopt: function() {
    var that = this;
    that.setData({
      searchtxt: "",
      issearchfocus: true,
      isshowclear: false
    })
    //搜索结果
    that.getsearchresult();
  },
  //初始化历史记录部分
  initHistory: function() {
    var that = this;
    //历史记录列表
    var historylist = [{
        id: 1,
        name: '昆士兰'
      },
      {
        id: 2,
        name: '黄金海岸'
      },
    ];
    //赋值部分
    that.setData({
      historylist: historylist
    })
  },
  //初始化热门搜索部分
  initHotSearch: function() {
    var that = this;
    //历史记录列表
    var hotsearchlist = [{
        id: 1,
        name: '昆士兰',
        ishot: false
      },
      {
        id: 2,
        name: '黄金海岸',
        ishot: false
      },
      {
        id: 3,
        name: '最好的酒店',
        ishot: true
      },
      {
        id: 4,
        name: '去哪里冲浪',
        ishot: true
      },
      {
        id: 5,
        name: '浮潜',
        ishot: false
      },
      {
        id: 5,
        name: '不可错过的美食',
        ishot: false
      },
    ];
    //赋值部分
    that.setData({
      hotsearchlist: hotsearchlist
    })
  },
  //清除事件部分
  clearopt: function() {
    var that = this;
    that.setData({
      isshowhistory: false
    })
  },
  //点击热门搜索的值
  gosearch: function(e) {
    var that = this;
    //参数的值
    var searchtxt = e.currentTarget.dataset.name;
    that.setData({
      searchtxt: searchtxt,
      isshowclear: searchtxt.length > 0 ? true : false
    })
    //获取搜索结果
    that.getsearchresult();
  },
  //获取搜索结果
  getsearchresult: function() {
    var that = this;
    //参数部分
    var searchtxt = that.data.searchtxt,
      isshowcontent = that.data.isshowcontent,
      isshownocontent = that.data.isshowcontent;

    //获取搜索的列表值
    wx.request({
      url: requesturl + '/address/mini/list',
      data: {
        page: that.data.page,
        limit: 10,
        lat: that.data.lat,
        lnt: that.data.lat,
        name: searchtxt
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("获取结果:");
        console.log(res);

        //数据的拼接
        var resultlist = {
          datalist: res.data, //数据列表
          fontt1: 30, //标题
          fontt2: 28, //查看全部
          fontt3: 22, //小字
          typename: "", //类型名称
          typeval: 1, //类型值
          showtype: 5, //显示类型
        };
        //赋值部分
        that.setData({
          resultlist: resultlist,
          isshowcontent: res.data.length > 0 ? true : false,
          isshownocontent: res.data.length > 0 ? false : true,
        })
      }
    })
    //结束标识符
  },
  //取消按钮
  goback: function() {
    wx.navigateBack({
      delta: 1
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
    var that = this;
    //定位操作
    wx.getLocation({
      success: function(res) {
        that.setData({
          lat: res.latitude,
          lng: res.longitude
        })
      },
      fail: function() {
        wx.openSetting({})
      },
    })
    //初始化历史记录部分
    that.initHistory();
    //初始化景点地部分
    that.initHotSearch();
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
    var that = this;
    that.setData({
      page: that.data.page + 1
    })
    //获取搜索结果
    that.getsearchresult();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})