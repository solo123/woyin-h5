import jwtDecode from 'jwt-decode'
import {setItem, removeItem} from '@/services/storage'

const initialState = {
  token: '',
  phone: '',
  reset: 0,
  isAuthenticated: false
}

const saveToken = (token) => {
  setItem('token', token)
}

const removeToken = () => {
  removeItem('token')
}

const saveReset = (reset) => {
  setItem('reset', reset)
}

const removeReset = () => {
  removeItem('reset')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      saveToken(action.payload.token)
      saveReset(action.payload.reset)
      return {
        ...state,
        phone: jwtDecode(action.payload.token).userPhoneNo,
        token: action.payload.token,
        reset: action.payload.reset,
        isAuthenticated: true
      }
    case 'UNAUTH_USER':
      removeToken()
      removeReset()
      return {
        ...state,
        token: '',
        phone: '',
        isAuthenticated: false
      }
    case 'RESET_ALL_PSWD':
      saveReset(1)
      return {
        ...state,
        reset: 1
      }      
    default:
      return state
  }
}