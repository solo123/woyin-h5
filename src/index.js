import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'weui'
import "@babel/polyfill"
import {getItem} from './services/storage'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Store';

if(process.env.NODE_ENV === 'development') {
  require ('./mock/index.js');
}

const token = getItem('token')
const reset = Number(getItem('reset'))
if(token) {
  store.dispatch({ 
    type: 'AUTH_USER', payload: {token, reset} 
  })
}

// if(module.hot){
//   module.hot.accept();
// }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
