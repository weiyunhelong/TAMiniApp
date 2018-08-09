//index.js
//获取应用实例
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt:"",//搜索的值
    islist:false,//是否显示列表
    tablist:[],//菜单部分
    chktabid:1,//选中的菜单

    scale: 16, //地图的缩放比例
    latitude: 39.984060, //纬度
    longitude: 116.307520, //经度
    markers: [], //坐标
    controls: [], //控件部分
    polylines: [], //线路
    chkmapid: 1, //默认选中的地图Mark
    preleftv: 220, //前一个滑动的坐标位置
    chanum: 0,
    toView: "",
    prolist: [], //底部的列表
    winheight: 0,//
    scorelist:[
      "评分排序","由低到高","由高到低"
    ],//评分排序
    sindex:0,
    pricelist: [
      "价格排序", "由低到高", "由高到低"
    ],//价格排序
    pindex: 0,
    julilist: [
      "距离排序", "由近及远", "由远及近"
    ],//距离排序
    jindex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //地图显示的高度
    that.getheight();

    //地图的数据部分
    that.setData({
      latitude: 39.984060,
      longitude: 116.307520,
      markers: [{
        id: 1,
        latitude: 39.984060,
        longitude: 116.307420,
        iconPath: '/resources/dituh.png',
        callout: {
          content: "A语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "ALWAYS"
        },
      },
      {
        id: 2,
        latitude: 39.984060,
        longitude: 116.308520,
        iconPath: '/resources/ditu.png',
        callout: {
          content: "B语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "BYCLICK"
        }
      },
      {
        id: 3,
        latitude: 39.984060,
        longitude: 116.317520,
        iconPath: '/resources/ditu.png',
        callout: {
          content: "C语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "BYCLICK"
        }
      },
      {
        id: 4,
        latitude: 39.985260,
        longitude: 116.309520,
        iconPath: '/resources/ditu.png',
        callout: {
          content: "D语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "BYCLICK"
        }
      },
      {
        id: 5,
        latitude: 39.986060,
        longitude: 116.303520,
        iconPath: '/resources/ditu.png',
        callout: {
          content: "E语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "BYCLICK"
        }
      },
      {
        id: 6,
        latitude: 39.987060,
        longitude: 116.304520,
        iconPath: '/resources/ditu.png',
        callout: {
          content: "F语言：珊珊是不是傻\n预计到达时间：10分钟\n车牌号：12345",
          color: "#ff0000",
          fontSize: 10,
          borderRadius: 10,
          bgColor: "#ffffff",
          padding: 10,
          display: "BYCLICK"
        }
      },
      ],
      controls: [{
        id: 1,
        position: {
          left: 330,
          top: 290,
          width: 30,
          height: 30
        },
        iconPath: '/resources/sousuo.png',
        clickable: true
      },
      {
        id: 2,
        position: {
          left: 330,
          top: 330,
          width: 30,
          height: 30
        },
        iconPath: '/resources/dingwei.png',
        clickable: true
      },
      ], //控件部分
      polyline: [{
        points: [
          {
            longitude: 116.307420,
            latitude: 39.984060
          },
          {
            longitude: 116.308520,
            latitude: 39.984060
          },
          {
            longitude: 116.317520,
            latitude: 39.984060
          },
          {
            longitude: 116.309520,
            latitude: 39.985260
          },
          {
            longitude: 116.303520,
            latitude: 39.986060
          },
          {
            longitude: 116.304520,
            latitude: 39.987060
          }
        ],
        color: "#0000ff",
        width: 3,
        dottedLine: false,//虚线
        arrowLine: true,//带箭头的线
        arrowIconPath: '/resources/head.png',//箭头的图片
      }], //线路部分
    });

    //底部的对应的信息部分
    var prolist = [{
      id: "pro1",
      name: 'A',
      imgpath: '/resources/tu1.jpg',
      ischk: true,
      no: 1
    },
    {
      id: "pro2",
      name: 'B',
      imgpath: '/resources/tu2.jpg',
      ischk: false,
      no: 2
    },
    {
      id: "pro3",
      name: 'C',
      imgpath: '/resources/tu3.jpg',
      ischk: false,
      no: 3
    },
    {
      id: "pro4",
      name: 'D',
      imgpath: '/resources/tu1.jpg',
      ischk: false,
      no: 4
    },
    {
      id: "pro5",
      name: 'E',
      imgpath: '/resources/tu2.jpg',
      ischk: false,
      no: 5
    },
    {
      id: "pro6",
      name: 'F',
      imgpath: '/resources/tu3.jpg',
      ischk: false,
      no: 6
    },
    ];
    that.setData({
      prolist: prolist,
      chkmapid: 1, //默认选中的地图Mark
      toView: "pro1",
    })

    //结束标识符
  },
  //修改显示的方式
  changeshow:function(){
     var that=this;
     
     that.setData({
       islist: !that.data.islist
     })
  },
  //屏幕的高度
  getheight: function () {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        console.log("设备信息:");
        console.log(res);
        that.setData({
          winheight: res.screenHeight * 0.50
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})