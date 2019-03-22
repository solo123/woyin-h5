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

import logoIcon from '../asset/images/icon/logo.png'

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
  padding: 0 10px;
  line-height: 1.5;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`
const DisableMiniPrimaryBtn = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
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


const LayoutBoxX = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`
const LayoutGroup = styled.div`
  position: relative;
  display: flex;
  padding: 15px;
  align-items: center;
  &:after{
    content: " ";
    position: absolute;
    left: 15px;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  &:last-child:after{
    content: none;
  }
`
const LayoutHead = styled.div`
  margin-right: 10px;
`
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  display: flex;
  margin-left: 10px;
`
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`
const StyledHeader = styled.div`
  padding: 30px 15px;
  font-size: 16px;
  font-weight: bold;
  span{
    color: #aaa;
    margin-right: 20px;
    &.active{
      color: #4aabff;
      border-bottom: 2px solid #46a4f5;
    }
  }
`
const StyledBg = styled.div`
  border-radius: 3px;
  background: #fff;
  box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
`
const StyledCleanIcon = styled.img`
  width: 25px;
  height: 25px;
`
const StyledToggleIcon = styled.img`
  width: 25px;
  height: 25px;
`
const StyledCheckedIcon = styled.img`
  width: 16px;
  height: 16px;
`
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 5px;
  color: #4aabff;
  font-size: 12px;
  img{
    margin-right: 3px;
  }
`
const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
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

const SendMessageBtn = ({flag, timer, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{timer}秒后重发</DisableMiniPrimaryBtn>
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
    this.messageClean = this.handleClean.bind(this, 'message')
    this.handlePasswordLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_PASSWORD)
    this.handleMessageLogin = this.handleToggleLoginType.bind(this, LOGINTYPE_MESSAGE)

    this.state = {
      pass: false,

      username: '15014095291',
      usernameCleanView: false,
      password: '000000',
      passwordCleanView: false,
      messageCode: '',
      messageCleanView: false,

      passwordType: 'password',
      rememberStatus: 'unchecked',

      timer: 10,
      sendMessageCodeFlag: true,  //  发送短信验证码标志

      loginType: LOGINTYPE_PASSWORD
    }
  }

  componentDidMount() {
    this.readUsernameFromStore()
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

  handleSubmit() {
    const loading = weui.loading('处理中')
    api.login(this.state.username, this.state.password, this.state.loginType)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.props.login({
            token: data.token
          })
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
      .catch(err => {
      })
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
        this.setState({timer: this.state.timer - 1}, () => {
          this.countDown()
        })
      }, 1000)
    }else {
      this.resetMessageState()
    }
  }

  // 发送短信验证码
  handleSendMessageCode = () => {
    const loading = weui.loading('发送中')
    api.sendMessageCode()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({sendMessageCodeFlag: false}, () => {
            this.countDown()
          })          
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
  }

  render() {
    const {isAuthenticated} = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    const {pass, usernameCleanView, passwordCleanView, messageCleanView, sendMessageCodeFlag} = this.state

    if(isAuthenticated){ return <Redirect to={ from } /> }

    return (
      <div style={{padding: 10}}>
       
        <StyledHeader>
          <div style={{textAlign: 'center', marginBottom: 30}}>
            <StyledLogo src={logoIcon}  alt="logo" />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <span className={classNames({active: this.state.loginType === LOGINTYPE_PASSWORD})} onClick={this.handlePasswordLogin}>密码登录</span>
            <span className={classNames({active: this.state.loginType === LOGINTYPE_MESSAGE})} onClick={this.handleMessageLogin}>短信登录</span>
          </div>
        </StyledHeader>

        <LayoutBoxX>
          <StyledBg>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput
                  type="text" 
                  name="username"
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入手机号"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: usernameCleanView ? 'visible' : 'hidden'}} 
                  onClick={this.usernameClean} 
                  src={closeIcon} 
                  alt="" 
                />
              </LayoutFoot>
            </LayoutGroup>    
            {this.state.loginType === LOGINTYPE_PASSWORD
              ? (<LayoutGroup>
                  <LayoutBody>
                    <PrimaryInput 
                      type={this.state.passwordType} 
                      name="password" 
                      value={this.state.password} 
                      onChange={this.handleChange} 
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}                  
                      placeholder="请输入密码" 
                    />
                  </LayoutBody>
                  <LayoutFoot>
                    <StyledCleanIcon 
                      style={{visibility: passwordCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.passwordClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                    <StyledToggleIcon onClick={this.handleTogglePswdVisibleOrHidden} src={iconSchema[this.state.passwordType]} alt="" />
                  </LayoutFoot>
                </LayoutGroup>)
              : (<LayoutGroup>
                  <LayoutBody>
                    <PrimaryInput 
                      type='text'
                      name="messageCode" 
                      value={this.state.messageCode} 
                      onChange={this.handleChange} 
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}                  
                      placeholder="请输入验证码" 
                    />
                  </LayoutBody>
                  <LayoutFoot>
                    <StyledCleanIcon 
                      style={{visibility: messageCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.messageClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                    <SendMessageBtn flag={sendMessageCodeFlag} timer={this.state.timer} handleClick={this.handleSendMessageCode}>获取验证码</SendMessageBtn>
                  </LayoutFoot>
                </LayoutGroup>)
              }
          </StyledBg>
        </LayoutBoxX>
        <div>
          <LayoutGroup>
            <LayoutBody>
              <StyledLabel onClick={this.handleRememberUsername}>
                <StyledCheckedIcon src={rememberUsernameIconSchema[this.state.rememberStatus]}></StyledCheckedIcon>记住账号
              </StyledLabel>
            </LayoutBody>
          </LayoutGroup>
        </div>
        <LayoutBoxX style={{margin: 15}}>
          {pass
            ? <PrimaryButton onClick={this.handleSubmit}>登录</PrimaryButton>
            : <DisablePrimaryButton>登录</DisablePrimaryButton>}
        </LayoutBoxX>
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
        payload: {token: payload.token}
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));