// pages/article/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//文章id
    typeval:1,//攻略，游记，线路
    title:"",//标题
    iscollect:false,//是否收藏
    collectnum:40,//收藏个数
    viewnum:1159,//浏览个数
    info:"",//内容简介部分
    islangtxt:false,//是否是长标题
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     //接受参数
     that.setData({
       id:parseInt(options.id),
       typeval:parseInt(options.type),
       title: options.title,
       islangtxt: (options.title).length > 8 ? true : false
     })
      
     //设置顶部的文字
     wx.setNavigationBarTitle({
       title: options.title
     })

     //获取介绍内容
     that.getInfo();
     //更新浏览次数
     that.UpdateView();
  },
  //获取介绍内容
  getInfo:function(){
    var that=this;

    //参数部分
    var id=that.data.id;
    
    //获取到图文介绍
    var info = '<div class="_j_content" style="margin-top:30px;">\
      <div class="f-block" >\
        <div class="p-section" style="font-size:16px;">\
          澳大利亚拥有优质的沙滩和清澈的海水，冲浪与潜水等各式各样的水上活动无疑是在澳大利亚最不可错过的事情。在冲浪者天堂体验一次乘风破浪，或是在大堡礁潜入童话般的水下世界，都是这个神奇国度最新鲜、最刺激、最有魅力的旅行体验.\
    </div>\
      </div>\
      <div class="f-block" style="margin:20px 0;"> <h2>墨尔本周边的水上玩乐 </h2></div>\
        <div class="f-block">\
          <img class="_j_lazyload" style="height:284px;width:100%;border-radius:10px; display:block;" src="http://b2-q.mafengwo.net/s11/M00/07/F7/wKgBEFt2oRiAP0S3AAmeOgCsXF8579.png?imageView2%2F2%2Fw%2F680%2Fq%2F90">\
                </div>';

    that.setData({
      info: info
    })
  },
  
  //更新浏览次数
  UpdateView: function(){
    var that=this;
    //参数部分
    var id=that.data.id;//文章id

    that.setData({
      viewnum: that.data.viewnum+1
    })
  },
  //收藏操作
  collectopt:function(){
    var that=this;
    //参数部分
    var id = that.data.id;//文章id
    
    var iscollect = that.data.iscollect;

    //收藏个数的更新
    if (!iscollect){
      that.setData({
        collectnum: that.data.collectnum+1,
        iscollect: !iscollect
      })
    }else{
      that.setData({
        collectnum: that.data.collectnum - 1, 
        iscollect: !iscollect
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