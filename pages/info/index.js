// pages/info/index.js
var requesturl = getApp().globalData.requesturl;
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //id
    typeval:1,//类型  
    iscollect: true, //是否收藏
    iscollectopt:false,//是否进行收藏点击操作
    topimg: "", //顶部的图片
    cnname: "", //中文名称
    enname: "", //英文名称
    xinglist: [1, 2, 3, 4, 5], //星列表
    lat: 0, //纬度
    lng: 0, //经度
    concatnum: "", //联系电话
    commentnum:"", //评论个数
    introduce: "", //门票介绍
    moreintroduce: "", //门票
    datetime: "", //营业时间
    address: "", //地址
    ticketlist: [], //门票列表
    chktab: true, //是否选中图库
    commentlist: [], //评论列表
    cpageindex: 1,//评论列表
    cpagesize: 3,//评论列表
    tusku: [], //图库
    ipageindex: 1,//评论列表
    ipagesize: 3,//评论列表
    xingnum: 0, //评价打分
    commentinfo: "", //评价的内容
    tulist: [], //评价的图片
    floorstatus:false,//是否显示到达顶部
    winheight:0,//屏幕的高度
    isshowmenu:false,//是否将图库和评论置顶
    showmore:"阅读更多",//基本信息显示更多
    isshowmore:false,//是否显示更多
    xinglist:[1,2,3,4,5],//星列表
    fen:0,//评价打分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      id: parseInt(options.id),
      typeval:parseInt(options.typeval)
    })
    //初始化获取系统的高度
    that.GetSystemInfo();

    //获取地址详情
    that.GetAddressInfo();
    //获取相关产品
    that.GetAddressPro();
  },
  //初始化获取系统的高度
  GetSystemInfo:function(){
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winheight:res.screenHeight
        })
      },
    })
  },
  //获取地址详情
  GetAddressInfo:function() {
     var that=this;
     //参数部分
     var id=that.data.id;

     wx.request({
       url: requesturl +'/address/address',
       data:{
         id:id,
         openid: getApp().globalData.openid,
         type:1
       },
       header: {
         "Content-Type":"application/x-www-form-urlencoded"
       },
       method: 'POST',
       success: function(res) {
         console.log("获取地址详情:");
         console.log(res);

         that.setData({
           topimg:res.data.image.image_path, //顶部的图片
           cnname: res.data.title, //中文名称
           enname: res.data.title_en, //英文名称
           address: res.data.address,//地址
           lat: res.data.lat, //纬度
           lng: res.data.lnt, //经度
           concatnum: res.data.telephone, //联系电话
           commentnum: res.data.comment_count, //评论个数
           introduce: res.data.content, //门票介绍
           moreintroduce: res.data.description, //门票
           datetime: res.data.open_hour, //营业时间
           iscollect: res.data.favorite==0?false:true,//是否收藏
           ticket: res.data.ticket,//门票           
         })

         wx.setNavigationBarTitle({
           title: res.data.title == '' ? res.data.title_en : res.data.title,
         })
       }
     })
  },
  //获取相关产品
  GetAddressPro: function () { 
    var that = this;
    //参数部分
    var id = that.data.id;
    /*测试数据集*/
    var ticketlist=[
      {
        product:{
          title:"成人票",
          price:120,
          description:"开放时间:9:00am-18:00,周一到周五",
          id:1
        }
      },
      {
        product: {
          title: "儿童票",
          price: 60,
          description: "开放时间:9:00am-18:00,周一到周五",
          id: 2
        }
      },
    ];
    that.setData({
      ticketlist: ticketlist
    })
    /*正式数据
    wx.request({
      url: requesturl + '/address/product/' + id,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function (res) {
        console.log("获取地址相关产品:");
        console.log(res);
       
        that.setData({
          ticketlist:res.data
        })
      }
    })*/

  },
  //获取图库列表
  GetImgList: function () { 
    var that = this;
    //参数部分
    var id = that.data.id;

    /*测试版本*/
    var tusku = [
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/2d4eeb05e579caebb423bb6270ee68b4.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/df9d563b50d1cf88f4dfa6b503aed1f8.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/8eebe7b55ff002c0cfa8093869f8dcaa.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/a696f35edb1488534484b2dcd34c8ac0.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/d18f5d3555045f640f728a45716400ab.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/2c985e0a955c8cd4af8756e201d7e0c6.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/4a51a0a05a98e4a73913f2991f3a3ef4.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/464090a37fc89bd045570370fa3c7410.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/c310ec4f9a9b147a8d4b3a2e7751fe76.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/38a2851b298b3a243c0aade467d9d799.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/d908695704c35f00302882eb93e0bb8a.jpeg",
      "https://dev-api.connectplus.asaplus.com.cn/static/images/201810/20181009132708.jpg",];

    that.setData({
      tusku: tusku
    })

    /*正式版本
    wx.request({
      url: requesturl + '/address/image/' + id + "/" + that.data.ipageindex + "/" + that.data.ipagesize,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function (res) {   
        console.log("获取地址图库列表:");
        console.log(res);   
        var tusku = that.data.tusku;
        tusku = tusku.concat(res.data);      
        that.setData({
          tusku: tusku
        })
      }
    })
    */
  },
  //获取评论列表
  GetCommentList: function () { 
    var that = this;
    //参数部分
    var id = that.data.id;

    wx.request({
      url: requesturl + '/address/comment/' + id + "/" + that.data.cpageindex + "/" + that.data.cpagesize,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function (res) {
        console.log("获取地址评论列表:");
        console.log(res);
        var commentlist = that.data.commentlist;
        commentlist = commentlist.concat(res.data);
        that.setData({
          commentlist: commentlist
        })
      }
    })
  },
  //收藏操作
  collectopt: function() {
    var that = this;
    
    wx.request({
      url: requesturl +'/address/favorite/update',
      data: {
        id:that.data.id, 
        status: !that.data.iscollect?1:0,
        openid:getApp().globalData.openid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("收藏的结果:");
        console.log(res);

        that.setData({
          iscollect: !that.data.iscollect,
          iscollectopt: true
        })

        setTimeout(function () {
          that.setData({
            iscollectopt: false
          })
        }, 500);
      }
    })
    
  },
  //地图
  gomap: function() {
    //
    var that = this;
     
    wx.switchTab({
      url: '../termini/index',
    }) 
  },
  //打电话
  makephonecall: function() {
    var that = this;

    wx.makePhoneCall({
      phoneNumber: that.data.concatnum
    })
  },
  //基本信息显示更多
  showmoreinfo:function(){
    var that=this;
    //显示更多基础信息
    that.setData({
      isshowmore: !that.data.isshowmore,
      showmore: that.data.isshowmore?"阅读更多":"收起内容"
    })
  },
  //预定须知
  showtip: function(e) {
    var that = this;
    //参数部分
    var tip = e.currentTarget.dataset.tip;

    //弹窗预定须知
    wx.showModal({
      title: '预定须知',
      content: tip,
      showCancel: false
    })
  },
  //预定
  bookopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;

    wx.showToast({
      title: '预定成功',
      mask: true
    })
  },
  //切换tab
  showtabopt: function() {
    var that = this;

    that.setData({
      chktab: !that.data.chktab
    })
  },
  //预览图片
  previewtu: function(e) {
    var that = this;
    //参数部分
    var imgpath = e.currentTarget.dataset.imgpath;
    var tuku = that.data.tusku;

    //预览图片
    wx.previewImage({
      current: imgpath,
      urls: tuku,
    })
  },
  //去评价
  gocomment:function(e){
    var that=this;
    //参数部分
    var index=e.currentTarget.dataset.index;
    that.setData({
      fen:index
    })
    //页面的跳转
    setTimeout(function(){
      var name = that.data.cnname == '' ? that.data.enname : that.data.cnname;
      wx.navigateTo({
        url: '../comment/index?id=' + that.data.id + "&type=" + that.data.typeval + "&title=" + that.data.name + "&fen=" + index,
      })
    },500)    
  },
  //导航去这儿
  daohangopt: function() {

    var that = this;
    var name = that.data.cnname == '' ? that.data.enname : that.data.cnname;
    console.log("经纬度的值:" + parseFloat(that.data.lat) + "," + parseFloat(that.data.lng));
    //打开地图
    wx.openLocation({
      latitude: parseFloat(that.data.lat), //纬度
      longitude: parseFloat(that.data.lng), //经度,
      name: name
    })
  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log(e);
    var that = this;
    var winheight = that.data.winheight;
    console.log("屏幕的高度:" + winheight);
    //是否显示置顶
    if (e.scrollTop > winheight) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
    //是否将图库和评论置顶
    if (e.scrollTop > 900) {
      this.setData({
        isshowmenu: true
      });
    } else {
      this.setData({
        isshowmenu: false
      });
    }
  },
  //回到顶部
  goTop: function (e) { // 一键回到顶部
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that=this;
    //设置评价星为0
    that.setData({
      fen:0
    })
    
    //获取图库列表
    that.GetImgList();
    //获取评论列表
    that.GetCommentList()
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
    var that=this;
    /*
    that.setData({
      cpageindex:1,
      ipageindex:1
    })
    //获取图库列表
    that.GetImgList();
    //获取评论列表
    that.GetCommentList()
    */
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that=this;
    //参数部分
    var chktab = that.data.chktab;
    var cpageindex = that.data.cpageindex;
    var ipageindex = that.data.ipageindex;

    if (!chktab){
      that.setData({
        cpageindex: cpageindex+1
      })
      //获取评论列表
      that.GetCommentList()
    }else{
      that.setData({
        ipageindex: ipageindex + 1
      })
      //获取图库列表
      that.GetImgList();
    }
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})