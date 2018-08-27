// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        this.setData({
          tabbarlist: newVal.tabbarlist, //底部的tabbar数据
          chktabindex: newVal.chktabindex,//选中的下标
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarlist: [], //底部的tabbar数据
    chktabindex: 0, //点中下标
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navTo: function(e) {
      var that=this;
      //点击的下标
      var index = e.currentTarget.dataset.index;
      var url = e.currentTarget.dataset.url;
      //切换菜单
      if (index != that.data.chktabindex) 
      {
        wx.redirectTo({
          url: url
        })
        wx.switchTab({
          url: url,
        })
      }
    }
  }
})