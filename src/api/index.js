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

const timestamp = String(new Date().getTime())

// 登录
export const login = (data) => {
  if(data.loginType === 1) {
    data = {
      ...data,
      password: md5(data.password)
    }
  }
  return post(`${BASE}user/login`, qs.stringify(data))
}

// 获取用户信息
export const getUserInfo = (data = {}, config = {}) => {
  return get(`${BASE}api/user/getUserInfo`, data, config)
}

// 发送短信验证码
export const getCode = (data) => {
  data = {
    ...data,
    codeType: 1
  }
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

// 找回交易密码验证码
export const getCodeForFindTradePswd = (phone) => {
  const params = {userPhoneNo: phone, codeType: 4}
  return post(`${BASE}user/getCode`, qs.stringify(params))
}

export const redeemIntegral = (data = {}) => {
  const tradPwd = md5(data.tradPwd)
  const payment = '1'
  data = {
    ...data,
    tradPwd: tradPwd,
    payment: payment,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&amount=${data.amount}&bankCode=${data.bankCode}&bankName=${data.bankName}&cardHoldName=${data.cardHoldName}&cardPhoneNo=${data.cardPhoneNo}&tradPwd=${tradPwd}&code=${data.code}&bankCard=${data.bankCard}&payment=${payment}`),
    timestamp: timestamp    
  }
  return post(`${BASE}api/trad/withdrawal`, qs.stringify(data))
}

// 代卖或信用卡还款
export const paymentToCard = (data = {}) => {
  const tradPwd = md5(data.tradPwd)
  const payment = '2'  
  data = {
    ...data,
    tradPwd: tradPwd,
    payment: payment,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&amount=${data.amount}&bankCode=${data.bankCode}&bankName=${data.bankName}&cardHoldName=${data.cardHoldName}&cardPhoneNo=${data.cardPhoneNo}&tradPwd=${tradPwd}&code=${data.code}&bankCard=${data.bankCard}&payment=${payment}`),
    timestamp: timestamp     
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

// 获取商品分类
export const getProducts = (productClassifyId = '', config = {}) => {
  return get(`${BASE}product/list`, {productClassifyId}, config)
}

// 获取服务列表
export const _getService = (config = {}) => {
  return get(`${BASE}product/list`, {}, config)
}

export const _getOperators = (productClassifyId = '', config = {}) => {
  return get(`${BASE}product/list`, {productClassifyId}, config)  
}

export const _getProducts = (productClassifyId = '', config = {}) => {
  return get(`${BASE}api/product/subList`, {productClassifyId}, config)  
}

// 获取商品列表
export const getSubProducts = (id = '', config = {}) => {
  return get(`${BASE}api/product/subList`, {productClassifyId: id}, config)
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
  const tranPwd = md5(data.tranPwd)
  data = {
    ...data,
    tranPwd: tranPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&to=${data.to}&num=${data.num}&tranPwd=${tranPwd}`),
    timestamp: timestamp    
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
  data = {
    ...data,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&cardPhoneNo=${data.cardPhoneNo}&bankCard=${data.bankCard}&cardHoldName=${data.cardHoldName}&idNo=${data.idNo}`),
    timestamp: timestamp
  }
  return post(`${BASE}api/bank/addBankCard`, qs.stringify(data))
}

// 获取银行卡/信用卡列表
export const getBankcardList = () => {
  return get(`${BASE}api/bank/getBankCardList`)
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
export function rechargePhone(data = {}) {
  const tranPwd = md5(data.tranPwd)
  const chargeType = '1'
  data = {
    ...data,
    tranPwd: tranPwd,
    chargeType: chargeType,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&chargeAddr=${data.chargeAddr}&chargeType=${chargeType}&productId=${data.productId}&tranPwd=${tranPwd}`),
    timestamp: timestamp
  }
  return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
}

// QB充值
export function rechargeQB(data = {}) {
  const tradPwd = md5(data.tranPwd)
  data = {
    ...data,
    tranPwd: tradPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&chargeAddr=${data.chargeAddr}&chargeType=${data.chargeType}&productId=${data.productId}&tranPwd=${tradPwd}`),
    timestamp: timestamp
  }  
  return post(`${BASE}api/charge/moreCredit`, qs.stringify(data))
}

// 流量充值
export function rechargeTraffic(data = {}) {
  const tradPwd = md5(data.tranPwd)
  const range = '0'
  data = {
    ...data,
    range: range,
    tranPwd: tradPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&phone=${data.phone}&range=${range}&productId=${data.productId}&tranPwd=${tradPwd}`),
    timestamp: timestamp
  }
  return post(`${BASE}api/traffic/charge`, qs.stringify(data))
}

// 加油卡充值
export function rechargeOil(data = {}) {
  const tranPwd = md5(data.tranPwd)  
  data = {
    ...data,
    tranPwd: tranPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&cardNumber=${data.cardNumber}&cardType=${data.cardType}&productId=${data.productId}&tranPwd=${tranPwd}`),
    timestamp: timestamp
  }
  return post(`${BASE}api/oilCard/charge`, qs.stringify(data))
}

// 视频充值 直充
export const rechargeVideo = (data = {}) => {
  const tranPwd = md5(data.tranPwd)
  const chargeType = '1'
  data = {
    ...data,
    tranPwd: tranPwd,
    chargeType: chargeType,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&chargeAddr=${data.chargeAddr}&chargeType=${chargeType}&tranPwd=${tranPwd}&productId=${data.productId}`),
    timestamp: timestamp    
  }
  return post(`${BASE}api/video/charge`, qs.stringify(data))
}

// 电子卡券充值
export const rechargeVoucher = (data) => {
  const tranPwd = md5(data.tranPwd)
  data = {
    ...data,
    tranPwd: tranPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&amount=${data.amount}&tranPwd=${tranPwd}&productId=${data.productId}`),
    timestamp: timestamp        
  }  
  return post(`${BASE}api/voucher/charge`, qs.stringify(data))
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
export const findLoginPswd = (data) => {
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

// 删除银行卡
export function deleteBankCard(id, config) {
  return del(`${BASE}api/bankCard/${id}`, null, config)
}

// 获取积分派发记录
export function getIntegralList(id, config) {
  return get(`${BASE}api/integralList`, null, config)
}

// 京东相关

export function getHotSell() {
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }   
  return get(`${BASE}sellingGoods`)
}

// 获取京东商品类别列表
export function getJDGoodsSort(data = {}, config) {
  let BASE = ''
  data = {
    ...data,
    typeId: 1
  }
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return get(`${BASE}goodsClassLists`, data, config)
}

// 获取京东商品列表
export function getJDGoodsList(data = {}, config) {
  let BASE = ''
  data = {
    ...data,
    limit: G_config.store.PAGE_LIMIT
  }
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }  
  return get(`${BASE}goodsLists`, data, config)
}

// 获取层级地址
export function getAddr(data = {}, config = {}) {
  let BASE = ''
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return get(`${BASE}mail/address`, data, config)
}

// 添加地址
export function addJDAddr(data) {
  let BASE = ''
  data = {
    ...data,
    addType: 1
  }
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return post(`${BASE}mail/address`, qs.stringify(data))
}

export function getJDAddrList(data = {}, config = {}) {
  let BASE = ''
  data = {
    ...data,
    addType: 1
  }
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return get(`${BASE}mail/userAddressList`, data, config)
}

// 删除用户地址
export function deleteAddrById(id, config) {
  let BASE = ''
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return del(`${BASE}mail/address/${id}`, null, config)
}

// 京东商品下单
export function placeOrder(data) {
  let BASE = ''
  const tradPwd = md5(data.tranPwd)  
  data = {
    ...data,
    tranPwd: tradPwd,
    sign: md5(`key=&afdY%d2^uy3&timestamp=${timestamp}&skuId=${data.skuId}&count=${data.count}&addressId=${data.addressId}&tranPwd=${tradPwd}`),
    timestamp: timestamp       
  }

  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return post(`${BASE}mail/placeOrder`, qs.stringify(data))
}

// 获取京东运费
export function getJDFreight(data = {}, config) {
  let BASE = ''
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return get(`${BASE}mail/JDFreight`, data, config)
}

// 获取京东订单列表
export function getJDOrders(data = {}, config) {
  let BASE = ''
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    

  data = {
    ...data,
    limit: G_config.store.PAGE_LIMIT
  }
  return get(`${BASE}mail/JDOrders`, data, config)
}

// 获取京东商品物流信息
export function getJDTrack(id, config) {
  let BASE = ''
  if(process.env.NODE_ENV === 'development') {
    BASE = '/'
  }else if(process.env.NODE_ENV === 'production') {
    BASE = '/jdapi/'
  }    
  return get(`${BASE}mail/JDTrack/${id}`, null, config)
}