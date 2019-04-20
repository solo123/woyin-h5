import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, DELETE_ADDR, SELECT_ADDR} from './actionTypes.js'

import {getJDAddrList} from '@/api'

export const fetchAddrStarted = () => ({
  type: FETCH_STARTED
})

export const fetchAddrSuccess = (result) => ({
  type: FETCH_SUCCESS,
  addrs: result
})

export const fetchAddrFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const deleteAddr = (id) => ({
  type: DELETE_ADDR,
  id: id
})

export const selectAddr = (id) => ({
  type: SELECT_ADDR,
  id: id
})

export const fetchAddr = (cb) => {
  return async (dispatch) => {
    dispatch(fetchAddrStarted())
    try {
      const {data} = await getJDAddrList()
      if(data.status === 200) {
        dispatch(fetchAddrSuccess(data.data))
        cb && cb()
      }
    }catch(err) {
      dispatch(fetchAddrFailure(err))
    }finally {
    }
  }
}