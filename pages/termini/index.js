// pages/termini/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*列表数据部分*/
    scenelist: [], //景点列表
    tourlist: [], //游记列表
    yscrollLeft: 0,
    gonglvelist: [], //攻略列表
    linelist: [], //线路列表
    shoplist: [], //购物列表
    foodlist: [], //美食列表
    hotellist: [], //酒店列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;


    //初始化景点地部分
    that.initScene();

    //初始化游记部分
    that.initTour();

    //初始化攻略部分
    that.initGonglve();

    //初始化线路部分
    that.initLine();

    //初始化购物部分
    that.initLine();

    //初始化美食部分
    that.initFood();

    //初始化酒店部分
    that.initHotel();
  },
  //初始化景点地部分
  initScene: function() {
    var that = this;

    //
    var scenelist = [{
        id: 1,
        imgpath: "/resources/tu1.jpg",
        name: "圣派崔克教堂圣派崔克教堂圣派崔克教堂"
      },
      {
        id: 2,
        imgpath: "/resources/tu2.jpg",
        name: "悉尼水族馆"
      },
      {
        id: 3,
        imgpath: "/resources/tu3.jpg",
        name: "皇家植物园"
      },
      {
        id: 4,
        imgpath: "/resources/tu4.jpg",
        name: "黄金海岸"
      },
    ];

    that.setData({
      scenelist: scenelist
    })
  },

  //初始化游记部分
  initTour: function() {
    var that = this;

    var tourlist = [{
        id: 1,
        imglist: ["/resources/tu1.jpg", "/resources/tu2.jpg", "/resources/tu3.jpg", "/resources/tu4.jpg", "/resources/tu5.jpg"],
        name: "澳洲的冬天"
      },
      {
        id: 2,
        imglist: ["/resources/tu1.jpg", "/resources/tu2.jpg", "/resources/tu3.jpg", "/resources/tu4.jpg", "/resources/tu5.jpg"],
        name: "悉尼的秋天"
      }
    ];

    that.setData({
      tourlist: tourlist
    })
  },

  //初始化攻略部分
  initGonglve: function() {

  },

  //初始化线路部分
  initLine: function() {

  },

  //初始化购物部分
  initLine: function() {

  },

  //初始化美食部分
  initFood: function() {

  },

  //初始化酒店部分
  initHotel: function() {

  },
  //地图展示
  gomap:function(){
    wx.redirectTo({
      url: '../../citys/pages/map/index',
    })
  },
  //选择城市
  gocity:function(){
    wx.redirectTo({
      url: '../../citys/pages/index/index',
    })
  },
  //查看天气
  goweather:function(){
    wx.redirectTo({
      url: '../../citys/pages/weather/index',
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