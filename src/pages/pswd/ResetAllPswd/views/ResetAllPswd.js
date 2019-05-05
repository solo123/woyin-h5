import React, {Component} from 'react'
import {Redirect, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import config from '@/config'
import {replace} from '@/services/redirect'
import {resetAllPswd} from '@/api'

import Backhome from '@/components/Backhome'
import LoginPswd from './LoginPswd'
import TradePswd from './TradePswd'
import Page from './styled'

class ResetAllPswd extends Component {
  constructor(props) {
    super(props)
    
    this.handleToggleOldLoginPswd = this.handleToggle.bind(this, 'oldLoginPswd')
    this.handleToggleNewLoginPswd = this.handleToggle.bind(this, 'newLoginPswd')
    this.handleToggleConfNewLoginPswd = this.handleToggle.bind(this, 'confNewLoginPswd')

    this.handleToggleOldTradePswd = this.handleToggle.bind(this, 'oldTradePswd')
    this.handleToggleNewTradePswd = this.handleToggle.bind(this, 'newTradePswd')
    this.handleToggleConfNewTradePswd = this.handleToggle.bind(this, 'confNewTradePswd')

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOldLoginPswdClean = this.handleClean.bind(this, 'oldLoginPswd')
    this.handleNewLoginPswdClean = this.handleClean.bind(this, 'newLoginPswd')
    this.handleConfNewLoginPswdClean = this.handleClean.bind(this, 'confNewLoginPswd')

    this.handleOldTradePswdClean = this.handleClean.bind(this, 'oldTradePswd')
    this.handleNewTradePswdClean = this.handleClean.bind(this, 'newTradePswd')
    this.handleConfNewTradePswdClean = this.handleClean.bind(this, 'confNewTradePswd')

    this.state = {
      oldLoginPswd: '',
      oldLoginPswdClean: false,
      oldLoginPswdType: 'password',

      newLoginPswd: '',
      newLoginPswdClean: false,
      newLoginPswdType: 'password',

      confNewLoginPswd: '',
      confNewLoginPswdClean: false,
      confNewLoginPswdType: 'password',

      oldTradePswd: '',
      oldTradePswdClean: false,
      oldTradePswdType: 'password',

      newTradePswd: '',
      newTradePswdClean: false,
      newTradePswdType: 'password',

      confNewTradePswd: '',
      confNewTradePswdClean: false,
      confNewTradePswdType: 'password'      
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await resetAllPswd(params)
      if(data.status === 200) {
        this.props.resetAllPswd()
        replace('/result', {type: 'success', title: data.msg})
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  verify() {
    if(!this.state.oldLoginPswd) {
      weui.alert('请输入旧的登录密码')
      return false
    }
    if(!this.state.newLoginPswd) {
      weui.alert('请输入新的登录密码')
      return false
    }
    if(this.state.newLoginPswd.length !== config.pswd.PSWD_DIGIT) {
      weui.alert(`请输入${config.pswd.PSWD_DIGIT}位数的登录密码`)
      return false
    }
    if(!this.state.confNewLoginPswd) {
      weui.alert('请确认新的登录密码')
      return false
    }
    if(this.state.newLoginPswd !== this.state.confNewLoginPswd) {
      weui.alert('新的登录密码不一致')
      return false
    }


    if(!this.state.oldTradePswd) {
      weui.alert('请输入旧交易密码')
      return false
    }
    if(!this.state.newTradePswd) {
      weui.alert('请输入新交易密码')
      return false
    }
    if(this.state.newTradePswd.length !== config.pswd.PSWD_DIGIT) {
      weui.alert(`请输入${config.pswd.PSWD_DIGIT}位数的交易密码密码`)
      return false
    }
    if(!this.state.confNewTradePswd) {
      weui.alert('请确认新的交易密码')
      return false
    }
    if(this.state.newTradePswd !== this.state.confNewTradePswd) {
      weui.alert('新的交易密码不一致')
      return false
    }

    return true
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClean(name) {
    this.setState({[name]: ''})
  }

  handleBlur(e) {
    const name = `${e.target.name}Clean`
    setTimeout(() => {
      this.setState({[name]: false})
    }, 100)
  }

  handleFocus(e) {
    const name = `${e.target.name}Clean`
    this.setState({[name]: true})
  }

  handleToggle(name) {
    const key = `${name}Type`
    const type = this.state[key] === 'password' ? 'text' : 'password'
    this.setState({[key]: type})
  }

  handleSubmit(e) {
    if(!this.verify()) {
      return
    }

    const params = {
      oldLoginPwd: this.state.oldLoginPswd,
      newLoginPwdOne: this.state.newLoginPswd,
      oldTranPwd: this.state.oldTradePswd,
      newTranPwdOne: this.state.newTradePswd
    }    
    this.doSubmit(params)
  }

  render() {
    const {reset} = this.props
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    if(reset){return <Redirect to={from} />}

    return (
      <Page>
        <Helmet title="重置登录密码和交易密码"/>

        <h2 className="u_m_xxx">登录密码</h2>
        <LoginPswd {...this.state} {...this} />
        <h2 className="u_m_xxx">交易密码</h2>
        <TradePswd {...this.state} {...this} />

        <div className="u_m_xxx">
          <button className="btn btn-secondary" onClick={this.handleSubmit}>提交</button>
        </div>

        <Backhome />
      </Page>
    )
  } 
}

const mapStateToProps = (state) => {
  return {reset: state.auth.reset}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetAllPswd: payload => {
      dispatch({type: 'RESET_ALL_PSWD'})
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetAllPswd))