// components/homes/menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          onemenulist: newVal.onemenulist,//第一行菜单
          twomenulist: newVal.twomenulist,//第二行菜单
          fontt: newVal.fontt,//字体大小
          phonelist: newVal.phonelist,//一键求助电话列表
        })   
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    onemenulist: [],//第一行
    twomenulist: [],//第二行菜单
    fontt: 0,//字体大小
    phonelist:[],//求助电话
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    //菜单的点击
    gomenu:function(e){
      var that=this;
      var id=e.currentTarget.dataset.id;
      id = parseInt(id);
      /**类型判断**/
      if(id==0){//景点
        wx.navigateTo({
          url: '../../others/pages/index/index?id=0',
        })
      }else if (id == 1) {//酒店
        wx.navigateTo({
          url: '../../others/pages/index/index?id=3',
        })
      } else if (id == 2) {//美食
        wx.navigateTo({
          url: '../../others/pages/index/index?id=1',
        })
      } else if (id == 3) {//常见问题
        wx.navigateTo({
          url: '../../others/pages/question/index',
        })
      } else if (id == 4) {//常见问题
        wx.navigateTo({
          url: '../../others/pages/guide/index',
        })
      } else if (id == 5) {//签证
        wx.navigateTo({
          url: '../../others/pages/visa/index',
        })
      } else if (id == 6) {//翻译
        wx.navigateTo({
          url: '../../others/pages/translate/index',
        })
      } else if (id == 7) {//货币兑换
        wx.navigateTo({
          url: '../../others/pages/coin/index',
        })
      } else if (id == 8) {//航班查询
        wx.navigateTo({
          url: '../../others/pages/airline/index',
        })
      } else if (id == 9) {//一键求助
        wx.showActionSheet({
          itemList: that.data.phonelist,
          itemColor: '#007aff',
          success(res) {
            //拨打电话
            var phonenum= that.data.phonelist[res.tapIndex];
            console.log("电话号码:"+phonenum);
            
            wx.makePhoneCall({
              phoneNumber: phonenum
            })
          }
        })
      }
    },
  }
})
