import React, {Component} from 'react'
import { connect } from 'react-redux'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import config from '@/config'
import {changeLoginPswd} from '@/api'
import {replace} from '@/services/redirect'
import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'

import Page from './styled'
import Backhome from '@/components/Backhome'

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon
}

class ChangeLoginPswd extends Component {
  constructor(props) {
    super(props)
    
    this.handleToggleOldPswd = this.handleToggle.bind(this, 'oldPswd')
    this.handleToggleNewPswd = this.handleToggle.bind(this, 'newPswd')
    this.handleToggleConfNewPswd = this.handleToggle.bind(this, 'confNewPswd')

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOldPswdClean = this.handleClean.bind(this, 'oldPswd')
    this.handleNewPswdClean = this.handleClean.bind(this, 'newPswd')
    this.handleConfNewPswdClean = this.handleClean.bind(this, 'confNewPswd')

    this.state = {
      oldPswd: '',
      oldPswdClean: false,
      oldPswdType: 'password',

      newPswd: '',
      newPswdClean: false,
      newPswdType: 'password',

      confNewPswd: '',
      confNewPswdClean: false,
      confNewPswdType: 'password'
    }
  }

  async changePswd(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await changeLoginPswd(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          this.props.logout()
          replace('/login')
        })
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  verify() {
    if(!this.state.oldPswd) {
      weui.alert('请输入旧密码')
      return false
    }
    if(!this.state.newPswd) {
      weui.alert('请输入新密码')
      return false
    }
    if(this.state.newPswd.length !== config.pswd.PSWD_DIGIT) {
      weui.alert(`请输入${config.pswd.PSWD_DIGIT}位数的密码`)
      return false
    }
    if(!this.state.confNewPswd) {
      weui.alert('请确认新密码')
      return false
    }
    if(this.state.newPswd !== this.state.confNewPswd) {
      weui.alert('新密码不一致')
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
      oldPwd: this.state.oldPswd,
      newPwdOne: this.state.newPswd
    }    
    this.changePswd(params)
  }

  render() {
    const {
      oldPswd, oldPswdClean, oldPswdType,
      newPswd, newPswdClean, newPswdType,
      confNewPswd, confNewPswdClean, confNewPswdType
    } = this.state

    return (
      <Page>
        <Helmet title="修改登录密码"/>
        <div className="group-list">
          <div className="group">
            <div className="group__body">
              <input
                className="input"
                type={oldPswdType}
                name="oldPswd"
                value={oldPswd} 
                maxLength={config.pswd.PSWD_DIGIT}
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入旧密码"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__clean-btn"
                style={{visibility: oldPswdClean ? 'visible' : 'hidden'}} 
                onClick={this.handleOldPswdClean} 
                src={closeIcon} 
                alt="清空" 
              />
              <img 
                className="group__toggle-btn"
                onClick={this.handleToggleOldPswd} 
                src={ICON_SCHEMA[oldPswdType]}
                alt="切换" 
              /> 
            </div>
          </div>
          <div className="group">
            <div className="group__body">
              <input
                className="input"
                type={newPswdType} 
                name="newPswd"
                value={newPswd} 
                maxLength={config.pswd.PSWD_DIGIT}
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder={`请输入${config.pswd.PSWD_DIGIT}位数新密码`}
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__clean-btn"
                style={{visibility: newPswdClean ? 'visible' : 'hidden'}} 
                onClick={this.handleNewPswdClean} 
                src={closeIcon} 
                alt="清空" 
              />
              <img 
                className="group__toggle-btn"
                onClick={this.handleToggleNewPswd} 
                src={ICON_SCHEMA[newPswdType]}
                alt="切换" 
              />            
            </div>
          </div>
          <div className="group">
            <div className="group__body">
              <input
                className="input"
                type={confNewPswdType} 
                name="confNewPswd"
                value={confNewPswd} 
                maxLength={config.pswd.PSWD_DIGIT}
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="确认新密码"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__clean-btn"
                style={{visibility: confNewPswdClean ? 'visible' : 'hidden'}} 
                onClick={this.handleConfNewPswdClean} 
                src={closeIcon} 
                alt="清空" 
              />
              <img 
                className="group__toggle-btn"
                onClick={this.handleToggleConfNewPswd} 
                src={ICON_SCHEMA[confNewPswdType]}
                alt="切换" 
              />                
            </div>
          </div>
        </div>
        <div className="u_m_xxx">
          <button className="btn btn-secondary" onClick={this.handleSubmit}>提交</button>
        </div>

        <Backhome />
      </Page>
    )
  } 
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({type: 'UNAUTH_USER'})
  }
}


export default connect(null, mapDispatchToProps)(ChangeLoginPswd)