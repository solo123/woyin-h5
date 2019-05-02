import util from '../util'
import uuid from 'uuid'

const Mock = require('mockjs')
const Random = Mock.Random

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
  // return {
  //   code: '1',
  //   items: []
  // }
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

})

Mock.mock(/getVideoProducts/, 'get', function (options) {
  const len = Random.natural(0, 10)
  const items = []

  for (let i = 0; i < len; i++) {
    items.push({
      productId: uuid(),
      buyPrice: Random.natural(1000, 100000),
      productName: "(季卡)直充"
    })
  }
  return {
    code: '1',
    items: items
  }
})

// 话费充值产品列表
Mock.mock(/getRechargePhoneProductsByType/, 'get', function (options) {
  // return {
  //   code: '1',
  //   items: []
  // }
  var result = util.parseUrl(options.url, 'type');
  switch (result.type) {
    case '1':
      return {
        code: '1',
        items: [{
            id: uuid(),
            integral: 1060,
            money: 10
          },
          {
            id: uuid(),
            integral: 2120,
            money: 20
          },
          {
            id: uuid(),
            integral: 3180,
            money: 30
          },
          {
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
            integral: 31800,
            money: 300
          },
          {
            id: uuid(),
            integral: 53000,
            money: 500
          }
        ]
      }
    case '2':
      return {
        code: '1',
        items: [{
            id: uuid(),
            integral: 1060,
            money: 10
          },
          {
            id: uuid(),
            integral: 2120,
            money: 20
          },
          {
            id: uuid(),
            integral: 3180,
            money: 30
          },
          {
            id: uuid(),
            integral: 5300,
            money: 50
          },
          {
            id: uuid(),
            integral: 10600,
            money: 100
          }
        ]
      }
    case '3':
      return {
        code: '1',
        items: []
      }
    default:
      return {
        code: '1',
        items: []
      }
  }
});

// 流量充值产品列表
Mock.mock(/getRechargeFlowProductsByType/, 'get', function (options) {
  var result = util.parseUrl(options.url, 'type');
  switch (result.type) {
    case '1':
      return [{
          id: uuid(),
          integral: 318,
          money: 10
        },
        {
          id: uuid(),
          integral: 1060,
          money: 100
        },
        {
          id: uuid(),
          integral: 2120,
          money: 300
        },
        {
          id: uuid(),
          integral: 3180,
          money: 500
        },
        {
          id: uuid(),
          integral: 0,
          money: 1024
        },
        {
          id: uuid(),
          integral: 5300,
          money: 2048
        },
        {
          id: uuid(),
          integral: 7420,
          money: 3072
        }
      ]
    case '2':
      return [{
          id: uuid(),
          integral: 318,
          money: 10
        },
        {
          id: uuid(),
          integral: 1060,
          money: 100
        },
        {
          id: uuid(),
          integral: 2120,
          money: 300
        },
        {
          id: uuid(),
          integral: 3180,
          money: 500
        },
        {
          id: uuid(),
          integral: 0,
          money: 1024
        }
      ]
    case '3':
      return []
    default:
      return []
  }
});

// 话费充值
Mock.mock(/rechargePhone/, 'get', function (options) {
  return {
    code: '1',
    msg: '充值成功'
  }
})

// 流量充值
Mock.mock(/rechargeFlow/, 'get', function (options) {
  return {
    code: '1',
    msg: '充值成功'
  }
})