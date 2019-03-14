import util from '../util'
import uuid from 'uuid'

const Mock = require('mockjs')
const Random = Mock.Random

Mock.setup({
  timeout: 500
})

// 加油卡充值产品列表
Mock.mock(/getRechargeOilProductsByType/, 'get', function(options){
  switch(util.parseUrl(options.url, 'type').type) {
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
})

// 加油卡充值
Mock.mock(/rechargeOil/, 'get', function(options){
  return {
    code: '1',
    msg: '充值成功'
  }
})

// QB充值产品列表
Mock.mock(/getRechargeQBProductsByType/, 'get', function(options){
  return [
    { id: uuid(), integral: 500, money: 5 },
    { id: uuid(), integral: 1000, money: 10 },
    { id: uuid(), integral: 2000, money: 20 },
    { id: uuid(), integral: 5000, money: 50 },
    { id: uuid(), integral: 10000, money: 100 }
  ]
})

// QB充值
Mock.mock(/rechargeQB/, 'get', function(options){
  return {
    code: '1',
    msg: '充值成功'
  }
})


// 视频会员供应商列表
Mock.mock(/getVideoProviders/, 'get', function(options){
  return {
    code: '1',
    items: [
      { id: uuid(), name: '优酷土豆', class: 1 },
      { id: uuid(), name: '爱奇艺', class: 2 },
      { id: uuid(), name: '腾讯视频', class: 3 },
      { id: uuid(), name: '腾讯体育', class: 4 },
      { id: uuid(), name: '芒果tv', class: 5 },
      { id: uuid(), name: '搜狐视频', class: 6 },
      { id: uuid(), name: 'QQ音乐', class: 7 },
      { id: uuid(), name: '酷狗音乐', class: 8 },
      { id: uuid(), name: '酷我音乐', class: 9 }
    ]
  }
  // return {
  //   code: '1',
  //   items: []
  // }
})
