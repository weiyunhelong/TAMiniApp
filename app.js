//app.js
const utils = require('./utils/util.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    var that=this;

    //获取录音的缓存
    wx.getStorage({
      key: 'history',
      success: (res) => {
        this.globalData.history = res.data
      },
      fail: (res) => {
        console.log("get storage failed")
        console.log(res)
        this.globalData.history = []
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("CODE的值:" + res.code);
        wx.request({
          url: that.globalData.requesturl+'/wechat/login',
          data: {
            code:res.code
          },
          header: {
            "Content-Type":"application/x-www-form-urlencoded"
          },
          method: 'POST',
          success: function(res) {
            console.log("获取openid的值:");
            console.log(res);

            that.globalData.openid = res.data.openid;            
            //结束标识符B
          }
        }) 
        //结束标识符C
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              console.log("获取授权用户信息:");
              console.log(res.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 权限询问
  getRecordAuth: function () {
    wx.getSetting({
      success(res) {
        console.log("succ")
        console.log(res)
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log("succ auth")
            }, fail() {
              console.log("fail auth")
            }
          })
        } else {
          console.log("record has been authed")
        }
      }, fail(res) {
        console.log("fail")
        console.log(res)
      }
    })
  },
  //卸载页面,停止背景声音
  onHide: function () {
    wx.stopBackgroundAudio()
  },
  /*全局变量*/
  globalData: {
    userInfo: null,//用户信息
    openid:"",//OPENID
    unionId: "",//unionId
    requesturl:"https://dev-api.connectplus.asaplus.com.cn",//后台API请求的url
    globalimgurl: "https://dev-api.connectplus.asaplus.com.cn/static/images/",//后台API请求的url
    ocoinid:0,//中国货币
    gcoinid:1,//目标货币
    olangid: 7,//翻译来源语言
    glangid: 0,//翻译目标语言
    history: [],//录音的历史记录
    timer:"",//计时器
  }
})