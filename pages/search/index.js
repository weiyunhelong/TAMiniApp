// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt: "", //搜索的值
    issearchfocus:false,//是否聚焦
    tablist: [], //菜单部分
    currentTab: 0, //预设当前项的值
    typename: '综合', //菜单名称
    scrollLeft: 0, //tab标题的滚动条位置
    /*列表数据部分*/
    gogallist: [], //目的地列表
    scenelist: [], //景点列表
    tourlist: [], //游记列表
    yscrollLeft:0,
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

    //菜单部分
    that.getmenu();

    //初始化目的地部分
    that.initGogal();

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
  //搜索框聚焦
  searchfopt:function(){
    this.setData({
      issearchfocus:true
    })
  },
  //获取搜索框的值
  getsearchtxt:function(e){
     var that=this;
     //参数部分
     var txtval=e.detail.value;
    this.setData({
      searchtxt:txtval,
      issearchfocus: false
    })
  },
  //菜单部分
  getmenu: function() {
    var that = this;

    //请求得到菜单
    var tablist = [{
        id: 0,
        name: '综合',
      },
      {
        id: 1,
        name: '攻略',
      },
      {
        id: 2,
        name: '游记',
      },
      {
        id: 3,
        name: '线路',
      },
      {
        id: 4,
        name: '购物',
      },
      {
        id: 5,
        name: '美食',
      },
      {
        id: 6,
        name: '酒店',
      },
    ];
    that.setData({
      tablist: tablist
    })
  },
  // 点击标题切换当前页时改变样式
  switchNav: function(e) {
    var that = this;
    var cur = e.target.dataset.current;
    var id = e.target.dataset.id;
    console.log("点击的菜单:");
    console.log(e);
    if (that.data.currentTab == cur) {
      return false;
    } else {
      that.setData({
        currentTab: parseInt(cur),
        typename: id
      })
      that.checkCor();
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    var that = this;
    if (that.data.currentTab > 2) {
      var num = parseInt(that.data.currentTab / 2);
      that.setData({
        scrollLeft: 150 * num
      })
    } else {
      that.setData({
        scrollLeft: 0
      })
    }
  },
  //初始化目的地部分
  initGogal: function() {
    var that = this;

    //
    var gogallist = [{
        id: 1,
        imgpath: "/resources/tu1.jpg",
        name: "悉尼"
      },
      {
        id: 2,
        imgpath: "/resources/tu2.jpg",
        name: "堪培拉"
      },
      {
        id: 3,
        imgpath: "/resources/tu3.jpg",
        name: "达尔文"
      },
      {
        id: 4,
        imgpath: "/resources/tu4.jpg",
        name: "布里斯班"
      },
    ];
    that.setData({
      gogallist: gogallist
    })
  },

  //初始化景点地部分
  initScene: function() {
    var that=this;

    //
    var scenelist=[
      {
        id:1,
        imgpath:"/resources/tu1.jpg",
        name:"圣派崔克教堂圣派崔克教堂圣派崔克教堂"
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
    var that=this;

    var tourlist=[
      {
        id:1,
        imglist: ["/resources/tu1.jpg", "/resources/tu2.jpg", "/resources/tu3.jpg", "/resources/tu4.jpg", "/resources/tu5.jpg"],
        name:"澳洲的冬天"
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
  //美食跳转
  foodswitchNav:function(e){
    var that=this;
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../',
    })
  },
  //初始化酒店部分
  initHotel: function() {

  },
  //取消按钮
  goback:function(){
    wx.navigateBack({
      delta:1
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