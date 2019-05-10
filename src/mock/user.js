import util from '../util'
import uuid from 'uuid'
const Mock = require('mockjs')

const Random = Mock.Random

// 登录
Mock.mock(/login/, 'post', function (options) {
  console.log('login')
  return {
    status: 200,
    data: {
      sessionId: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTYzMzM1NzksIm5iZiI6MTU1NjMzMzU3OSwidXNlclBob25lTm8iOiIxMzUxMDE0NTUwMCJ9._wyPOy0w225aLfR9JUwFu-BP1XI9EayHrWuln_3ER4s',
      isModify: 1,
    },
    msg: '登录成功'
  }
})

// 获取用户信息
Mock.mock(/getUserInfo/, 'get', function (options) {
  return {
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
  }
})