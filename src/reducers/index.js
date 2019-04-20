import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import pswd from './pswd'

export default combineReducers({
    auth,
    pswd,
    loading
});