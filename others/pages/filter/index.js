// others/pages/filter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktabid: 0, //选中的菜单
    filterlist: [], //筛选列表
    chkfilter: [], //选择的筛选
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      chktabid: parseInt(options.id)
    })
    //获取筛选的条件
    that.InitFilter();
  },
  //菜单的点击
  menuopt: function(e) {
    var that = this;
    //获取参数
    var id = e.currentTarget.dataset.id;
    id = parseInt(id);

    that.setData({
      chktabid: id
    })
    //获取筛选的条件数据
    that.InitFilter();
  },
  //获取筛选的条件
  InitFilter: function() {
    var that = this;
    //参数部分
    var chktabid = that.data.chktabid;
    //获取筛选的数据
    var filterlist = [{
      id: 1,
      title: "景点、门票",
      childs: [{
          id: 1,
          name: "全部",
          ischk: false
        },
        {
          id: 2,
          name: "自然风光",
          ischk: false
        }, {
          id: 3,
          name: "公园娱乐园",
          ischk: false
        }, {
          id: 4,
          name: "摄影基地",
          ischk: false
        }, {
          id: 5,
          name: "名胜古迹",
          ischk: false
        }, {
          id: 6,
          name: "演出演义",
          ischk: false
        }, {
          id: 7,
          name: "观光街区",
          ischk: false
        }, {
          id: 8,
          name: "其他景点",
          ischk: false
        },
      ]
    }, {
      id: 2,
      title: "展馆展览",
      childs: [{
          id: 1,
          name: "全部",
          ischk: false
        },
        {
          id: 2,
          name: "科技馆",
          ischk: false
        },
        {
          id: 3,
          name: "美术馆",
          ischk: false
        }, {
          id: 4,
          name: "博物馆",
          ischk: false
        }, {
          id: 5,
          name: "3D展馆",
          ischk: false
        }, {
          id: 6,
          name: "蜡像馆",
          ischk: false
        }, {
          id: 7,
          name: "其他",
          ischk: false
        },
      ]
    }, {
      id: 3,
      title: "动植物园",
      childs: [{
          id: 1,
          name: "全部",
          ischk: false
        },
        {
          id: 2,
          name: "动物园",
          ischk: false
        },
        {
          id: 3,
          name: "植物园",
          ischk: false
        }, {
          id: 4,
          name: "生态园",
          ischk: false
        }, {
          id: 5,
          name: "水族馆",
          ischk: false
        }, {
          id: 6,
          name: "海洋馆",
          ischk: false
        }, {
          id: 7,
          name: "极地馆",
          ischk: false
        },
      ]
    }, {
      id: 4,
      title: "度假村",
      childs: [{
          id: 1,
          name: "全部",
          ischk: false
        },
        {
          id: 2,
          name: "农家小院",
          ischk: false
        },
        {
          id: 3,
          name: "水果园",
          ischk: false
        }, {
          id: 4,
          name: "山野田园",
          ischk: false
        },
      ]
    }, ];

    //赋值部分
    that.setData({
      filterlist: filterlist
    })

  },

  //筛选条件的点击
  chkfilteropt: function(e) {
    var that = this;
    //参数部分
    var pid = e.currentTarget.dataset.pid;
    pid = parseInt(pid);
    var id = e.currentTarget.dataset.id;
    id = parseInt(id);
    var filterlist = that.data.filterlist;
    //重置数据
    var txtarry = [];
    //循环遍历
    for (var i = 0; i < filterlist.length; i++) {
      var childs = [];
      if (pid == filterlist[i].id) {
        for (var j = 0; j < filterlist[i].childs.length; j++) {
          if (filterlist[i].childs[j].id == id) {
            childs[j] = {
              id: filterlist[i].childs[j].id,
              name: filterlist[i].childs[j].name,
              ischk: !filterlist[i].childs[j].ischk
            }
          } else {
            childs[j] = filterlist[i].childs[j];
          }
        }
        txtarry[i] = {
          id: filterlist[i].id,
          title: filterlist[i].title,
          childs: childs
        };
      } else {
        txtarry[i] = filterlist[i];
      }
    }

    //赋值数据
    that.setData({
      filterlist: txtarry
    })

    //获取选中的筛选条件
    that.GetChkFilter();
  },
  //获取选中的筛选条件
  GetChkFilter: function() {
    var that = this;
    //参数部分
    var filterlist = that.data.filterlist;
    var chkfilter = [];
    var index = 0;
    //获取已选中的筛选条件
    for (var i = 0; i < filterlist.length; i++) {
      for (var j = 0; j < filterlist[i].childs.length; j++) {
        if (filterlist[i].childs[j].ischk) {
          chkfilter[index] = {
            pid: filterlist[i].id,
            id: filterlist[i].childs[j].id,
            name: filterlist[i].childs[j].name,
          };
          index++;
        }
      }
    }
    //赋值部分
    that.setData({
      chkfilter: chkfilter
    })
  },
  //取消操作
  cancelopt: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  //重置操作
  resetopt: function() {
    var that = this;
    that.InitFilter();
  },
  //确定操作
  postopt: function() {
    var that = this;
    //设置缓存
    wx.setStorageSync("chkfilter", that.data.chkfilter);
    //返回到上一页
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})