import qs from'qs'
import md5 from 'md5'
import {get, del, put, post} from './setup'

import G_config from '@/config'

let BASE = ''
if(process.env.NODE_ENV === 'development') {
  BASE = '/'
}else if(process.env.NODE_ENV === 'production') {
  BASE = '/client/'
}

export default {
  login(data) {
    if(data.loginType === 1) {
      data = {
        ...data,
        password: md5(data.password)
      }
    }
    return post(`${BASE}user/login`, qs.stringify(data));
  },
  // 获取指定状态的订单列表
  getOrderList(data, config = {}) {
    return get(`${BASE}api/order/getOrderList`, data, config)
  },
  hotProducts() {
    return get('hotProducts')
  },
  // 获取指定商城的分类列表
  getProductCateList(type) {
    return get('getProductCateList', { type: type })
  },
  // 根据分类获取产品列表
  getProductByCate(type, cate) {
    return get('getProductByCate', { type: type, cate: cate })
  },
  getProductById(id) {
    return get('getProductById', { id })
  },
  // 热卖商品
  getHotsell() {
    return get('hotsell')
  },
  // 获取话费产品列表
  getRechargePhoneProductsByType(id = '', config = {}) {
    return get(`${BASE}api/product/subList`, {productClassifyId: id}, config)
  },
  // 获取流量产品列表
  getRechargeFlowProductsByType(type) {
    return get('getRechargeFlowProductsByType', {type})
  },
  // 获取油卡产品列表
  getRechargeOilProductsByType(type) {
    return get('getRechargeOilProductsByType', {type})
  },  
  // 获取QB产品列表
  getRechargeQBProductsByType(type) {
    return get('getRechargeQBProductsByType', {type})
  },  
  // 获取视频提供商列表
  getVideoProviders() {
    return get('getVideoProviders')
  },  
  // 获取视频产品列表
  getVideoProducts() {
    return get('getVideoProducts')
  },  
  confirmTransPswd(pswd) {
    return post(`${BASE}api/trad/checkCode`, {pswd})
  },
  // 话费充值
  rechargePhone(data) {
    return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
  },
  // QB充值
  rechargeQB(data) {
    return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
  },  
  // 流量充值
  rechargeTraffic(data) {
    return post(`${BASE}api/traffic/charge`, qs.stringify(data))
  },
  // 加油卡充值
  rechargeOil(data) {
    return post(`${BASE}api/oilCard/charge`, qs.stringify(data))
  },  
  // 视频会员充值
  rechargeVideo(data) {
    return post(`${BASE}api/video/charge`, qs.stringify(data))
  },
  // 电子卡券充值
  rechargeVoucher(data) {
    return post(`${BASE}api/voucher/charge`, qs.stringify(data))
  },
  // 获取银行卡列表
  getBankcardList() {
    return get(`${BASE}api/bank/getBankCardList`)
  },
  // 添加银卡
  addBankcard(data) {
    return post(`${BASE}api/bank/addBankCard`, qs.stringify(data))
  },
  // 获取提现手续费
  getRedeemFee(amount) {
    return get(`${BASE}api/trad/poundageList`, {amount})
  },
  // 积分代卖流程短信验证码
  sendMsgCode(phone) {
    return get('sendMsgCode', {phone})
  },
  redeemIntegral(data) {
    return post(`${BASE}api/trad/withdrawal`, qs.stringify(data))
  },
  getRedeemRecordByStatus(data, config = {}) {
    return get(`${BASE}api/trad/getWithList`, data, config)
  },
  // 登录流程短信验证码
  getCode(data) {
    return post(`${BASE}user/getCode`, qs.stringify(data))
  },
  // 获取信用卡列表
  getCreditCardList() {
    return get('getCreditCardList')
  },
  // 信用卡还款
  creditCardRepayment(data) {
    return post('creditCardRepayment', data)
  },
  // 积分转赠
  transfer(data) {
    return post('transfer', data)
  },
  // 获取电子卡券列表
  getECardList() {
    return get('getECardList')
  },
  // 获取电子卡券详情
  getECardDetailByType() {
    return get('getECardDetailByType')
  },
  // 添加车辆
  addVehicle(data) {
    return post('addVehicle', data)
  },
  // 获取车辆列表
  getVehicleList() {
    return get('getVehicleList')
  },
  // 获取违章记录
  getViolationList() {
    return get('getViolationList')
  },
  // 获取用户可用积分
  getUserInfo() {
    return get(`${BASE}api/user/getUserInfo`)
  }
};

// 获取用户信息
export const getUserInfo = (data = {}, config = {}) => {
  return get(`${BASE}api/user/getUserInfo`, data, config)
}

// 发送短信验证码
export const getCode = (data) => {
  return post(`${BASE}user/getCode`, qs.stringify(data))
}

// 短信登录验证码
export const getCodeForLogin = (phone) => {
  const params = {userPhoneNo: phone, codeType: 1}
  return post(`${BASE}user/getCode`, qs.stringify(params))
}

// 找回登录密码验证码
export const getCodeForFindPswd = (phone) => {
  const params = {userPhoneNo: phone, codeType: 2}
  return post(`${BASE}user/getCode`, qs.stringify(params))
}

// 用户提现验证码
export const getCodeForWithdraw = (phone) => {
  const params = {userPhoneNo: phone, codeType: 3}
  return post(`${BASE}user/getCode`, qs.stringify(params))
}

export const redeemIntegral = (data) => {
  data = {
    ...data,
    tradPwd: md5(data.tradPwd)
  }
  return post(`${BASE}api/trad/withdrawal`, qs.stringify(data))
}

// 获取提现手续费
export const getRedeemFee = (amount) => {
  return get(`${BASE}api/trad/poundageList`, {amount})
}

// 获取提现手续费
export const getWithdrawFee = (amount) => {
  return get(`${BASE}api/trad/poundageList`, {amount})
}



export const getProducts = (productClassifyId = '', config = {}) => {
  return get(`${BASE}product/list`, {productClassifyId}, config)
}

export const getSubProducts = (id = '', config = {}) => {
  return get(`${BASE}api/product/subList`, {productClassifyId: id}, config)
}

// 视频充值 直充
export const rechargeVideo = (data = {}, config = {}) => {
  const params = {
    ...data,
    tranPwd: md5(data.tranPwd),
    chargeType: 1
  }
  return post(`${BASE}api/video/charge`, qs.stringify(params), config)
}

// 电子卡券充值
export const rechargeVoucher = (data) => {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }  
  return post(`${BASE}api/voucher/charge`, qs.stringify(data))
}

// 电子卡券记录
export const getVoucherRecord = (data, config = {}) => {
  const params = {
    ...data,
    limit: G_config.voucher.PAGE_LIMIT,
  } 
  return get(`${BASE}api/voucher/list`, params, config)
}

// 积分转赠
export const integralTransfer = (data) => {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }  
  return post(`${BASE}api/transferred/commit`, qs.stringify(data))
}

// 积分转赠记录
export const transferRecord = (data, config) => {
  const params = {
    ...data,
    limit: G_config.redeem.PAGE_LIMIT,
  } 
  return get(`${BASE}api/transferred/list`, params, config)
}

// 添加银卡
export const addBankcard = (data = {}) => {
  return post(`${BASE}api/bank/addBankCard`, qs.stringify(data))
}

// 获取银行卡/信用卡列表
export const getBankcardList = () => {
  return get(`${BASE}api/bank/getBankCardList`)
}

// 代卖或信用卡还款
export const paymentToCard = (data) => {
  data = {
    ...data,
    tradPwd: md5(data.tradPwd)
  }
  return post(`${BASE}api/trad/withdrawal`, qs.stringify(data))
}

// 获取订单列表
export const getOrderList = (data = {}, config = {}) => {
  const params = {
    ...data,
    limit: G_config.order.PAGE_LIMIT,
  }
  return get(`${BASE}api/order/getOrderList`, params, config)
}

// 获取信用卡还款记录
export function getCreditRecord(data = {}, config = {}) {
  const params = {
    ...data,
    limit: G_config.creditRecord.PAGE_LIMIT,
    payment: 2
  }
  return get(`${BASE}api/trad/getWithList`, params, config)
}

// 获取积分代卖记录
export const getRedeemRecord = (data = {}, config = {}) => {
  const params = {
    ...data,
    limit: G_config.redeem.PAGE_LIMIT,
    payment: 1
  }
  return get(`${BASE}api/trad/getWithList`, params, config)
}

// 话费充值
export function rechargePhone(data) {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd),
    chargeType: 1
  }
  return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
}

// QB充值
export function rechargeQB(data) {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }  
  return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
}

// 流量充值
export function rechargeTraffic(data) {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }
  return post(`${BASE}api/traffic/charge`, qs.stringify(data))
}

// 加油卡充值
export function rechargeOil(data) {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }
  return post(`${BASE}api/oilCard/charge`, qs.stringify(data))
}

// 获取层级地址
export function getAddr(data = {}, config = {}) {
  return get(`${BASE}mail/address`, data, config)
}

// 添加地址
export function addJDAddr(data) {
  data = {
    ...data,
    addType: 1
  }
  return post(`${BASE}mail/address`, qs.stringify(data))
}

export function getJDAddrList(data = {}, config = {}) {
  data = {
    ...data,
    addType: 1
  }
  return get(`${BASE}mail/userAddressList`, data, config)
}

// 删除用户地址
export function deleteAddrById(id, config) {
  return del(`${BASE}mail/address/${id}`, null, config)
}

// 获取京东商品类别列表
export function getJDGoodsSort(data = {}, config) {
  data = {
    ...data,
    typeId: 1
  }
  return get(`${BASE}mail/goodsClassLists`, data, config)
}

// 获取京东商品列表
export function getJDGoodsList(data = {}, config) {
  data = {
    ...data,
    limit: G_config.store.PAGE_LIMIT
  }
  return get(`${BASE}mail/goodsLists`, data, config)
}

// 京东商品下单
export function placeOrder(data) {
  data = {
    ...data,
    tranPwd: md5(data.tranPwd)
  }
  return post(`${BASE}mail/placeOrder`, qs.stringify(data))
}

// 获取京东运费
export function getJDFreight(data = {}, config) {
  return get(`${BASE}mail/JDFreight`, data, config)
}

// 修改登录密码
export function changeLoginPswd(data = {}, config) {
  data = {
    ...data,
    oldPwd: md5(data.oldPwd),
    newPwdOne: md5(data.newPwdOne),
    modifyType: 1
  }
  return put(`${BASE}api/modifyPwd`, qs.stringify(data), config)
}

// 找回登录密码
export const findPswd = (data) => {
  data = {
    ...data,
    password: md5(data.password)
  }
  return post(`${BASE}user/changePwd`, qs.stringify(data))
}

// 修改交易密码
export function changeTradePswd(data = {}, config) {
  data = {
    ...data,
    oldPwd: md5(data.oldPwd),
    newPwdOne: md5(data.newPwdOne),
    modifyType: 2
  }
  return put(`${BASE}api/modifyPwd`, qs.stringify(data), config)
}

// 找回交易密码
export const findTradePswd = (data) => {
  data = {
    ...data,
    password: md5(data.password)
  }
  return put(`${BASE}api/resetTranPwd`, qs.stringify(data))
}

// 重置登录密码和交易密码
export const resetAllPswd = (data) => {
  data = {
    ...data,
    oldLoginPwd: md5(data.oldLoginPwd),
    newLoginPwdOne: md5(data.newLoginPwdOne),
    oldTranPwd: md5(data.oldTranPwd),
    newTranPwdOne: md5(data.newTranPwdOne)
  }
  return put(`${BASE}api/resetAllPwd`, qs.stringify(data))
}

// 获取京东订单列表
export function getJDOrders(data = {}, config) {
  return get(`${BASE}mail/JDOrders`, data, config)
}

// 获取京东商品物流信息
export function getJDTrack(id, config) {
  return get(`${BASE}mail/JDTrack/${id}`, null, config)
}

// 删除银行卡
export function delBankCard(id, config) {
  return del(`${BASE}api/bankCard/${id}`, null, config)
}