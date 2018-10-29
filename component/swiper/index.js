// component/swiper/index.js
var timer = "";
var requesturl = getApp().globalData.requesturl;

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

        var that = this;
        //赋值
        that.setData({
          imglist: newVal.imglist,//轮播图
          isshowop: newVal.imglist.length == 1 ? false : true,//是否显示一张图
          cityname: newVal.cityname,//城市名称
          cnname: newVal.cnname,//中文名称
          enname: newVal.enname,//英文名称
          isshowname: newVal.isshowname,//显示名称
          issearch: newVal.issearch,//搜索按钮
          isweather: newVal.isweather,//天气预报
          fontt1: newVal.fontt1,//中文字
          fontt2: newVal.fontt2,//英文字
          fontt3: newVal.fontt3,//温度
          fontt4: newVal.fontt4,//未来一周
          searchtip: newVal.searchtip,//搜索的提示文字
        })
        //获取天气的值
        that.GetWeather();

        //一个小时获取新的天气
        timer = setInterval(function () {
          that.GetWeather();
        }, 3600 * 1000);
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
    interval: 4000,
    duration: 500,
    imglist: [],//轮播图
    isshowop: true,//一张图
    cnname: '',//中文名称
    enname: "",//英文名称
    isshowname: false,//显示名称
    issearch: true,//搜索按钮
    isweather: true,//天气预报
    weatherdata: {},//天气值
    fontt1: 0,
    fontt2: 0,
    fontt3: 0,
    fontt4: 0,
    cityname: "黄金海岸",//城市名称
    searchtip: "",//搜索的提示文字
  },
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {
    console.log("AAAAAA");
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取天气的数据
    GetWeather: function () {
      var that = this;
      var cityname = that.data.cityname == "" ? "黄金海岸" : that.data.cityname;
      //请求天气的数据
      wx.request({
        url: requesturl + '/weather/current/' + cityname,
        data: '',
        header: {
          "Content-Type": "application/json"
        },
        method: 'GET',
        success: function (res) {
          console.log("当前的天气:");
          console.log(res);

          var resdata = JSON.parse(res.data);

          var nowweatherdata = resdata.HeWeather6[0].now;
          console.log("当前的天气");
          console.log(nowweatherdata);

          that.setData({
            weatherdata: {
              wendu: nowweatherdata.tmp,
              icon: getApp().globalData.globalimgurl + "/weather/" + nowweatherdata.cond_code + "_W.png",
            }
          })
        }
      })
    },
    //搜索按钮的点击
    getsearch: function () {
      wx.navigateTo({
        url: '../../pages/search/index',
      })
    },
    //天气的点击
    goweather: function () {
      wx.navigateTo({
        url: '../../pages/weather/index',
      })
    },
    //轮播图的点击
    gointro: function (e) {
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../pages/info/index?id=' + id,
      })
    },
    //清除计时器
    detached: function () {
      clearInterval(timer);
    }
    //结束标识符
  }
})
