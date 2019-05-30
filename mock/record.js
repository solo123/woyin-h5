import uuid from 'uuid'
import {setup} from './util'

export default {
  // 积分赎回 信用卡还款 记录
  'GET /api/trad/getWithList': (req, res) => {
    setup(res)

    res.json({
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
    })
  },

  // 积分转赠记录
  'GET /api/transferred/list': (req, res) => {
    setup(res)

    res.json({
      "status": 200,
      "data": [
        {
          "id": 1,
          "num": "899",
          "poundage": "101",
          "toAccount": "13111111112",
          "form": "15999685974",
          "userId": "234",
          "merchantId": "2019032115531571140214",
          "remark": "",
          "updateTime": 1554706616,
          "createTime": 1554706616,
          "total": "1000"
        },
        {
          "id": 2,
          "num": "1000",
          "poundage": "0",
          "toAccount": "13111111112",
          "form": "15999685974",
          "userId": "234",
          "merchantId": "2019032115531571140214",
          "remark": "",
          "updateTime": 1554706748,
          "createTime": 1554706748,
          "total": "1000",
          "operationId":""
        }
      ],
      "msg": "SUCCESS"
    })
  },

  // 获取服务订单列表
  'GET /api/order/getOrderList': (req, res) => {
    setup(res)

    res.json({
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
    })
  },

  // 获取已购电子卡券列表
  'GET /api/voucher/list': (req, res) => {
    setup(res)

    res.json({
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
    })
  },

  // 获取京东商品订单列表
  'GET /mail/JDOrders': (req, res) => {
    setup(res)

    res.json({
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
    })  
  },

  // 获取京东商品物流信息
  'GET /mail/JDTrack/:id': (req, res) => {
    setup(res)
    
    res.json({
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
    })
  }
}