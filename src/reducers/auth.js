import {setItem, removeItem} from '../services/storage'

const initialState = {
  token: '',
  resetAllPswd: false,
  isAuthenticated: false
}

const saveToken = (payload) => {
  setItem('token', payload.token)
}

const removeToken = () => {
  removeItem('token')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      saveToken(action.payload);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true
      }
    case 'UNAUTH_USER':
      removeToken();
      return {
        ...state,
        token: '',
        isAuthenticated: false
      }
    case 'REFRESH_TOKEN':
      saveToken(action.payload);
      return {
        ...state,
        token: action.payload.token
      }
    default:
      return state;
  }
}