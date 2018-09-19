// components/tab/index.js
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
          tablist: newVal.datalist,
          fontt: newVal.fontt, //字体大小
          showtype: newVal.showtype, //展示方式 1:瀑布类型 2:列表展示
          fontt1: newVal.fontt1, //标题字体大小
          fontt2: newVal.fontt2 //内容文字大小
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tablist:[],
    fontt: 0, //字体大小
    showtype:1, //展示方式 1:瀑布类型 2:列表展示
    fontt1: 0, //标题字体大小
    fontt2: 0 //内容文字大小
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
