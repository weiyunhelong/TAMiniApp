// component/menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("菜单的值:");
        console.log(newVal);
        //赋值
        this.setData({
          datalist: newVal.detail.data, //菜单的值
          showtype: newVal.detail.attr[2].position_id, //菜单显示
          showcount: parseInt(newVal.detail.attr[1].count) , //菜单显示个数
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist:[],//数据列表
    showtype:1,//显示方式
    showcount:0,//展示的个数
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    //点击菜单，跳转到详情页面
    gomenu:function(e){
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    },
    //点击横滑，跳转到详情页面
    godetail:function(e){
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  }
})
