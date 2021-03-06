// others/pages/coin/index.js
var cointool = require('../../../utils/coin.js');
var requesturl = getApp().globalData.requesturl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*被兑换的部分*/
    oid: 0, //源货币类型
    oflag: "/resources/flag/zhongguo.png", //国旗
    ocountry: "中国", //国家
    oenname: "CNY", //国家缩写
    omoney: "", //被兑换的钱
    ofocus: true, //聚焦
    omoneytip: "100", //提示文字
    /*兑换后的部分*/
    gid: 1, //目标货币类型
    gflag: "/resources/flag/yingguo.png", //国旗
    gcountry: "英国", //国家
    genname: "GBP", //国家缩写
    gmoney: "", //兑换后的钱
    gfocus: false, //聚焦
    gmoneytip: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '货币计算',
    })
    
  },
  //初始化提示的文字    
  initTips: function() {
    var that = this;
    var omoney = that.data.omoneytip;
    //获取汇率
    wx.request({
      url: requesturl + '/currency/exchange/' + that.data.oenname + "/" + that.data.genname,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function(res) {
        console.log("获取汇率的值:");
        console.log(res);
        var huilv = JSON.parse(res.data);
        var hlval = huilv.result[0].exchange;
        console.log("获取汇率的值:");
        console.log(hlval);

        var result = parseFloat(omoney * hlval).toFixed(2);
        that.setData({
          gmoneytip: result
        })
      }
    })
  },
  //得到需兑换的钱
  getomoney: function(e) {
    var that = this;
    var txtval = e.detail.value;
    //参数部分
    if (txtval != "") {
      that.setData({
        omoney: txtval,
        ofocus: false
      })
      setTimeout(function() {
        that.exchange();
      }, 500)
    } else {
      that.setData({
        omoney: '',
        gmoney: '',
        ofocus: true,
        gfocus: false
      })
    }
  },
  //得到目标兑换的钱
  getgmoney: function(e) {
    var that = this;
    var txtval = e.detail.value;
    //参数部分
    if (txtval != "") {
      that.setData({
        gmoney: txtval,
        gfocus: false
      })
      setTimeout(function() {
        that.oexchange();
      }, 500)
    } else {
      that.setData({
        omoney: '',
        gmoney: '',
        ofocus: false,
        gfocus: true
      })
    }
  },
  //获取兑换的结果
  exchange: function() {
    var that = this;

    //参数部分
    var omoney = that.data.omoney; //被兑换的钱

    //获取汇率
    wx.request({
      url: requesturl + '/currency/exchange/' + that.data.oenname + "/" + that.data.genname,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function(res) {
        console.log("获取汇率的值:");
        console.log(res);
        var huilv = JSON.parse(res.data);
        var hlval = huilv.result[0].exchange;
        console.log("获取汇率的值:");
        console.log(hlval);

        var result = parseFloat(omoney * hlval).toFixed(2);
        if (result == '0.00') {
          that.setData({
            omoney: "",
            gmoney: ""
          })
        } else {
          that.setData({
            gmoney: result
          })
        }
      }
    })
  },
  //目标替换的钱
  oexchange: function() {
    var that = this;

    //参数部分
    var gmoney = that.data.gmoney; //兑换的钱

    //获取汇率
    wx.request({
      url: requesturl + '/currency/exchange/' + that.data.genname + "/" + that.data.oenname,
      data: '',
      header: {
        "Content-Type": "application/json"
      },
      method: 'GET',
      success: function(res) {
        console.log("获取汇率的值:");
        console.log(res);
        var huilv = JSON.parse(res.data);
        var hlval = huilv.result[0].exchange;
        console.log("获取汇率的值:");
        console.log(hlval);

        var result = parseFloat(gmoney * hlval).toFixed(2);
        if (result == '0.00') {
          that.setData({
            omoney: "",
            gmoney: ""
          })
        } else {
          that.setData({
            omoney: result
          })
        }
      }
    })
  },
  //切换操作
  changeopt: function() {
    var that = this;

    /*被兑换的部分*/
    var oflag = that.data.oflag, //国旗
      ocountry = that.data.ocountry, //国家
      oenname = that.data.oenname, //国家缩写
      omoney = that.data.omoney; //被兑换的钱

    /*兑换后的部分*/
    var gflag = that.data.gflag, //国旗
      gcountry = that.data.gcountry, //国家
      genname = that.data.genname, //国家缩写
      gmoney = that.data.gmoney; //兑换后的钱


    //替换重新赋值
    that.setData({
      oflag: gflag, //国旗
      ocountry: gcountry, //国家
      oenname: genname, //国家缩写
      omoney: gmoney, //被兑换的钱

      /*兑换后的部分*/
      gflag: oflag, //国旗
      gcountry: ocountry, //国家
      genname: oenname, //国家缩写
      gmoney: omoney, //兑换后的钱
    })
  },
  //选择货币类型
  changecoinopt: function(e) {
    var that = this;
    //来源 1->源头；2->目标
    var typeval = e.currentTarget.dataset.type;

    wx.redirectTo({
      url: '../coin/detail?oid=' + that.data.oid + "&gid=" + that.data.gid + "&type=" + typeval,
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

    //获取货币类型值
    that.getcoindata();
    //初始化提示的文字    
    that.initTips();
  },
  //获取货币类型值
  getcoindata: function() {
    var that = this;
    //获取参数
    var ocoinid = getApp().globalData.ocoinid;
    var gcoinid = getApp().globalData.gcoinid;
    //源头数据
    var ocoin = cointool.getCoinByIndex(ocoinid);
    var gcoin = cointool.getCoinByIndex(gcoinid);

    that.setData({
      oid: ocoinid, //源货币类型
      oflag: ocoin.flag, //国旗
      ocountry: ocoin.cnname, //国家
      oenname: ocoin.enname, //国家缩写

      /*兑换后的部分*/
      gid: gcoinid, //源货币类型
      gflag: gcoin.flag, //国旗
      gcountry: gcoin.cnname, //国家
      genname: gcoin.enname, //国家缩写
    })

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