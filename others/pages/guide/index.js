// others/pages/guide/index.js
var guidetool = require('../../../utils/guidedata.js');
var requesturl = getApp().globalData.requesturl; //接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt: "", //搜索的值
    issearchfocus: false, //是否聚焦
    currentTab: 100, //预设当前项的值
    filterchk: 1, //排序的筛选
    guidelist: [], //游玩指南
    isshownoresult: false, //搜索无果
    isshowclear: false, //隐藏搜索清除
    pageindex:1,//页码
    pagesize:10,//页数
    scrollheight:0,//
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    //得到手机的高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollheight:res.screenHeight-220
        })
      },
    })
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
      issearchfocus: false,
      isshowclear: txtval.length > 0 ? true : false
    })
    that.getGuide();
  },
  //清除事件
  clearsopt: function() {
    var that = this;

    that.setData({
      searchtxt: "",
      issearchfocus: false,
      isshowclear: false,
      isshownoresult: true
    })
    that.getGuide();
  },
  // 点击标题切换当前页时改变样式
  switchNav: function(e) {
    var that = this;
    var id = e.target.dataset.id;

    if (that.data.currentTab == id) {
      return false;
    } else {
      that.setData({
        currentTab: parseInt(id),
        pageindex:1
      })
      //获取指南列表
      that.getGuide();
    }
  },
  //筛选
  filteropt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;

    that.setData({
      filterchk: parseInt(id)
    })
    that.getGuide();
  },
  //获取指南列表
  getGuide: function() {
    var that = this;
    //参数部分
    var searchtxt = that.data.searchtxt, //搜索的值
      currentTab = that.data.currentTab, //预设当前项的值,0->推荐;1->攻略;2->游记;3->线路
      filterchk = that.data.filterchk; //排序的筛选,1->热门；2->时间
    
    
    //请求接口，获取列表数据
    wx.request({
      url: requesturl + '/article/mini/list',
      data: {
        page: that.data.pageindex,
        limit: that.data.pagesize,      
        category_id: currentTab == 100 ? 0 : currentTab,
        view_count: filterchk == 1 ? "asc" : "desc",
        update_date: filterchk == 2 ? "desc" : "asc",
        name: searchtxt,
        status_id: 1,
        recommend_status: currentTab == 100 ? 1 : 0,
        openid:getApp().globalData.openid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("获取文章的列表数据:");
        console.log(res);

        that.setData({
          guidelist: res.data,
          isshownoresult: res.data.length > 0?false:true,
        })
      }
    })
  },
  //点击跳转到详情页面
  godetail: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var typeval = e.currentTarget.dataset.type;
    var title = e.currentTarget.dataset.title;
    //跳转到详情
    wx.navigateTo({
      url: '../../../pages/article/index?id=' + id + "&type=" + typeval + "&title=" + title,
    })
  },
  //收藏操作
  collectopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var iscollect = e.currentTarget.dataset.iscollect;
    //请求添加收藏
    wx.request({
      url: requesturl + '/article/favorite/update',
      data: {
        id: id,
        status: !iscollect ? 1 : 0,
        openid: getApp().globalData.openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("添加收藏的结果：");
        console.log(res);

        that.getGuide();
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
    var that = this;

    //获取指南列表
    that.getGuide();
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
    wx.stopPullDownRefresh();
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that=this;

    that.setData({
      pageindex: that.data.pageindex+1
    })
    that.getGuide();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})