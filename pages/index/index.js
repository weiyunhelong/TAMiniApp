//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topimg: "", //顶部的图片
    /**人气城市部分**/
    citycurrentTab: 0, //城市预设当前项的值
    cityscrollLeft: 0, //城市tab标题的滚动条位置
    citylist: [], //城市菜单列表
    /**菜单部分**/
    menulist: [], //菜单部分
    /**景点部分**/
    scencurrentTab: 0, //景点预设当前项的值
    scenscrollLeft: 0, //景点tab标题的滚动条位置
    scenlist: [], //景点菜单列表
    /**文章部分**/
    wenlist: [], //文章列表
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this;
    //获取城市部分
    that.initCity();
    //获取景点部分
    that.initScene();
    //获取菜单部分
    that.initMenu();
    //获取内容部分
    that.initWen();
  },
  //获取城市部分
  initCity: function() {
    var that = this;


    var citylist = [
      {
        id: 1,
        imglist: [
          {
            name: "大堡礁",
            desc: "是世界最大的珊瑚礁群",
            pic: "/resources/tu1.jpg",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "/resources/tu2.jpg",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "/resources/tu3.jpg",
          },
        ]
      },
      {
        id: 2,
        imglist: [
          {
            name: "黄金海岸",
            desc: "数十个美丽沙滩组成",
            pic: "/resources/tu4.jpg",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "/resources/tu1.jpg",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "/resources/tu2.jpg",
          },
        ]
      },
      {
        id: 1,
        imglist: [
          {
            name: "大堡礁",
            desc: "是世界最大最初的珊瑚礁群",
            pic: "/resources/tu1.jpg",
          },
          {
            name: "霍巴特",
            desc: "",
            pic: "/resources/tu2.jpg",
          },
          {
            name: "心形岛",
            desc: "",
            pic: "/resources/tu3.jpg",
          },
        ]
      }
    ];
    that.setData({
      citylist: citylist
    })
  },
  // 点击标题切换当前页时改变样式
  cityswitchNav: function(e) {
    var that = this;
    var cur = e.target.dataset.current;
    var id = e.target.dataset.id;
    console.log("点击的菜单:");
    console.log(e);
    if (that.data.citycurrentTab == cur) {
      return false;
    } else {
      that.setData({
        citycurrentTab: parseInt(cur)
      })

      that.citycheckCor();
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  citycheckCor: function() {
    var that = this;
    if (that.data.citycurrentTab > 3) {
      var num = parseInt(that.data.citycurrentTab / 3);
      that.setData({
        cityscrollLeft: 180 * num
      })
    } else {
      that.setData({
        cityscrollLeft: 0
      })
    }
  },
  //获取景点部分
  initScene: function() {
    var that = this;

    var scenlist = [{
        id: 1,
        name: '悉尼',
        pic: '/resources/tu1.jpg'
      },
      {
        id: 2,
        name: '堪培拉',
        pic: '/resources/tu2.jpg'
      },
      {
        id: 3,
        name: '达尔文',
        pic: '/resources/tu3.jpg'
      },
      {
        id: 4,
        name: '布里斯班',
        pic: '/resources/tu4.jpg'
      },
      {
        id: 5,
        name: '墨尔本',
        pic: '/resources/tu4.jpg'
      },
    ];
    that.setData({
      scenlist: scenlist
    })
  },
  // 点击标题切换当前页时改变样式
  switchNav: function(e) {
    var that = this;
    var cur = e.target.dataset.current;
    var id = e.target.dataset.id;
    console.log("点击的菜单:");
    console.log(e);
    if (that.data.scencurrentTab == cur) {
      return false;
    } else {
      that.setData({
        scencurrentTab: parseInt(cur)
      })
      that.scencheckCor();
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  scencheckCor: function() {
    var that = this;
    if (that.data.scencurrentTab > 1) {
      var num = parseInt(that.data.scencurrentTab);
      that.setData({
        scenscrollLeft: 650 * num
      })
    } else {
      that.setData({
        scenscrollLeft: 0
      })
    }
  },
  //获取菜单部分
  initMenu: function() {
    var that = this;

    var menulist = [{
        id: 0,
        icon: '/resources/qianzheng.png',
        name: '景点',
        url: '../../others/index/index'
      },
      {
        id: 1,
        icon: '/resources/qianzheng.png',
        name: '酒店',
        url: '../../others/index/index'
      },
      {
        id: 2,
        icon: '/resources/hangban.png',
        name: '美食',
        url: '../../others/index/index'
      },
      {
        id: 3,
        icon: '/resources/chanpin.png',
        name: '常见问题',
        url: '../../others/index/index'
      },
      {
        id: 4,
        icon: '/resources/huobi.png',
        name: '游玩指南',
        url: '../../others/index/index'
      },
      {
        id: 5,
        icon: '/resources/youji.png',
        name: '签证',
        url: '../../others/index/index'
      },
      {
        id: 6,
        icon: '/resources/gonglve.png',
        name: '翻译',
        url: '../../others/index/index'
      },
      {
        id: 7,
        icon: '/resources/xianlu.png',
        name: '货币兑换',
        url: '../../others/index/index'
      },
      {
        id: 8,
        icon: '/resources/helpphone.png',
        name: '航班查询',
        url: '../../others/index/index'
      },
      {
        id: 9,
        icon: '/resources/helpphone.png',
        name: '一键求助',
        url: '../../others/index/index'
      }
    ];
    that.setData({
      menulist: menulist
    })
  },
  //菜单连接的跳转
  gomenu: function(e) {
    var id = e.currentTarget.dataset.id;
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    })
  },
  //获取搜索的值
  getsearch: function() {
    wx.navigateTo({
      url: '../search/index',
    })
  },
  //获取内容部分
  initWen: function() {
    var that = this;
    //
    var wenlist = [{
        id: 1,
        typename: "线路",
        imgpath: "/resources/tu1.jpg",
        title: "七天就能环个洲，大小景点都玩遍",
        instrduce: "悉尼是澳大利亚最大的城市，aaa1234566aa也是澳洲近代文明",
        ismore: true
      },
      {
        id: 2,
        typename: "游记",
        imgpath: "/resources/tu2.jpg",
        title: "去澳大利亚找冬天",
        instrduce: "",
        ismore: false
      },
      {
        id: 3,
        typename: "线路",
        imgpath: "/resources/tu4.jpg",
        title: "火车环游，美到炸",
        instrduce: "",
        ismore: false
      },
      {
        id: 4,
        typename: "攻略",
        imgpath: "/resources/tu5.jpg",
        title: "悉尼初体验，最热门的8个地方",
        instrduce: "悉尼是澳大利亚最大的城市，也是澳洲近代文明",
        ismore: true
      },
    ];

    that.setData({
      wenlist: wenlist
    })
  },
  //跳转大屏详情页面
  goinfo: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    //跳转到详情
    wx.navigateTo({
      url: '../info/index?id=' + id,
    })
  },
})