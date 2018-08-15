// others/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issearchfocus: false, //搜索框
    searchtxt: "", //搜索值
    isshowmap: false, //是否显示地图
    chktabid: 1, //选中的菜单
    datalist: [], //列表数据
    sorder: false, //评分排序
    porder: false, //价格排序
    dorder: false, //距离排序
    iszhediemap: false, //是否折叠
    /*地图部分*/
    winheight: 0, //地图的高度
    mapheight: 0, //地图的高度
    scale: 16, //地图的缩放比例
    latitude: 39.984060, //纬度
    longitude: 116.307520, //经度
    markers: [], //坐标
    controls: [], //控件部分

    nlat: 0,
    nlng: 0,
    slat: 0,
    slng: 0,
    prolist: [{
        id: "pro1",
        name: '华纳电影世界',
        imgpath: '/resources/tu1.jpg',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 39.984060, //纬度
        longitude: 116.307520, //经度
        no: 1
      },
      {
        id: "pro2",
        name: '可伦宾野生动物园',
        imgpath: '/resources/tu2.jpg',
        address: "Currumbin Wildlife Sanctuary",
        distance: "1.5km",
        ischk: false,
        iscollect: true,
        latitude: 39.984060, //纬度
        longitude: 116.307520, //经度
        no: 2
      },
      {
        id: "pro3",
        name: '春溪国家公园',
        imgpath: '/resources/tu3.jpg',
        address: "Warner Bros. Movie World",
        distance: "1.5km",
        ischk: false,
        iscollect: false,
        latitude: 39.984060, //纬度
        longitude: 116.307520, //经度
        no: 3
      }
    ], //底部的滑动列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      chktabid: parseInt(options.id)
    })
    //获取系统的数据
    that.InitSysInfo();
    //初始化列表数据
    that.InitList();
  },
  //获取系统的数据
  InitSysInfo: function() {
    var that = this;

    //获取高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winheight: res.screenHeight,
          mapheight: res.screenHeight*0.5
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

    that.setData({
      markers: [{
          id: 1,
          latitude: 31.984060,
          longitude: 121.307420,
          iconPath: '/resources/dituh.png'
        },
        {
          id: 2,
          latitude: 31.184060,
          longitude: 121.207420,
          iconPath: '/resources/dituh.png'
        },
        {
          id: 3,
          latitude: 31.684060,
          longitude: 121.407420,
          iconPath: '/resources/dituh.png'
        }
      ],
      controls: [{
        id: 1,
        position: {
          left: 350,
          top: that.data.mapheight-50,
          width: 30,
          height: 30
        },
        iconPath: '/resources/icon/dingwei.png',
        clickable: true
      }], //线路部分
    })
  },
  //地图显示范围的修改
  mapregion: function() {

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
        imgpath: "/resources/tu1.jpg",
        cnname: "华纳电影世界",
        enname: "Warner Bros. Movie World",
        distance: "1.5km",
        commentnum: 2331,
        price: 281,
        iscollect: true
      },
      {
        id: 2,
        imgpath: "/resources/tu2.jpg",
        cnname: "可伦宾野生动物园",
        enname: "Currumbin Wildlife Sanctuary",
        distance: "1.8km",
        commentnum: 1332,
        price: 281,
        iscollect: true
      },
      {
        id: 3,
        imgpath: "/resources/tu3.jpg",
        cnname: "春溪国家公园",
        enname: "Warner Bros. Movie World",
        distance: "2.0km",
        commentnum: 1332,
        price: 281,
        iscollect: false
      },
    ];

    //赋值部分
    that.setData({
      datalist: datalist
    })
  },
  //列表的收藏
  listcollectopt:function(e){
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
          iscollect: !datalist[i].iscollect
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
          iscollect: datalist[i].iscollect
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
      issearchfocus: false
    })
  },
  searchfopt: function() {
    var that = this;
    that.setData({
      issearchfocus: true
    })
  },
  //地图和列表形式的切换
  changeshow: function() {
    var that = this;

    that.setData({
      isshowmap: !that.data.isshowmap
    })
  },
  //菜单的切换
  menuopt: function(e) {
    var that = this;
    //参数
    var id = e.currentTarget.dataset.id;
    that.setData({
      chktabid: parseInt(id)
    })
    //初始化列表数据
    that.InitList();
  },
  //评分排序
  scoreopt: function() {
    var that = this;
    that.setData({
      sorder: !that.data.sorder
    })
  },
  //价格排序
  prirceopt: function() {
    var that = this;
    that.setData({
      porder: !that.data.porder
    })
  },
  //距离排序
  distanceopt: function() {
    var that = this;
    that.setData({
      dorder: !that.data.dorder
    })
  },
  //折叠
  zhedieopt:function(){
    var that=this;

    //参数部分
    var iszhediemap = that.data.iszhediemap;

    if (iszhediemap){
      that.setData({
        mapheight: that.data.winheight * 0.5,
        iszhediemap:false
      })
    }else{
      that.setData({
        mapheight: that.data.winheight * 0.723,
        iszhediemap:true
      })
    }
  },
  //收藏操作
  collectopt: function (e) {
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
  daohangopt: function (e) {
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
  //跳转到详情页
  godetail:function(e){
    var id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../../pages/info/index?id='+id,
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