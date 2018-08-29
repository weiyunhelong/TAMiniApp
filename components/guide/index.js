// components/guide/index.js
var guidetool = require('../../utils/guidedata.js'); //模拟数据

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        console.log("游玩指南菜单值:");
        console.log(newVal);
        //赋值
        this.setData({
          iswenmenu: newVal.iswenmenu, //是否到达顶部
          guideheight: newVal.guideheight, //内容的高度
        })
        //初始化数据
        this.InitData();
      }
    }
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function() {
    var that = this;
    //菜单数据
    var datalist = [{
          id: 0,
          name: '推荐',
          fontcolor: "#007CCE",
          showtype: 1,
          pagesize: 4
        },
        {
          id: 3,
          name: '攻略',
          fontcolor: "#E36E5B",
          showtype: 2,
          pagesize: 6
        },
        {
          id: 2,
          name: '游记',
          fontcolor: "#EA9F10",
          showtype: 2,
          pagesize: 6
        },
        {
          id: 1,
          name: '线路',
          fontcolor: "#53C078",
          showtype: 1,
          pagesize: 4
        },
      ], //菜单列表数据
      fontt = 28, //字体大小
      showtype = datalist[0].showtype, //展示方式 1:瀑布类型 2:列表展示
      fontt1 = 32, //标题字体大小
      fontt2 = 20; //内容文字大小

    //赋值部分  
    that.setData({
      datalist: datalist, //菜单列表数据
      iswenmenu: false, //是否到达顶部
      fontt: fontt, //字体大小
      showtype: showtype, //展示方式 1:瀑布类型 2:列表展示
      fontt1: fontt1, //标题字体大小
      fontt2: fontt2, //内容文字大小
    })
    //初始化数据
    this.InitData();
  },
  /**
   * 组件的初始数据
   */
  data: {
    datalist: [], //菜单列表数据
    iswenmenu: false, //是否到达顶部
    fontt: 28, //字体大小
    chkmenuid: 0, //选中的菜单id
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    wenlist: [], //列表部分
    showtype: 1, //展现形式 1->瀑布列表 2->横向列表
    pageindex: 1, //分页的页码
    pagesize: 4, //分页的记录数
    fontt1: 32, //标题字体大小
    fontt2: 20, //内容文字大小
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击标题切换当前页时改变样式
    switchNav: function(e) {
      var that = this;
      var cur = e.target.dataset.current;
      var id = e.target.dataset.id;
      var typeval = e.target.dataset.type;
      var pagesize = e.target.dataset.pagesize;

      console.log("点击的菜单:");
      console.log(e);
      if (that.data.currentTab == cur) {
        return false;
      } else {
        that.setData({
          currentTab: parseInt(cur),
          chkmenuid: parseInt(id),
          showtype: parseInt(typeval),
          pageindex:1,
          pagesize: parseInt(pagesize)
        })
        //初始化数据
        that.InitData();
        //滑动位置
        that.checkCor();
      }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function() {
      var that = this;
      if (that.data.currentTab > 2) {
        var num = parseInt(that.data.currentTab / 2);
        that.setData({
          scrollLeft: 150 * num
        })
      } else {
        that.setData({
          scrollLeft: 0
        })
      }
    },
    //初始化数据
    InitData: function() {
      var that = this;

      //是否到达顶部
      var iswenmenu = that.data.iswenmenu;
      var id = that.data.chkmenuid;
      var pageindex = that.data.pageindex;
      var pagesize = that.data.pagesize;
      //查询数据
      var wenlist =[];
      if (pageindex==1){
        wenlist=guidetool.getpagedata(pageindex, id, pagesize);
      }else{
        var newwenlist = guidetool.getpagedata(pageindex, id, pagesize);
        wenlist = wenlist.concat(newwenlist);
      }     
      //赋值数据
      that.setData({
        wenlist: wenlist
      })
    },    
    //跳转到详情页面
    goarticle: function(e) {
      var that = this;
      //参数部分
      var id = e.currentTarget.dataset.id;
      var title = e.currentTarget.dataset.title;
      var typeval = e.currentTarget.dataset.type;
      //页面的跳转
      wx.navigateTo({
        url: '../../pages/article/index?id=' + id + "&title=" + title + "&type=" + typeval
      })
    },
    //上拉加载
    refresh:function(){
      console.log("上拉加载>>>");
    },
    //加载更多
    loadMore:function(){
      console.log("加载更多>>>");
      var that=this;
      var pageindex = that.data.pageindex;

      that.setData({
        pageindex: pageindex+1
      })
      //加载列表数据
      that.InitData();
    },
  }
})