// pages/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//产品id
    typeval:0,//类型
    title:"",//标题
    xinglist:[1,2,3,4,5],//行列表
    fen:0,//打分
    comment:"",//评价内容
    maxnum:144,//评价的字数限制
    commentnum:0,//剩余的字数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接受参数
    that.setData({
      id: parseInt(options.id) ,//产品id
      typeval: parseInt(options.typeval),//类型      
      title: options.title,//标题
      fen: parseInt(options.fen),//打分
    })    
    //设置标题
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },
  //打分
  chkxingopt:function(e){
    var that=this;
    console.log(e);
    //参数部分
    var index = e.currentTarget.dataset.index;
    that.setData({
      fen: index+1
    })
  },
  //获取输入的内容
  getcomment:function(e){
    var that = this;
    //参数部分
    var txtval = e.detail.value;
    var maxnum = that.data.maxnum;

    that.setData({
      comment: txtval,
      commentnum: txtval.length
    })
  },
  //发表  
  publishopt:function(){
    var that=this;
    //参数部分
    var fen = that.data.fen;//打分
    var comment = that.data.comment;//评价内容

    if(fen==0){
      wx.showToast({
        title: '请给出您的评价',
        mask:true,
        duration:2000,
        icon:'none'
      })
    } else if (comment == '') {
      wx.showToast({
        title: '请输入评价内容',
        mask: true,
        duration: 2000,
        icon: 'none'
      })
    }else{

      wx.showToast({
        title: '评价成功',
        mask: true,
        duration: 2000,
        success:function(){
          //返回到上一个页面
          wx.navigateBack({
            delta: 1
          })
        }
      })     
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