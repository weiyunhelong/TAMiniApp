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
       title: options.title
     })
      
     //设置顶部的文字
     wx.setNavigationBarTitle({
       title: options.title,
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
    var info = '<div id="intro" class="intro fbproitem">\
      <h1>产品介绍</h1>\
      <div class="content">\
        <div class="intro-info">\
          <h2><i class="i1"> </i><span>产品亮点</span> <i class="i2"> </i></h2>\
            <div class="info-main">\
              <p><strong style="color: rgb(15, 36, 62);"> 摩尔外堡礁 </strong><br></p> <p>摩尔外堡礁是世界上规模最大、景色最美的生物活体珊瑚大堡礁群。这里未被过度开发，且面临海沟海水较深、能见度高，能让您体验到大堡礁真正的自然生态环境。<br><br><span style="color: rgb(15, 36, 62);" > <strong>珊瑚魔术号Reef Magic </strong></span> <br></p><p>现代高速双体船“珊瑚魔术号”，往返位于外海大堡礁的海上世界平台。在那里您可以享受4-5小时大堡礁体验服务，包括浮潜、玻璃底船和半潜水艇、海底观景台、珊瑚礁触摸和丰盛的自助午餐。<br><img src="http:// www.rruu.com/img/upload2/20170425/902dbefd-8c25-4eb4-827e-c6fd2a5a2cc3.jpg"></p>\
                </div>\
                </div>\
                <div class="intro-info">\
                  <h2><i class="i1"> </i><span>游船比对</span> <i class="i2"> </i></h2>\
                    <div class="info-main">\
                      <table width="800" height="368" border="0" cellpadding="0" cellspacing="0"> <tbody><tr class="firstRow"> <td><a href="#" target="_blank"> <img src="http://www.rruu.com/img/pic/2017/20170425/20170425150856994.jpg" width="375" height="368" alt=""> </a></td> <td><a href="#" target="_blank"> <img src="http://www.rruu.com/img/pic/2017/20170425/20170425150911228.jpg" width="375" height="368" alt=""> </a></td> </tr></tbody> </table>\
                        </div>\
                        </div>\
                        <div class="intro-info">\
                          <h2><i class="i1"> </i><span>行程参考</span> <i class="i2"> </i></h2>\
                            <div class="info-main">\
                              <div class="line">\
                                <span class="time"> 08: 00 </span>\
                                  <span class="icon"> <i></i></span>\
                                    <div class="line-info">\
                                      <p></p><p><strong><span style="color: rgb(15, 36, 62);">码头换票</span> </strong><br>按照集合时间，自行前往码头换票登船<br><span style="color: rgb(255, 0, 0);">*含接送套餐的游客，司机从凯恩斯酒店接载客人，前往凯恩斯码头换票。</span> </p><p></p>\
                                      </div>\
                                      </div>\
                                      <div class="line">\
                                        <span class="time"> 09: 00 </span>\
                                          <span class="icon"> <i></i></span>\
                                            <div class="line-info">\
                                              <p></p><p><strong><span style="color: rgb(15, 36, 62);">游船启程</span> </strong><br>三层双体游船起航，驶向摩尔外堡礁平台，行进时长约90分钟，途中会进行完整的深潜安全讲解</p> <p></p>\
                                              </div>\
                                              </div>\
                                              <div class="line">\
                                                <span class="time"> 10: 30 </span>\
                                                  <span class="icon"> <i></i></span>\
                                                    <div class="line-info">\
                                                      <p></p><p><strong><span style="color: rgb(15, 36, 62);">海平台游玩</span> </strong><br>到达海外平台，在此开展一些列活动，包括浮潜，半潜艇，玻璃底船体验等</p> <p></p>\
                                                      </div>\
                                                      </div>\
                                                      <div class="line ">\
                                                        <span class="time"> 12: 00 </span>\
                                                          <span class="icon"> <i></i></span>\
                                                            <div class="line-info">\
                                                              <p></p><p><span style="color: rgb(15, 36, 62);"><strong>自助午餐<br></strong> </span>包括鲜虾、意大利面、肉类、沙拉、各种热带水果等丰富的热菜与冷菜可供您选择</p> <p></p>\
                                                              </div>\
                                                              </div>\
                                                              <div class="line">\
                                                                <span class="time"> 15: 30 </span>\
                                                                  <span class="icon"> <i></i></span>\
                                                                    <div class="line-info">\
                                                                      <p></p><p><span style="color: rgb(15, 36, 62);"><strong>游船启程返回凯恩斯</strong> </span><strong><br></strong> 返程途中，您可沿途欣赏大堡礁美景，或是在船舱享用茶或咖啡，稍事休息 <strong> <br></strong></p> <p></p>\
                                                                        </div>\
                                                                        </div>\
                                                                        <div class="line last">\
                                                                          <span class="time"> 17: 00 </span>\
                                                                            <span class="icon"> <i></i></span>\
                                                                              <div class="line-info">\
                                                                                <p></p><p><span style="color: rgb(15, 36, 62);"><strong>抵达凯恩斯码头</strong> </span><strong><br></strong> 无接送套餐的游客，自行返回酒店，结束一天充实的旅程 <br> <span style="color: rgb(255, 0, 0);">* 含接送套餐的游客，司机将送您反回酒店，返回凯恩斯市区酒店时间约为17: 15，返回北部海滩酒店时间约为17: 30 </span></p> <p></p>\
                                                                                  </div>\
                                                                                  </div>\
                                                                                  <p class="notice" >* 本行程描述仅供参考，实际以当天安排为准。</p>\
                                                                                    <div> <p></p><p></p> <p><span style="color: rgb(0, 0, 0);" > <strong>【游玩参考】<br><img src="http://www.rruu.com/img/upload2/20170425/45ca9fe0-30a9-462b-aa06-e075b6a36530.jpg" width="375"> <br><span style="color: rgb(255, 0, 0);" > </span></strong> <span style="color: rgb(255, 0, 0);" > </span></span> <br></p><p></p> </div>\
                                                                                      </div>\
                                                                                      </div>\
                                                                                      </div>\
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