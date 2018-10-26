// pages/test/index.js
//获取应用实例
const app = getApp()
var guidetool = require('../../utils/guidedata.js');
var timer = ""; //计时器
var requesturl = getApp().globalData.requesturl;

Page({
  data: {
    page_id: 0, //页面id
    datalist:[],//页面的数据
    /**游玩指南**/
    iswenmenu: false, //是否显示游玩菜单
    winheight: 0, //屏幕的高度
    guidemenuTop: 0, //游玩指南tab的位置
    guipageindex: 1, //游玩指南页数
    /***底部的tabbar***/
    tabbardata: {}, //底部的tabbar     
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      page_id: 1 //parseInt(options.id)
    })
  },
  //获取屏幕的高度
  initHight: function() {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winheight: res.screenHeight
        })
      }
    })
  },
  //天气预报
  goweather: function() {
    wx.navigateTo({
      url: '../../citys/pages/weather/index',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
 onShow:function(){
   var that=this;
   //获取页面的详情
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
       console.log("页面的详情数据:");
       console.log(res);
       //设置标题
       that.setNavigationBarTitle(res.data);
       //设置页面数据
       that.setData({
         datalist:res.data
       })
     }
   })
 },
 //设置标题
  setNavigationBarTitle:function(datalist){
    var that=this;
    wx.setNavigationBarTitle({
      title: datalist[0].detail.data[0].name,
    })
  },
})