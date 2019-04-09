import qs from'qs'
import {get, post} from './setup'

let BASE = ''
if(process.env.NODE_ENV === 'development') {
  BASE = '/'
}else if(process.env.NODE_ENV === 'production') {
  BASE = 'client/'
}

export default {
  login(data) {
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
    // 1 京东  2 严选  3 自营
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
  // QB充值
  rechargeQB(id, phone) {
    return get('rechargeQB', {id, phone})
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
  // 积分赎回流程短信验证码
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

export const changePswd = (data) => {
  return post(`${BASE}user/changePwd`, qs.stringify(data))
}

export const getProducts = (productClassifyId = '', config = {}) => {
  return get(`${BASE}api/product/list`, {productClassifyId}, config)
}

export const getSubProducts = (id = '', config = {}) => {
  return get(`${BASE}api/product/subList`, {productClassifyId: id}, config)
}

export const rechargeVideo = (data = {}, config = {}) => {
  return post(`${BASE}api/video/charge`, qs.stringify(data), config)
}

// 电子卡券充值
export const rechargeVoucher = (data) => {
  return post(`${BASE}api/voucher/charge`, qs.stringify(data))
}

// 积分转赠
export const integralTransfer = (data) => {
  return post(`${BASE}api/transferred/commit`, qs.stringify(data))
}