// component/scroll/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          datalist: newVal.datalist,//数据列表
          fontt1: newVal.fontt1,//标题
          fontt2: newVal.fontt2,//查看全部
          fontt3: newVal.fontt3,//小字
          typename: newVal.typename,//类型名称
          typeval: newVal.typeval,//类型值
          showtype: newVal.showtype,//显示类型
        })

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datalist: [],//数据列表
    fontt1: 0,//标题
    fontt2: 0,//查看全部
    fontt3: 0,//小字
    typename: "",//类型名称
    typeval: 0,//类型值
    showtype: 0,//显示滚动的类型
    geduanh: 20,//隔断的高度
    xinglist:[1,2,3,4,5],//行的个数
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //查看全部
    gomore: function (e) {
      var that = this;
      var id = e.currentTarget.dataset.id;
      console.log("参数值:" + id);
      wx.navigateTo({
        url: '../../others/pages/index/index?id=' + id,
      })
    },
    //跳转到详情页面
    godetail: function (e) {
      var that = this;
      var id = e.currentTarget.dataset.id;
      console.log("参数值:" + id);
      wx.navigateTo({
        url: '../../pages/info/index?id=' + id + "&type=" + that.data.typeval,
      })
    },
    //收藏操作
    listcollectopt: function (e) {
      var that = this;
      //参数部分
      var id = e.currentTarget.dataset.id;
      var datalist = that.data.datalist;
      //循环遍历
      var txtarry = [];
      for (var i = 0; i < datalist.length; i++) {
        if (id == datalist[i].id) {
          txtarry[i] = {
            id: datalist[i].id,
            imgpath: datalist[i].imgpath,
            cnname: datalist[i].cnname,
            enname: datalist[i].enname,
            distance: datalist[i].distance,
            commentnum: datalist[i].commentnum,
            price: datalist[i].price,
            iscollect: !datalist[i].iscollect
          }
        } else {
          txtarry[i] = {
            id: datalist[i].id,
            imgpath: datalist[i].imgpath,
            cnname: datalist[i].cnname,
            enname: datalist[i].enname,
            distance: datalist[i].distance,
            commentnum: datalist[i].commentnum,
            price: datalist[i].price,
            iscollect: datalist[i].iscollect
          }
        }
      }
      //赋值
      that.setData({
        datalist: txtarry
      })
    },
    /*结束标识符*/
  }
})
