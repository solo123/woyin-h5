import React, {Component} from 'react'
import {connect} from 'react-redux'

import util from '@/util'

class FakeLogin extends Component {

  render() {
    return (
      <div>
        <div className="title">FakeLogin</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: payload => {
      dispatch({
        type: 'AUTH_USER',
        payload: {token: payload.token, reset: payload.reset}
      })
    }
  }
}

export default FakeLogin