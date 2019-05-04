import util from '../util';
import uuid from 'uuid'

import './user'
import './recharge'

const Mock = require('mockjs');
const Random = Mock.Random;

Mock.setup({
  timeout: 500
});

// 获取服务列表
Mock.mock(/product\/list/, 'get', function (options) {
  return {
    "status": 200,
    "data": [{
        "productClassifyName": "话费充值",
        "productClassifyId": "1"
      },
      {
        "productClassifyName": "流量充值",
        "productClassifyId": "5"
      },
      {
        "productClassifyName": "油卡充值",
        "productClassifyId": "9"
      },
      {
        "productClassifyName": "Q币充值",
        "productClassifyId": "12"
      },
      {
        "productClassifyName": "视频VIP",
        "productClassifyId": "15"
      },
      {
        "productClassifyName": "电子卡券",
        "productClassifyId": "18"
      },
      {
        "productClassifyName": "信用卡还款",
        "productClassifyId": "22"
      }
    ],
    "msg": "SUCCESS"
  }
})

// 返回商品分类
Mock.mock(/getProductCateList/, 'get', function (options) {
  return [{
    "name": "居家生活",
    "id": 1005000,
    "subCateList": [{
      "name": "锅具",
      "id": 1005007,
      "subCateList": []
    }, {
      "name": "餐具",
      "id": 1005008,
      "subCateList": []
    }, {
      "name": "茶咖酒具",
      "id": 1005009,
      "subCateList": []
    }, {
      "name": "水具杯壶",
      "id": 1007000,
      "subCateList": []
    }, {
      "name": "毛巾浴巾",
      "id": 1008001,
      "subCateList": []
    }, {
      "name": "布艺软装",
      "id": 1008002,
      "subCateList": []
    }, {
      "name": "被枕垫褥",
      "id": 1008008,
      "subCateList": []
    }, {
      "name": "床品件套",
      "id": 1008009,
      "subCateList": []
    }, {
      "name": "餐厨配件",
      "id": 1008012,
      "subCateList": []
    }, {
      "name": "灯具",
      "id": 1008016,
      "subCateList": []
    }, {
      "name": "收纳",
      "id": 1008017,
      "subCateList": []
    }, {
      "name": "家饰",
      "id": 1011004,
      "subCateList": []
    }, {
      "name": "刀剪砧板",
      "id": 1013005,
      "subCateList": []
    }, {
      "name": "宠物",
      "id": 1017000,
      "subCateList": []
    }, {
      "name": "晾晒除味",
      "id": 1092010,
      "subCateList": []
    }, {
      "name": "家庭医疗",
      "id": 1092011,
      "subCateList": []
    }, {
      "name": "磨毛件套",
      "id": 109243003,
      "subCateList": []
    }, {
      "name": "羽绒厚被",
      "id": 109243004,
      "subCateList": []
    }, {
      "name": "绒暖布艺",
      "id": 109243005,
      "subCateList": []
    }, {
      "name": "客餐厅家具",
      "id": 109243006,
      "subCateList": []
    }, {
      "name": "卧室家具",
      "id": 109243007,
      "subCateList": []
    }, {
      "name": "办公书房家具",
      "id": 109243008,
      "subCateList": []
    }, {
      "name": "小件家具",
      "id": 109243009,
      "subCateList": []
    }, {
      "name": "拖鞋",
      "id": 109243010,
      "subCateList": []
    }, {
      "name": "文具",
      "id": 109243046,
      "subCateList": []
    }]
  }, {
    "name": "餐厨",
    "id": 1005001,
    "subCateList": [{
      "name": "清洁保鲜",
      "id": 1008011,
      "subCateList": []
    }]
  }, {
    "name": "美食酒水",
    "id": 1005002,
    "subCateList": [{
      "name": "坚果炒货",
      "id": 1005010,
      "subCateList": []
    }, {
      "name": "小食糖巧",
      "id": 1005011,
      "subCateList": []
    }, {
      "name": "南北干货",
      "id": 1005012,
      "subCateList": []
    }, {
      "name": "冲调饮品",
      "id": 1005013,
      "subCateList": []
    }, {
      "name": "网易黑猪",
      "id": 1008014,
      "subCateList": []
    }, {
      "name": "饼干糕点",
      "id": 1008015,
      "subCateList": []
    }, {
      "name": "传统茗茶",
      "id": 1027000,
      "subCateList": []
    }, {
      "name": "蜜饯果干",
      "id": 1027001,
      "subCateList": []
    }, {
      "name": "肉类零食",
      "id": 1035003,
      "subCateList": []
    }, {
      "name": "调味酱菜",
      "id": 1036003,
      "subCateList": []
    }, {
      "name": "酒类",
      "id": 1053001,
      "subCateList": []
    }, {
      "name": "滋补食材",
      "id": 1054001,
      "subCateList": []
    }, {
      "name": "方便食品",
      "id": 109201001,
      "subCateList": []
    }, {
      "name": "茶包花茶",
      "id": 109206006,
      "subCateList": []
    }, {
      "name": "米面粮油",
      "id": 109206007,
      "subCateList": []
    }, {
      "name": "乳品饮料",
      "id": 109206008,
      "subCateList": []
    }, {
      "name": "果鲜肉蛋",
      "id": 109206009,
      "subCateList": []
    }, {
      "name": "海外美食",
      "id": 109206010,
      "subCateList": []
    }, {
      "name": "保健品",
      "id": 109206016,
      "subCateList": []
    }]
  }, {
    "name": "配件",
    "id": 1008000,
    "subCateList": [{
      "name": "家具",
      "id": 1015000,
      "subCateList": []
    }]
  }, {
    "name": "服饰鞋包",
    "id": 1010000,
    "subCateList": [{
      "name": "男鞋",
      "id": 1008003,
      "subCateList": []
    }, {
      "name": "袜子",
      "id": 1008004,
      "subCateList": []
    }, {
      "name": "围巾件套",
      "id": 1008007,
      "subCateList": []
    }, {
      "name": "拖鞋",
      "id": 1008010,
      "subCateList": []
    }, {
      "name": "男式内裤",
      "id": 1010002,
      "subCateList": []
    }, {
      "name": "配件",
      "id": 1010004,
      "subCateList": []
    }, {
      "name": "女鞋",
      "id": 1013000,
      "subCateList": []
    }, {
      "name": "女式内裤",
      "id": 1013006,
      "subCateList": []
    }, {
      "name": "珠宝首饰",
      "id": 1020008,
      "subCateList": []
    }, {
      "name": "丝袜",
      "id": 1034000,
      "subCateList": []
    }, {
      "name": "眼镜墨镜",
      "id": 1036001,
      "subCateList": []
    }, {
      "name": "行李箱",
      "id": 1037000,
      "subCateList": []
    }, {
      "name": "女式裙装",
      "id": 1037007,
      "subCateList": []
    }, {
      "name": "鞋配",
      "id": 1044000,
      "subCateList": []
    }, {
      "name": "男士包袋",
      "id": 1056001,
      "subCateList": []
    }, {
      "name": "女士包袋",
      "id": 1056002,
      "subCateList": []
    }, {
      "name": "钱包及小皮件",
      "id": 1056003,
      "subCateList": []
    }, {
      "name": "男式牛仔",
      "id": 1068003,
      "subCateList": []
    }, {
      "name": "男式家居服",
      "id": 1093004,
      "subCateList": []
    }, {
      "name": "女式家居服",
      "id": 1093005,
      "subCateList": []
    }, {
      "name": "女式T恤/POLO",
      "id": 1093006,
      "subCateList": []
    }, {
      "name": "女式裤装",
      "id": 1093007,
      "subCateList": []
    }, {
      "name": "男式衬衫",
      "id": 1093008,
      "subCateList": []
    }, {
      "name": "男式裤装",
      "id": 1093009,
      "subCateList": []
    }, {
      "name": "女式外套",
      "id": 1093010,
      "subCateList": []
    }, {
      "name": "女式内衣",
      "id": 1093011,
      "subCateList": []
    }, {
      "name": "男式外套",
      "id": 1093012,
      "subCateList": []
    }, {
      "name": "男式内衣",
      "id": 1093013,
      "subCateList": []
    }, {
      "name": "Yessing上装",
      "id": 109202000,
      "subCateList": []
    }, {
      "name": "男式T恤/POLO",
      "id": 109214000,
      "subCateList": []
    }, {
      "name": "女式衬衫",
      "id": 109214001,
      "subCateList": []
    }, {
      "name": "女式牛仔",
      "id": 109214002,
      "subCateList": []
    }, {
      "name": "女式针织衫/卫衣",
      "id": 109214003,
      "subCateList": []
    }, {
      "name": "男式针织衫/卫衣",
      "id": 109214004,
      "subCateList": []
    }, {
      "name": "Yessing下装",
      "id": 109214006,
      "subCateList": []
    }, {
      "name": "毛呢羽绒",
      "id": 109243011,
      "subCateList": []
    }, {
      "name": "毛衫围巾",
      "id": 109243012,
      "subCateList": []
    }, {
      "name": "新春出行",
      "id": 109243013,
      "subCateList": []
    }, {
      "name": "新春宅家",
      "id": 109243014,
      "subCateList": []
    }]
  }, {
    "name": "母婴亲子",
    "id": 1011000,
    "subCateList": [{
      "name": "孕产内衣",
      "id": 1011001,
      "subCateList": []
    }, {
      "name": "新生儿服装",
      "id": 1020003,
      "subCateList": []
    }, {
      "name": "洗护",
      "id": 1020004,
      "subCateList": []
    }, {
      "name": "被枕芯类",
      "id": 1020005,
      "subCateList": []
    }, {
      "name": "玩具",
      "id": 1020006,
      "subCateList": []
    }, {
      "name": "喂养",
      "id": 1020007,
      "subCateList": []
    }, {
      "name": "童车",
      "id": 1034001,
      "subCateList": []
    }, {
      "name": "小童服装",
      "id": 1037005,
      "subCateList": []
    }, {
      "name": "儿童鞋",
      "id": 1037006,
      "subCateList": []
    }, {
      "name": "中大童服装",
      "id": 1089000,
      "subCateList": []
    }, {
      "name": "内衣配搭",
      "id": 1089001,
      "subCateList": []
    }, {
      "name": "套装礼盒",
      "id": 1091003,
      "subCateList": []
    }, {
      "name": "毛巾口水巾",
      "id": 109206011,
      "subCateList": []
    }, {
      "name": "儿童家具收纳",
      "id": 109206012,
      "subCateList": []
    }, {
      "name": "书包",
      "id": 109206013,
      "subCateList": []
    }, {
      "name": "孕妈装",
      "id": 109206014,
      "subCateList": []
    }, {
      "name": "妈咪用品",
      "id": 109206015,
      "subCateList": []
    }, {
      "name": "上衣",
      "id": 109243018,
      "subCateList": []
    }, {
      "name": "下装",
      "id": 109243019,
      "subCateList": []
    }, {
      "name": "裙装",
      "id": 109243020,
      "subCateList": []
    }, {
      "name": "爬服连体衣",
      "id": 109243021,
      "subCateList": []
    }, {
      "name": "学步鞋",
      "id": 109243022,
      "subCateList": []
    }, {
      "name": "图书",
      "id": 109243023,
      "subCateList": []
    }, {
      "name": "防走丢包",
      "id": 109243024,
      "subCateList": []
    }, {
      "name": "其它箱包",
      "id": 109243025,
      "subCateList": []
    }, {
      "name": "安全座椅",
      "id": 109243026,
      "subCateList": []
    }, {
      "name": "婴儿推车",
      "id": 109243027,
      "subCateList": []
    }]
  }, {
    "name": "个护清洁",
    "id": 1013001,
    "subCateList": [{
      "name": "家庭清洁",
      "id": 1009000,
      "subCateList": []
    }, {
      "name": "彩妆修容",
      "id": 1013002,
      "subCateList": []
    }, {
      "name": "洗发护发",
      "id": 1013003,
      "subCateList": []
    }, {
      "name": "香水香氛",
      "id": 1013004,
      "subCateList": []
    }, {
      "name": "面部护理",
      "id": 1020001,
      "subCateList": []
    }, {
      "name": "浴室用品",
      "id": 1020002,
      "subCateList": []
    }, {
      "name": "纸品湿巾",
      "id": 1037001,
      "subCateList": []
    }, {
      "name": "身体护理",
      "id": 1037002,
      "subCateList": []
    }, {
      "name": "口腔护理",
      "id": 1037003,
      "subCateList": []
    }, {
      "name": "计生情趣",
      "id": 1037004,
      "subCateList": []
    }, {
      "name": "女性护理",
      "id": 109208003,
      "subCateList": []
    }, {
      "name": "衣物护理",
      "id": 109243015,
      "subCateList": []
    }, {
      "name": "餐厨清洁",
      "id": 109243016,
      "subCateList": []
    }, {
      "name": "美妆工具",
      "id": 109243017,
      "subCateList": []
    }]
  }, {
    "name": "礼品特色",
    "id": 1019000,
    "subCateList": [{
      "name": "运动户外",
      "id": 1008005,
      "subCateList": []
    }, {
      "name": "文具",
      "id": 1012003,
      "subCateList": []
    }, {
      "name": "游戏印象",
      "id": 1018000,
      "subCateList": []
    }, {
      "name": "礼品卡",
      "id": 1025000,
      "subCateList": []
    }, {
      "name": "文创周边",
      "id": 1032001,
      "subCateList": []
    }, {
      "name": "梦幻西游",
      "id": 1033000,
      "subCateList": []
    }, {
      "name": "大话西游",
      "id": 1036004,
      "subCateList": []
    }, {
      "name": "国风馆",
      "id": 1038001,
      "subCateList": []
    }, {
      "name": "阴阳师",
      "id": 1039000,
      "subCateList": []
    }, {
      "name": "我的世界",
      "id": 1041001,
      "subCateList": []
    }, {
      "name": "东方草木馆",
      "id": 1047000,
      "subCateList": []
    }, {
      "name": "游戏点卡",
      "id": 1050000,
      "subCateList": []
    }, {
      "name": "日韩馆",
      "id": 1065001,
      "subCateList": []
    }, {
      "name": "澳新馆",
      "id": 1065002,
      "subCateList": []
    }, {
      "name": "韩国馆",
      "id": 1065003,
      "subCateList": []
    }, {
      "name": "欧美馆",
      "id": 1065004,
      "subCateList": []
    }, {
      "name": "东南亚馆",
      "id": 1065005,
      "subCateList": []
    }, {
      "name": "春风馆",
      "id": 1065007,
      "subCateList": []
    }, {
      "name": "味央馆",
      "id": 1065008,
      "subCateList": []
    }, {
      "name": "云音乐周边",
      "id": 1065009,
      "subCateList": []
    }, {
      "name": "严选推荐馆",
      "id": 1065010,
      "subCateList": []
    }, {
      "name": "暴雪周边",
      "id": 1066000,
      "subCateList": []
    }, {
      "name": "影视周边",
      "id": 1069000,
      "subCateList": []
    }, {
      "name": "动漫电玩",
      "id": 1069001,
      "subCateList": []
    }, {
      "name": "Yessing馆",
      "id": 109202001,
      "subCateList": []
    }, {
      "name": "节庆礼盒",
      "id": 109243037,
      "subCateList": []
    }]
  }, {
    "name": "数码家电",
    "id": 1043000,
    "subCateList": [{
      "name": "影音娱乐",
      "id": 1008006,
      "subCateList": []
    }, {
      "name": "个护美容",
      "id": 1010003,
      "subCateList": []
    }, {
      "name": "生活电器",
      "id": 1011003,
      "subCateList": []
    }, {
      "name": "数码办公",
      "id": 1022000,
      "subCateList": []
    }, {
      "name": "厨房电器",
      "id": 1023000,
      "subCateList": []
    }, {
      "name": "乐器唱片",
      "id": 1028001,
      "subCateList": []
    }, {
      "name": "按摩电器",
      "id": 109243034,
      "subCateList": []
    }, {
      "name": "手机配件",
      "id": 109243035,
      "subCateList": []
    }, {
      "name": "车载用品",
      "id": 109243036,
      "subCateList": []
    }]
  }, {
    "name": "特色区",
    "id": 1065000,
    "subCateList": [{
      "name": "智造馆",
      "id": 1065006,
      "subCateList": []
    }, {
      "name": "进口尖货",
      "id": 109233000,
      "subCateList": []
    }]
  }, {
    "name": "运动旅行",
    "id": 109243029,
    "subCateList": [{
      "name": "女式户外",
      "id": 1010001,
      "subCateList": []
    }, {
      "name": "男式运动下装",
      "id": 1015001,
      "subCateList": []
    }, {
      "name": "旅行用品",
      "id": 1020000,
      "subCateList": []
    }, {
      "name": "男式运动上装",
      "id": 1020010,
      "subCateList": []
    }, {
      "name": "女式运动上装",
      "id": 1035002,
      "subCateList": []
    }, {
      "name": "男式户外",
      "id": 1078000,
      "subCateList": []
    }, {
      "name": "女式运动下装",
      "id": 109214005,
      "subCateList": []
    }, {
      "name": "行李箱",
      "id": 109243030,
      "subCateList": []
    }, {
      "name": "露营用品",
      "id": 109243031,
      "subCateList": []
    }, {
      "name": "运动器械",
      "id": 109243032,
      "subCateList": []
    }, {
      "name": "运动护具",
      "id": 109243033,
      "subCateList": []
    }]
  }]
});

// 根据分类获取产品列表
Mock.mock(/getProductByCate/, 'get', function (options) {
  return [{
    "imagePath": "http://yanxuan.nosdn.127.net/3ce02ac47bf8a0e462beba970497d5f3.png",
    "price": "99",
    "name": "欧式简约玻璃茶壶",
    "state": 0,
    "sku": 0,
    "yxPrice": "99",
    "skuid": "1059089"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/cd22c4c92540cbf29b033336b82a7432.png",
    "price": "89",
    "name": "现代玻璃茶壶套装",
    "state": 0,
    "sku": 0,
    "yxPrice": "89",
    "skuid": "1006143"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/18bfada254b59618437bacdb69a725f9.png",
    "price": "129",
    "name": "现代玻璃茶壶套装",
    "state": 0,
    "sku": 0,
    "yxPrice": "129",
    "skuid": "1205021"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/16598ae9c24e8127b30ba3b50d22b1c7.png",
    "price": "25",
    "name": "高硼硅立式茶杯",
    "state": 0,
    "sku": 0,
    "yxPrice": "25",
    "skuid": "1006144"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/62f124e2d46296ad53fa85affa0b9d81.png",
    "price": "99",
    "name": "功夫茶具套装(1壶4杯)",
    "state": 0,
    "sku": 0,
    "yxPrice": "99",
    "skuid": "1023007"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/94cb9b4515c9cbb7b00e17ccf104c421.png",
    "price": "49",
    "name": "双层隔热绿茶杯",
    "state": 0,
    "sku": 0,
    "yxPrice": "49",
    "skuid": "1034007"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/063a39dec080ea082a1a9cb772b41b54.png",
    "price": "89",
    "name": "双层隔热绿茶杯",
    "state": 0,
    "sku": 0,
    "yxPrice": "89",
    "skuid": "1226003"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/ac23d63272b3ffcb0ee5fb6d3820d252.png",
    "price": "69",
    "name": "花茶个人杯",
    "state": 0,
    "sku": 0,
    "yxPrice": "69",
    "skuid": "1037029"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/0706727e022a6448d93bd7d811efe9dd.png",
    "price": "199",
    "name": "竹制蓄水茶盘",
    "state": 0,
    "sku": 0,
    "yxPrice": "199",
    "skuid": "1038005"
  }, {
    "imagePath": "http://yanxuan.nosdn.127.net/38aa58e2fb85b1d233157476fc866161.png",
    "price": "339",
    "name": "羊脂玉白紫金线茶具套装",
    "state": 1,
    "sku": 513,
    "yxPrice": "339",
    "skuid": "1038048"
  }]
});

Mock.mock(/getProductById/, 'get', function (optiosn) {
  return {
    merchant: 'RK外设官方旗舰店',
    title: 'RK ABS 二色成型键帽 适用樱桃魔力鸭凯酷达尔优等机械键 37键彩色键帽--彩虹渐变',
    price: '40',
    count: 1,
    sku: 20,
    img: 'https://img10.360buyimg.com/mobilecms/s117x117_jfs/t24904/48/1762802430/218706/7a55b2a6/5bbb0feaNbb5e5595.jpg!q70.dpg.webp'
  }
})

Mock.mock(/hotsell/, 'get', function (options) {
  // return {
  //   code: '1',
  //   items: []
  // }
  return {
    code: '1',
    items: [{
        id: uuid(),
        title: Random.cparagraph(),
        price: Random.natural(160, 5000),
        status: Random.boolean() ? '有货' : '无货',
        url: Random.url()
      },
      {
        id: uuid(),
        title: Random.cparagraph(),
        price: Random.natural(160, 5000),
        status: Random.boolean() ? '有货' : '无货',
        url: Random.url()
      },
      {
        id: uuid(),
        title: Random.cparagraph(),
        price: Random.natural(160, 5000),
        status: Random.boolean() ? '有货' : '无货',
        url: Random.url()
      }
    ]
  }
});

// 校验交易密码
Mock.mock(/confirmTransPswd/, 'post', function (options) {
  const data = JSON.parse(options.body)
  console.log('confirmTransPswd', data)
  if (data.pswd === '000000') {
    return {
      code: '1',
      msg: ''
    }
  } else {
    return {
      code: '2',
      msg: '交易密码错误'
    }
  }
})

// 添加银行卡/信用卡
Mock.mock(/addBankcard/, 'post', function (options) {
  console.log('addBankcard', options.body)
  return {
    code: '1',
    msg: '添加成功'
  }
})

// 获取银行卡
Mock.mock(/getBankCardList/, 'get', function (options) {
  // return {
  //   code: '0',
  //   items: []
  // }  
  return {
    status: 200,
    data: [{
        "id": 1,
        "userPhoneNo": "15999685974",
        "roleType": 2,
        "bankCode": "SZPAB",
        "bankCard": "6226090216710646",
        "bankName": "中国银行信用卡",
        "bankCardType": 2,
        "status": 1,
        "cardHoldName": "蒋磊",
        "idNo": "431122191111111111",
        "updateTime": 1553247261,
        "createTime": 1553247261
      },
      {
        "id": 2,
        "userPhoneNo": "15014095291",
        "roleType": 2,
        "bankCode": "CCB",
        "bankCard": "6227007200230197008",
        "bankName": "建设银行",
        "bankCardType": 1,
        "status": 1,
        "cardHoldName": "高强",
        "idNo": "421381199007231333",
        "updateTime": 1553247261,
        "createTime": 1553247261
      }
    ]
  }
})
Mock.mock(/bankCard/, 'delete', function (options) {
  return {
    status: 200,
    msg: '删除成功'
  }
})


// 获取信用卡
Mock.mock(/getCreditCardList/, 'get', function (options) {
  // return {
  //   code: '0',
  //   items: []
  // }  
  return {
    code: '1',
    items: [{
        id: uuid(),
        creditCardName: '建设银行',
        creditCardNo: '6227007200230197111'
      },
      {
        id: uuid(),
        creditCardName: '招商银行',
        creditCardNo: '6227007200230197112'
      },
      {
        id: uuid(),
        creditCardName: '工商银行',
        creditCardNo: '6227007200230197113'
      }
    ]
  }
})

//  信用卡还款
Mock.mock(/creditCardRepayment/, 'post', function (options) {
  return {
    code: '1',
    msg: '信用卡还款成功'
  }
  // return {
  //   code: '0',
  //   msg: '交易密码错误'
  // }
})

// 积分转赠
Mock.mock(/transfer/, 'post', function (options) {
  return {
    code: '1',
    msg: '转赠成功'
  }
  // return {
  //   code: '0',
  //   msg: '交易密码错误'
  // }
})

// 获取电子卡券列表
Mock.mock(/getECardList/, 'get', function (options) {
  // return {
  //   code: '1',
  //   items: []
  // }

  return {
    code: '1',
    items: [{
        id: uuid(),
        cateName: '电商平台电子卡',
        children: [{
            id: uuid(),
            name: '天猫',
            class: '1'
          },
          {
            id: uuid(),
            name: '苏宁',
            class: '2'
          },
          {
            id: uuid(),
            name: '亚马逊',
            class: '3'
          },
          {
            id: uuid(),
            name: '京东',
            class: '4'
          }
        ]
      },
      {
        id: uuid(),
        cateName: '旅游、交通出行卡',
        children: [{
            id: uuid(),
            name: '携程任我游',
            class: '5'
          },
          {
            id: uuid(),
            name: '携程任我行',
            class: '6'
          }
        ]
      },
      {
        id: uuid(),
        cateName: '饮食美味',
        children: [{
            id: uuid(),
            name: '哈根达斯',
            class: '7'
          },
          {
            id: uuid(),
            name: '肯德基',
            class: '8'
          },
          {
            id: uuid(),
            name: '必胜客',
            class: '9'
          },
          {
            id: uuid(),
            name: '星巴克',
            class: '10'
          }
        ]
      },
      {
        id: uuid(),
        cateName: '购物消费',
        children: [{
            id: uuid(),
            name: 'DQ电子卡',
            class: '11'
          },
          {
            id: uuid(),
            name: '百果园',
            class: '12'
          },
          {
            id: uuid(),
            name: '苹果AppStore',
            class: '13'
          },
          {
            id: uuid(),
            name: '万宁代金券',
            class: '14'
          },
          {
            id: uuid(),
            name: '屈臣氏代金券',
            class: '15'
          }
        ]
      }
    ]
  }
})

// 获取指定类型电子卡券数据
Mock.mock(/getECardDetailByType/, 'get', function (options) {
  return {
    code: '1',
    data: {
      name: '京东E卡',
      class: '1',
      items: [{
          id: uuid(),
          price: '50',
          integral: '5300'
        },
        {
          id: uuid(),
          price: '100',
          integral: '10600'
        },
        {
          id: uuid(),
          price: '200',
          integral: '21200'
        },
        {
          id: uuid(),
          price: '500',
          integral: '61200'
        },
        {
          id: uuid(),
          price: '1000',
          integral: '121200'
        }
      ],
      expire: '京东E卡有效期为3个月',
      explain: [
        '购买成功后您将收到对应产品的京东E卡信息；',
        '京东E卡不记名、不挂失、不兑现、不计息、不可修改密码。购买后需要妥善保管卡号及密码；',
        '京东E卡仅能购买京东自营商品 （页面显示有“京东自营”或者商品编号为6位或者7位数，但出版物、全球购、虚拟产品、部分团购及抢购商品、投资金银类、夺宝岛和第三方卖家商品不在此内）；',
        '使用京东E卡购买的商品发生退货时，所支付资金会自动退回到卡内；',
        '登录京东首页，选择喜欢的商品加入购物车并根据页面上的提示进行购物操作。在提交订单页面，点击“使用优惠/抵用“，选择礼品卡，输入您的京东E卡的密码，点击绑定即可绑定到您的账户中，然后根据需要选择您使用的京东E卡，点击提交订单即可完成操作。注：如需一次使用多张E卡，可点击“添加礼品卡“继续绑定，然后点击勾选多张E卡即可使用；',
        '京东将不会对E卡消费的金额开具发票。'
      ]
    }
  }
})

// 获取代卖手续费
Mock.mock(/getRedeemFee/, 'get', function (options) {
  const result = util.parseUrl(options.url, 'integral');
  return {
    code: '1',
    redeemFee: 0,
    deductIntegral: result.integral,
    actualReceived: result.integral / 100
  }
})

// 发起积分代卖
Mock.mock(/redeemIntegral/, 'post', function (options) {
  const data = JSON.parse(options.body)
  console.log('redeemIntegral', data)
  return {
    code: '1',
    msg: '积分代卖申请成功'
  }
})

// 获取积分代卖记录
Mock.mock(/getRedeemRecordByStatus/, 'get', function (options) {
  const status = util.parseUrl(options.url, 'status').status;
  console.log('getRedeemRecordByStatus', status)
  return {
    code: '1',
    items: [{
        id: uuid(),
        integral: '10000',
        serviceCharge: '100',
        timestamp: new Date().getTime()
      },
      {
        id: uuid(),
        integral: '10000',
        serviceCharge: '100',
        timestamp: new Date().getTime()
      },
      {
        id: uuid(),
        integral: '10000',
        serviceCharge: '100',
        timestamp: new Date().getTime()
      }
    ]
  }
})

// 发送短信验证码（积分代卖流程）
Mock.mock(/sendMsgCode/, 'get', function (options) {
  return {
    code: '1',
    msg: '短信已发送'
  }
})

// 发送短信验证码（登录流程）
Mock.mock(/sendMessageCode/, 'get', function (options) {
  return {
    code: '1',
    msg: '短信已发送'
  }
})

// 获取订单列表
// 标题
// 状态
// 时间
// 积分
// 类型（判断图标）
Mock.mock(/getOrderList/, 'get', function (options) {
  const status = util.parseUrl(options.url, 'status').status
  const page = util.parseUrl(options.url, 'page').page
  console.log(`getOrderList status:${status} page:${page}`)
  return {
    status: 200,
    data: {
      data: [{
          byOrderDetail: uuid(),
          productName: 'asdfsf',
          status: '11',
          createTime: new Date().getTime(),
          productValue: 1212
        },
        {
          byOrderDetail: uuid(),
          productName: 'asdfsf',
          status: '11',
          createTime: new Date().getTime(),
          productValue: 1212
        },
        {
          byOrderDetail: uuid(),
          productName: 'asdfsf',
          status: '11',
          createTime: new Date().getTime(),
          productValue: 1212
        },
        {
          byOrderDetail: uuid(),
          productName: 'asdfsf',
          status: '11',
          createTime: new Date().getTime(),
          productValue: 1212
        }
      ]
    }
  }
})

// 信用卡还款记录
Mock.mock(/getWithList/, 'get', function (options) {
  const status = util.parseUrl(options.url, 'status').status
  const page = util.parseUrl(options.url, 'page').page
  console.log(`getOrderList status:${status} page:${page}`)
  return {
    status: 200,
    data: {
      withdrawal: [{
          orderId: uuid(),
          amount: 1000,
          status: '11',
          createTime: new Date().getTime(),
          poundage: 1212
        },
        {
          orderId: uuid(),
          amount: 1000,
          status: '11',
          createTime: new Date().getTime(),
          poundage: 1212
        },
        {
          orderId: uuid(),
          amount: 1000,
          status: '11',
          createTime: new Date().getTime(),
          poundage: 1212
        },
        {
          orderId: uuid(),
          amount: 1000,
          status: '11',
          createTime: new Date().getTime(),
          poundage: 1212
        }
      ]
    }
  }
})

// 获取电子卡券记录
Mock.mock(/voucher\/list/, 'get', function (options) {
  const page = util.parseUrl(options.url, 'page').page
  console.log(`voucher list page:${page}`)
  return {
    status: 200,
    data: [{
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      },
      {
        buyOrderId: uuid(),
        amount: 50,
        voucherId: uuid(),
        voucherPwd: uuid(),
        expireTime: new Date().getTime(),
        productName: 'dfasfasfd'
      }
    ]
  }
})


const province = {
  "湖北省": 6612,
  "湖南省": 6613,
  "广东省": 6614,
  "四川省": 6615
}
const city = {
  "深圳市": 1212,
  "汕头市": 1213
}
const county = {
  "光明新区": 6675,
  "南山区": 3155
}
const street = {
  "龙华街道": 1232,
  "坂田街道": 1222
}

// 删除指定用户地址
Mock.mock(/address\/\d+/, 'get', function (options) {
  return {
    "status": 200,
    "data": {},
    "msg": "请求成功"
  }
})

// 获取京东地址
Mock.mock(/address/, 'get', function (options) {
  const type = util.parseUrl(options.url, 'type').type
  let data = null
  if (type === '1') {
    data = province
  } else if (type === '2') {
    data = city
  } else if (type === '3') {
    data = county
  } else if (type === '4') {
    data = street
  }
  return {
    status: 200,
    data: data
  }
})

// 获取用户地址列表
Mock.mock(/userAddressList/, 'get', function (options) {
  return {
    status: 200,
    data: []
  }
  return {
    "status": 200,
    "data": [{
      "id": 1,
      name: "杰森斯坦森2",
      "province": "江西",
      "city": "抚州",
      "county": "临川区",
      "town": "腾桥镇",
      "address": "邓坊村",
      "phone": "15999685974",
      "defaultAddress": 0
    }, {
      "id": 2,
      name: "杰森斯坦森2",
      "province": "广东",
      "city": "深圳市",
      "county": "宝安区",
      "town": "腾桥镇",
      "address": "邓坊村",
      "phone": "15999685974",
      "defaultAddress": 0
    }, {
      "id": 3,
      name: "杰森斯坦森3",
      "province": "江西",
      "city": "抚州",
      "county": "临川区",
      "town": "腾桥镇",
      "address": "邓坊村",
      "phone": "15999685974",
      "defaultAddress": 0
    }, {
      "id": 4,
      name: "杰森斯坦森4",
      "province": "江西",
      "city": "抚州",
      "county": "临川区",
      "town": "腾桥镇",
      "address": "邓坊村",
      "phone": "15999685974",
      "defaultAddress": 0
    }, {
      "id": 6,
      name: "杰森斯坦森5",
      "province": "江西",
      "city": "抚州",
      "county": "临川区",
      "town": "腾桥镇",
      "address": "邓坊村",
      "phone": "15999685974",
      "defaultAddress": 0
    }, {
      "id": 7,
      name: "杰森斯坦森6",
      "province": "江西",
      "city": "抚州",
      "county": "临川区",
      "town": "腾桥镇",
      "address": "广东省深圳市南山区西丽镇红花岭坪山村",
      "phone": "15999685974",
      "defaultAddress": 1
    }],
    "msg": "请求成功"
  }
})

// 获取用户地址列表
Mock.mock(/address/, 'post', function (options) {
  return {
    status: 200,
    data: {
      id: new Date().getTime()
    }
  }
})

// 获取京东商品类别列表
Mock.mock(/goodsClassLists/, 'get', function (options) {
  return {
    "status": 200,
    "data": [{
      "id": 1,
      "category": "手机"
    }, {
      "id": 2,
      "category": "数码"
    }, {
      "id": 3,
      "category": "家居日用"
    }, {
      "id": 4,
      "category": "食品"
    }, {
      "id": 5,
      "category": "个人护理"
    }, {
      "id": 6,
      "category": "移动硬盘＋鼠标＋摄像头"
    }, {
      "id": 7,
      "category": "u盘+鼠标垫+电脑工具"
    }, {
      "id": 8,
      "category": "键盘+插座"
    }, {
      "id": 9,
      "category": "线缆＋网络仪表仪器"
    }, {
      "id": 10,
      "category": "酒类"
    }],
    "msg": "请求成功"
  }
})

// 获取京东商品类别列表
Mock.mock(/goodsList/, 'get', function (options) {
  return {
    "status": 200,
    "data": {
      "data": [{
        "saleUnit": "  ",
        "weight": "0.34",
        "productArea": "中国大陆",
        "wareQd": "",
        "imagePath": "jfs/t1/11806/11/5475/151966/5c3356b8E1c814acf/0d3674f1114d5052.jpg",
        "param": "\u003ctable cellpadding=\"0\" cellspacing=\"1\" width=\"100%\" border=\"0\" class=\"Ptable\"\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e主体\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e品牌\u003c/td\u003e\u003ctd\u003e暴风魔镜\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e型号\u003c/td\u003e\u003ctd\u003eXD-01\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e类型\u003c/td\u003e\u003ctd\u003e中端VR眼镜（配合带有陀螺仪手机使用）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e观影看剧\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e空间游戏\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e游戏资源\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e视频资源\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e低延迟率\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e3D电影\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e娱乐游戏\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e近视可用\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e瞳距调节\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e颜色\u003c/td\u003e\u003ctd\u003e黑色\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e屏幕\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e分辨率\u003c/td\u003e\u003ctd\u003e建议1920*1080及以上\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e材质\u003c/td\u003e\u003ctd\u003e光学专用PMMA\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e光学设计\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e视场角\u003c/td\u003e\u003ctd\u003e60°\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e基本信息\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身长度\u003c/td\u003e\u003ctd\u003e170mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身宽度\u003c/td\u003e\u003ctd\u003e138mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身高度\u003c/td\u003e\u003ctd\u003e98mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身重量\u003c/td\u003e\u003ctd\u003e230g\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身材质分类\u003c/td\u003e\u003ctd\u003eABS材质\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e",
        "state": 1,
        "sku": 3394327,
        "shouhou": "",
        "brandName": "暴风魔镜",
        "upc": "3394327;6937972410909",
        "appintroduce": "",
        "category": "652;12345;12349",
        "name": "暴风魔镜 小D 虚拟现实智能VR眼镜3D头盔 黑色",
        "introduction": "\u003ctable id=\"__01\" width=\"750\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\u003e \n \u003ctbody\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e \u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t5593/170/7155373949/112251/f5fa5905/596efc12Nc7d2d13c.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3220/344/1567640235/141504/75c8994b/57d10ffaN22811e3e.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3274/57/1630756003/14284/1e2fbbde/57d10ffaN2b06e273.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3226/142/1674895710/71218/dd7a93d0/57d10ffbNd3b1a2dc.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3136/349/1626708822/3486/e4a4e665/57d10ffaN1639d259.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3010/111/1999513435/60765/6fab54c8/57d10ffbN2edde526.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3067/185/1646158473/55756/7abeaafe/57d10ffbN3d1d108c.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3187/89/1641232294/64153/4c665b65/57d10ffbNff98c94e.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3859/88/502002623/36418/42c801cf/58534a60N8a0c7f2d.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3043/164/2017479880/28867/98aa5b89/57d10ffbNd8ecec71.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3214/62/1605342333/43759/eb71ac60/57d10ffbNd8b5eec0.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3286/245/2215589566/38740/9653034d/57de04d1Nce070e18.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3301/6/1674485422/100875/64153732/57d10ffbN090a6c46.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3088/116/1632483858/85434/8eb41ce0/57d10ffbN3ddf7405.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n \u003c/tbody\u003e \n\u003c/table\u003e",
        "price": "39",
        "jdPrice": "59",
        "skuId": 3394327,
        "type": 2
      }],
      "count": 7
    },
    "msg": "请求成功"
  }
})

// 获取京东商品订单列表
Mock.mock(/JDOrders/, 'get', function (options) {
  return {
    "status": 200,
    "data": [{
      "id": 1541,
      "orderId": "201904188c09rxfpl4",
      "externalOrder": 86382642864,
      "name": "邓伟正",
      "address": "江西抚州临川区腾桥镇",
      "phone": "15999685974",
      "jdPrice": "15.8",
      "price": "13.9",
      "totalScore": "1580",
      "count": 1,
      "remark": "",
      "status": 16,
      "goodsName": "飘柔洗发水净爽去屑200ml（男士女士通用）花香调",
      "sku": "3640937",
      "orderStatus": 0,
      "createTime": 1555575203
    }],
    "msg": "请求成功"
  }
})

// 获取京东商品物流信息
Mock.mock(/JDTrack/, 'get', function (options) {
  return {
    "status": 200,
    "data": [{
      "msgTime": "2019-04-18 10:07:04",
      "content": "您提交了订单，请等待系统确认",
      "operator": "客户"
    }, {
      "msgTime": "2019-04-18 10:11:40",
      "content": "您的订单预计2019-04-19 00:10开始处理，请您耐心等待",
      "operator": "系统"
    }, {
      "msgTime": "2019-04-19 00:13:09",
      "content": "您的订单已经进入京东南昌仓库准备出库",
      "operator": "系统"
    }, {
      "msgTime": "2019-04-19 00:13:10",
      "content": "您的订单预计4月20日送达您手中",
      "operator": "系统"
    }, {
      "msgTime": "2019-04-19 09:19:17",
      "content": "您的订单已经打印完成",
      "operator": "chenzhaojun"
    }, {
      "msgTime": "2019-04-19 10:41:48",
      "content": "拣货完成",
      "operator": "张成"
    }, {
      "msgTime": "2019-04-19 11:09:25",
      "content": "扫描完成",
      "operator": "文礼"
    }, {
      "msgTime": "2019-04-19 11:09:26",
      "content": "打包完成",
      "operator": "京东打包员"
    }, {
      "msgTime": "2019-04-19 12:03:29",
      "content": "您的订单在京东【南昌分拨中心】分拣完成",
      "operator": "鲍志兵"
    }, {
      "msgTime": "2019-04-19 12:14:52",
      "content": "您的订单由京东【南昌分拨中心】送往【抚州临川营业部】",
      "operator": "龚海明"
    }, {
      "msgTime": "2019-04-19 14:42:49",
      "content": "您的订单已到达京东【抚州临川营业部】",
      "operator": "周勇"
    }, {
      "msgTime": "2019-04-20 11:17:28",
      "content": "您的订单正在配送途中（快递员：修剑明，电话：18979499559），请您耐心等待。 ",
      "operator": "修剑明"
    }, {
      "msgTime": "2019-04-20 18:39:08",
      "content": "您的订单已由便利店代收。感谢您在京东购物，欢迎再次光临。",
      "operator": "修剑明"
    }],
    "msg": "请求成功"
  }
})

// 获取积分派发记录
Mock.mock(/integralList/, 'get', function (options) {
  return {
    "status": 200,
    "data": [{
      "id": 8,
      "points": "103",
      "remark": "附加说明0000001",
      "createTime": 1555580264
    }],
    "msg": "请求成功"
  }
})