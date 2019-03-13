import util from '../util';
import uuid from 'uuid'
const Mock = require('mockjs');
const Random = Mock.Random;

Mock.setup({
  timeout: 500
});

// 返回商品分类
Mock.mock(/getProductCateList/, 'get', function(options){
  return [{"name":"居家生活","id":1005000,"subCateList":[{"name":"锅具","id":1005007,"subCateList":[]},{"name":"餐具","id":1005008,"subCateList":[]},{"name":"茶咖酒具","id":1005009,"subCateList":[]},{"name":"水具杯壶","id":1007000,"subCateList":[]},{"name":"毛巾浴巾","id":1008001,"subCateList":[]},{"name":"布艺软装","id":1008002,"subCateList":[]},{"name":"被枕垫褥","id":1008008,"subCateList":[]},{"name":"床品件套","id":1008009,"subCateList":[]},{"name":"餐厨配件","id":1008012,"subCateList":[]},{"name":"灯具","id":1008016,"subCateList":[]},{"name":"收纳","id":1008017,"subCateList":[]},{"name":"家饰","id":1011004,"subCateList":[]},{"name":"刀剪砧板","id":1013005,"subCateList":[]},{"name":"宠物","id":1017000,"subCateList":[]},{"name":"晾晒除味","id":1092010,"subCateList":[]},{"name":"家庭医疗","id":1092011,"subCateList":[]},{"name":"磨毛件套","id":109243003,"subCateList":[]},{"name":"羽绒厚被","id":109243004,"subCateList":[]},{"name":"绒暖布艺","id":109243005,"subCateList":[]},{"name":"客餐厅家具","id":109243006,"subCateList":[]},{"name":"卧室家具","id":109243007,"subCateList":[]},{"name":"办公书房家具","id":109243008,"subCateList":[]},{"name":"小件家具","id":109243009,"subCateList":[]},{"name":"拖鞋","id":109243010,"subCateList":[]},{"name":"文具","id":109243046,"subCateList":[]}]},{"name":"餐厨","id":1005001,"subCateList":[{"name":"清洁保鲜","id":1008011,"subCateList":[]}]},{"name":"美食酒水","id":1005002,"subCateList":[{"name":"坚果炒货","id":1005010,"subCateList":[]},{"name":"小食糖巧","id":1005011,"subCateList":[]},{"name":"南北干货","id":1005012,"subCateList":[]},{"name":"冲调饮品","id":1005013,"subCateList":[]},{"name":"网易黑猪","id":1008014,"subCateList":[]},{"name":"饼干糕点","id":1008015,"subCateList":[]},{"name":"传统茗茶","id":1027000,"subCateList":[]},{"name":"蜜饯果干","id":1027001,"subCateList":[]},{"name":"肉类零食","id":1035003,"subCateList":[]},{"name":"调味酱菜","id":1036003,"subCateList":[]},{"name":"酒类","id":1053001,"subCateList":[]},{"name":"滋补食材","id":1054001,"subCateList":[]},{"name":"方便食品","id":109201001,"subCateList":[]},{"name":"茶包花茶","id":109206006,"subCateList":[]},{"name":"米面粮油","id":109206007,"subCateList":[]},{"name":"乳品饮料","id":109206008,"subCateList":[]},{"name":"果鲜肉蛋","id":109206009,"subCateList":[]},{"name":"海外美食","id":109206010,"subCateList":[]},{"name":"保健品","id":109206016,"subCateList":[]}]},{"name":"配件","id":1008000,"subCateList":[{"name":"家具","id":1015000,"subCateList":[]}]},{"name":"服饰鞋包","id":1010000,"subCateList":[{"name":"男鞋","id":1008003,"subCateList":[]},{"name":"袜子","id":1008004,"subCateList":[]},{"name":"围巾件套","id":1008007,"subCateList":[]},{"name":"拖鞋","id":1008010,"subCateList":[]},{"name":"男式内裤","id":1010002,"subCateList":[]},{"name":"配件","id":1010004,"subCateList":[]},{"name":"女鞋","id":1013000,"subCateList":[]},{"name":"女式内裤","id":1013006,"subCateList":[]},{"name":"珠宝首饰","id":1020008,"subCateList":[]},{"name":"丝袜","id":1034000,"subCateList":[]},{"name":"眼镜墨镜","id":1036001,"subCateList":[]},{"name":"行李箱","id":1037000,"subCateList":[]},{"name":"女式裙装","id":1037007,"subCateList":[]},{"name":"鞋配","id":1044000,"subCateList":[]},{"name":"男士包袋","id":1056001,"subCateList":[]},{"name":"女士包袋","id":1056002,"subCateList":[]},{"name":"钱包及小皮件","id":1056003,"subCateList":[]},{"name":"男式牛仔","id":1068003,"subCateList":[]},{"name":"男式家居服","id":1093004,"subCateList":[]},{"name":"女式家居服","id":1093005,"subCateList":[]},{"name":"女式T恤/POLO","id":1093006,"subCateList":[]},{"name":"女式裤装","id":1093007,"subCateList":[]},{"name":"男式衬衫","id":1093008,"subCateList":[]},{"name":"男式裤装","id":1093009,"subCateList":[]},{"name":"女式外套","id":1093010,"subCateList":[]},{"name":"女式内衣","id":1093011,"subCateList":[]},{"name":"男式外套","id":1093012,"subCateList":[]},{"name":"男式内衣","id":1093013,"subCateList":[]},{"name":"Yessing上装","id":109202000,"subCateList":[]},{"name":"男式T恤/POLO","id":109214000,"subCateList":[]},{"name":"女式衬衫","id":109214001,"subCateList":[]},{"name":"女式牛仔","id":109214002,"subCateList":[]},{"name":"女式针织衫/卫衣","id":109214003,"subCateList":[]},{"name":"男式针织衫/卫衣","id":109214004,"subCateList":[]},{"name":"Yessing下装","id":109214006,"subCateList":[]},{"name":"毛呢羽绒","id":109243011,"subCateList":[]},{"name":"毛衫围巾","id":109243012,"subCateList":[]},{"name":"新春出行","id":109243013,"subCateList":[]},{"name":"新春宅家","id":109243014,"subCateList":[]}]},{"name":"母婴亲子","id":1011000,"subCateList":[{"name":"孕产内衣","id":1011001,"subCateList":[]},{"name":"新生儿服装","id":1020003,"subCateList":[]},{"name":"洗护","id":1020004,"subCateList":[]},{"name":"被枕芯类","id":1020005,"subCateList":[]},{"name":"玩具","id":1020006,"subCateList":[]},{"name":"喂养","id":1020007,"subCateList":[]},{"name":"童车","id":1034001,"subCateList":[]},{"name":"小童服装","id":1037005,"subCateList":[]},{"name":"儿童鞋","id":1037006,"subCateList":[]},{"name":"中大童服装","id":1089000,"subCateList":[]},{"name":"内衣配搭","id":1089001,"subCateList":[]},{"name":"套装礼盒","id":1091003,"subCateList":[]},{"name":"毛巾口水巾","id":109206011,"subCateList":[]},{"name":"儿童家具收纳","id":109206012,"subCateList":[]},{"name":"书包","id":109206013,"subCateList":[]},{"name":"孕妈装","id":109206014,"subCateList":[]},{"name":"妈咪用品","id":109206015,"subCateList":[]},{"name":"上衣","id":109243018,"subCateList":[]},{"name":"下装","id":109243019,"subCateList":[]},{"name":"裙装","id":109243020,"subCateList":[]},{"name":"爬服连体衣","id":109243021,"subCateList":[]},{"name":"学步鞋","id":109243022,"subCateList":[]},{"name":"图书","id":109243023,"subCateList":[]},{"name":"防走丢包","id":109243024,"subCateList":[]},{"name":"其它箱包","id":109243025,"subCateList":[]},{"name":"安全座椅","id":109243026,"subCateList":[]},{"name":"婴儿推车","id":109243027,"subCateList":[]}]},{"name":"个护清洁","id":1013001,"subCateList":[{"name":"家庭清洁","id":1009000,"subCateList":[]},{"name":"彩妆修容","id":1013002,"subCateList":[]},{"name":"洗发护发","id":1013003,"subCateList":[]},{"name":"香水香氛","id":1013004,"subCateList":[]},{"name":"面部护理","id":1020001,"subCateList":[]},{"name":"浴室用品","id":1020002,"subCateList":[]},{"name":"纸品湿巾","id":1037001,"subCateList":[]},{"name":"身体护理","id":1037002,"subCateList":[]},{"name":"口腔护理","id":1037003,"subCateList":[]},{"name":"计生情趣","id":1037004,"subCateList":[]},{"name":"女性护理","id":109208003,"subCateList":[]},{"name":"衣物护理","id":109243015,"subCateList":[]},{"name":"餐厨清洁","id":109243016,"subCateList":[]},{"name":"美妆工具","id":109243017,"subCateList":[]}]},{"name":"礼品特色","id":1019000,"subCateList":[{"name":"运动户外","id":1008005,"subCateList":[]},{"name":"文具","id":1012003,"subCateList":[]},{"name":"游戏印象","id":1018000,"subCateList":[]},{"name":"礼品卡","id":1025000,"subCateList":[]},{"name":"文创周边","id":1032001,"subCateList":[]},{"name":"梦幻西游","id":1033000,"subCateList":[]},{"name":"大话西游","id":1036004,"subCateList":[]},{"name":"国风馆","id":1038001,"subCateList":[]},{"name":"阴阳师","id":1039000,"subCateList":[]},{"name":"我的世界","id":1041001,"subCateList":[]},{"name":"东方草木馆","id":1047000,"subCateList":[]},{"name":"游戏点卡","id":1050000,"subCateList":[]},{"name":"日韩馆","id":1065001,"subCateList":[]},{"name":"澳新馆","id":1065002,"subCateList":[]},{"name":"韩国馆","id":1065003,"subCateList":[]},{"name":"欧美馆","id":1065004,"subCateList":[]},{"name":"东南亚馆","id":1065005,"subCateList":[]},{"name":"春风馆","id":1065007,"subCateList":[]},{"name":"味央馆","id":1065008,"subCateList":[]},{"name":"云音乐周边","id":1065009,"subCateList":[]},{"name":"严选推荐馆","id":1065010,"subCateList":[]},{"name":"暴雪周边","id":1066000,"subCateList":[]},{"name":"影视周边","id":1069000,"subCateList":[]},{"name":"动漫电玩","id":1069001,"subCateList":[]},{"name":"Yessing馆","id":109202001,"subCateList":[]},{"name":"节庆礼盒","id":109243037,"subCateList":[]}]},{"name":"数码家电","id":1043000,"subCateList":[{"name":"影音娱乐","id":1008006,"subCateList":[]},{"name":"个护美容","id":1010003,"subCateList":[]},{"name":"生活电器","id":1011003,"subCateList":[]},{"name":"数码办公","id":1022000,"subCateList":[]},{"name":"厨房电器","id":1023000,"subCateList":[]},{"name":"乐器唱片","id":1028001,"subCateList":[]},{"name":"按摩电器","id":109243034,"subCateList":[]},{"name":"手机配件","id":109243035,"subCateList":[]},{"name":"车载用品","id":109243036,"subCateList":[]}]},{"name":"特色区","id":1065000,"subCateList":[{"name":"智造馆","id":1065006,"subCateList":[]},{"name":"进口尖货","id":109233000,"subCateList":[]}]},{"name":"运动旅行","id":109243029,"subCateList":[{"name":"女式户外","id":1010001,"subCateList":[]},{"name":"男式运动下装","id":1015001,"subCateList":[]},{"name":"旅行用品","id":1020000,"subCateList":[]},{"name":"男式运动上装","id":1020010,"subCateList":[]},{"name":"女式运动上装","id":1035002,"subCateList":[]},{"name":"男式户外","id":1078000,"subCateList":[]},{"name":"女式运动下装","id":109214005,"subCateList":[]},{"name":"行李箱","id":109243030,"subCateList":[]},{"name":"露营用品","id":109243031,"subCateList":[]},{"name":"运动器械","id":109243032,"subCateList":[]},{"name":"运动护具","id":109243033,"subCateList":[]}]}]
});

// 根据分类获取产品列表
Mock.mock(/getProductByCate/, 'get', function(options){
  return [{"imagePath":"http://yanxuan.nosdn.127.net/3ce02ac47bf8a0e462beba970497d5f3.png","price":"99","name":"欧式简约玻璃茶壶","state":0,"sku":0,"yxPrice":"99","skuid":"1059089"},{"imagePath":"http://yanxuan.nosdn.127.net/cd22c4c92540cbf29b033336b82a7432.png","price":"89","name":"现代玻璃茶壶套装","state":0,"sku":0,"yxPrice":"89","skuid":"1006143"},{"imagePath":"http://yanxuan.nosdn.127.net/18bfada254b59618437bacdb69a725f9.png","price":"129","name":"现代玻璃茶壶套装","state":0,"sku":0,"yxPrice":"129","skuid":"1205021"},{"imagePath":"http://yanxuan.nosdn.127.net/16598ae9c24e8127b30ba3b50d22b1c7.png","price":"25","name":"高硼硅立式茶杯","state":0,"sku":0,"yxPrice":"25","skuid":"1006144"},{"imagePath":"http://yanxuan.nosdn.127.net/62f124e2d46296ad53fa85affa0b9d81.png","price":"99","name":"功夫茶具套装(1壶4杯)","state":0,"sku":0,"yxPrice":"99","skuid":"1023007"},{"imagePath":"http://yanxuan.nosdn.127.net/94cb9b4515c9cbb7b00e17ccf104c421.png","price":"49","name":"双层隔热绿茶杯","state":0,"sku":0,"yxPrice":"49","skuid":"1034007"},{"imagePath":"http://yanxuan.nosdn.127.net/063a39dec080ea082a1a9cb772b41b54.png","price":"89","name":"双层隔热绿茶杯","state":0,"sku":0,"yxPrice":"89","skuid":"1226003"},{"imagePath":"http://yanxuan.nosdn.127.net/ac23d63272b3ffcb0ee5fb6d3820d252.png","price":"69","name":"花茶个人杯","state":0,"sku":0,"yxPrice":"69","skuid":"1037029"},{"imagePath":"http://yanxuan.nosdn.127.net/0706727e022a6448d93bd7d811efe9dd.png","price":"199","name":"竹制蓄水茶盘","state":0,"sku":0,"yxPrice":"199","skuid":"1038005"},{"imagePath":"http://yanxuan.nosdn.127.net/38aa58e2fb85b1d233157476fc866161.png","price":"339","name":"羊脂玉白紫金线茶具套装","state":1,"sku":513,"yxPrice":"339","skuid":"1038048"}]
});

Mock.mock(/getProductById/, 'get', function(optiosn){
  return {
    merchant: 'RK外设官方旗舰店',
    title: 'RK ABS 二色成型键帽 适用樱桃魔力鸭凯酷达尔优等机械键 37键彩色键帽--彩虹渐变',
    price: '40',
    count: 1,
    sku: 20,
    img: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t24904/48/1762802430/218706/7a55b2a6/5bbb0feaNbb5e5595.jpg!q70.dpg.webp'
  }
})

Mock.mock(/hotsell/, 'get', function(options){
  return [
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() },
    { id: uuid(), title: Random.cparagraph(), price: Random.natural(160, 5000), status: Random.boolean() ? '有货' : '无货', url: Random.url() }
  ]
});


Mock.mock(/getRechargePhoneProductsByType/, 'get', function(options){
  var result = util.parseUrl(options.url, 'type');
  console.log()
  switch(result.type) {
    case '1':
      return [
        { id: uuid(), integral: 1060, money: 10 },
        { id: uuid(), integral: 2120, money: 20 },
        { id: uuid(), integral: 3180, money: 30 },
        { id: uuid(), integral: 5300, money: 50 },
        { id: uuid(), integral: 10600, money: 100 },
        { id: uuid(), integral: 21200, money: 200 },
        { id: uuid(), integral: 31800, money: 300 },
        { id: uuid(), integral: 53000, money: 500 }
      ]
    case '2':
      return [
        { id: uuid(), integral: 1060, money: 10 },
        { id: uuid(), integral: 2120, money: 20 },
        { id: uuid(), integral: 3180, money: 30 },
        { id: uuid(), integral: 5300, money: 50 },
        { id: uuid(), integral: 10600, money: 100 }
      ]
    case '3':
      return []
    default:
      return []
  }
});

Mock.mock(/confirmPaymentPswd/, 'post', function(options){
  return {
    code: '1',
    msg: ''
  }
})

// 话费充值
Mock.mock(/rechargePhone/, 'get', function(options){
  return {
    code: '1',
    msg: '充值成功'
  }
})

// 获取银行卡
Mock.mock(/getBankCardList/, 'get', function(options){
  return {
    code: '1',
    items: [
      {id: uuid(), bankCardName: '建设银行', bankCardNo: '6227007200230197111'},
      {id: uuid(), bankCardName: '招商银行', bankCardNo: '6227007200230197112'},
      {id: uuid(), bankCardName: '工商银行', bankCardNo: '6227007200230197113'}
    ]
  }
  // return {
  //   code: '0',
  //   items: []
  // }
})

// 积分转赠
Mock.mock(/transfer/, 'post', function(options){
  return {
    code: '1',
    msg: '转赠成功'
  }
  // return {
  //   code: '0',
  //   msg: '交易密码错误'
  // }
})

// 积分转赠
Mock.mock(/login/, 'post', function(options){
  return {
    code: '1',
    msg: '登录成功'
  }
  // return {
  //   code: '0',
  //   msg: '交易密码错误'
  // }
})
