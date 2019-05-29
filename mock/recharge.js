export default {
  // 获取手机号段
  'GET /mail/phoneType/:id': (req, res) => {
    res.json({
      "status":200,
      "data":{
        "province":"广东",
        "city":"深圳",
        "phoneType":"移动",
        "phoneStr":"1599968"
      },
      "msg":"请求成功"
    })
  },

  // 话费 Q币 充值
  'POST /api/charge/moreCredit': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "充值请求提交成功"
    })
  },

  // 流量充值
  'POST /api/traffic/charge': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "充值请求提交成功"
    })
  },

  // 视频vip
  'POST /api/video/charge': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "充值请求提交成功"
    })
  },

  // 电子卡券充值
  'POST /api/voucher/charge': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "充值请求提交成功"
    })
  },

  // 油卡充值
  'POST /api/oilCard/charge': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "充值请求提交成功"
    })
  }  
}