// component/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          issearchfocus: newVal.issearchfocus,//是否搜索框聚焦
          searchtxt: newVal.searchtxt,//搜索的值
          isshowicon: newVal.isshowicon,//是否显示
          fontt: newVal.fontt,//字体大小
          showtype: newVal.showtype, //显示搜索的类型
          placeholder: newVal.placeholder
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    issearchfocus: false,//是否搜索框聚焦
    searchtxt: "",//搜索的值
    isshowicon: false,//是否显示列表
    fontt: 28,//字体大小
    showtype: 1, //显示搜索的类型
    placeholder: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取到搜索值
    getsearchtxt: function (e) {
      var that = this;

      var txtval = e.detail.value;

      that.setData({
        searchtxt: txtval,
        issearchfocus: false
      })
      //传递给父组件
      var getresult = {
        searchtxt: that.data.searchtxt,
        issearchfocus: that.data.issearchfocus,
        isshowicon: that.data.isshowicon
      }
      this.triggerEvent('getsearchval', getresult) //获取搜索的值
    },
    //聚焦到搜索框
    searchfopt: function () {
      var that = this;
      that.setData({
        issearchfocus: true
      })
    },
    //地图和列表形式的切换
    changeshow: function () {
      var that = this;

      var isshowicon = !that.data.isshowicon;
      that.setData({
        isshowicon: isshowicon
      })
      //传递给父组件
      var getresult = {
        searchtxt: that.data.searchtxt,
        isshowicon: that.data.isshowicon
      }
      this.triggerEvent('getsearchval', getresult) //获取搜索的值
    },
    //点击取消
    goback: function () {
      console.log("返回到上一页");
      var that = this;
      wx.navigateBack({
        delta: 1
      })
    },

  }
})
