import React, { Component } from 'react'
import { Redirect, withRouter, Link } from "react-router-dom"
import { connect } from 'react-redux'
import styled from 'styled-components'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import closeIcon from '../../../asset/images/icon/close.png'
import showIcon from '../../../asset/images/icon/show.png'
import hideIcon from '../../../asset/images/icon/hide.png'

import checkedIcon from '../../../asset/images/icon/checked.png'
import uncheckedIcon from '../../../asset/images/icon/unchecked.png'

import api, {getCode} from '../../../api'
import util from '../../../util'
import config from '../../../config'
import {setItem, removeItem, getItem} from '../../../services/storage'
import Page from './styled'

const Button = styled.button`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  display: block;
  background: transparent;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg,#f36263,#f36263);
`
const DisablePrimaryButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`
const MiniPrimaryBtn = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 3px 10px;
  line-height: 1.5;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg,#f36263,#f36263);
`
const DisableMiniPrimaryBtn = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 3px 10px;
  line-height: 1.5;
  border-radius: 3px;
  background: #ccc;
`
const Input = styled.input`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  color: inherit;
  font-size: inherit;
  -webkit-appearance: none;
  background: transparent;
`
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 14px;
`

const iconSchema = {
  text: showIcon,
  password: hideIcon
}
const rememberUsernameIconSchema = {
  checked: checkedIcon,
  unchecked: uncheckedIcon
}

const LOGINTYPE_PASSWORD = 'password'
const LOGINTYPE_MESSAGE = 'message'
const LOGINTYPE_SCHEMA = {
  'password': 1,
  'message': 2
}

const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{interval}秒后重发</DisableMiniPrimaryBtn>
}

const SubmitButton = ({pass, handleSubmit}) => {
  if(pass) {
    return <PrimaryButton onClick={handleSubmit}>登录</PrimaryButton>
  }
  return <DisablePrimaryButton>登录</DisablePrimaryButton>
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleTogglePswdVisibleOrHidden = this.handleTogglePswdVisibleOrHidden.bind(this)
    this.updateBtnStatus = this.updateBtnStatus.bind(this)
    this.handleRememberUsername = this.handleRememberUsername.bind(this)
    this.usernameClean = this.handleClean.bind(this, 'username')
    this.passwordClean = this.handleClean.bind(this, 'password')
    this.messageClean = this.handleClean.bind(this, 'messageCode')
    this.handlePasswordLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_PASSWORD)
    this.handleMessageLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_MESSAGE)

    this.handleGetCode = this.handleGetCode.bind(this)

    this.state = {
      pass: false,

      username: '',
      usernameCleanView: false,
      password: '',
      passwordCleanView: false,
      messageCode: '',
      messageCodeCleanView: false,

      passwordType: 'password',
      rememberStatus: 'unchecked',

      interval: config.login.INTERVAL,
      getCodeFlag: true,

      loginType: LOGINTYPE_PASSWORD
    }
  }

  componentDidMount() {
    util.addClass(document.body, 'white')
    this.readUsernameFromStore()
  }

  componentWillUnmount() {
    util.removeClass(document.body, 'white')
  }

  async doSubmit() {
    const loading = weui.loading('处理中')
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
    try {
      const {data} = await api.login(params)
      if(data.status === 200) {
        this.props.login({token: data.data.sessionId})
      }else if(data.status === 1010){
        weui.alert('账号或密码错误')
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  async getCode() {
    const loading = weui.loading('发送中')
    const params = {
      userPhoneNo: this.state.username,
      codeType: 1
    }
    try {
      const {data} = await getCode(params)
      if(data.status === 200) {
        this.setState({getCodeFlag: false}, this.countDown)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  updateBtnStatus() {
    let flag = true
    const {username, password, messageCode, loginType} = this.state

    this.toggleSaveOrRemoveUsername()

    if(!username) {
      flag = false
    }
    if(loginType === LOGINTYPE_PASSWORD) {
      if(!password) {
        flag = false
      }
    }else if(loginType === LOGINTYPE_MESSAGE) {
      if(!messageCode) {
        flag = false
      }
    }
    this.setState({pass: flag})
  }

  // 从缓存充读取用户名
  readUsernameFromStore() {
    const username = getItem('username')
    if(username) {
      this.setState({username: username, rememberStatus: 'checked'}, () => {
        this.updateBtnStatus()
      })
    }else {
      this.setState({rememberStatus: 'unchecked'}, () => {
        this.updateBtnStatus()
      })   
    }
  }

  handleToggleLoginType(type, e) {
    e.preventDefault()
    if(type !== this.state.loginType) {
      this.setState({loginType: type}, () => {
        this.updateBtnStatus()
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
        this.updateBtnStatus()
      })
    }, 100)    
  }

  handleClean(key) {
    this.setState({[key]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleGetCode() {
    if(!this.state.username) {
      weui.alert('请输入手机号')
      return
    }
    this.getCode()
  }

  handleSubmit() {
    this.doSubmit()
  }

  // 切换是否记住用户名
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
    this.setState({interval: config.login.INTERVAL, getCodeFlag: true})
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

  render() {
    const {isAuthenticated} = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    const {pass, usernameCleanView, passwordCleanView, messageCodeCleanView, getCodeFlag} = this.state

    if(isAuthenticated){return <Redirect to={from} />}

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="登录"/>
        <header>
          <h1>登录</h1>
        </header>
        <main>
          <div className="group-list">
            <div className="group">
              <div className="group__body">
                <PrimaryInput
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
              ? (<div className="group">
                  <div className="group__body">
                    <PrimaryInput 
                      type={this.state.passwordType} 
                      name="password" 
                      value={this.state.password} 
                      onChange={this.handleChange} 
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}                  
                      placeholder="请输入密码" 
                    />
                  </div>
                  <div className="group__foot">
                    <img 
                      className="group__clean-btn"
                      style={{visibility: passwordCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.passwordClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                    <img 
                      className="group__toggle-btn"
                      onClick={this.handleTogglePswdVisibleOrHidden} 
                      src={iconSchema[this.state.passwordType]} alt="切换" 
                    />
                    <Link className="link" to="/find-pswd">忘记密码</Link>
                  </div>
                </div>)
              : (<div className="group">
                  <div className="group__body">
                    <PrimaryInput 
                      type='text'
                      name="messageCode" 
                      value={this.state.messageCode} 
                      onChange={this.handleChange} 
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}                  
                      placeholder="请输入验证码" 
                    />
                  </div>
                  <div className="group__foot">
                    <img 
                      className="group__clean-btn"
                      style={{visibility: messageCodeCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.messageClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                    <SendMessageBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode}>获取验证码</SendMessageBtn>
                  </div>
                </div>)
              }
          </div>
          <div className="flex">
            <div className="flex__body">
              <label className="label" onClick={this.handleRememberUsername}>
                <img src={rememberUsernameIconSchema[this.state.rememberStatus]} alt=""/>记住账号
              </label>
            </div>
            <div className="flex__foot">
              {this.state.loginType === 'password'
                ? <button className="link" onClick={this.handleMessageLogin}>短信登录</button>
                : <button className="link" onClick={this.handlePasswordLogin}>密码登录</button>
              }
            </div>
          </div>
          <SubmitButton pass={pass} handleSubmit={this.handleSubmit} />
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
        payload: {token: payload.token}
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));