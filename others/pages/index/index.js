// others/pages/index/index.js
var markertool = require('../../../utils/marker.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    issearchfocus: false, //搜索框
    searchtxt: "", //搜索值
    isshowmap: false, //是否显示地图
    chktabid: 0, //选中的菜单
    datalist: [], //列表数据
    sorder: true, //评分排序
    porder: false, //价格排序
    dorder: false, //距离排序
    iszhediemap: false, //是否折叠
    contenth: 0, //内容列表的高度
    /*地图部分*/
    winwidth: 0, //手机的宽度
    winheight: 0, //手机的高度
    mapheight: 0, //地图的高度
    scale: 14, //地图的缩放比例
    latitude: 31.230416, //纬度
    longitude: 121.473701, //经度
    markers: [], //坐标
    controls: [], //控件部分
    prolist: [{
        id: "pro1",
        name: '华纳电影世界',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%202.png',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 31.330416, //纬度
        longitude: 121.373701, //经度
        no: 1,
        iscollectopt: false
      },
      {
        id: "pro2",
        name: '可伦宾野生动物园',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%203.png',
        address: "Currumbin Wildlife Sanctuary",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 31.130416, //纬度
        longitude: 121.453701, //经度
        no: 2,
        iscollectopt: false
      },
      {
        id: "pro3",
        name: '春溪国家公园',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%204.png',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: false,
        latitude: 31.250416, //纬度
        longitude: 121.493701, //经度
        no: 3,
        iscollectopt: false
      },
      {
        id: "pro4",
        name: '华纳电影世界',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%202.png',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 31.330416, //纬度
        longitude: 121.373701, //经度
        no: 4,
        iscollectopt: false
      },
      {
        id: "pro5",
        name: '可伦宾野生动物园',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%203.png',
        address: "Currumbin Wildlife Sanctuary",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 31.130416, //纬度
        longitude: 121.453701, //经度
        no: 5,
        iscollectopt: false
      },
      {
        id: "pro6",
        name: '春溪国家公园',
        imgpath: 'http://zhuweis.com/index/Attractions/Bitmap%204.png',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: false,
        latitude: 31.250416, //纬度
        longitude: 121.493701, //经度
        no: 6,
        iscollectopt: false
      }
    ], //底部的滑动列表
    hotsearchlist: [], //热门搜索
    isshownoresult: false,//搜索无果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      chktabid: parseInt(options.id)
    })
    //获取系统的数据
    that.InitSysInfo();
    //初始化列表数据
    that.InitList();
    //初始化热门搜索部分
    that.initHotSearch();
  },
  //初始化热门搜索部分
  initHotSearch: function () {
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
  //获取系统的数据
  InitSysInfo: function() {
    var that = this;

    //获取高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winheight: res.screenHeight,
          winwidth: res.screenWidth,
          mapheight: res.screenHeight * 0.482,
          contenth: res.screenHeight - 120
        })
      }
    })
    //获取定位
    wx.getLocation({
      success: function(res) {
        console.log("获取定位的值:");
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        //获取地图的其他值
        that.GetMapData();
      },
    })
  },
  //获取地图的其他值
  GetMapData: function() {
    var that = this;
    //参数部分
    var chktabid = that.data.chktabid;

    var markers = markertool.GetTypeMarker(chktabid + 1);
    that.setData({
      markers: markers,
      controls: [{
        id: 1,
        position: {
          left: that.data.winwidth - 50,
          top: that.data.mapheight - 100,
          width: 50,
          height: 50
        },
        iconPath: '/resources/icon/dingwei.png',
        clickable: true
      }],
    })
  },
  //点击地图Icon
  getpro: function(e) {
    var that = this;
    //参数部分
    var id = e.markerId;
    that.setData({
      iszhediemap: true,
      toView: "pro" + id
    })
    //折叠
    that.zhedieopt();
    //重置地图Markers
    that.UpdateMarker(id);
  },
  //重置地图Markers
  UpdateMarker: function(id) {
    var that = this;
    //参数部分
    var markers = that.data.markers;
    var txtarry = [];
    //循环赋值数据
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].id == id) {
        txtarry[i] = {
          id: markers[i].id,
          latitude: markers[i].latitude, //纬度
          longitude: markers[i].longitude, //经度
          iconPath: markers[i].iconPath,
          width: 40,
          height: 40
        }
      } else {
        txtarry[i] = {
          id: markers[i].id,
          latitude: markers[i].latitude, //纬度
          longitude: markers[i].longitude, //经度
          iconPath: markers[i].iconPath,
          width: 25,
          height: 25,
        }
      }
    }
    //赋值数据
    that.setData({
      markers: txtarry
    })
  },
  //地图范围的改变
  mapregionopt: function(e) {
    var that = this;
    //获取地图的范围
    /*
      that.mapCtx.getCenterLocation({
        success: function (res) {
          console.log("获取地图的范围改变");
          console.log(res);
          that.setData({
            longitude: res.longitude, //经度
            latitude: res.latitude, //纬度
          })        
          that.mapCtx.moveToLocation();
        }
      })
    */
  },
  //地图范围的改变
  mapcontroltap: function() {
    var that = this;
    //获取定位
    wx.getLocation({
      success: function(res) {
        console.log("获取定位的值:");
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        //获取地图的其他值
        that.GetMapData();
      },
    })
  },
  //初始化列表数据
  InitList: function() {
    var that = this;

    //参数部分
    var searchtxt = that.data.searchtxt, //搜索值
      ismaptype = that.data.ismaptype, //是否显示地图
      chktabid = that.data.chktabid, //选中的菜单
      sorder = that.data.sorder, //评分排序
      porder = that.data.porder, //价格排序
      dorder = that.data.dorder; //距离排序;

    //列表数据  
    var datalist = [{
        id: 1,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
        cnname: "华纳电影世界",
        enname: "Warner Bros. Movie World",
        distance: "1.5km",
        commentnum: 2331,
        price: 281,
        iscollect: true,
        iscollectopt: false
      },
      {
        id: 2,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
        cnname: "可伦宾野生动物园",
        enname: "Currumbin Wildlife Sanctuary",
        distance: "1.8km",
        commentnum: 1332,
        price: 281,
        iscollect: true,
        iscollectopt: false
      },
      {
        id: 3,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
        cnname: "春溪国家公园",
        enname: "Warner Bros. Movie World",
        distance: "2.0km",
        commentnum: 1332,
        price: 281,
        iscollect: false,
        iscollectopt: false
      },
      {
        id: 4,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
        cnname: "华纳电影世界",
        enname: "Warner Bros. Movie World",
        distance: "1.5km",
        commentnum: 2331,
        price: 281,
        iscollect: true
      },
      {
        id: 5,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
        cnname: "可伦宾野生动物园",
        enname: "Currumbin Wildlife Sanctuary",
        distance: "1.8km",
        commentnum: 1332,
        price: 281,
        iscollect: true,
        iscollectopt: false
      },
      {
        id: 6,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
        cnname: "春溪国家公园",
        enname: "Warner Bros. Movie World",
        distance: "2.0km",
        commentnum: 1332,
        price: 281,
        iscollect: false,
        iscollectopt: false
      },
    ];

    //赋值部分
    that.setData({
      datalist: datalist
    })
  },
  //列表的收藏
  listcollectopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var datalist = that.data.datalist;
    //循环遍历
    var txtarry = [];
    for (var i = 0; i < datalist.length; i++) {
      if (id == datalist[i].id) {
        txtarry[i] = {
          id: datalist[i].id,
          imgpath: datalist[i].imgpath,
          cnname: datalist[i].cnname,
          enname: datalist[i].enname,
          distance: datalist[i].distance,
          commentnum: datalist[i].commentnum,
          price: datalist[i].price,
          iscollect: !datalist[i].iscollect,
          iscollectopt: true
        }
      } else {
        txtarry[i] = {
          id: datalist[i].id,
          imgpath: datalist[i].imgpath,
          cnname: datalist[i].cnname,
          enname: datalist[i].enname,
          distance: datalist[i].distance,
          commentnum: datalist[i].commentnum,
          price: datalist[i].price,
          iscollect: datalist[i].iscollect,
          iscollectopt: false
        }
      }
    }
    //赋值
    that.setData({
      datalist: txtarry
    })
  },
  //获取到搜索值
  getsearchtxt: function(e) {
    var that = this;

    var txtval = e.detail.value;

    that.setData({
      searchtxt: txtval,
      issearchfocus: true,
      isshownoresult: true,
      isshowclear: txtval.length > 0 ? true : false
    })
    if (txtval != '') {
      //获取搜索结果
      //that.InitList();
    }
  },
  searchfopt: function() {
    var that = this;
    that.setData({
      issearchfocus: true
    })
  },//清除操作
  clearsopt:function(){
    var that = this;
    that.setData({
      searchtxt:"",
      issearchfocus: true,
      isshowclear:false
    })
    that.InitList();
  },
  //点击热门搜索
  gosearch: function (e) {
    var that = this;
    //参数部分
    var name = e.currentTarget.dataset.name;
    var id = e.currentTarget.dataset.id;
    //列表数据  
    var datalist = [{
      id: 1,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
      cnname: "华纳电影世界",
      enname: "Warner Bros. Movie World",
      distance: "1.5km",
      commentnum: 2331,
      price: 281,
      iscollect: true,
      iscollectopt: false,
    },
    {
      id: 2,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
      cnname: "可伦宾野生动物园",
      enname: "Currumbin Wildlife Sanctuary Currumbin Wildlife Sanctuary",
      distance: "1.8km",
      commentnum: 1332,
      price: 281,
      iscollect: true,
      iscollectopt: false,
    },
    {
      id: 3,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
      cnname: "春溪国家公园",
      enname: "Warner Bros. Movie World",
      distance: "2.0km",
      commentnum: 1332,
      price: 281,
      iscollect: false,
      iscollectopt: false,
    },
    ];

    that.setData({
      searchtxt: name,
      isshownoresult: false,
      datalist: datalist,
      isshowclear: true
    })
    //that.InitList();
  },
  //地图和列表形式的切换
  changeshow: function() {
    var that = this;

    var isshowmap = !that.data.isshowmap;
    that.setData({
      isshowmap: isshowmap
    })
  },
  //菜单的切换
  menuopt: function(e) {
    var that = this;
    //参数
    var id = e.currentTarget.dataset.id;
    id = parseInt(id);
    if (id == 4) {
      wx.navigateTo({
        url: '../filter/index?id=' + that.data.chktabid,
      })
    } else {
      that.setData({
        chktabid: parseInt(id)
      })
      //初始化列表数据
      that.InitList();
      //初始化地图Marker
      that.GetMapData();
    }
  },
  //评分排序
  scoreopt: function() {
    var that = this;
    that.setData({
      sorder: !that.data.sorder,
      porder: false,
      dorder: false
    })
  },
  //价格排序
  prirceopt: function() {
    var that = this;
    that.setData({
      sorder: false,
      porder: !that.data.porder,
      dorder: false
    })
  },
  //距离排序
  distanceopt: function() {
    var that = this;
    that.setData({
      sorder: false,
      porder: false,
      dorder: !that.data.dorder
    })
  },
  //折叠
  zhedieopt: function() {
    var that = this;

    //参数部分
    var iszhediemap = that.data.iszhediemap;

    if (iszhediemap) {
      that.setData({
        mapheight: that.data.winheight * 0.482,
        iszhediemap: false,
        controls: [{
          id: 1,
          position: {
            left: that.data.winwidth - 50,
            top: that.data.winheight * 0.482 - 100,
            width: 50,
            height: 50
          },
          iconPath: '/resources/icon/dingwei.png',
          clickable: true
        }],
      })
    } else {
      that.setData({
        mapheight: that.data.winheight * 0.70,
        iszhediemap: true,
        controls: [{
          id: 1,
          position: {
            left: that.data.winwidth - 50,
            top: that.data.winheight * 0.70 - 100,
            width: 50,
            height: 50
          },
          iconPath: '/resources/icon/dingwei.png',
          clickable: true
        }],
      })
    }
  },
  //收藏操作
  collectopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    //循环重置数据
    var prolist = that.data.prolist;
    var txtarry = [];

    for (var i = 0; i < prolist.length; i++) {
      if (prolist[i].id == id) {
        txtarry[i] = {
          id: prolist[i].id,
          name: prolist[i].name,
          imgpath: prolist[i].imgpath,
          address: prolist[i].address,
          distance: prolist[i].distance,
          ischk: prolist[i].ischk,
          iscollect: !prolist[i].iscollect,
          latitude: prolist[i].latitude,
          longitude: prolist[i].longitude,
          no: prolist[i].no,
          iscollectopt: true
        }
      } else {
        txtarry[i] = {
          id: prolist[i].id,
          name: prolist[i].name,
          imgpath: prolist[i].imgpath,
          address: prolist[i].address,
          distance: prolist[i].distance,
          ischk: prolist[i].ischk,
          iscollect: prolist[i].iscollect,
          latitude: prolist[i].latitude,
          longitude: prolist[i].longitude,
          no: prolist[i].no,
          iscollectopt: false
        }
      }
    }
    console.log("重置数据:");
    console.log(txtarry);

    that.setData({
      prolist: txtarry
    })
  },
  //导航操作
  daohangopt: function(e) {
    var lat = e.currentTarget.dataset.lat;
    var lng = e.currentTarget.dataset.lng;
    var name = e.currentTarget.dataset.name;
    console.log("经纬度:" + lat + "," + lng + ",名称:" + name);
    //打开地图定位
    wx.openLocation({
      latitude: lat,
      longitude: lng,
      name: name
    })
  },
  //跳转到详情页面
  godetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../../pages/info/index?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    // 使用 wx.createMapContext 获取 map 上下文
    that.mapCtx = wx.createMapContext('myMap');
    setTimeout(function() {
      that.mapCtx.getCenterLocation({
        success: function(res) {
          console.log("地图中心点的值:");
          console.log(res);
          that.setData({
            longitude: res.longitude, //经度
            latitude: res.latitude, //纬度
          })
        }
      })
      //获取地图的范围
      that.mapCtx.getRegion({
        success: function(res) {
          console.log("获取地图的范围");
          console.log(res);
          that.setData({
            nlat: res.northeast.latitude,
            nlng: res.northeast.longitude,
            slat: res.southwest.latitude,
            slng: res.southwest.longitude,
          })
          //获取地图列表
          that.GetMapData();
        }
      })
    }, 2000)
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