import React, {Component} from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

class ResetAllPswd extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.resetAllPswd()
  }

  render() {
    const {reset} = this.props
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    if(reset){return <Redirect to={from} />}

    return (
      <div>
        ResetAllPswd
        <button onClick={this.handleSubmit}>重置所有密码</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {reset: state.pswd.reset}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetAllPswd: payload => {
      dispatch({type: 'RESET_ALL_PSWD'})
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetAllPswd));