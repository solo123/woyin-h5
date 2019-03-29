import qs from'qs'
import axios from 'axios';
import config from '../config';

let BASE = ''
if(process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = config.dev_baseURL
}else if(process.env.NODE_ENV == 'production') {
  BASE = 'client/'
  // axios.defaults.baseURL = config.prod_baseURL
}

axios.defaults.timeout = config.timeout

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  get(path, data = {}, config = {}) {
    return axios.get(path, {
      ...config,
      params: data
    });
  },
  post(path, data = {}, config = {}) {
    return axios.post(path, data, config);
  },
  login(data) {
    return this.post('${BASE}user/login', qs.stringify(data));
  },
  refreshToken(refresh_token) {
    return this.get('refresh_token', {
      refresh_token: refresh_token
    });
  },
  getUser() {
    return this.get('protected');
  },
  // 获取指定状态的订单列表
  getOrderList(data, config = {}) {
    return this.get(`${BASE}api/order/getOrderList`, data, config)
  },
  hotProducts() {
    return this.get('hotProducts')
  },
  // 获取指定商城的分类列表
  getProductCateList(type) {
    // 1 京东  2 严选  3 自营
    return this.get('getProductCateList', { type: type })
  },
  // 根据分类获取产品列表
  getProductByCate(type, cate) {
    return this.get('getProductByCate', { type: type, cate: cate })
  },
  getProductById(id) {
    return this.get('getProductById', { id })
  },
  // 热卖商品
  getHotsell() {
    return this.get('hotsell')
  },
  // 获取话费产品列表
  getRechargePhoneProductsByType(type, config = {}) {
    return this.get(`${BASE}api/charge/getChargeProductList`, {productId: type}, config)
  },
  // 获取流量产品列表
  getRechargeFlowProductsByType(type) {
    return this.get('getRechargeFlowProductsByType', {type})
  },
  // 获取油卡产品列表
  getRechargeOilProductsByType(type) {
    return this.get('getRechargeOilProductsByType', {type})
  },  
  // 获取QB产品列表
  getRechargeQBProductsByType(type) {
    return this.get('getRechargeQBProductsByType', {type})
  },  
  // 获取视频提供商列表
  getVideoProviders() {
    return this.get('getVideoProviders')
  },  
  // 获取视频产品列表
  getVideoProducts() {
    return this.get('getVideoProducts')
  },  
  confirmTransPswd(pswd) {
    return this.post(`${BASE}api/trad/checkCode`, {pswd})
  },
  // 话费充值
  rechargePhone(data) {
    return this.post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
  },
  // 流量充值
  rechargeFlow(id, phone) {
    return this.get('rechargeFlow', {id, phone})
  },
  // 加油卡充值
  rechargeOil(id, phone) {
    return this.get('rechargeOil', {id, phone})
  },  
  // QB充值
  rechargeQB(id, phone) {
    return this.get('rechargeQB', {id, phone})
  },  
  // 获取银行卡列表
  getBankcardList() {
    return this.get(`${BASE}api/bank/getBankCardList`)
  },
  // 添加银卡
  addBankcard(data) {
    return this.post(`${BASE}api/bank/addBankCard`, qs.stringify(data))
  },
  // 获取提现手续费
  getRedeemFee(amount) {
    return this.get(`${BASE}api/trad/poundageList`, {amount})
  },
  // 积分赎回流程短信验证码
  sendMsgCode(phone) {
    return this.get('sendMsgCode', {phone})
  },
  redeemIntegral(data) {
    return this.post(`${BASE}api/trad/withdrawal`, qs.stringify(data))
  },
  getRedeemRecordByStatus(data, config = {}) {
    return this.get(`${BASE}api/trad/getWithList`, data, config)
  },
  // 登录流程短信验证码
  getCode(data) {
    return this.post('user/getCode', qs.stringify(data))
  },
  // 获取信用卡列表
  getCreditCardList() {
    return this.get('getCreditCardList')
  },
  // 信用卡还款
  creditCardRepayment(data) {
    return this.post('creditCardRepayment', data)
  },
  // 积分转赠
  transfer(data) {
    return this.post('transfer', data)
  },
  // 获取电子卡券列表
  getECardList() {
    return this.get('getECardList')
  },
  // 获取电子卡券详情
  getECardDetailByType() {
    return this.get('getECardDetailByType')
  },
  // 添加车辆
  addVehicle(data) {
    return this.post('addVehicle', data)
  },
  // 获取车辆列表
  getVehicleList() {
    return this.get('getVehicleList')
  },
  // 获取违章记录
  getViolationList() {
    return this.get('getViolationList')
  },
  // 获取用户可用积分
  getUserInfo() {
    return this.get(`${BASE}api/user/getUserInfo`)
  }
};