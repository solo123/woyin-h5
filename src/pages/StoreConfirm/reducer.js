import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, DELETE_ADDR, SELECT_ADDR, ADD_ADDR} from './actionTypes.js'

const initialState = {
  status: 'loading',
  error: '',
  addrs: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {
        ...state,
        status: 'loading'
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        status: 'success',
        addrs: action.addrs
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        status: 'failure'
      }
    }
    case DELETE_ADDR: {
      return {
        ...state,
        addrs: state.addrs.filter(addr => addr.id !== action.id)
      }
    }
    case SELECT_ADDR: {
      return {
        ...state,
        addrs: state.addrs.map(addr => {
          if(addr.id === action.id) {
            return {
              ...addr,
              use: true
            }
          }else {
            return {
              ...addr,
              use: false
            }
          }
        })        
      }
    }
    case ADD_ADDR: {
      if(action.addr.defaultAddress === 1) {
        const addrs = state.addrs.map(item => {
          return {
            ...item,
            defaultAddress: 0
          }
        })
        return {
          ...state,
          addrs: [...addrs, action.addr]
        }        
      }
      return {
        ...state,
        addrs: [...state.addrs, action.addr]
      }  
    }
    default: {
      return state
    }
  }
}