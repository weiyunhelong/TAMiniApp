// component/webview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        console.log("weburl的值:");
        console.log(newVal);

        var that = this;
        that.setData({
          datalist: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})