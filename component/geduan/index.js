// component/geduan/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("文字的值:");
        console.log(newVal);
        //赋值
        this.setData({
          datalist: newVal.attr[0].style, //文字的值
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
