import React, {Component} from 'react'
import {Redirect, withRouter, Link} from "react-router-dom"
import {createGlobalStyle} from 'styled-components'
import {connect} from 'react-redux'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import config from '@/config'
import {login, getCode} from '@/api'
import {setItem, removeItem, getItem} from '@/services/storage'
import Page from './styled'

import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'
import checkedIcon from '@/asset/images/icon/checked.png'
import uncheckedIcon from '@/asset/images/icon/unchecked.png'

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon,
  checked: checkedIcon,
  unchecked: uncheckedIcon
}

const LOGINTYPE_PASSWORD = 'password'
const LOGINTYPE_MESSAGE = 'message'

const LOGINTYPE_SCHEMA = {
  'password': 1,
  'message': 2
}

function SendMessageBtn({flag, interval, handleClick}) {
  if(flag) {
    return <button className="btn btn-mini" onClick={handleClick}>获取验证码</button>
  }
  return <button className="btn btn-mini-disable">{interval}秒后重发</button>
}

function PswdInput({passwordType, password, passwordCleanView, handleChange, handleFocus, handleBlur, passwordClean, handleTogglePswdVisibleOrHidden}) {
  return (
    <div className="group">
      <div className="group__body">
        <input
          className="input input-primary" 
          type={passwordType} 
          name="password" 
          value={password} 
          maxLength={config.pswd.PSWD_DIGIT}
          onChange={handleChange} 
          onFocus={handleFocus}
          onBlur={handleBlur}                  
          placeholder="请输入密码" 
        />
      </div>
      <div className="group__foot">
        <img 
          className="group__clean-btn"
          style={{visibility: passwordCleanView ? 'visible' : 'hidden'}} 
          onClick={passwordClean} 
          src={closeIcon} 
          alt="" 
        />
        <img 
          className="group__toggle-btn"
          onClick={handleTogglePswdVisibleOrHidden} 
          src={ICON_SCHEMA[passwordType]} alt="切换" 
        />
        <Link className="link" to="/find-login-pswd">忘记密码</Link>
      </div>
    </div>
  )
}

function MessageInput({messageCode, interval, loadCodeFlag, messageCodeCleanView, messageClean, handleChange, handleFocus, handleBlur, handleLoadCode}) {
  return (
    <div className="group">
      <div className="group__body">
        <input
          className="input input-primary" 
          type='text'
          name="messageCode" 
          value={messageCode} 
          onChange={handleChange} 
          onFocus={handleFocus}
          onBlur={handleBlur}                  
          placeholder="请输入验证码" 
        />
      </div>
      <div className="group__foot">
        <img 
          className="group__clean-btn"
          style={{visibility: messageCodeCleanView ? 'visible' : 'hidden'}} 
          onClick={messageClean} 
          src={closeIcon} 
          alt="" 
        />
        <SendMessageBtn flag={loadCodeFlag} interval={interval} handleClick={handleLoadCode}>获取验证码</SendMessageBtn>
      </div>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
  }
`

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleTogglePswdVisibleOrHidden = this.handleTogglePswdVisibleOrHidden.bind(this)
    this.handleRememberUsername = this.handleRememberUsername.bind(this)
    this.usernameClean = this.handleClean.bind(this, 'username')
    this.passwordClean = this.handleClean.bind(this, 'password')
    this.messageClean = this.handleClean.bind(this, 'messageCode')
    this.handlePasswordLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_PASSWORD)
    this.handleMessageLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_MESSAGE)
    this.handleLoadCode = this.handleLoadCode.bind(this)

    this.state = {
      username: '',
      usernameCleanView: false,

      password: '',
      passwordCleanView: false,

      messageCode: '',
      messageCodeCleanView: false,

      passwordType: 'password',
      rememberStatus: 'unchecked',

      interval: config.login.INTERVAL,
      loadCodeFlag: true,

      loginType: LOGINTYPE_PASSWORD
    }
  }

  componentDidMount() {
    this.readUsernameFromStore()
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await login(params)
      if(data.status === 200) {
        this.props.login({token: data.data.sessionId, reset: data.data.isModify})
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  async loadCode(params) {
    const loading = weui.loading('发送中')
    try {
      const {data} = await getCode(params)
      if(data.status === 200) {
        this.setState({loadCodeFlag: false}, this.countDown)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  readUsernameFromStore() {
    const username = getItem('username')
    if(username) {
      this.setState({username: username, rememberStatus: 'checked'}, () => {
        this.toggleSaveOrRemoveUsername()
      })
    }else {
      this.setState({rememberStatus: 'unchecked'}, () => {
        this.toggleSaveOrRemoveUsername()
      })   
    }
  }

  handleToggleLoginType(type, e) {
    e.preventDefault()
    if(type !== this.state.loginType) {
      this.setState({loginType: type}, () => {
        this.toggleSaveOrRemoveUsername()
      })
    }
  }

  handleTogglePswdVisibleOrHidden() {
    const type = this.state.passwordType === 'password' ? 'text' : 'password'
    this.setState({passwordType: type})
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}CleanView`]: true})
  }

  handleBlur(e) {
    const key =`${e.target.name}CleanView`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.toggleSaveOrRemoveUsername()
      })
    }, 100)    
  }

  handleClean(key) {
    this.setState({[key]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.toggleSaveOrRemoveUsername()
    })
  }

  handleLoadCode() {
    if(!this.state.username) {
      weui.alert('请输入手机号')
      return
    }
    const params = {
      userPhoneNo: this.state.username,
    }    
    this.loadCode(params)
  }

  handleRememberUsername() {
    const status = this.state.rememberStatus === 'checked' ? 'unchecked' : 'checked'
    this.setState({rememberStatus: status}, () => {
      this.toggleSaveOrRemoveUsername()
    })
  }

  toggleSaveOrRemoveUsername() {
    if(this.state.rememberStatus === 'checked') {
      setItem('username', this.state.username)
    }else {
      removeItem('username')
    }
  }

  resetMessageState() {
    this.setState({interval: config.login.INTERVAL, loadCodeFlag: true})
  }

  countDown() {
    if(this.state.interval > 0) {
      setTimeout(() => {
        this.setState({interval: this.state.interval - 1}, () => {
          this.countDown()
        })
      }, 1000)
    }else {
      this.resetMessageState()
    }
  }

  verify() {
    if(!this.state.username) {
      weui.alert('请输入手机号')
      return
    }
    if(this.state.loginType === LOGINTYPE_PASSWORD) {
      if(!this.state.password) {
        weui.alert('请输入密码')
        return
      }
    }else if(this.state.loginType === LOGINTYPE_MESSAGE) {
      if(!this.state.messageCode) {
        weui.alert('请输入短信码')
        return
      }      
    }    
    return true
  }

  handleSubmit() {
    if(!this.verify()) {
      return
    }
    
    let params = {}
    if(LOGINTYPE_SCHEMA[this.state.loginType] === 1) {
      params = {
        userPhoneNo: this.state.username,
        password: this.state.password,
        loginType: LOGINTYPE_SCHEMA[this.state.loginType]
      }
    }else if(LOGINTYPE_SCHEMA[this.state.loginType] === 2) {
      params = {
        userPhoneNo: this.state.username,
        code: this.state.messageCode,
        loginType: LOGINTYPE_SCHEMA[this.state.loginType]
      }
    }
    this.doSubmit(params)
  }

  render() {
    const {isAuthenticated} = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    const {usernameCleanView} = this.state
    
    if(isAuthenticated){return <Redirect to={from} />}

    return (
      <Page>
        <GlobalStyle />
        <Helmet defaultTitle="沃银企服" title="登录"/>
        <header>
          <h1>登录</h1>
        </header>
        <main>
          <div className="group-list">
            <div className="group">
              <div className="group__body">
                <input
                  className="input input-primary"
                  type="text" 
                  name="username"
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入手机号"
                />
              </div>
              <div className="group__foot">
                <img 
                  className="group__clean-btn"
                  style={{visibility: usernameCleanView ? 'visible' : 'hidden'}} 
                  onClick={this.usernameClean} 
                  src={closeIcon} 
                  alt="" 
                />
              </div>
            </div>    
            {this.state.loginType === LOGINTYPE_PASSWORD
              ? <PswdInput 
                  {...this.state}
                  handleChange={this.handleChange} 
                  handleFocus={this.handleFocus}
                  handleBlur={this.handleBlur}   
                  passwordClean={this.passwordClean}
                  handleTogglePswdVisibleOrHidden={this.handleTogglePswdVisibleOrHidden} 
                />
              : <MessageInput
                  {...this.state}
                  handleChange={this.handleChange} 
                  handleFocus={this.handleFocus}
                  handleBlur={this.handleBlur}      
                  messageClean={this.messageClean}
                  handleLoadCode={this.handleLoadCode}
                />
            }
          </div>

          <div className="flex">
            <div className="flex__body">
              <label className="label" onClick={this.handleRememberUsername}>
                <img src={ICON_SCHEMA[this.state.rememberStatus]} alt=""/>记住账号
              </label>
            </div>
            <div className="flex__foot">
              {this.state.loginType === 'password'
                ? <button className="link" onClick={this.handleMessageLogin}>短信登录</button>
                : <button className="link" onClick={this.handlePasswordLogin}>密码登录</button>
              }
            </div>
          </div>
          
          <button className="btn btn-primary" onClick={this.handleSubmit}>登录</button>
        </main>
        
      </Page>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))