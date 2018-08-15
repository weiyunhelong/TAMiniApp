// others/pages/translate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Originarray: ["中文", "英文", "西班牙语", "阿拉伯语", "孟加拉语", "葡萄牙语", "俄语", "日语", "德语", "韩语", "法语", "印地语"],//语言列表
    oindex: 0,//源语言下标
    Gogalarray: ["英文", "中文", "西班牙语", "阿拉伯语", "孟加拉语", "葡萄牙语", "俄语", "日语", "德语", "韩语", "法语", "印地语"],//语言列表
    gindex: 0,//目标下标
    origintxt: "",//翻译的内容
    gogaltxt:"",//翻译的结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //顶部的文字
    wx.setNavigationBarTitle({
      title: '翻译',
    })
    
    //翻译的内容
    var origintxt = wx.getStorageSync("origintxt");
    //接受参数
    var that=this;
    
    that.setData({
      oindex:parseInt(options.oindex),
      gindex: parseInt(options.gindex),
      origintxt: origintxt
    })
    //获取翻译的值
    that.GetTranslate();
  },
  //修改源头语言类型
  bindOriginChange: function (e) {
    var that = this;

    that.setData({
      oindex: e.detail.value
    })
  },
  //修改目标语言类型
  bindGogalChange: function (e) {
    var that = this;

    that.setData({
      gindex: e.detail.value
    })
  },
  //互换语言类型
  changeopt: function () {
    var that = this;
    //参数部分
    var Originarray = that.data.Originarray,//语言列表
      oindex = that.data.oindex,//源语言下标
      Gogalarray = that.data.Gogalarray,//语言列表
      gindex = that.data.gindex;
    //查询条件
    var otxt = Originarray[oindex];
    var gtxt = Gogalarray[gindex];

    //获取下标的值
    var oxiabiao = that.getIndexByArr(otxt, Gogalarray);
    var gxiabiao = that.getIndexByArr(gtxt, Originarray);

    that.setData({
      oindex: oxiabiao,
      gindex: gxiabiao
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
    //获取参数
    var origintxt = that.data.origintxt;//翻译的内容
    var origintype = that.data.origintype;//源语言
    var gogaltype = that.data.gogaltype;//目标语言

    that.setData({
      gogaltxt:"The Gold Coast is a Pacific coast city inQueensland, Australia with a population of 638,000. It borders Brisbane in the north and Tweed in New South Wales. Bond University, located in the city, is the only private university in Queensland; and one of the campuses on the Gold Coast is the largest campus of the public Griffith University."
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

        wx.showLoading({
          title: '正在上传中...',
        })

        //请求接口获取到图片中的文字 
        that.setData({
          origintxt: "图片中的文字"
        })
        //获取翻译的值
        that.GetTranslate();
        //隐藏
        wx.hideLoading();
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
    var Originarray = that.data.Originarray,//语言列表
      oindex = that.data.oindex,//源语言下标
      origintxt = Originarray[oindex],//源语言类型
      Gogalarray = that.data.Gogalarray,//语言列表
      gindex = that.data.gindex,//目标下标
      gogaltxt = Gogalarray[gindex],//目标语言类型
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