// component/text/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        console.log("文字的值:");
        console.log(newVal);
        //赋值
        this.setData({
          name: newVal.data[0].name, //文字的值
          postion: newVal.attr[2].position_id, //文字的位置
          ismore: newVal.data[0].url_name!=""? true : false, //第二个显示为更多的值
          moretxt: "查看更多", //外链的名称
          url: newVal.data[0].url, //外链的地址
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "", //文字的值
    postion: 3, //文字位置 3->居左;4->居中;5->居右
    ismore: false, //显示更多
    url: "", //外链的地址
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    //查看更多
    gourlopt:function(){
      var that=this;
      
      //跳转到查看更多页面
      wx.navigateTo({
        url: that.data.url,
      })
    },
  }
})