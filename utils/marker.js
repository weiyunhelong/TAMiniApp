const markerlist=[
  {
    id: 1,
    latitude: 31.330416, //纬度
    longitude: 121.373701, //经度
    iconPath: '/resources/icon/bsmpostion.png',
    width: 25,
    height: 25,
    kind:1
  },
  {
    id: 2,
    latitude: 31.130416, //纬度
    longitude: 121.453701, //经度
    iconPath: '/resources/icon/osmpostion.png',
    width: 25,
    height: 25,
    kind: 1
  },
  {
    id: 3,
    latitude: 31.250416, //纬度
    longitude: 121.493701, //经度
    iconPath: '/resources/icon/bsmpostion.png',
    width: 25,
    height: 25,
    kind: 1
  },
  {
    id: 1,
    latitude: 31.330416, //纬度
    longitude: 121.373701, //经度
    iconPath: '/resources/icon/ysmpostion.png',
    width: 25,
    height: 25,
    kind: 2
  },
  {
    id: 2,
    latitude: 31.130416, //纬度
    longitude: 121.453701, //经度
    iconPath: '/resources/icon/ysmpostion.png',
    width: 25,
    height: 25,
    kind: 2
  },
  {
    id: 3,
    latitude: 31.250416, //纬度
    longitude: 121.493701, //经度
    iconPath: '/resources/icon/osmpostion.png',
    width: 25,
    height: 25,
    kind: 2
  },
  {
    id: 1,
    latitude: 31.330416, //纬度
    longitude: 121.373701, //经度
    iconPath: '/resources/icon/gsmpostion.png',
    width: 25,
    height: 25,
    kind: 3
  },
  {
    id: 2,
    latitude: 31.130416, //纬度
    longitude: 121.453701, //经度
    iconPath: '/resources/icon/gsmpostion.png',
    width: 25,
    height: 25,
    kind: 3
  },
  {
    id: 3,
    latitude: 31.250416, //纬度
    longitude: 121.493701, //经度
    iconPath: '/resources/icon/osmpostion.png',
    width: 25,
    height: 25,
    kind: 3
  },
  {
    id: 1,
    latitude: 31.330416, //纬度
    longitude: 121.373701, //经度
    iconPath: '/resources/icon/psmpostion.png',
    width: 25,
    height: 25,
    kind: 4
  },
  {
    id: 2,
    latitude: 31.130416, //纬度
    longitude: 121.453701, //经度
    iconPath: '/resources/icon/osmpostion.png',
    width: 25,
    height: 25,
    kind: 4
  },
  {
    id: 3,
    latitude: 31.250416, //纬度
    longitude: 121.493701, //经度
    iconPath: '/resources/icon/psmpostion.png',
    width: 25,
    height: 25,
    kind: 4
  },
];

//根据类型得到marker
const GetTypeMarker=n=>{
  var result=[];
  var index=0;
  for (var i = 0; i < markerlist.length;i++){
    if (markerlist[i].kind==n){
      result[index]={
        id: markerlist[i].id,
        latitude: markerlist[i].latitude,
        longitude: markerlist[i].longitude,
        iconPath: markerlist[i].iconPath,
        width: markerlist[i].width,
        height: markerlist[i].height,
        kind: markerlist[i].kind,
      }
      index++;
    }
  }
  return result;
}

module.exports = {
  GetTypeMarker: GetTypeMarker,//根据类型获取到Marker
}
