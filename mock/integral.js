import {setup} from './util'

export default {
  // 积分赎回 信用卡还款 请求提交
  'POST /api/trad/withdrawal': (req, res) => {
    setup(res)

    res.json({
      "status": 200,
      "data": "",
      "msg": "请求提交成功"
    })
  },

  // 获取手续费 
  'GET /api/trad/poundageList': (req, res) => {
    setup(res)

    res.json({
      "status": 200,
      "data": {
        "totalAmount": "1000",
        "amount": "899",
        "poundage": "101",
        "money": "8.99"
      },
      "msg": "SUCCESS"
    })
  },

  // 积分转赠请求
  'POST /api/transferred/commit': (req, res) => {
    setup(res)

    res.json({
      "status": 200,
      "data": "",
      "msg": "积分转赠请求提交成功"
    })
  },

  'GET /api/integralList': (req, res) => {
    setup(res)
    
    res.json({
      "status": 200,
      "data": [{
        "id": 8,
        "points": "103",
        "remark": "附加说明0000001",
        "createTime": 1555580264
      }],
      "msg": "请求成功"
    }) 
  }
}