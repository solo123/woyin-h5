import util from '../util'
import uuid from 'uuid'

const Mock = require('mockjs')
const Random = Mock.Random

Mock.setup({
  timeout: 500
})

// 流量充值产品列表
Mock.mock(/getRechargeOilProductsByType/, 'get', function(options){
  var result = util.parseUrl(options.url, 'type');
  switch(result.type) {
    case '1':
      return [
        { id: uuid(), integral: 5300, money: 50 },
        { id: uuid(), integral: 10600, money: 100 },
        { id: uuid(), integral: 21200, money: 200 },
        { id: uuid(), integral: 53000, money: 500 },
        { id: uuid(), integral: 106000, money: 1000 }
      ]
    case '2':
      return []
    default:
      return []
  }
});

// 流量充值
Mock.mock(/rechargeOil/, 'get', function(options){
  return {
    code: '1',
    msg: '充值成功'
  }
})
