// components/homes/menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    onemenulist: [], //第一行
    twomenulist: [], //第二行菜单
    fontt: 0, //字体大小
    phonelist: [], //求助电话
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {
    var that = this;
    //菜单数据
    var onemenulist = [{
      id: 0,
      icon: '/resources/menu/jingdianh.png',
      name: '景点',
      url: '../../others/pages/index/index?id=0'
    },
    {
      id: 1,
      icon: '/resources/menu/jiudianh.png',
      name: '酒店',
      url: '../../others/pages/index/index?id=3'
    },
    {
      id: 2,
      icon: '/resources/menu/meishih.png',
      name: '美食',
      url: '../../others/pages/index/index?id=1'
    },
    {
      id: 3,
      icon: '/resources/menu/wentih.png',
      name: '常见问题',
      url: '../../others/pages/question/index'
    },
    {
      id: 4,
      icon: '/resources/menu/youwanh.png',
      name: '游玩指南',
      url: '../../others/pages/guide/index'
    },
    ], //第一行
      twomenulist = [{
        id: 5,
        icon: '/resources/menu/qianzhengh.png',
        name: '签证',
        url: '../../../pages/article/index?id=116' //url: '../../others/pages/visa/index'
      },
      {
        id: 6,
        icon: '/resources/menu/fanyih.png',
        name: '翻译',
        url: '../../others/pages/translate/index'
      },
      {
        id: 7,
        icon: '/resources/menu/duihuanh.png',
        name: '货币兑换',
        url: '../../others/pages/coin/index'
      },
      {
        id: 8,
        icon: '/resources/menu/hangbanh.png',
        name: '航班查询',
        url: '../../others/pages/airline/index'
      },
      {
        id: 9,
        icon: '/resources/menu/phoneh.png',
        name: '一键求助',
        url: ''
      }
      ], //第二行菜单
      fontt = 24, //字体大小
      phonelist = ["中国驻澳大利亚大使馆求助电话", "急求电话（报警、火警、急救)"]; //一键求助


    //赋值部分  
    that.setData({
      onemenulist: onemenulist, //第一行
      twomenulist: twomenulist, //第二行菜单
      fontt: fontt, //字体大小
      phonelist: phonelist, //求助电话
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

    //菜单的点击
    gomenu: function (e) {
      var that = this;
      var id = e.currentTarget.dataset.id;
      id = parseInt(id);
      /**类型判断**/
      if (id == 0) { //景点
        wx.navigateTo({
          url: '../../others/pages/index/index?id=1',
        })
      } else if (id == 1) { //酒店
        wx.navigateTo({
          url: '../../others/pages/index/index?id=4',
        })
      } else if (id == 2) { //美食
        wx.navigateTo({
          url: '../../others/pages/index/index?id=3',
        })
      } else if (id == 3) { //常见问题
        wx.navigateTo({
          url: '../../others/pages/question/index',
        })
      } else if (id == 4) { //常见问题
        wx.navigateTo({
          url: '../../others/pages/guide/index',
        })
      } else if (id == 5) { //签证
        wx.navigateTo({
          url: './../../pages/article/index?id=116',
        })
      } else if (id == 6) { //翻译
        wx.navigateTo({
          url: '../../others/pages/translate/index',
        })
      } else if (id == 7) { //货币兑换
        wx.navigateTo({
          url: '../../others/pages/coin/index',
        })
      } else if (id == 8) { //航班查询
        wx.navigateTo({
          url: '../../others/pages/airline/index',
        })
      } else if (id == 9) { //一键求助
        wx.showActionSheet({
          itemList: that.data.phonelist,
          itemColor: '#007aff',
          success: function (res) {
            //拨打电话
            var tapIndex = res.tapIndex;
            var phonenum = "";
            if (tapIndex == 0) {
              phonenum = "0061-7-32106509-206";
            } else {
              phonenum = "000";
            }
            console.log("电话号码:" + phonenum);

            wx.makePhoneCall({
              phoneNumber: phonenum
            })
          }
        })
      }
    },
  }
})