//index.js
//获取应用实例
const app = getApp()
var guidetool = require('../../utils/guidedata.js');
Page({
  data: {
    topimg: "", //顶部的图片
    seniclist: [], //标志景点
    shoppinglist: [], //购物推荐
    foodlist: [], //美食推荐
    hotellist: [], //酒店推荐
    floorstatus: false, //是否显示到达顶部
    menulist: [], //菜单部分
    wenchkid: 0, //默认推荐
    iswenmenu: false, //是否固定文章菜单
    wenlist: [], //文章列表
    winheight: 0, //屏幕的高度
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this;
    //初始化菜单
    that.initMenu();
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
    //获取屏幕的高度
    that.initHight();
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
  //获取菜单部分
  initMenu: function() {
    var that = this;

    var menulist = [{
        id: 0,
        icon: '/resources/menu/jingdian.png',
        name: '景点',
        url: '../../others/pages/index/index?id=0'
      },
      {
        id: 1,
        icon: '/resources/menu/jiudian.png',
        name: '酒店',
        url: '../../others/pages/index/index?id=3'
      },
      {
        id: 2,
        icon: '/resources/menu/meishi.png',
        name: '美食',
        url: '../../others/pages/index/index?id=1'
      },
      {
        id: 3,
        icon: '/resources/menu/wenti.png',
        name: '常见问题',
        url: '../../others/pages/question/index'
      },
      {
        id: 4,
        icon: '/resources/menu/youwan.png',
        name: '游玩指南',
        url: '../../others/pages/guide/index'
      },
      {
        id: 5,
        icon: '/resources/menu/qianzheng.png',
        name: '签证',
        url: '../../others/pages/visa/index'
      },
      {
        id: 6,
        icon: '/resources/menu/fanyi.png',
        name: '翻译',
        url: '../../others/pages/translate/index'
      },
      {
        id: 7,
        icon: '/resources/menu/duihuan.png',
        name: '货币兑换',
        url: '../../others/pages/coin/index'
      },
      {
        id: 8,
        icon: '/resources/menu/hangban.png',
        name: '航班查询',
        url: '../../others/pages/airline/index'
      },
      {
        id: 9,
        icon: '/resources/menu/phone.png',
        name: '一键求助',
        url: ''
      }
    ];
    that.setData({
      menulist: menulist
    })
  },
  //天气预报
  goweather: function() {
    wx.navigateTo({
      url: '../../citys/pages/weather/index',
    })
  },
  //菜单连接的跳转
  gomenu: function(e) {
    var id = e.currentTarget.dataset.id;
    var url = e.currentTarget.dataset.url;

    if (url != '') {

      wx.navigateTo({
        url: url,
      })
    } else if (id == 9) { //一键求助
      wx.showActionSheet({
        itemList: ["119", "120", "114"],
        itemColor: '#007aff',
        success(res) {
          console.log(res.tapIndex);
          if (res.tapIndex === 0) {
            wx.makePhoneCall({
              phoneNumber: '119',
            })
          } else if (res.tapIndex === 1) {
            wx.makePhoneCall({
              phoneNumber: '120',
            })
          } else if (res.tapIndex === 2) {
            wx.makePhoneCall({
              phoneNumber: '114',
            })
          }
        }
      })
    }
  },
  //获取标志景点部分
  initSenic: function() {
    var that = this;
    //标志景点列表
    var seniclist = [{
        id: 1,
        imglist: [{
            name: "大堡礁",
            desc: "是世界最大的珊瑚礁群",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
          },
        ]
      },
      {
        id: 2,
        imglist: [{
            name: "黄金海岸",
            desc: "数十个美丽沙滩组成",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%205.png",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
          },
        ]
      },
      {
        id: 1,
        imglist: [{
            name: "大堡礁",
            desc: "是世界最大最初的珊瑚礁群",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%205.png",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          },
        ]
      }
    ];
    that.setData({
      seniclist: seniclist
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
    var shoplist = [{
        id: 1,
        imglist: [{
            name: "太平洋购物中心",
          pic: "http://zhuweis.com/index/shopping/Bitmap%202.png",
          },
          {
            name: "海港城A",
            pic: "http://zhuweis.com/index/shopping/Bitmap%209.png",
          },
          {
            name: "购物中心A",
            pic: "http://zhuweis.com/index/shopping/Bitmap.png",
          },
        ]
      },
      {
        id: 2,
        imglist: [{
            name: "木星赌场",
          pic: "http://zhuweis.com/index/shopping/Bitmap%202.png",
          },
          {
            name: "海港城B",
            pic: "http://zhuweis.com/index/shopping/Bitmap%209.png",
          },
          {
            name: "购物中心B",
            pic: "http://zhuweis.com/index/shopping/Bitmap.png",
          },
        ]
      },
      {
        id: 1,
        imglist: [{
            name: "大堡礁赌场",
          pic: "http://zhuweis.com/index/shopping/Bitmap.png",
          },
          {
            name: "霍巴特Shopping Mall",
            pic: "http://zhuweis.com/index/shopping/Bitmap%209.png",
          },
          {
            name: "心形岛Shopping Mall",
            pic: "http://zhuweis.com/index/shopping/Bitmap%202.png",
          },
        ]
      }
    ];
    that.setData({
      shoplist: shoplist
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
    var foodlist = [{
        id: 1,
        name: "GEORGE'S STEAK & SEAFOOD RESTAURANT",
        pic: "http://zhuweis.com/index/Food/Bitmap%206.png",
        tips: ["综合菜式", "露台"]
      },
      {
        id: 2,
        name: "黄金酒家",
        pic: "http://zhuweis.com/index/Food/Bitmap%206.png",
        tips: ["亚洲菜", "中餐"]
      },
      {
        id: 3,
        pic: "http://zhuweis.com/index/Food/Bitmap%206.png",
        name: "潘帕斯雄鹰餐厅",
        tips: ["南美菜", "阿根廷餐"]
      }
    ];

    that.setData({
      foodlist: foodlist
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
    var hotellist = [{
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
      }
    ];

    that.setData({
      hotellist: hotellist
    })
  },
  //跳转到酒店详情
  gohotel: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../info/index?id=' + id + "&type=4",
    })
  },
  //文章菜单的选择
  chkwmenu: function(e) {
    var that = this;
    wx.showLoading({
      title: '正在加载中...',
      mask: true
    })
    //参数部分
    var id = e.currentTarget.dataset.id;
    id = parseInt(id);
    var wenlist = guidetool.pagedatalist(1, id);
    console.log("内容列表:");
    console.log(wenlist);

    that.setData({
      wenchkid: id,
      wenlist: wenlist
    })
    wx.hideLoading();
  },
  //获取内容部分
  initWen: function() {
    var that = this;
    //菜单参数部分
    var wenchkid = that.data.wenchkid;
    //文章列表
    var wenlist = guidetool.pagedatalist(1, 0);
    console.log("游记列表：");
    console.log(wenlist);
    that.setData({
      wenlist: wenlist
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
    console.log("屏幕的高度:" + winheight);
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
    if (e.scrollTop > winheight * 2) {
      this.setData({
        iswenmenu: true
      });
    } else {
      this.setData({
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
    console.log("顶部加载...");
    var newwenlist = [{
        id: 1,
        typeval: 1,
        typename: "线路",
        imgpath: "/resources/tu1.jpg",
        title: "七天就能环个洲，大小景点都玩遍",
        instrduce: "悉尼是澳大利亚最大的城市，aaa1234566aa也是澳洲近代文明",
        ismore: true
      },
      {
        id: 2,
        typeval: 2,
        typename: "游记",
        imgpath: "/resources/tu2.jpg",
        title: "去澳大利亚找冬天",
        instrduce: "",
        ismore: false
      },
      {
        id: 3,
        typeval: 3,
        typename: "攻略",
        imgpath: "/resources/tu4.jpg",
        title: "火车环游，美到炸",
        instrduce: "",
        ismore: false
      },
      {
        id: 4,
        typeval: 3,
        typename: "攻略",
        imgpath: "/resources/tu1.jpg",
        title: "悉尼初体验，最热门的8个地方",
        instrduce: "悉尼是澳大利亚最大的城市，也是澳洲近代文明",
        ismore: true
      },
    ];

    that.setData({
      wenlist: newwenlist
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
    var wenlist = that.data.wenlist;
    if (that.data.iswenmenu) {
      var newwenlist = guidetool.pagedatalist(1, that.data.wenchkid)
      wenlist = wenlist.concat(newwenlist);

      that.setData({
        wenlist: wenlist
      })
    }
  },
})