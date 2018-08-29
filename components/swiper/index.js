// components/homes/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        console.log("轮播图列表的值:");
        console.log(newVal);
        //赋值
        this.setData({
          imglist: newVal.imglist,//轮播图
          isshowop: newVal.imglist.length==1?true:false,//是否显示一张图
          cnname: newVal.cnname,//中文名称
          enname: newVal.enname,//英文名称
          isshowname: newVal.isshowname,//显示名称
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
    cnname: '',//中文名称
    enname: "",//英文名称
    isshowname:false,//显示名称
    issearch: true,//搜索按钮
    isweather: true,//天气预报
    weatherdata: {},//天气值
    fontt1: 0,
    fontt2: 0,
    fontt3: 0,
    fontt4: 0,
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached:function(){
    var that=this;
    //获取到轮播图数据
    var  imglist= [{
        id: 1,
        imgpath: "http://zhuweis.com/index/Header.png",
      }, {
        id: 2,
        imgpath: "http://zhuweis.com/index/Header.png",
      }, {
        id: 3,
        imgpath: "http://zhuweis.com/index/Header.png",
      }], //轮播图
      issearch= true, //搜索按钮
      isweather= true, //天气预报
      weatherdata= {
        wendu: 25,
        icon: "/resources/weather/sun.png"
      }, //字体大小
      fontt1= 60,
      fontt2= 28,
      fontt3= 82,
      fontt4= 20,
      cnname= "黄金海岸",
      enname= "Gold Coast",
      isshowname= true; //是否显示名称

    //赋值部分
    that.setData({
      imglist: imglist,//轮播图
      isshowop: imglist.length>1?true:false,//一张图
      cnname: cnname,//中文名称
      enname: enname,//英文名称
      isshowname: isshowname,//显示名称
      issearch: issearch,//搜索按钮
      isweather: isweather,//天气预报
      weatherdata: weatherdata,//天气值
      fontt1: fontt1,
      fontt2: fontt2,
      fontt3: fontt3,
      fontt4: fontt4,
    })
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
