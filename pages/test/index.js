// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    hideBottom: true,
    refreshTime: '', // 刷新的时间 
    contentlist: [], // 列表显示的数据源
    allPages: '', // 总页数
    currentPage: 1, // 当前页数  默认是1
    loadMoreData: '加载更多……'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var date = new Date();
    this.setData({
      refreshTime: date.toLocaleTimeString()
    })
    this.getData();
  },
  // 上拉加载更多
  loadMore: function() {
    var self = this;
    // 当前页是第一页
    if (self.data.currentPage == 1) {
      self.setData({
        loadMoreData: '已经到顶'
      })
      return;
    }
    setTimeout(function() {
      console.log('上拉加载更多');
      var tempCurrentPage = self.data.currentPage;
      tempCurrentPage = tempCurrentPage + 1;
      self.setData({
        currentPage: tempCurrentPage,
        hideBottom: false
      })
      self.getData();
    }, 300);
  },
  // 下拉刷新
  refresh: function(e) {
    var self = this;
    setTimeout(function() {
      console.log('下拉刷新');
      var date = new Date();
      self.setData({
        currentPage: self.data.currentPage+1,
        refreshTime: date.toLocaleTimeString(),
        hideHeader: false
      })
      self.getData();
    }, 300);
  },
  // 获取数据  pageIndex：页码参数
  getData: function() {
    var self = this;
    var contentlist=[];
    for(var i=0;i<10;i++){
      contentlist[i]={        contentImg:"https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=10b374237f0e0cf3bff748fb3a47f23d/adaf2edda3cc7cd90df1ede83401213fb80e9127.jpg",
        title:"AAAA"+i
      };
    }
    var pageIndex = self.data.currentPage;
    if (pageIndex == 1) { // 下拉刷新
      self.setData({
        contentlist: contentlist,
        hideHeader: true
      })
    } else { // 加载更多
      console.log('加载更多');
      var tempArray = self.data.contentlist;
      tempArray = tempArray.concat(contentlist);
      self.setData({
        contentlist: tempArray,
        hideBottom: true
      })
    }
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