// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touxiang: "", //头像
    nickName: "", //昵称
    islogin: false, //是否授权登录
    tabmenuid: 2, //菜单部分;1->我的订单，2->我的收藏,3->我的点评
    isshowtop: false,//是否隐藏顶部
    orderlist: [{
      id: 1,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
      status: 1,
      cnname: "12门徒岩",
      enname: "12 Apostles",
      address: "Great Ocean Rd and Booringa Rd, Princetown, Victoria, 3269"
    },
    {
      id: 2,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
      status: 0,
      cnname: "悉尼歌剧院",
      enname: "Sydney Opera House",
      address: " Macquarie Street, Sydney CBD NSW 2000"
    },
    ], //订单列表
    collecttab: 1, //收藏的类型；1->内容，2->地点
    guidelist: [{
      id: 1,
      imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%202.png",
      typeval: 1,
      title: "黄金海岸初体验，最热门的8个地方",
      instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
      isTouchMove: false,
      collectnum: 40,
      viewnum: 1159
    },
    {
      id: 2,
      imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%203.png",
      typeval: 2,
      title: "七天就能环个洲，大小景点都玩遍",
      instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
      isTouchMove: false,
      collectnum: 40,
      viewnum: 1159
    },
    {
      id: 3,
      imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%204.png",
      typeval: 3,
      title: "五天玩遍澳大利亚的秘密隆重揭晓",
      instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
      isTouchMove: false,
      collectnum: 40,
      viewnum: 1159
    },
    {
      id: 4,
      imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap.png",
      typeval: 1,
      title: "黄金海岸初体验，最热门的8个地方",
      instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
      isTouchMove: false,
      collectnum: 40,
      viewnum: 1159
    },
      {
        id: 1,
        imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%202.png",
        typeval: 1,
        title: "黄金海岸初体验，最热门的8个地方",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        isTouchMove: false,
        collectnum: 40,
        viewnum: 1159
      },
      {
        id: 2,
        imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%203.png",
        typeval: 2,
        title: "七天就能环个洲，大小景点都玩遍",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        isTouchMove: false,
        collectnum: 40,
        viewnum: 1159
      },
      {
        id: 3,
        imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap%204.png",
        typeval: 3,
        title: "五天玩遍澳大利亚的秘密隆重揭晓",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        isTouchMove: false,
        collectnum: 40,
        viewnum: 1159
      },
      {
        id: 4,
        imgpath: "http://zhuweis.com/index/Articles%20lazy%20loading/Bitmap.png",
        typeval: 1,
        title: "黄金海岸初体验，最热门的8个地方",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        isTouchMove: false,
        collectnum: 40,
        viewnum: 1159
      }
    ], //收藏文字列表
    sceniclist: [{
      id: 1,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
      cnname: "华纳电影世界",
      enname: "Warner Bros. Movie World",
      distance: "1.5km",
      commentnum: 2331,
      price: 281,
      isTouchMove: false
    },
    {
      id: 2,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
      cnname: "可伦宾野生动物园",
      enname: "Currumbin Wildlife Sanctuary",
      distance: "1.8km",
      commentnum: 1332,
      price: 281,
      isTouchMove: false
    },
    {
      id: 3,
      imgpath: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
      cnname: "春溪国家公园",
      enname: "Warner Bros. Movie World",
      distance: "2.0km",
      commentnum: 1332,
      price: 281,
      isTouchMove: false
    },
      {
        id: 1,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
        cnname: "华纳电影世界",
        enname: "Warner Bros. Movie World",
        distance: "1.5km",
        commentnum: 2331,
        price: 281,
        isTouchMove: false
      },
      {
        id: 2,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%203.png",
        cnname: "可伦宾野生动物园",
        enname: "Currumbin Wildlife Sanctuary",
        distance: "1.8km",
        commentnum: 1332,
        price: 281,
        isTouchMove: false
      },
      {
        id: 3,
        imgpath: "http://zhuweis.com/index/Attractions/Bitmap%204.png",
        cnname: "春溪国家公园",
        enname: "Warner Bros. Movie World",
        distance: "2.0km",
        commentnum: 1332,
        price: 281,
        isTouchMove: false
      }
    ], //景点列表
    commentlist:[
      {
        id: 1,
        time: "2018-08-31",
        fen:5,
        comment:"太好玩了，根本不想离开，每一样设施都很有趣，很值得花一天时间过来，期待下次再来刷！",
        commentobj:{
          imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          cnname: "春溪国家公园",
          enname: "Warner Bros. Movie World",
          attr: "￥281/人",
          id:1
        },       
        isTouchMove: false
      },
      {
        id: 2,
        time: "2018-08-30",
        fen: 4,
        comment: "动物们都好可爱，袋鼠宝宝自己凑上来讨吃的，炒鸡萌！",
        commentobj: {
          imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          cnname: "春溪国家公园",
          enname: "Warner Bros. Movie World",
          attr: "￥281/人",
          id: 1
        },
        isTouchMove: false
      },
      {
        id: 3,
        time: "2018-08-29",
        fen: 3,
        comment: "动物们都好可爱，袋鼠宝宝自己凑上来讨吃的，炒鸡萌！",
        commentobj: {
          imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          cnname: "春溪国家公园",
          enname: "Warner Bros. Movie World",
          attr: "￥281/人",
          id: 1
        },
        isTouchMove: false
      },
      {
        id: 4,
        time: "2018-08-29",
        fen: 5,
        comment: "动物们都好可爱，袋鼠宝宝自己凑上来讨吃的，炒鸡萌！",
        commentobj: {
          imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          cnname: "春溪国家公园",
          enname: "Warner Bros. Movie World",
          attr: "￥281/人",
          id: 1
        },
        isTouchMove: false
      },
      {
        id: 4,
        time: "2018-08-28",
        fen: 5,
        comment: "太好玩了，根本不想离开，每一样设施都很有趣，很值得花一天时间过来，期待下次再来刷！",
        commentobj: {
          imgpath: "http://zhuweis.com/index/Attractions/Bitmap%202.png",
          cnname: "春溪国家公园",
          enname: "Warner Bros. Movie World",
          attr:"￥281/人",
          id: 1
        },
        isTouchMove: false
      }
    ],//评价列表
    xinglist:[1,2,3,4,5],//星列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //编辑操作
  goeditopt: function () {
    wx.showToast({
      title: '编辑操作',
      icon: 'none',
      mask: true,
      duration: 2000
    })
  },
  //登录操作
  onGotUserInfo: function (e) {
    var that = this;
    //获取用户信息
    var userInfo = e.detail.userInfo;

    that.setData({
      touxiang: userInfo.avatarUrl, //头像
      nickName: userInfo.nickName, //昵称
      islogin: true, //是否授权登录
    })
    getApp().globalData.userInfo = userInfo;
  },
  //菜单的切换
  menuchkopt: function (e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;

    that.setData({
      tabmenuid: parseInt(id)
    })
    //
  },
  //收藏的类型
  collecttabopt: function (e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    that.setData({
      collecttab: parseInt(id)
    })
  },
  //手指触摸动作开始 记录起点X坐标
  ntouchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.guidelist.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      nstartX: e.changedTouches[0].clientX,
      nstartY: e.changedTouches[0].clientY,
      guidelist: this.data.guidelist
    })
  },
  //滑动事件处理
  ntouchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.nstartX, //开始X坐标
      startY = that.data.nstartY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    console.log("滑动的距离:" + angle)
    var guidelist = that.data.guidelist;
    guidelist.forEach(function (v, i) {
      v.isTouchMove = false;
      //滑动距离度角 return
      if (i == index) {
        if (touchMoveX > startX) //右滑
        {
          v.isTouchMove = false;
        } else if (Math.abs(angle) > 80) { //左滑
          v.isTouchMove = true;
        }
      }
    })
    //更新数据
    that.setData({
      guidelist: guidelist
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X;
    var _Y = end.Y - start.Y;

    return _X;
  },
  //删除事件
  ndel: function (e) {
    this.data.guidelist.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      guidelist: this.data.guidelist
    })

    //参数部分
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '删除成功',
      mask: true
    })
  },

  //手指触摸动作开始 记录起点X坐标
  jtouchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.sceniclist.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      jstartX: e.changedTouches[0].clientX,
      jstartY: e.changedTouches[0].clientY,
      sceniclist: this.data.sceniclist
    })
  },
  //滑动事件处理
  jtouchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.jstartX, //开始X坐标
      startY = that.data.jstartY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    that.data.sceniclist.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动距离度角 return
      if (i == index) {
        if (touchMoveX > startX) //右滑
        {
          v.isTouchMove = false;
        } else if (Math.abs(angle) > 80) { //左滑
          v.isTouchMove = true;
        }
      }
    })
    //更新数据
    that.setData({
      sceniclist: that.data.sceniclist
    })
  },
  //删除事件
  jdel: function (e) {
    this.data.sceniclist.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      sceniclist: this.data.sceniclist
    })
    //参数部分
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '删除成功',
      mask: true
    })
  },
  //收藏内容的点击
  goarticledetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    var typeval = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../article/index?id=' + id + "&type=" + typeval + "&title=" + title,
    })
  },
  //收藏景点的点击
  goscenicdetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var typeval = e.currentTarget.dataset.type;
    //页面的跳转
    wx.navigateTo({
      url: '../info/index?id=' + id + "&type=" + typeval,
    })
  },

  //手指触摸动作开始 记录起点X坐标
  ctouchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.commentlist.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      jstartX: e.changedTouches[0].clientX,
      jstartY: e.changedTouches[0].clientY,
      commentlist: this.data.commentlist
    })
  },
  //滑动事件处理
  ctouchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.jstartX, //开始X坐标
      startY = that.data.jstartY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    that.data.commentlist.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动距离度角 return
      if (i == index) {
        if (touchMoveX > startX) //右滑
        {
          v.isTouchMove = false;
        } else if (Math.abs(angle) > 80) { //左滑
          v.isTouchMove = true;
        }
      }
    })
    //更新数据
    that.setData({
      commentlist: that.data.commentlist
    })
  },
  //删除事件
  cdel: function (e) {
    this.data.commentlist.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      commentlist: this.data.commentlist
    })
    //参数部分
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '删除成功',
      mask: true
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
    var that = this;

    that.setData({
      isshowtop: false
    })
    // 隐藏导航栏加载框
    wx.hideNavigationBarLoading();
    // 停止下拉动作
    wx.stopPullDownRefresh();
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

  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log(e)
    //是否显示置顶
    if (e.scrollTop > 200) {
      this.setData({
        isshowtop: true
      });
    } else {
      this.setData({
        //isshowtop: false
      });
    }
  },
})