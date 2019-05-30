import {setup} from './util'

export default {
  
  // 获取用户地址列表
  'GET /mail/userAddressList': (req, res) => {
    setup(res)

    res.json({
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
    })
  },

  // 获取京东四级地址数据
  'GET /mail/address': (req, res) => {
    setup(res)

    let data = {}
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
    
    if(req.query.type === '1') {
      data = province
    }else if(req.query.type === '2') {
      data = city
    }else if(req.query.type === '3') {
      data = county
    }else if(req.query.type === '4') {
      data = street
    }

    res.json({
      status: 200,
      data: data
    })
  },

  // 添加收货地址
  'POST /mail/address': (req, res) => {
    setup(res)

    res.json({
      status: 200,
      data: {
        id: new Date().getTime()
      }
    })   
  },

  // 删除指定收货地址
  'DELETE /mail/address/:id': (req, res) => {
    setup(res)
    res.json({
      status: 200,
      msg: "删除成功"
    })   
  }  
}