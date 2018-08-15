// others/pages/guide/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtxt: "", //搜索的值
    issearchfocus: false,//是否聚焦
    tablist: [], //菜单部分
    currentTab: 0, //预设当前项的值
    filterchk:1,//排序的筛选
    guidelist:[],//游玩指南
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //菜单部分
    that.getmenu();
    
    //获取指南列表
    that.getGuide();
  },
  //搜索框聚焦
  searchfopt: function () {
    this.setData({
      issearchfocus: true
    })
  },
  //获取搜索框的值
  getsearchtxt: function (e) {
    var that = this;
    //参数部分
    var txtval = e.detail.value;
    this.setData({
      searchtxt: txtval,
      issearchfocus: false
    })
  },
  //菜单部分
  getmenu: function () {
    var that = this;

    //请求得到菜单
    var tablist = [{
      id: 0,
      name: '推荐',
    },
    {
      id: 1,
      name: '攻略',
    },
    {
      id: 2,
      name: '游记',
    },
    {
      id: 3,
      name: '线路',
    }
    ];
    that.setData({
      tablist: tablist
    })
  },
  // 点击标题切换当前页时改变样式
  switchNav: function (e) {
    var that = this;
    var id = e.target.dataset.id;

    if (that.data.currentTab == id) {
      return false;
    } else {
      that.setData({
        currentTab: parseInt(id)
      })
    }
  },
  //筛选
  filteropt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;

    that.setData({
      filterchk:parseInt(id)
    })
  },
  //获取指南列表
  getGuide:function(){
    var that=this;
    //参数部分
    var searchtxt=that.data. searchtxt, //搜索的值
      currentTab = that.data.currentTab, //预设当前项的值,0->推荐;1->攻略;2->游记;3->线路
      filterchk = that.data.filterchk;//排序的筛选,1->热门；2->时间

    //获取列表
    var guidelist=[
      {
        id:1,
        imgpath:"/resources/tu1.jpg",
        typeval:1,
        title:"黄金海岸初体验，最热门的8个地方",
        instro:"如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        iscollect:false,
        collectnum:40,
        viewnum:1159
      },
      {
        id: 2,
        imgpath: "/resources/tu2.jpg",
        typeval: 2,
        title: "七天就能环个洲，大小景点都玩遍",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        iscollect: true,
        collectnum: 40,
        viewnum: 1159
      },
      {
        id: 3,
        imgpath: "/resources/tu3.jpg",
        typeval: 3,
        title: "五天玩遍澳大利亚的秘密隆重揭晓",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        iscollect: true,
        collectnum: 40,
        viewnum: 1159
      },
      {
        id: 4,
        imgpath: "/resources/tu4.jpg",
        typeval: 1,
        title: "黄金海岸初体验，最热门的8个地方",
        instro: "如镜面一般冲浪者天堂的海滩，黄金海岸沙子又细又白又细又白又细又白",
        iscollect: true,
        collectnum: 40,
        viewnum: 1159
      },
    ];
    that.setData({
      guidelist: guidelist
    })
  },
  //点击跳转到详情页面
  godetail:function(e){
    var that=this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var typeval = e.currentTarget.dataset.type;
    var title = e.currentTarget.dataset.title;
    //跳转到详情
    wx.navigateTo({
      url: '../../../pages/article/index?id=' + id + "&type=" + typeval + "&title=" + title,
    })
  },
  //收藏操作
  collectopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    var guidelist = that.data.guidelist;
    var txtarry=[];

    //循环遍历，重置数据
    for (var i = 0; i < guidelist.length;i++){
      if (id== guidelist[i].id){
        txtarry[i]={
          id: guidelist[i].id,
          imgpath: guidelist[i].imgpath,
          typeval: guidelist[i].typeval,
          title: guidelist[i].title,
          instro: guidelist[i].instro,
          iscollect: !guidelist[i].iscollect,
          collectnum: !guidelist[i].iscollect ? guidelist[i].collectnum + 1 : guidelist[i].collectnum - 1,
          viewnum: guidelist[i].viewnum
        };
      }else{
        txtarry[i] = {
          id: guidelist[i].id,
          imgpath: guidelist[i].imgpath,
          typeval: guidelist[i].typeval,
          title: guidelist[i].title,
          instro: guidelist[i].instro,
          iscollect: guidelist[i].iscollect,
          collectnum: guidelist[i].collectnum,
          viewnum: guidelist[i].viewnum
        };
      }
    }
    //赋值语句
    that.setData({
      guidelist: txtarry
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