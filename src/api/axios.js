import axios from 'axios';
import weui from 'weui.js'
import store from '../Store';
import {getItem} from '../services/storage'
import config from '../config';

const instance = axios.create()
instance.defaults.timeout = config.timeout

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // responses error before they are handled by then onRejected or catch
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

    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance