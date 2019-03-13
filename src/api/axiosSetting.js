import axios from 'axios';

import store from '../Store';
import api from './index';

let isRefreshing = false;
let requestPool = [];
const refreshSuccess = function(access_token){
    requestPool.map(cb => cb(access_token))
    requestPool = []
};

export default () => {

    // Add a request interceptor
    axios.interceptors.request.use(
        function(config) {
            if(isRefreshing && config.url.indexOf('refresh_token') === -1){
                return new Promise(function(resolve, reject){
                    requestPool.push(access_token => {
                        config.headers.authorization = 'bearer ' + access_token;
                        resolve(config);
                    });
                });
            }
            const access_token = localStorage.getItem('access_token');
            if(access_token){
                config.headers['authorization'] = `Bearer ${access_token}`;
            }
            return config;
        },
        function(error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function(response) {
            // Do something with response data
            return response;
        },
        function(error) {
            // responses error before they are handled by then onRejected or catch
            if(error.response){
                switch(parseInt(error.response.status, 10)){
                    case 400:
                        // bad request, directly show api return message (from server side)
                        break;
                    case 401:
                        // 1 这里加上判断判断refresh_token是否过期的判断
                            // 过期 直接跳过
                            // 未过期 发起refresh_token请求来获取新的access_token
                        // 2 得到新的access_token后更新过期的access_token
                        const refresh_token = localStorage.getItem('refresh_token');
                        if(refresh_token){
                            isRefreshing = true;
                            api.refreshToken(refresh_token)
                                .then(function(res){
                                    isRefreshing = false;
                                    const { data } = res;

                                    // 更新access_token
                                    store.dispatch({ type: 'REFRESH_TOKEN', payload: {
                                        access_token: data.access_token
                                    }});
                                    refreshSuccess(data.access_token);
                                })
                                .catch(function(){
                                    store.dispatch({ type: 'UNAUTH_USER' });
                                });

                            return new Promise(function(resolve, reject){
                                requestPool.push(access_token => {
                                    error.config.headers.authorization = 'bearer ' + access_token;
                                    resolve(axios(error.config));
                                });    
                            });
                        }
                        break;
                    case 403:
                        store.dispatch({ type: 'UNAUTH_USER' });
                        break;
                    default:
                        // console.log(error.response);
                        // weui.tips('系統忙線中，請稍後再試');
                        break;
                }
            }else {
                // console.log(error.response);
                // weui.tips('系統忙線中，請稍後再試');
            }

            // Do something with response error
            return Promise.reject(error);
        }
    );

};