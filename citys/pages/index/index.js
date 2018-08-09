//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tablist:[],//菜单列表
    list: [],//子类
    chkid: 1,//选择的大类id
    chkname: '',//选择的大类
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that=this;

    //初始化菜单
    that.InitTab();
  },
  //初始化菜单
  InitTab:function(e) {
    var that=this;
    var tablist=[
      {
        id:1,
        name:"推荐",
        ischk:true
      },
      {
        id: 2,
        name: "大洲",
        ischk: false
      },
      {
        id: 3,
        name: "城市",
        ischk: false
      },
    ];

    that.setData({
      tablist: tablist
    })
  }
})
