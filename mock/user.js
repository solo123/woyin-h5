
export default {
  'GET /api/user/getUserInfo': {
    "status": 200,
    "data": [{
        "sessionId": "",
        "userId": "234",
        "userName": "15014095291",
        "userPhoneNo": "15999685974",
        "merchantId": "2019032115531571140214",
        "updateTime": 1553243744,
        "createTime": 1552622952,
        "balance": "10000",
        "freezeBalance": "10000100",
        "merchantName": "平安",
        "merchantAddr": "上海",
        "contactMan": "boss",
        "phoneNum": "188188188188",
        "telNum": "188188188188"
      },
      {
        "sessionId": "",
        "userId": "234",
        "userName": "邓伟正",
        "userPhoneNo": "15999685974",
        "merchantId": "2019032115531571840280",
        "updateTime": 1553243744,
        "createTime": 1552622952,
        "balance": "0",
        "freezeBalance": "0",
        "merchantName": "网易",
        "merchantAddr": "杭州",
        "contactMan": "丁磊",
        "phoneNum": "17717717766",
        "telNum": "17717717766"
      }
    ],
    "msg": "SUCCESS"
  },

  // 获取银行卡列表
  'GET /api/bank/getBankCardList': {
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
  },

  // 添加银行卡
  'POST /api/bank/addBankCard': (req, res) => {
    res.json({
      "status": 200,
      "data": "",
      "msg": "提交成功"
    })
  },

  // 删除银行卡
  'DELETE /api/bankCard/:id': {
    status: 200,
    msg: "删除成功"
  },

  'POST /api/bank/addBankCard': (req, res) => {
    // 根据req中提交的信息 校验数据合法性 做出不同响应
    res.json({
      status: 200,
      msg: '添加成功'
    })
  },
  
  // 获取短信验证码
  'POST /api/user/getCode': (req, res) => {
    res.json({
      status: 200,
      msg: "请求成功"
    })
  },

  // 登录接口
  'POST /api/user/login': (req, res) => {
    res.json({
      status: 200,
      data: {
        sessionId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTYzMzM1NzksIm5iZiI6MTU1NjMzMzU3OSwidXNlclBob25lTm8iOiIxMzUxMDE0NTUwMCJ9._wyPOy0w225aLfR9JUwFu-BP1XI9EayHrWuln_3ER4s',
        isModify: 1
      },
      msg: '登录成功'
    })
  }
}