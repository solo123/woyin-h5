import util from '../util'
import uuid from 'uuid'

const Mock = require('mockjs')
const Random = Mock.Random

Mock.setup({
  timeout: 500
})

// 加油卡充值产品列表
Mock.mock(/getRechargeOilProductsByType/, 'get', function (options) {
  switch (util.parseUrl(options.url, 'type').type) {
    case '1':
      return [{
          id: uuid(),
          integral: 5300,
          money: 50
        },
        {
          id: uuid(),
          integral: 10600,
          money: 100
        },
        {
          id: uuid(),
          integral: 21200,
          money: 200
        },
        {
          id: uuid(),
          integral: 53000,
          money: 500
        },
        {
          id: uuid(),
          integral: 106000,
          money: 1000
        }
      ]
    case '2':
      return []
    default:
      return []
  }
})

// 加油卡充值
Mock.mock(/rechargeOil/, 'get', function (options) {
  return {
    code: '1',
    msg: '充值成功'
  }
})

// QB充值产品列表
Mock.mock(/getRechargeQBProductsByType/, 'get', function (options) {
  return [{
      id: uuid(),
      integral: 500,
      money: 5
    },
    {
      id: uuid(),
      integral: 1000,
      money: 10
    },
    {
      id: uuid(),
      integral: 2000,
      money: 20
    },
    {
      id: uuid(),
      integral: 5000,
      money: 50
    },
    {
      id: uuid(),
      integral: 10000,
      money: 100
    }
  ]
})

// QB充值
Mock.mock(/rechargeQB/, 'get', function (options) {
  return {
    code: '1',
    msg: '充值成功'
  }
})


// 视频会员供应商列表
Mock.mock(/getVideoProviders/, 'get', function (options) {
  return {
    code: '1',
    items: [{
        id: uuid(),
        name: '优酷土豆',
        class: 1
      },
      {
        id: uuid(),
        name: '爱奇艺',
        class: 2
      },
      {
        id: uuid(),
        name: '腾讯视频',
        class: 3
      },
      {
        id: uuid(),
        name: '腾讯体育',
        class: 4
      },
      {
        id: uuid(),
        name: '芒果tv',
        class: 5
      },
      {
        id: uuid(),
        name: '搜狐视频',
        class: 6
      },
      {
        id: uuid(),
        name: 'QQ音乐',
        class: 7
      },
      {
        id: uuid(),
        name: '酷狗音乐',
        class: 8
      },
      {
        id: uuid(),
        name: '酷我音乐',
        class: 9
      }
    ]
  }
  // return {
  //   code: '1',
  //   items: []
  // }
})

Mock.mock(/getVideoProducts/, 'get', function (options) {
  return {
    code: '1',
    items: [{
        orgPrice: "20",
        salesPrice: "1356",
        createTime: "2018-12-28 17:02:20",
        status: "1",
        updateTime: "2019-03-01 17:11:51",
        buyingPrice: "2000",
        valueList: "20,67.8",
        canRefund: "1",
        classifyType: "2",
        discount: "67.8",
        productId: "2018122817022042601",
        productType: "8",
        productTypeName: "腾讯视频",
        buyPrice: "1356",
        productName: "腾讯视频VIP (月卡)直充"
      },
      {
        orgPrice: "58",
        salesPrice: "3935",
        createTime: "2018-12-28 17:02:40",
        status: "1",
        updateTime: "2019-03-01 18:22:51",
        buyingPrice: "5800",
        valueList: "58,67.84",
        canRefund: "1",
        classifyType: "2",
        discount: "67.84",
        productId: "2018122817024038703",
        productType: "8",
        productTypeName: "腾讯视频",
        buyPrice: "3935",
        productName: "腾讯视频VIP (季卡)直充"
      },
      {
        orgPrice: "198",
        salesPrice: "13433",
        createTime: "2018-12-28 17:02:59",
        status: "1",
        updateTime: "2019-03-01 18:22:56",
        buyingPrice: "19800",
        valueList: "198,67.84",
        canRefund: "1",
        classifyType: "2",
        discount: "67.84",
        productId: "2018122817025995405",
        productType: "8",
        productTypeName: "腾讯视频",
        buyPrice: "13433",
        productName: "腾讯视频VIP (年卡)直充"
      }
    ]
  }
  // return {
  //   code: '1',
  //   items: []
  // }
})