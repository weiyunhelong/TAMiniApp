// pages/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //id
    typeval:1,//类型
    topimg: "", //顶部的图片
    iscollect: true, //是否收藏
    iscollectopt:false,//是否进行收藏点击操作
    cnname: "华纳电影世界", //中文名称
    enname: "Warner Bros. Movie World", //英文名称
    xinglist: [1, 2, 3, 4, 5], //星列表
    lat: 31.230416, //纬度
    lng: 121.473701, //经度
    concatnum: "114", //联系电话
    commentnum: 1322, //评论个数
    introduce: "华纳电影世界是华纳兄弟主题公园的三大主题公园之一，华纳兄弟电影世界主题公园(Warner Bros. Movie World) 位于澳大利亚昆士兰州的黄金海岸冲浪者天堂以北18公里处，是由两大电影公司——美国华纳兄弟电影公司、乡村巡回表演团及澳大利亚首席旅游业促进机构、海洋世界于1981年联合投资兴建。", //门票介绍
    moreintroduce: "华纳电影世界是华纳兄弟主题公园的三大主题公园之一，华纳兄弟电影世界主题公园(Warner Bros. Movie World) 位于澳大利亚昆士兰州的黄金海岸冲浪者天堂以北18公里处，是由两大电影公司——美国华纳兄弟电影公司、乡村巡回表演团及澳大利亚首席旅游业促进机构、海洋世界于1981年联合投资兴建。华纳电影世界是华纳兄弟主题公园的三大主题公园之一，华纳兄弟电影世界主题公园(Warner Bros. Movie World) 位于澳大利亚昆士兰州的黄金海岸冲浪者天堂以北18公里处，是由两大电影公司——美国华纳兄弟电影公司、乡村巡回表演团及澳大利亚首席旅游业促进机构、海洋世界于1981年联合投资兴建。", //门票介绍
    ticket: "成人13岁以上；儿童价3-13岁；0-2岁儿童免费，儿童需成人陪同入园", //门票
    start_time: "9:30", //开始时间
    end_time: "17:00", //结束时间
    address: "Great Ocean Rd and Booringa Rd, Princetown, Victoria, 3269", //地址
    ticketlist: [{
        id: 1,
        title: "成人票",
        price: 281,
        info: "平均15分钟出票 出票后可立即入园",
        tip: "用户预订须知内容"
      },
      {
        id: 2,
        title: "儿童票",
        price: 140,
        info: "平均15分钟出票 出票后可立即入园",
        tip: "用户预订须知内容"
      },
    ], //门票列表
    chktab: true, //是否选中图库
    commentlist: [
      {
        id: 1,
        touxiang: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1810050752,207505815&fm=200&gp=0.jpg",
        wxname: "kpway",
        title: "DC粉必逛的景",
        time: "2018年7月27日",
        fen: 4,
        info: "非常赞，特别是蝙蝠侠的出现，先是蝙蝠车游行，沿着main street，到荣誉喷泉来回一圈，最后到主路口一场秀。唯一遗憾没有办法和蝙蝠侠单独合影..."
      },
      {
        id: 2,
        touxiang: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727697253,4090683844&fm=27&gp=0.jpg",
        wxname: "JennyS141",
        title: "很有趣，度过了愉快的一天",
        time: "2018年6月29日",
        fen: 4,
        info: "我去过2次了，觉得还不错，第一次其实最好的，因为有巡游，现在可能成本问题啦，变成是久不久有人偶或者表演出场一下，就变成没有固定的巡游那种大规模的..."
      },
      {
        id: 3,
        touxiang: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3562478719,2326707112&fm=200&gp=0.jpg",
        wxname: "Tripntjc",
        title: "我觉得不错",
        time: "2018年6月17日",
        fen: 4,
        info: "我们在影城呆了短短两天。我的孩子们喜欢主街的气氛和建筑的外观，还有音乐和人物。每个人物在拍照片前都简短地和我的孩子们交谈过，非常友好！他们喜..."
      },
      {
        id: 4,
        touxiang: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1810050752,207505815&fm=200&gp=0.jpg",
        wxname: "kpway",
        title: "DC粉必逛的景",
        time: "2018年7月27日",
        fen: 4,
        info: "非常赞，特别是蝙蝠侠的出现，先是蝙蝠车游行，沿着main street，到荣誉喷泉来回一圈，最后到主路口一场秀。唯一遗憾没有办法和蝙蝠侠单独合影..."
      },
      {
        id: 5,
        touxiang: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727697253,4090683844&fm=27&gp=0.jpg",
        wxname: "JennyS141",
        title: "很有趣，度过了愉快的一天",
        time: "2018年6月29日",
        fen: 4,
        info: "我去过2次了，觉得还不错，第一次其实最好的，因为有巡游，现在可能成本问题啦，变成是久不久有人偶或者表演出场一下，就变成没有固定的巡游那种大规模的..."
      },
      {
        id: 6,
        touxiang: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3562478719,2326707112&fm=200&gp=0.jpg",
        wxname: "Tripntjc",
        title: "我觉得不错",
        time: "2018年6月17日",
        fen: 4,
        info: "我们在影城呆了短短两天。我的孩子们喜欢主街的气氛和建筑的外观，还有音乐和人物。每个人物在拍照片前都简短地和我的孩子们交谈过，非常友好！他们喜..."
      },
    ], //评论列表
    tusku: [
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1810050752,207505815&fm=200&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3727697253,4090683844&fm=27&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3562478719,2326707112&fm=200&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1679707090,2268156548&fm=200&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1145214342,184623774&fm=200&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3467170169,1132186902&fm=200&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4034025264,645104485&fm=27&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=162199384,890009541&fm=27&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2362552494,4184600346&fm=27&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1732813844,247433158&fm=200&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=934655643,3695220288&fm=27&gp=0.jpg"
    ], //图库
    xingnum: 0, //评价打分
    commentinfo: "", //评价的内容
    tulist: [], //评价的图片
    floorstatus:false,//是否显示到达顶部
    winheight:0,//屏幕的高度
    isshowmenu:false,//是否将图库和评论置顶
    showmore:"阅读更多",//基本信息显示更多
    isshowmore:false,//是否显示更多
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
  //收藏操作
  collectopt: function() {
    var that = this;

    that.setData({
      iscollect: !that.data.iscollect,
      iscollectopt:true
    })
    setTimeout(function(){
      that.setData({
        iscollectopt: false
      })
    },500);
  },
  //地图
  gomap: function() {
    //
    var that = this;
    //打开地图显示信息
    wx.openLocation({
      latitude: that.data.lat,
      longitude: that.data.lng,
      name:'华纳电影世界'
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

  //导航去这儿
  daohangopt: function() {

    var that = this;

    //打开地图
    wx.openLocation({
      latitude: that.data.lat, //纬度
      longitude: that.data.lng, //经度,
      name: "华纳电影世界"
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