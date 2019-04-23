import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';

import {reducer as addr} from '@/pages/StoreConfirm'

export default combineReducers({
  auth,
  addr,
  loading
});