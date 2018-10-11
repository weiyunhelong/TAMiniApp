// pages/termini/index.js
var requesturl = getApp().globalData.requesturl; //接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageindex:1,//页码
    pagesize:10,//页面显示记录
    searchtxt: "", //搜索值
    isshowmap: true, //是否显示地图
    chktabid: 1, //选中的菜单
    datalist: [], //列表数据
    sorder: true, //评分排序
    porder: false, //价格排序
    dorder: false, //距离排序
    iszhediemap: false, //是否折叠
    contenth: 0, //列表的高度
    /*地图部分*/
    winwidth: 0, //手机的宽度
    winheight: 0, //手机的高度
    mapheight: 0, //地图的高度
    scale: 14, //地图的缩放比例
    latitude: 0, //纬度
    longitude: 0, //经度
    markers: [], //坐标
    controls: [], //控件部分
    prolist: [], //底部的滑动列表
    hotsearchlist: [], //热门搜索
    isshownoresult: false, //搜索无果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    //获取系统的数据
    that.InitSysInfo();
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
          mapheight: res.screenHeight * 0.432,
          contenth: res.screenHeight - 120,
        })
      }
    })

  },
  //获取地图的其他值
  GetMapData: function() {
    var that = this;
    //参数部分
    var chktabid = that.data.chktabid;
    var markerlist = that.data.markers;
    var result = [];
    var index = 0;
    for (var i = 0; i < markerlist.length; i++) {
      if (markerlist[i].kind == chktabid) {
        result[index] = {
          id: markerlist[i].id,
          latitude: markerlist[i].latitude,
          longitude: markerlist[i].longitude,
          iconPath: markerlist[i].iconPath,
          width: markerlist[i].width,
          height: markerlist[i].height,
          kind: markerlist[i].kind,
        }
        index++;
      }
    }
    var markers = result;
    
    //赋值部分
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
      }], //线路部分
    })
  },
  //点击地图Icon
  getpro: function(e) {
    var that = this;
    //参数部分
    var id = e.markerId;
    that.setData({
      iszhediemap: true,
      toView: "pro" + id,
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
          width: 52,
          height: 62
        }
      } else {
        txtarry[i] = {
          id: markers[i].id,
          latitude: markers[i].latitude, //纬度
          longitude: markers[i].longitude, //经度
          iconPath: markers[i].iconPath,
          width: 26,
          height: 31,
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
        //that.GetMapData();
      }
    })
  },
  //地图icon点击
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

    //筛选的条件  
    var filter ="star_count";
    if (sorder){
      filter = "star_count";
    } else if (porder){
      filter = "price";
    } else if (dorder){
      filter = "distance";
    }
    //请求接口获取数据
    wx.request({
      url: requesturl + '/address/mini/list',
      data: {
        page: that.data.pageindex,
        limit: that.data.pagesize,
        lat: that.data.latitude,
        lnt: that.data.longitude,
        filter: filter,
        name: searchtxt,
        category_id: chktabid,
        openid:getApp().globalData.openid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("获取列表数据:");
        console.log(res);
        
        //数据的处理
        that.DealData(res.data);      
      }
      
    })
  },
  //数据的处理
  DealData:function(datalist){
    var that=this;
    //参数部分
    var chktabid = that.data.chktabid;
    var txtarry=[];
    var markers=[];
    var prolist=[];
    console.log("处理的数据:");
    console.log(datalist);
    //循环重置数据
    for (var i = 0; i < datalist.length;i++){
      //列表数据
      txtarry[i]={
        id: datalist[i].id,
        imgpath: datalist[i].image_path,
        cnname: datalist[i].title,
        enname: datalist[i].title_en,
        distance: datalist[i].distance,
        commentnum: datalist[i].comment_count,
        price: datalist[i].price,
        iscollect: datalist[i].favorite==1?true:false,/**是否收藏**/
        iscollectopt: false,
      };
      var siconpath ="";
      if (datalist[i].favorite==1) {
        siconpath = "/resources/icon/osmpostion.png";
      }else if (chktabid==1){
        siconpath = "/resources/icon/bsmpostion.png";
      } else if (chktabid == 2) {
        siconpath = "/resources/icon/ysmpostion.png";
      } else if (chktabid == 3) {
        siconpath = "/resources/icon/gsmpostion.png";
      } else if (chktabid == 4) {
        siconpath = "/resources/icon/psmpostion.png";
      }
      //地图坐标部分
      markers[i]={
        id: datalist[i].id,
        latitude: parseFloat(datalist[i].lat), //纬度
        longitude: parseFloat(datalist[i].lnt), //经度
        iconPath: siconpath,
        width: 26,
        height: 31,
        kind: chktabid
      }
      //底部的数据
      prolist[i]={
        id: "pro" + datalist[i].id,
        name: datalist[i].title,
        imgpath: datalist[i].image_path,
        address: datalist[i].title_en,
        distance: datalist[i].distance,
        ischk: false,
        iscollect: datalist[i].favorite==1?true:false,
        latitude: datalist[i].lat,
        longitude: datalist[i].lnt,
        no: datalist[i].id,
        iscollectopt: false
      };
    }
    //处理的地图markers
    console.log("处理的地图AAA:");
    console.log(markers);
    //赋值部分
    that.setData({
      datalist: txtarry, 
      isshownoresult: txtarry.length > 0 ? false : true,
      markers: markers,
      prolist: prolist
    })
  }, 
  //列表的收藏
  listcollectopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var collect = e.currentTarget.dataset.collect;
    //请求接口获取到数据
    wx.request({
      url: requesturl +'/address/favorite/update',
      data: {
        id: id,
        status: collect?0:1,
        openid:getApp().globalData.openid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("收藏更新的结果:");
        console.log(res);
        that.InitList();
      }
    })
  },
  //点击搜索框,进入到搜索页面
  gosearch: function() {
    wx.navigateTo({
      url: '../termini/search',
    })
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
    var id = e.currentTarget.dataset.id;
    id = parseInt(id);
    //参数
    if (id == 5) {
      wx.navigateTo({
        url: '../../others/pages/filter/index?id=' + that.data.chktabid,
      })
    } else {
      that.setData({
        chktabid: parseInt(id),
        pageindex:1        
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
        mapheight: that.data.winheight * 0.432,
        iszhediemap: false,
        controls: [{
          id: 1,
          position: {
            left: 320,
            top: that.data.winheight * 0.432 - 100,
            width: 50,
            height: 50
          },
          iconPath: '/resources/icon/dingwei.png',
          clickable: true
        }],
      })
    } else {
      that.setData({
        mapheight: that.data.winheight * 0.64,
        iszhediemap: true,
        controls: [{
          id: 1,
          position: {
            left: 320,
            top: that.data.winheight * 0.64 - 100,
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
    var collect = e.currentTarget.dataset.collect;
    //请求接口获取到数据
    wx.request({
      url: requesturl + '/address/favorite/update',
      data: {
        id: id,
        status: collect?0:1,
        openid: getApp().globalData.openid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("收藏更新的结果:");
        console.log(res);
        that.InitList();
      }
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
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      name: name
    })
  },
  //跳转到详情页面
  godetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../info/index?id=' +id,
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
    var that = this;

    //获取定位
    wx.getLocation({
      type:"gcj02",
      success: function(res) {
        console.log("获取定位的值:");
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        //获取列表数据
        that.InitList();
        //获取地图的其他值
        that.GetMapData();
      },
      fail: function() {
        console.log("取消地址AAA");
        wx.openSetting({})
      },
    })

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
          //that.GetMapData();
        }
      })
    }, 2000)
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
    var that=this;

    that.setData({
      pageindex: that.data.pageindex+1
    })
    //页面获取列表
    that.InitList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})