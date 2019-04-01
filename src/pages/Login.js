import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import styled from 'styled-components'
import classNames from 'classnames'
import weui from 'weui.js'

import closeIcon from '../asset/images/icon/close.png'
import showIcon from '../asset/images/icon/show.png'
import hideIcon from '../asset/images/icon/hide.png'

import checkedIcon from '../asset/images/icon/checked.png'
import uncheckedIcon from '../asset/images/icon/unchecked.png'

import logoIcon from '../asset/images/login-logo.png'

import api from '../api'
import {setItem, removeItem, getItem} from '../services/storage'

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
  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
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
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
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

const Page = styled.div`
  header{
    padding: 30px 15px;
    font-size: 16px;
    font-weight: bold;
    .logo-box{
      text-align: center;
      margin-bottom: 30px;
    }
    .logo{
      width: 150px;
      height: 150px;
    }
    ul{
      display: flex;
      justify-content: center;
      li{
        color: #aaa;
        margin-right: 20px;
        &.active{
          color: #4aabff;
          border-bottom: 2px solid #46a4f5;
        }
      }
    }
  }
  main{
    margin: 0 25px;
  }
  .group-list{
    border-radius: 3px;
    background: #fff;
    margin-bottom: 15px;
    box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
  }
  .group{
    position: relative;
    padding: 15px;
    display: flex;
    align-items: center;
    &:after{
      content: " ";
      position: absolute;
      left: 15px;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eaeaea;
      transform: scaleY(0.5);
    }
    &:last-child:after{
      content: none;
    }
    &__body{
      flex: 1;
    }
    &__foot{
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    &__toggle-btn,
    &__clean-btn{
      width: 25px;
      height: 25px;
    }
  }
  .label{
    display: flex;
    align-items: center;
    margin: 0 5px 30px 5px;
    color: #4aabff;
    font-size: 12px;
    img{
      width: 16px;
      height: 16px;
      margin-right: 3px;
    }
  }
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

const SendMessageBtn = ({flag, timer, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{timer}秒后重发</DisableMiniPrimaryBtn>
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

      timer: 60,
      sendMessageCodeFlag: true,  //  发送短信验证码标志

      loginType: LOGINTYPE_PASSWORD
    }
  }

  componentDidMount() {
    this.readUsernameFromStore()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  // 从缓存充读取用户名
  readUsernameFromStore = () => {
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

  // 切换登录类型
  handleToggleLoginType(type) {
    if(type !== this.state.loginType) {
      this.setState({loginType: type}, () => {
        this.updateBtnStatus()
      })
    }
  }

  // 切换密码是否可见
  handleTogglePswdVisibleOrHidden() {
    const type = this.state.passwordType === 'password' ? 'text' : 'password'
    this.setState({passwordType: type})
  }

  // 显示清空输入框按钮
  handleFocus(e) {
    this.setState({[`${e.target.name}CleanView`]: true})
  }

  // 隐藏清空输入框按钮
  handleBlur(e) {
    const key =`${e.target.name}CleanView`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.updateBtnStatus()
      })
    }, 100)    
  }

  // 清空输入框
  handleClean(key) {
    this.setState({[key]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  async handleSubmit() {
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

  resetMessageState = () => {
    this.setState({timer: 10, sendMessageCodeFlag: true})
  }

  countDown = () => {
    if(this.state.timer > 0) {
      setTimeout(() => {
        if(!this._isMounted){return}
        this.setState({timer: this.state.timer - 1}, () => {
          this.countDown()
        })
      }, 1000)
    }else {
      this.resetMessageState()
    }
  }

  // 发送短信验证码
  handleSendMessageCode = async () => {
    const loading = weui.loading('发送中')
    const params = {
      userPhoneNo: this.state.username,
      codeType: 1
    }
    try {
      this._isMounted = true
      const {data} = await api.getCode(params)
      if(data.status === 200) {
        if(!this._isMounted){return}
        this.setState({sendMessageCodeFlag: false}, this.countDown)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  render() {
    const {isAuthenticated} = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    const {pass, usernameCleanView, passwordCleanView, messageCodeCleanView, sendMessageCodeFlag} = this.state

    if(isAuthenticated){ return <Redirect to={ from } /> }

    return (
      <Page>
        <header>
          <div className="logo-box">
            <img className="logo" src={logoIcon} alt="logo" />
          </div>
          <ul>
            <li 
              className={classNames({active: this.state.loginType === LOGINTYPE_PASSWORD})}
              onClick={this.handlePasswordLogin}>密码登录</li>
            <li 
              className={classNames({active: this.state.loginType === LOGINTYPE_MESSAGE})} 
              onClick={this.handleMessageLogin}>短信登录</li>
          </ul>
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
                    <SendMessageBtn flag={sendMessageCodeFlag} timer={this.state.timer} handleClick={this.handleSendMessageCode}>获取验证码</SendMessageBtn>
                  </div>
                </div>)
              }
          </div>
          <label className="label" onClick={this.handleRememberUsername}>
            <img src={rememberUsernameIconSchema[this.state.rememberStatus]} />记住账号
          </label>
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