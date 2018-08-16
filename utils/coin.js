var coinlist=[
  {
    id:0,
    cnname:"人民币",
    enname:"CNY",
    flag:"/resources/flag/zhongguo.png"    
  },
  {
    id: 1,
    cnname: "澳元",
    enname: "AUD",
    flag: "/resources/flag/aodaliya.png" 
  },
  {
    id: 2,
    cnname: "美元",
    enname: "USD",
    flag: "/resources/flag/meiguo.png" 
  },
  {
    id: 3,
    cnname: "日元",
    enname: "JPY",
    flag: "/resources/flag/riben.png" 
  },
  {
    id: 4,
    cnname: "欧元",
    enname: "EUR",
    flag: "/resources/flag/oumeng.png" 
  },
  {
    id: 5,
    cnname: "英镑",
    enname: "GBP",
    flag: "/resources/flag/yingguo.png" 
  },
  {
    id: 6,
    cnname: "韩元",
    enname: "KRW",
    flag: "/resources/flag/hanguo.png" 
  },
  {
    id: 7,
    cnname: "港元",
    enname: "HKD",
    flag: "/resources/flag/xiangguang.png" 
  },
  {
    id: 8,
    cnname: "加元",
    enname: "CAD",
    flag: "/resources/flag/jianada.png" 
  },
  {
    id: 9,
    cnname: "澳门元",
    enname: "MOP",
    flag: "/resources/flag/aomen.png" 
  },
  {
    id: 10,
    cnname: "新台币",
    enname: "TWD",
    flag: "/resources/flag/taiwan.png" 
  },
];

//常用的货币
const getAllCoin = n => {
  return coinlist;
}


//根据下标得到货币
const getCoinByIndex = n => {
  var coin={};
  for (var i = 0; i < coinlist.length;i++){
    if(i==n){
      coin = coinlist[i];
    }
  }
  return coin;
}

//根据源和目标下标整理列表
const searchlist = (oid,gid,typeval) => {
  var txtarry = [];
  for (var i = 0; i < coinlist.length; i++) {
    if (i == oid) {
      txtarry[i] = {
        id: coinlist[i].id,
        cnname: coinlist[i].cnname,
        enname: coinlist[i].enname,
        ischk:true,
        typeval: typeval == 1 ? "当前选择" :"已选择"
      };
    }else if(i==gid){
      txtarry[i] = {
        id: coinlist[i].id,
        cnname: coinlist[i].cnname,
        enname: coinlist[i].enname,
        ischk: true,
        typeval: typeval == 2 ? "当前选择" :"已选择"
      };
    }else{
      txtarry[i] = {
        id: coinlist[i].id,
        cnname: coinlist[i].cnname,
        enname: coinlist[i].enname,
        ischk: false,
        typeval:""
      };
    }
  }
  return txtarry;
}

module.exports = {
  getAllCoin: getAllCoin,//获取所有的货币
  getCoinByIndex: getCoinByIndex,//根据下标获取货币
  searchlist: searchlist,//根据源和目标下标整理列表
}
