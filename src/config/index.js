export default {
  dev_baseURL: 'http://localhost:8000',
  prod_baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  storage_namespace: 'woyin',

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