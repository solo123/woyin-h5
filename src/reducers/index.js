import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import pswd from './pswd'

import {reducer as addr} from '@/pages/StoreConfirm'

export default combineReducers({
  auth,
  pswd,
  addr,
  loading
});