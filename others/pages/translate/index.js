// others/pages/translate/index.js
var langtool=require('../../../utils/language.js');
var requesturl = getApp().globalData.requesturl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    oindex: 0,//来源语言下标
    olang: "", 
    origintype:"",//来源语言的缩写
    gindex: 0,//目标语言下标
    glang: "",
    gogaltype:"",//目标语言的缩写
    origintxt: "",//翻译的内容
    gogaltxt:"",//翻译的结果
    winhight:0,//屏幕的高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    //顶部的文字
    wx.setNavigationBarTitle({
      title: '翻译',
    })
    //获取屏幕的高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winhight:res.screenHeight
        })
      },
    })
  },
  //修改语言类型
  gochklangopt: function (e) {
    var that = this;
    //参数部分
    var oid = that.data.oindex;
    var gid = that.data.gindex;
    var typeval = e.currentTarget.dataset.type;
    //页面跳转
    wx.navigateTo({
      url: '../../pages/translate/type?oid=' + oid + "&gid=" + gid + "&type=" + typeval,
    })
  }, 
  //互换语言类型
  changeopt: function () {
    var that = this;
    //参数部分
    var olang = that.data.olang,//来源语言
      oindex = that.data.oindex,//来源语言下标
      glang = that.data.glang,//目标语言
      gindex = that.data.gindex;//目标语言下标
    var gogaltxt = that.data.gogaltxt;//目标语言内容
    var origintxt = that.data.origintxt;//源语言内容

    //互换
    that.setData({
      olang: glang,
      oindex: gindex,
      glang: olang,
      gindex: oindex,
      gogaltxt: origintxt,
      origintxt: gogaltxt
    })    
  },
  //获取下标的值
  getIndexByArr: function (val, arry) {

    var index = 0;
    for (var i = 0; i < arry.length; i++) {
      if (arry[i] == val) {
        return i;
      }
    }
  },
  //获取需要翻译的值
  getorigintxt:function(e){
     var that=this;
     //输入的值
     var txtval=e.detail.value;

     that.setData({
       origintxt: txtval
     })
  },
  //获取翻译的值
  GetTranslate:function(){
    var that=this;
    wx.showLoading({
      title: '翻译中请耐心...',
      mask:true
    })
    //获取参数
    var origintxt = that.data.origintxt;//翻译的内容
    var origintype = langtool.getLangTipByIndex(that.data.oindex);//源语言
    var gogaltype = langtool.getLangTipByIndex(that.data.gindex);//目标语言
    
    //请求接口，获取翻译的内容
    wx.request({
      url: requesturl +'/translation/character',
      data: {
        q: decodeURIComponent(origintxt),
        to: gogaltype,
        from: origintype
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("翻译的结果:");
        console.log(res);
        var jieguo = JSON.parse(res.data);

        that.setData({
          gogaltxt: jieguo.trans_result[0].dst
        })
        wx.hideLoading();
      }
    })
  },
  //上传图片
  chkimgopt:function(){
    var that=this;

    //选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var tempFiles = res.tempFiles;
        console.log("文件名:" + tempFilePaths[0]);
        wx.showLoading({
          title: '正在上传中...',
        })

        //获取图片信息
        wx.getImageInfo({
          src: tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
            var width=res.width;
            var height = res.height;

            if (width>4096||height<15){
             wx.showModal({
               title: '提示',
               content: '上传图片的尺寸宽度不大于4096px，高度不小于15px',
               showCancel:false,               
             })
            } else if (tempFiles[0].size<4*1024){
              wx.showModal({
                title: '提示',
                content: '上传图片的尺寸不大于4M',
                showCancel: false,
              })
            }else{
              
              //上传图片，识别图片中的文字
              wx.uploadFile({
                url: requesturl +'/translation/picture',
                filePath: tempFilePaths[0],
                name: 'image',
                header: { 'Content-Type': 'multipart/form-data' },   
                success:function(res){
                   console.log("上传图片识别的结果:");
                   console.log(res);
                  var result=JSON.parse(res.data);

                  var stringval="";
                  for (var i = 0; i < result.words_result_num;i++){
                    stringval += result.words_result[i].words;
                  }
                  //请求接口获取到图片中的文字 
                  that.setData({
                    origintxt: stringval
                  })
                  //获取翻译的值
                  that.GetTranslate();
                  //隐藏
                  wx.hideLoading();
                }
              })
              
            }
          }
        })
        //结束标识符 
      }
    })
  },
  //清除操作
  clearopt:function(){
    var that=this;

    that.setData({
      origintxt: "",//翻译的内容
      gogaltxt: "",//翻译的结果
    })
  },
  //翻译部分
  translateopt: function () {
    var that = this;

    //获取参数部分
    var  oindex = that.data.oindex,//源语言下标
      origintxt = that.data.olang,//源语言类型
      gindex = that.data.gindex,//目标下标
      gogaltxt = that.data.glang,//目标语言类型
      origintxt = that.data.origintxt;//翻译的内容

    if (origintxt == "") {
      wx.showToast({
        title: '请输入翻译内容',
        mask: true,
        icon: "none",
        duration: 2000
      })
    } else {
      //获取翻译的值
      that.GetTranslate();
    }
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
    var that = this;
    //赋值数据
    var olangid = getApp().globalData.olangid;
    var glangid = getApp().globalData.glangid;

    var olang = langtool.getLangByIndex(olangid);
    var glang = langtool.getLangByIndex(glangid);

    that.setData({
      oindex: olangid,//来源语言下标
      olang: olang,
      gindex: glangid,//目标语言下标
      glang: glang,
      origintxt:"",
      gogaltxt:""
    })
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