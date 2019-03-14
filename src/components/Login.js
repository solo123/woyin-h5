import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import styled from 'styled-components'
import weui from 'weui.js'
import classNames from 'classnames'

import closeIcon from '../asset/images/icon/close.png'
import showIcon from '../asset/images/icon/show.png'
import hideIcon from '../asset/images/icon/hide.png'
import checkedIcon from '../asset/images/icon/checked.png'
import uncheckedIcon from '../asset/images/icon/unchecked.png'
import api from '../api'
import {setItem, removeItem, getItem} from '../services/storage'

/*
 |--------------------------------------------------------------------------
 | button
 |--------------------------------------------------------------------------
 */
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
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const DisablePrimaryButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`
const MiniPrimaryButton = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
/*
 |--------------------------------------------------------------------------
 | input
 |--------------------------------------------------------------------------
 */
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
// const BigPrimaryInput = styled(Input)`
//   color: #444;
//   font-size: 16px;
//   font-weight: bold;
//   font-family: industry;
// `
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 14px;
`



// const LayoutBoxXY = styled.div`
//   margin: 15px;
// `
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
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  display: flex;
  margin-left: 10px;
`

const StyledHeader = styled.div`
  margin: 25px 20px 10px 20px;
  font-size: 22px;
  font-weight: bold;
  span{
    color: #aaa;
    margin-right: 20px;
    &.active{
      color: #a87d48;
      border-bottom: 4px solid #a87d48;
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
  width: 18px;
  height: 18px;
`
const StyledLabel = styled.label`
  color: #a87d48;
  img{
    margin-right: 3px;
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

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    
    this.passwordToggle = this.passwordToggle.bind(this)
    this.updateButtonStatus = this.updateButtonStatus.bind(this)
    this.handleRememberUsername = this.handleRememberUsername.bind(this)

    this.usernameClean = this.handleClean.bind(this, 'username')
    this.passwordClean = this.handleClean.bind(this, 'password')
    this.messageClean = this.handleClean.bind(this, 'message')

    this.passwordLogin = this.toggleLoginType.bind(this, LOGINTYPE_PASSWORD)
    this.messageLogin = this.toggleLoginType.bind(this, LOGINTYPE_MESSAGE)

    this.state = {
      pass: false,
      username: '15014095291',
      usernameCleanView: false,
      password: '000000',
      passwordCleanView: false,
      passwordType: 'password',
      passwordIcon: iconSchema['password'],
      rememberStatus: 'unchecked',
      rememberUsernameIcon: rememberUsernameIconSchema['unchecked'],

      loginType: LOGINTYPE_PASSWORD,
      message: '',
      messageCleanView: false
    }
  }

  componentDidMount() {
    const username = getItem('username')
    if(username) {
      this.setState({
        username,
        rememberStatus: 'checked', 
        rememberUsernameIcon: rememberUsernameIconSchema['checked']
      }, () => {
        this.updateButtonStatus()
      })
    }else {
      this.setState({
        rememberStatus: 'unchecked', 
        rememberUsernameIcon: rememberUsernameIconSchema['unchecked']
      }, () => {
        this.updateButtonStatus()
      })   
    }
  }

  toggleLoginType(type) {
    if(type !== this.state.loginType) {
      this.setState({loginType: type}, () => {
        this.updateButtonStatus()
      })
    }
  }

  passwordToggle() {
    const type = this.state.passwordType === 'password' ? 'text' : 'password'
    this.setState({passwordType: type, passwordIcon: iconSchema[type]})
  }

  handleClean(key) {
    this.setState({[key]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateButtonStatus()
    })
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}CleanView`]: true})
  }

  handleBlur(e) {
    const key =`${e.target.name}CleanView`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.updateButtonStatus()
      })
    }, 100)    
  }

  updateButtonStatus() {
    let flag = true
    const {username, password, message, loginType} = this.state

    this.saveUsername()

    if(!username) {
      flag = false
    }
    if(loginType === LOGINTYPE_PASSWORD) {
      if(!password) {
        flag = false
      }
    }else if(loginType === LOGINTYPE_MESSAGE) {
      if(!message) {
        flag = false
      }
    }
    this.setState({pass: flag})
  }

  saveUsername() {
    if(this.state.rememberStatus === 'checked') {
      setItem('username', this.state.username)
    }else {
      removeItem('username')
    }
  }

  handleRememberUsername() {
    const status = this.state.rememberStatus === 'checked' ? 'unchecked' : 'checked'
    this.setState({rememberStatus: status, rememberUsernameIcon: rememberUsernameIconSchema[status]}, () => {
      this.saveUsername()
    })
  }

  handleSubmit() {
    const loading = weui.loading('处理中')
    api.login(this.state.username, this.state.password, this.state.loginType)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.props.login({
            access_token: 'payload.access_token',
            refresh_token: 'payload.refresh_token'
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

  render() {
    const {isAuthenticated} = this.props;
    const {from} = this.props.location.state || {from: {pathname: "/"}}
    const {pass, usernameCleanView, passwordCleanView, messageCleanView} = this.state

    if(isAuthenticated){ return <Redirect to={ from } /> }

    return (
      <div>
        <StyledHeader>
          <span className={classNames({active: this.state.loginType === LOGINTYPE_PASSWORD})} onClick={this.passwordLogin}>密码登录</span>
          <span className={classNames({active: this.state.loginType === LOGINTYPE_MESSAGE})} onClick={this.messageLogin}>短信登录</span>
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
                  placeholder="手机号" 
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
                      placeholder="密码" 
                    />
                  </LayoutBody>
                  <LayoutFoot>
                    <StyledCleanIcon 
                      style={{visibility: passwordCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.passwordClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                    <StyledToggleIcon onClick={this.passwordToggle} src={this.state.passwordIcon} alt="" />
                  </LayoutFoot>
                </LayoutGroup>)
              : (<LayoutGroup>
                  <LayoutBody>
                    <PrimaryInput 
                      type='text'
                      name="message" 
                      value={this.state.message} 
                      onChange={this.handleChange} 
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}                  
                      placeholder="验证码" 
                    />
                  </LayoutBody>
                  <LayoutFoot>
                    <StyledCleanIcon 
                      style={{visibility: messageCleanView ? 'visible' : 'hidden'}} 
                      onClick={this.messageClean} 
                      src={closeIcon} 
                      alt="" 
                    />
                  </LayoutFoot>
                </LayoutGroup>)
              }
          </StyledBg>
        </LayoutBoxX>
        <div style={{marginLeft: 3, marginRight: 3, marginBottom: 30}}>
          <LayoutGroup>
            <LayoutBody>
              <StyledLabel onClick={this.handleRememberUsername}>
                <StyledCheckedIcon src={this.state.rememberUsernameIcon}></StyledCheckedIcon>记住账号
              </StyledLabel>
            </LayoutBody>
          </LayoutGroup>
        </div>
        <LayoutBoxX>
          {pass
            ? <PrimaryButton onClick={this.handleSubmit}>登录</PrimaryButton>
            : <DisablePrimaryButton>转赠</DisablePrimaryButton>}
        </LayoutBoxX>
        <LayoutBoxX>
          <LayoutGroup>
              <LayoutBody></LayoutBody>
              <LayoutFoot>
                <MiniPrimaryButton>忘记密码</MiniPrimaryButton>
              </LayoutFoot>
          </LayoutGroup>
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
    login: (payload) => dispatch({ type: 'AUTH_USER', payload: {
      access_token: payload.access_token,
      refresh_token: payload.refresh_token
    } }),
    showLoading: () => dispatch({ type: 'SHOW_LOADING' }),
    hideLoading: () => dispatch({ type: 'HIDE_LOADING' })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));