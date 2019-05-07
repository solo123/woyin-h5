import React from 'react'
import {Route, Redirect, withRouter} from "react-router-dom"
import { connect } from 'react-redux'

const Auth = ({component: Part, isAuthenticated, reset, ...rest}) => {
  return (
    <Route {...rest}
      render={ props => {
        if(isAuthenticated){
          if(!reset && rest.path !== '/find-login-pswd' && rest.path !== '/me') {
            const to = {pathname: "/find-login-pswd", state: {from: props.location}}
            return <Redirect to={to} />
          }else {
            return <Part {...props} />
          }
        }else{
          const to = { pathname: "/login", state: { from: props.location } }
          return <Redirect to={to} />
        }
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    reset: state.auth.reset
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))