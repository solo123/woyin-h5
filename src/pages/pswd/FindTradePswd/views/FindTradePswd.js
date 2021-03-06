import React, {Component} from 'react'
import weui from 'weui.js'
import {Helmet} from "react-helmet"
import {connect} from 'react-redux'

import config from '@/config'
import {replace} from '@/services/redirect'
import {getCodeForFindTradePswd, findTradePswd} from '@/api'

import Backhome from '@/components/Backhome'
import Page from './styled'

import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'

const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <button className="btn btn-secondary btn-mini" onClick={handleClick}>获取验证码</button>
  }
  return <button className="btn btn-secondary btn-mini disable">{interval}秒后重发</button>
}

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon
}

class FindTradePswd extends Component {
  constructor(props) {
    super(props)

    this.handleGetCode = this.handleGetCode.bind(this)

    this.handleToggleNewPswd = this.handleToggle.bind(this, 'newPswd')
    this.handleToggleConfNewPswd = this.handleToggle.bind(this, 'confNewPswd')

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewPswdClean = this.handleClean.bind(this, 'newPswd')
    this.handleConfNewPswdClean = this.handleClean.bind(this, 'confNewPswd')
    this.handleCodeClean = this.handleClean.bind(this, 'code')

    this.state = {
      code: '',
      getCodeFlag: true,
      interval: config.pswd.INTERVAL,

      newPswd: '',
      newPswdClean: false,
      newPswdType: 'password',

      confNewPswd: '',
      confNewPswdClean: false,
      confNewPswdType: 'password'
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await findTradePswd(params)
      if(data.status === 200) {
        replace('/result', {type: 'success', title: data.msg})
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  async getCode() {
    const loading = weui.loading('发送中')
    try {
      const {data} = await getCodeForFindTradePswd(this.props.phone)
      if(data.status === 200) {
        this.setState({getCodeFlag: false}, this.countDown)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  handleGetCode() {
    if(!this.props.phone) {
      weui.alert('找不到手机号')
      return
    }
    this.getCode()
  }

  resetGetCode() {
    this.setState({interval: config.pswd.INTERVAL, getCodeFlag: true})
  }

  countDown() {
    if(this.state.interval > 0) {
      setTimeout(() => {
        this.setState({interval: this.state.interval - 1}, () => {
          this.countDown()
        })
      }, 1000)
    }else {
      this.resetGetCode()
    }
  }

  verify() {
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
    if(!this.state.code) {
      weui.alert('请输入验证码')
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
      password: this.state.newPswd,
      code: this.state.code
    }    
    this.doSubmit(params)
  }

  render() {
    const {
      code, codeClean, getCodeFlag,
      newPswd, newPswdClean, newPswdType,
      confNewPswd, confNewPswdClean, confNewPswdType
    } = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="找回交易密码"/>

        <div className="group-list">
          <div className="group">
            <div className="group__body">
              <input
                className="input"
                type="text"
                name="code"
                value={code} 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入验证码"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__clean-btn"
                style={{visibility: codeClean ? 'visible' : 'hidden'}} 
                onClick={this.handleCodeClean} 
                src={closeIcon} 
                alt="清空" 
              />
              <SendMessageBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode}>获取验证码</SendMessageBtn>
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

const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTradePswd)
