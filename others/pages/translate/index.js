// others/pages/translate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    origintype:"中文",//源语言
    gogaltype:"英文",//目标语言
    origintxt:"",//翻译的内容
    gogaltxt:"",//翻译的结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '翻译',
    })
  },
  //切换语言
  changeopt:function(){
    var that=this;
    var temp = that.data.origintype;
    that.setData({
      origintype: that.data.gogaltype,
      gogaltype: temp
    })
  },
  //获取需要翻译的值
  getorigintxt:function(e){
     var that=this;
     //输入的值
     var txtval=e.detail.value;

     that.setData({
       origintxt: txtval
     })
     //获取翻译的值
     that.GetTranslate();
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