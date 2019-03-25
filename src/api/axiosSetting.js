import axios from 'axios';

import store from '../Store';
import api from './index';
import {getItem} from '../services/storage'

let isRefreshing = false;
let requestPool = [];
const refreshSuccess = function (access_token) {
  requestPool.map(cb => cb(access_token))
  requestPool = []
};

export default () => {

  // Add a request interceptor
  axios.interceptors.request.use(
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
  axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },
    function (error) {
      // responses error before they are handled by then onRejected or catch
      if (error.response) {
        switch (parseInt(error.response.status, 10)) {
          case 400:
            // bad request, directly show api return message (from server side)
            break;
          case 401:
            store.dispatch({type: 'UNAUTH_USER'});
            break;
          case 403:
            store.dispatch({type: 'UNAUTH_USER'});
            break;
          case 502:
            error.message = '网络错误'
            break;
          case 503:
            error.message = '服务不可用'
            break;
          default:
            // console.log(error.response);
            // weui.tips('系統忙線中，請稍後再試');
            break;
        }
      } else {
        // console.log(error.response);
        // weui.tips('系統忙線中，請稍後再試');
      }

      // Do something with response error
      return Promise.reject(error);
    }
  );

};