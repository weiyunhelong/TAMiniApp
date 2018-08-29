//index.js
//获取应用实例
const app = getApp()
var guidetool = require('../../utils/guidedata.js');
Page({
  data: {
    geduanval: 30, //隔断的高度值
    swiperdata: {}, //轮播图
    /**菜单部分**/
    menudata: {}, //模块测试数据
    scenicdata: {}, //标志景点
    fooddata: {}, //美食推荐
    hoteldata: {}, //购物推荐
    shoppingdata: {}, //购物推荐
    /**游玩指南**/
    iswenmenu: false, //是否显示游玩菜单
    winheight:0,//屏幕的高度
    guideheight:800,//游玩指南的高度
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
  onLoad: function() {

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
    //标志景点列表
    var scenicdata = {
      datalist: [{
          id: 1,
          name: "大堡礁",
          pic: "http://zhuweis.com/index/Attractions/Bitmap%202.png"
        },
        {
          id: 2,
          name: "霍巴特",
          pic: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
        },
        {
          id: 3,
          name: "心形岛",
          pic: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
        }
      ],
      fontt1: 32,
      fontt2: 24,
      fontt3: 24,
      typename: "标志景点",
      typeval: 0, //类型值
      showtype: 1, //显示类型
    }
    that.setData({
      scenicdata: scenicdata
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
    //标志景点列表
    var shoppingdata = {
      datalist: [{
          id: 1,
          name: "太平洋购物中心",
          pic: "http://zhuweis.com/index/shopping/Bitmap%202.png",
        }, {
          id: 2,
          name: "海港城A",
          pic: "http://zhuweis.com/index/shopping/Bitmap%209.png",
        },
        {
          id: 3,
          name: "购物中心A",
          pic: "http://zhuweis.com/index/shopping/Bitmap.png",
        }, {
          id: 4,
          name: "太平洋购物中心",
          pic: "http://zhuweis.com/index/shopping/Bitmap%202.png",
        }, {
          id: 5,
          name: "海港城A",
          pic: "http://zhuweis.com/index/shopping/Bitmap%209.png",
        },
        {
          id: 6,
          name: "购物中心A",
          pic: "http://zhuweis.com/index/shopping/Bitmap.png",
        },
      ],
      fontt1: 32,
      fontt2: 24,
      fontt3: 24,
      typename: "购物推荐",
      typeval: 2, //类型值
      showtype: 4, //显示类型
    };
    that.setData({
      shoppingdata: shoppingdata
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
    //美食列表
    var fooddata = {
      datalist: [{
          id: 1,
          name: "GEORGE'S STEAK & SEAFOOD RESTAURANT",
          pic: "http://zhuweis.com/index/Food/Bitmap%206.png"
        },
        {
          id: 2,
          name: "黄金酒家",
          pic: "http://zhuweis.com/index/Food/Bitmap%206.png"
        },
        {
          id: 3,
          pic: "http://zhuweis.com/index/Food/Bitmap%206.png",
          name: "潘帕斯雄鹰餐厅"
        }
      ],
      fontt1: 32,
      fontt2: 24,
      fontt3: 24,
      typename: "美食推荐",
      typeval: 1, //类型值
      showtype: 2, //显示类型
    };

    that.setData({
      fooddata: fooddata
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
    //酒店列表
    var hoteldata = {
      datalist: [{
          id: 1,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "派珀斯布罗德海滩度假村"
        },
        {
          id: 2,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "芒特拉圈卡维儿酒店"
        },
        {
          id: 3,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "大堡礁酒店"
        },
        {
          id: 4,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "派珀斯布罗德海滩度假村"
        },
        {
          id: 5,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "芒特拉圈卡维儿酒店"
        },
      ],
      fontt1: 32,
      fontt2: 24,
      fontt3: 24,
      typename: "酒店推荐",
      typeval: 3, //类型值
      showtype: 3, //显示类型
    };

    that.setData({
      hoteldata: hoteldata
    })
  },
  //获取内容部分
  initWen: function() {
    var that = this;
    //文章列表
    var guidedata = {
      iswenmenu: that.data.iswenmenu, //是否到达顶部
      guideheight: that.data.guideheight, //分页的页码
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
    //是否固定文章的顶部
    if (e.scrollTop > winheight * 1.9) {      
      that.setData({
        iswenmenu: true,
        guideheight: that.data.winheight-150
      });
      that.initWen();
    } else {
      this.setData({
        guidedata: {
          iswenmenu: false,
          guideheight: that.data.winheight - 250
        },
        iswenmenu: false
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

    that.setData({
      guidedata: {
        iswenmenu: false,
        guideheight:that.data.winheight - 250
      },
      iswenmenu:false
    })
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
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
      iswenmenu: true,
      guideheight: that.data.winheight - 150
    });
    that.initWen();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    var that = this;

    //获取屏幕的高度
    that.initHight();

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
  }
})