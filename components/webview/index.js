// components/webview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          url: newVal.url, //外链地址
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    url: "", //外链地址
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
