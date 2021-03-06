export default {
  timeout: 10000,
  storage_namespace: 'woyin',

  login: {
    INTERVAL: 60,
  },
  // 电子卡券配置
  ecard: {
    MAX_COUNT: 10,
    MIN_COUNT: 1
  },
  // 业务配置
  card: {
    MAX_COUNT: 10,
    MIN_COUNT: 1
  },
  creditCard: {
    INTERVAL: 60,
    MIN_INTEGRAL: 100
  },
  creditRecord: {
    PAGE_LIMIT: 20
  },
  // 积分代卖
  redeem: {
    // 每页条数
    PAGE_LIMIT: 20,
    INTERVAL: 60,
    MIN_INTEGRAL: 100,
    MAX_INTEGRAL: 5000000
  },
  // 电子卡券记录
  voucher: {
    PAGE_LIMIT: 20
  },
  // 我的订单
  order: {
    PAGE_LIMIT: 20
  },
  findPswd: {
    INTERVAL: 60,
    PSWD_DIGIT: 6
  },
  pswd: {
    INTERVAL: 60,
    PSWD_DIGIT: 6
  },
  // 转赠记录
  transfer: {
    PAGE_LIMIT: 20,
    MIN_INTEGRAL: 100
  },
  // 商品购买
  store: {
    MAX_COUNT: 10,
    MIN_COUNT: 1,
    PAGE_LIMIT: 10
  },
  // 双色球
  double_color_ball: {
    red: {
      MAX: 20,
      MIN: 6
    },
    blue: {
      MAX: 6,
      MIN: 1
    }
  }
};