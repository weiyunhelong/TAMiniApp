// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt: "", //搜索的值
    issearchfocus: false, //是否聚焦
    tablist: [], //菜单部分
    currentTab: 0, //预设当前项的值
    typename: '综合', //菜单名称
    scrollLeft: 0, //tab标题的滚动条位置
    isshowcontent: false, //是否显示搜索结果
    resultlist: [], //搜索结果列表
    /*数据展示部分*/
    historylist: [], //热门搜索列表
    hotsearchlist: [], //历史记录
    isshowhistory: true, //是否显示历史记录
    isshownocontent:false,//搜索无果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    //菜单部分
    that.getmenu();
    //初始化历史记录部分
    that.initHistory();
    //初始化景点地部分
    that.initHotSearch();
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
      issearchfocus: false
    })
    //搜索结果
    that.getsearchresult();
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
        name: '商品',
      },
      {
        id: 2,
        name: '酒店',
      },
      {
        id: 3,
        name: '美食',
      },
      {
        id: 4,
        name: '游玩指南',
      }
    ];
    that.setData({
      tablist: tablist
    })
    //搜索结果
    that.getsearchresult();
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
  //点击搜索
  gosearch: function(e) {
    var that = this;
    //参数的值
    var searchtxt = e.currentTarget.dataset.name;
    that.setData({
      searchtxt: searchtxt,
      isshowcontent: true
    })
    //获取搜索结果
    that.getsearchresult();
  },
  //获取搜索结果
  getsearchresult: function() {
    var that = this;
    //参数部分
    var searchtxt=that.data.searchtxt,
      isshowcontent = that.data.isshowcontent,
      isshownocontent = that.data.isshowcontent;

    if (searchtxt==''){
      that.setData({
        isshowcontent:false,
        isshownocontent: false
      })
    }else{
      //获取搜索的列表值
      var resultlist = {
        datalist: [{
          id: 1,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap%202.png",
          cnname: "太平洋购物中心",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        }, {
          id: 2,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap%209.png",
          cnname: "海港城A",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        },
        {
          id: 3,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap.png",
          cnname: "购物中心A",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        }, {
          id: 4,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap%202.png",
          cnname: "太平洋购物中心",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        }, {
          id: 5,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap%209.png",
          cnname: "太平洋购物中心A",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        },
        {
          id: 6,
          imgpath: "http://zhuweis.com/index/shopping/Bitmap.png",
          cnname: "太平洋购物中心B",
          enname: "Pacific Fair",
          distance: 1.5,
          commentnum: 1221,
          price: 281
        },
        ],
        fontt1: 32,
        fontt2: 24,
        fontt3: 24,
        showtype: 5, //显示类型
      };

      //赋值部分
      that.setData({
        resultlist: resultlist,
        isshowcontent:true,
        isshownocontent:resultlist.length>0?false:true,
      })
    }  
   
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