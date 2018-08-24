// components/homes/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          imglist: newVal.imglist,//轮播图
          isshowop: newVal.imglist.length==1?true:false,//是否显示一张图
          issearch: newVal.issearch,//搜索按钮
          isweather: newVal.isweather,//天气预报
          weatherdata: newVal.weatherdata,//天气值
          fontt1: newVal.fontt1,//中文字
          fontt2: newVal.fontt2,//英文字
          fontt3: newVal.fontt3,//温度
          fontt4: newVal.fontt4,//未来一周
        })
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mode: "scaleToFill",
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    imglist: [],//轮播图
    isshowop:true,//一张图
    issearch: true,//搜索按钮
    isweather: true,//天气预报
    weatherdata: {},//天气值
    fontt1: 0,
    fontt2: 0,
    fontt3: 0,
    fontt4: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //搜索按钮的点击
    getsearch:function(){
      wx.navigateTo({
        url: '../../pages/search/index',
      })
    },
    //天气的点击
    goweather:function(){
      wx.navigateTo({
        url: '../../pages/weather/index',
      })
    },
    //轮播图的点击
    gointro:function(e){
      var id=e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../pages/info/index?id='+id,
      })
    }
  }
})
