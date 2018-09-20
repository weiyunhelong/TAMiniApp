// components/textcomponent/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("文本内容的值:");
        console.log(newVal);

        var that = this;
        //赋值
        that.setData({
          fontsize: newVal.fontsize,//字体大小
          fontcolor: newVal.fontcolor,//字体颜色
          backcolor: newVal.backcolor,//背景颜色
          aligntxt: newVal.aligntxt,//文字位置
          infotxt: newVal.infotxt,//信息内容
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fontsize: 0,//字体大小
    fontcolor: "#000",//字体颜色
    backcolor: "#fff",//背景颜色
    aligntxt: "left",//文字位置
    infotxt: "",//信息内容
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
