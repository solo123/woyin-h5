import {setup} from './util'

export default {

  // 获取服务菜单
  'GET /api/product/list': (req, res) => {
    setup(res)

    if(!req.query.productClassifyId) {
      res.json({
        "status": 200,
        "data": [{
            "productClassifyName": "话费充值",
            "productClassifyId": "11111"
          },
          {
            "productClassifyName": "流量充值",
            "productClassifyId": "77777"
          },
          {
            "productClassifyName": "油卡充值",
            "productClassifyId": "100001"
          },
          {
            "productClassifyName": "Q币充值",
            "productClassifyId": "44444"
          },
          {
            "productClassifyName": "视频VIP",
            "productClassifyId": "100010"
          },
          {
            "productClassifyName": "电子卡券",
            "productClassifyId": "100004"
          },
          {
            "productClassifyName": "信用卡还款",
            "productClassifyId": "100017"
          }
        ],
        "msg": "SUCCESS"
      })
    }else {
      res.json({
        "status": 200,
        "data": [
          {
            "productClassifyName": "中石化加油卡",
            "productClassifyId": "10"
          },
          {
            "productClassifyName": "中石油加油卡",
            "productClassifyId": "11"
          }
        ],
        "msg": "SUCCESS"
    })}
  },

  // 获取二级菜单
  'GET /api/product/subList': (req, res) => {
    setup(res)

    res.json({
      "status": 200,
      "data": [
        {
          "productId": "1",
          "productName": "移动话费充值1",
          "productStatus": 1,
          "productCostBalance": "100",
          "buyingPrice": "1.00",
          "salesPrice": "1.00",
          "canRefund": 1,
          "disCount": "9.112",
          "createTime": 1554258756
        },
        {
          "productId": "2",
          "productName": "移动话费充值5",
          "productStatus": 1,
          "productCostBalance": "500",
          "buyingPrice": "5.00",
          "salesPrice": "5.00",
          "canRefund": 1,
          "disCount": "9",
          "createTime": 1554258875
        }
      ],
      "msg": "SUCCESS"
    })
  },

  // 热销商品
  'GET /api/sellingGoods': (req, res) => {
    setup(res)
    
    res.json({
      status: 200,
      data: [],
      msg: 'SUCCESS'
    })
  }
}