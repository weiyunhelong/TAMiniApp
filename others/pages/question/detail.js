// others/pages/question/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//文章id
    title:"",//标题
    tip:"",//文字简介
    infodata:[
      {
        subtitle:"货币",
        subinfo:"澳大利亚的货币是澳元（AUD）。澳元可在银行、酒店和国际机场兑换。一般商店普遍接受的信用卡包括美国运通卡、Bankcard卡、大来卡、万事达卡、Visa 卡和 JCB 卡及其附属机构的信用卡。" 
      },
      {
        subtitle: "货币",
        subinfo: "澳大利亚的货币是澳元（AUD）。澳元可在银行、酒店和国际机场兑换。一般商店普遍接受的信用卡包括美国运通卡、Bankcard卡、大来卡、万事达卡、Visa 卡和 JCB 卡及其附属机构的信用卡。"
      },
      {
        subtitle: "商品及服务税",
        subinfo: "澳大利亚收取10%的商品及服务税（GST）。如果您离澳前30天内在同一间商店花费300澳元或以上，您可以申请退税。游客退税计划柜台位于国际机场或码头的离境厅。如需更多详细信息，请查询澳大利亚政府有关游客的信息。"
      },
      {
        subtitle: "购物",
        subinfo: "在澳大利亚各地都有大型百货商店、购物街、购物中心、礼品盒、营业时间全国各异，单旅游区和失去的商店通常营业至下午6点，有些周逢周四或周五营业到晚上。在澳大利亚，您收到的保障，该法例要求商店公平对待每一位顾客。"
      },
      {
        subtitle: "小费及议价",
        subinfo: "酒店和餐馆不会在您的账单上加上服务费。在高级餐馆，游客通常会因获得优质服务而向侍应生支付小费，小费金额一般相当于账单10%。但是，是否给小费始终由您决定。澳大利亚的店铺没有议价的风俗习惯。"
      },
      {
        subtitle: "货币",
        subinfo: "澳大利亚的货币是澳元（AUD）。澳元可在银行、酒店和国际机场兑换。一般商店普遍接受的信用卡包括美国运通卡、Bankcard卡、大来卡、万事达卡、Visa 卡和 JCB 卡及其附属机构的信用卡。"
      },
    ],//内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     //接受参数
     that.setData({
       id: parseInt(options.id)
     })
     //获取数据
     that.GetQuestion();
  },
  //获取数据
  GetQuestion:function(){
    var that=this;
    //请求接口获取数据
    that.setData({
      title: "参考我们的实用贴士来准备您的澳大利亚之行",//标题
      tip: "了解我们的货币、如何拨打国际电话、维护自身安全、购物时的责任，以及残疾人士旅游须知。然后，您就可以高枕无忧地享受澳大利亚之旅了！",//文字简介
      info: "澳大利亚的货币是澳元（AUD）。澳元可在银行、酒店和国际机场兑换。一般商店普遍接受的信用卡包括美国运通卡、Bankcard卡、大来卡、万事达卡、Visa 卡和 JCB 卡及其附属机构的信用卡。",//内容
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})