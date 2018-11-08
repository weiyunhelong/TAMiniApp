// component/guide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("内容分组值:");
        console.log(newVal);
        //赋值
        this.setData({
          datalist: newVal.tab, //菜单部分
          listdata: newVal.data,//列表数据
          wenlist: newVal.data[0].content, //默认第一个列表值
          showtype: newVal.data[0].attr[0].count,//默认第一个展现形式
        })

      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    listdata:[],//全部的列表数据
    datalist: [], //菜单列表数据
    iswenmenu: false, //是否到达顶部
    fontt: 28, //字体大小
    chkmenuid: 0, //选中的菜单id
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    wenlist: [], //列表部分
    showtype: 1, //展现形式 1->瀑布列表 2->横向列表
    pageindex: 1, //分页的页码
    pagesize: 100, //分页的记录数
    fontt1: 32, //标题字体大小
    fontt2: 20, //内容文字大小
    backcolor:"",//颜色值
  },
  /**
   * 组件的方法列表
   */
  methods: {    
    // 点击标题切换当前页时改变样式
    switchNav: function (e) {
      var that = this;
      var cur = e.currentTarget.dataset.current;

      console.log("点击的菜单:");
      console.log(e);
      if (that.data.currentTab == cur) {
        return false;
      } else {
        that.setData({
          currentTab: parseInt(cur),
          wenlist: that.data.listdata[parseInt(cur)].content,
          showtype: that.data.listdata[parseInt(cur)].attr[0].count,//默认第一个展现形式
        })
        //滑动位置
        that.checkCor();
      }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function () {
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
    //跳转到详情页面
    goarticle: function (e) {
      var that = this;
      //参数部分
      var id = e.currentTarget.dataset.id;
      var title = e.currentTarget.dataset.title;
      var typeval = e.currentTarget.dataset.type;
      //页面的跳转
      wx.navigateTo({
        url: '../../pages/article/index?id=' + id + "&title=" + title + "&type=" + typeval
      })
    }
    
  }
})