var langlist = [
  {
    id: 0,
    cnname: "英语",
    enname: "English",
    flag: "/resources/flag/yingguo.png",
    tip:"en"
  },
  {
    id: 1,
    cnname: "法语",
    enname: "Français",
    flag: "/resources/flag/faguo.png",
    tip: "fra"
  },
  {
    id: 2,
    cnname: "意大利语",
    enname: "Italiano",
    flag: "/resources/flag/yidali.png",
    tip: "it"
  },
  {
    id: 3,
    cnname: "德语",
    enname: "Deutsch",
    flag: "/resources/flag/deguo.png",
    tip: "de"
  },
  {
    id: 4,
    cnname: "西班牙语",
    enname: "Español",
    flag: "/resources/flag/xibanya.png",
    tip: "spa"
  },
  {
    id: 5,
    cnname: "日语",
    enname: "日本語",
    flag: "/resources/flag/riben.png",
    tip: "jp"
  },
  {
    id: 6,
    cnname: "韩语",
    enname: "한국어",
    flag: "/resources/flag/hanguo.png",
    tip: "kor"
  },
  {
    id: 7,
    cnname: "中文",
    enname: "简体中文",
    flag: "/resources/flag/zhongguo.png",
    tip: "zh"
  },
  {
    id: 8,
    cnname: "中文",
    enname: "繁体中文",
    flag: "/resources/flag/zhongguo.png",
    tip: "cht"
  }
];

//所有的语言
const getAllLang = n => {
  return langlist;
}


//根据下标得到语言
const getLangByIndex = n => {
  var result = "";
  for (var i = 0; i < langlist.length; i++) {
    if (i == n) {
      result = langlist[i].enname;
    }
  }
  return result;
}

//根据源和目标下标整理列表
const searchlist = (oid, gid, typeval) => {
  var txtarry = [];
  for (var i = 0; i < langlist.length; i++) {
    if (oid == langlist[i].id) {
      txtarry[i] = {
        id: langlist[i].id,
        cnname: langlist[i].cnname,
        enname: langlist[i].enname,
        flag: langlist[i].flag,
        ischk: true,
        typeval: typeval == 1 ? "当前选择" : "已选择"
      };
    } else if (gid == langlist[i].id) {
      txtarry[i] = {
        id: langlist[i].id,
        cnname: langlist[i].cnname,
        enname: langlist[i].enname,
        flag: langlist[i].flag,
        ischk: true,
        typeval: typeval == 2 ? "当前选择" : "已选择"
      };
    } else {
      txtarry[i] = {
        id: langlist[i].id,
        cnname: langlist[i].cnname,
        enname: langlist[i].enname,
        flag: langlist[i].flag,
        ischk: false,
        typeval:""
      };
    }
  }
  return txtarry;
}

//根据下标得到语言缩写
const getLangTipByIndex = n => {
  var result = "";
  for (var i = 0; i < langlist.length; i++) {
    if (i == n) {
      result = langlist[i].tip;
    }
  }
  return result;
}

module.exports = {
  getAllLang: getAllLang,//获取所有的货币
  getLangByIndex: getLangByIndex,//根据下标获取货币
  searchlist: searchlist,//根据源和目标下标整理列表
  getLangTipByIndex: getLangTipByIndex//得到语言的缩写
}
