import axios from 'axios';
import weui from 'weui.js'
import store from '../Store';
import {getItem} from '../services/storage'
import config from '../config';

const instance = axios.create()
instance.defaults.timeout = config.timeout

instance.interceptors.request.use(
  function (config) {
    const token = getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      switch (parseInt(error.response.status, 10)) {
        case 400:
          weui.alert('请求错误')
          break;
        case 401:
          store.dispatch({type: 'UNAUTH_USER'});
          break;
        case 403:
          store.dispatch({type: 'UNAUTH_USER'});
          break;
        case 404:
          weui.alert('请求地址出错')
          break;
        case 408:
          weui.alert('请求超时')
          break;
        case 500:
          weui.alert('服务器遇到问题')
          break;
        case 502:
          weui.alert('网络错误')
          break;
        case 504:
          weui.alert('网关超时')
          break;
        case 503:
          weui.alert('服务不可用')
          break;
        case 505:
          weui.alert('HTTP版本不受支持')
          break;
        default:
          weui.alert('服务器忙，请稍后再试')
          break;
      }
    } else {
      weui.alert('服务器忙，请稍后再试')
    }
    return Promise.reject(error)
  }
)

const get = (path, params = {}, config = {}) => {
  return instance.get(path, {...config, params: params})
}
const del = (path, params = {}, config = {}) => {
  return instance.delete(path, {...config, params: params})
}
const put = (path, data = {}, config = {}) => {
  return instance.put(path, data, config)
}
const post = (path, data = {}, config = {}) => {
  return instance.post(path, data, config)
}

export {
  get,
  put,
  del,
  post
}