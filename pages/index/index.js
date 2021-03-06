//index.js
//获取应用实例
const app = getApp()
var guidetool = require('../../utils/guidedata.js');
var timer = ""; //计时器
var requesturl = getApp().globalData.requesturl;
var ga = require('../../utils/ga.js');
var HitBuilders = ga.HitBuilders;

Page({
  data: {
    datalist:[],//页面的数据
    /**游玩指南**/
    iswenmenu: false, //是否显示游玩菜单
    winheight: 0, //屏幕的高度
    guidemenuTop: 0, //游玩指南tab的位置
    guipageindex: 1, //游玩指南页数
    /***底部的tabbar***/
    tabbardata: {}, //底部的tabbar 
    geduanval:20//分隔行    
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
  onLoad: function() {
wx.showShareMenu({
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
  //获取标志景点部分
  initSenic: function() {
    var that = this;
    //请求接口
    wx.request({
      url: requesturl + '/address/list',
      data: {
        page: 1,
        limit: 10,
        status_id: 1,
        category_id: 1,
        update_date: "desc"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("标志景点列表的值:");
        console.log(res);

        //标志景点列表
        var scenicdata = {
          datalist: res.data.data,
          fontt1: 32,
          fontt2: 24,
          fontt3: 28,
          typename: "标志景点",
          typeval: 1, //类型值
          showtype: 1, //显示类型
        }
        that.setData({
          scenicdata: scenicdata
        })
      }
    })
  },
  //调整到标志景点的详情
  gosenic: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../info/index?id=' + id + "&type=1",
    })
  },
  //获取购物推荐部分
  initShopping: function() {
    var that = this;
    //请求接口
    wx.request({
      url: requesturl + '/address/list',
      data: {
        page: 1,
        limit: 10,
        status_id: 1,
        category_id: 2,
        update_date: "desc"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("购物推荐列表的值:");
        console.log(res);

        //标志景点列表
        var shoppingdata = {
          datalist: res.data.data,
          fontt1: 32,
          fontt2: 24,
          fontt3: 28,
          typename: "购物推荐",
          typeval: 2, //类型值
          showtype: 2, //显示类型
        }
        that.setData({
          shoppingdata: shoppingdata
        })
      }
    })

  },
  //调整到购物中心
  goshopping: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../info/index?id=' + id + "&type=2",
    })
  },
  //获取推荐美食
  initFood: function() {
    var that = this;
    //请求接口
    wx.request({
      url: requesturl + '/address/list',
      data: {
        page: 1,
        limit: 10,
        status_id: 1,
        category_id: 3,
        update_date: "desc"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("美食列表列表的值:");
        console.log(res);

        //美食列表列表
        var fooddata = {
          datalist: res.data.data,
          fontt1: 32,
          fontt2: 24,
          fontt3: 28,
          typename: "美食推荐",
          typeval: 3, //类型值
          showtype: 2, //显示类型
        }
        that.setData({
          fooddata: fooddata
        })
      }
    })


  },
  //跳转到美食详情
  gofood: function(e) {
    var id = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: '../info/index?id=' + id + "&type=3",
    })
  },
  //获取酒店推荐
  initHotel: function() {
    var that = this;
    //请求接口
    wx.request({
      url: requesturl + '/address/list',
      data: {
        page: 1,
        limit: 10,
        status_id: 1,
        category_id: 4,
        update_date: "desc"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("酒店列表的值:");
        console.log(res);

        //酒店列表
        var hoteldata = {
          datalist: res.data.data,
          fontt1: 32,
          fontt2: 24,
          fontt3: 28,
          typename: "酒店推荐",
          typeval: 4, //类型值
          showtype: 1, //显示类型
        }
        that.setData({
          hoteldata: hoteldata
        })
      }
    })
  },
  //获取内容部分
  initWen: function() {
    var that = this;
    //文章列表
    var guidedata = {
      iswenmenu: that.data.iswenmenu, //是否到达顶部
      guideheight: that.data.guideheight, //分页的页码
      guipageindex: 1
    };
    that.setData({
      guidedata: guidedata
    })
  },
  //获取搜索的值
  getsearch: function() {
    wx.navigateTo({
      url: '../search/index',
    })
  },
  //跳转文章详情页面
  goarticle: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var typeval = e.currentTarget.dataset.type;
    var title = e.currentTarget.dataset.title;
    //跳转到详情
    wx.navigateTo({
      url: '../article/index?id=' + id + "&type=" + typeval + "&title=" + title,
    })
  },
  // 获取滚动条当前位置
  onPageScroll: function(e) {
    console.log(e);
    var that = this;
    var winheight = that.data.winheight;
    /*console.log("屏幕的高度:" + winheight);*/
    //是否显示置顶
    if (e.scrollTop > 600) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  //回到顶部
  goTop: function(e) { // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  //探索更多
  gomore: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../others/pages/index/index?id=' + id,
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    var that = this;
    // 停止下拉动作
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    console.log("底部加载...");

    that.setData({
      guipageindex: that.data.guipageindex + 1,
      guidedata: {
        iswenmenu: false,
        guipageindex: that.data.guipageindex + 1
      },
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    var that = this;

    //获取屏幕的高度
    that.initHight();

    //初始化轮播图
    that.initSwiper();

    //获取标志景点
    that.initSenic();

    //获取购物推荐
    that.initShopping();

    //获取美食推荐
    that.initFood();

    //获取酒店推荐
    that.initHotel();

    //获取内容部分
    that.initWen();

    //获取游玩指南的高度
    that.initguideh();

    // 获取那个Tracker实例
    var t = getApp().getTracker();
    t.setScreenName('这是我的首页');
    t.send(new HitBuilders.ScreenViewBuilder().build());
  },
  //获取游玩指南的高度
  initguideh: function() {
    var that = this;
    //得到tab的位置
    var query = wx.createSelectorQuery()
    query.select('#guide').boundingClientRect()
    query.exec(function(res) {
      console.log("高度值:");
      console.log(res);
      that.setData({
        guidemenuTop: res[0].top
      })
    })
  },
  //轮播图的切换
  showChange: function() {
    var that = this;
    console.log("切换文章列表AAA");
    that.setData({
      guipageindex: 1,
      guidedata: {
        iswenmenu: that.data.iswenmenu,
        guipageindex: 1
      },
    })
  },
  //初始化轮播图
  initSwiper: function() {
    var that = this;

    var swiperdata = {
      imglist: [{
        id: 1,
        image_path: "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/20181009132708.jpg",
      }, {
        id: 2,
        image_path: "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/20181009132715.jpg",
      }, {
        id: 3,
        image_path: "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/20181009132719.jpg",
      }, {
        id: 4,
        image_path: "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/20181009132722.jpg",
      }], //轮播图   
      cityname: "黄金海岸", //城市名称
      cnname: "黄金海岸", //中文名称
      enname: "Gold Coast", //英文名称
      isshowname: true, //显示名称
      issearch: true, //搜索按钮
      isweather: true, //天气预报
      fontt1: 60, //中文字
      fontt2: 28, //英文字
      fontt3: 82, //温度
      fontt4: 20, //未来一周
      searchtip: "请搜索...",
    };

    that.setData({
      swiperdata: swiperdata
    })
  },
})