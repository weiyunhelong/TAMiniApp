// component/content/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("内容卡片的值:");
        console.log(newVal);
        //赋值
        this.setData({
          datalist: newVal.data, //菜单的值
          showtype: newVal.attr[2].position_id, //菜单显示
          showcount: parseInt(newVal.attr[1].count), //菜单显示个数
          style: newVal.attr[0].style,//间距值
          isshowname: newVal.data[0].url_name_show
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist: [],//数据列表
    showtype: 1,//显示方式
    showcount: 0,//展示的个数
    style: 0,//间距值
    isshowname:false,//是否显示名称
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //点击菜单，跳转到详情页面
    gomenu: function (e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    },
    //点击横滑，跳转到详情页面
    godetail: function (e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  }
})
