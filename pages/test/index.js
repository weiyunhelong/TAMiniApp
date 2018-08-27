// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    geduanval: 30, //隔断的高度值
    swiperdata: {
      imglist: [{
        id: 1,      
        imgpath: "http://zhuweis.com/index/Header.png",
      }, {
        id: 2,
        imgpath: "http://zhuweis.com/index/Header.png",
      }, {
        id: 3,
        imgpath: "http://zhuweis.com/index/Header.png",
      }], //轮播图
      issearch: true, //搜索按钮
      isweather: true, //天气预报
      weatherdata: {
        wendu: 25,
        icon: "/resources/weather/sun.png"
      }, //字体大小
      fontt1: 60,
      fontt2: 28,
      fontt3: 82,
      fontt4: 20,
      cnname: "黄金海岸",
      enname: "Gold Coast",
      isshowname:true,//是否显示名称
    },
    /**菜单部分**/
    menudata: {
      onemenulist: [{
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
      ], //第一行
      twomenulist: [{
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
      ], //第二行菜单
      fontt: 24, //字体大小
      phonelist: ["110", "120", "119", "114"], //一键求助
    }, //模块测试数据
    moduledata: {
      datalist: [{
          id: 1,
          name: "GEORGE'S STEAK & SEAFOOD RESTAURANT",
          pic: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
        },
        {
          id: 2,
          name: "黄金酒家",
          pic: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
        },
        {
          id: 3,
          pic: "http://zhuweis.com/index/Food/Bitmap%206.png",
          name: "潘帕斯雄鹰餐厅"
        },
        {
          id: 4,
          pic: "http://zhuweis.com/index/Hotels/Bitmap%207.png",
          name: "派珀斯布罗德海滩度假村"
        },
        {
          id: 5,
          pic: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
          name: "芒特拉圈卡维儿酒店"
        },
        {
          id: 6,
          pic: "http://zhuweis.com/index/Attractions/Bitmap%205.png",
          name: "大堡礁酒店"
        }
      ], //数据部分
      fontt1: 32,
      fontt2: 24,
      fontt3: 24,
      typename: "美食推荐",
      typeval: 1, //类型值
      showtype: 4, //显示类型
    },
    //底部的tabbar
    tabbardata: {
      tabbarlist: [{
          "pagePath": "../../pages/index/index",
          "iconPath": "../../resources/tabbar/home.png",
          "selectedIconPath": "../../resources/tabbar/homeh.png",
          "text": "城市首页"
        },
        {
          "pagePath": "../../pages/termini/index",
          "iconPath": "../../resources/tabbar/ditu.png",
          "selectedIconPath": "../../resources/tabbar/dituh.png",
          "text": "城市地图"
        },
        {
          "pagePath": "../../pages/chatbot/index",
          "iconPath": "../../resources/tabbar/chatbot.png",
          "selectedIconPath": "../../resources/tabbar/chatboth.png",
          "text": "智能助理"
        },
        {
          "pagePath": "../../pages/my/index",
          "iconPath": "../../resources/tabbar/my.png",
          "selectedIconPath": "../../resources/tabbar/myh.png",
          "text": "我的"
        }
      ],
      chktabindex: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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