import React, { Component } from 'react'
import weui from 'weui.js'
import styled from 'styled-components'

import Page from './styled'

import config from '../../../config'
import api, {changePswd} from '../../../api'
import { push } from '../../../services/redirect'
import closeIcon from '../../../asset/images/icon/close.png'
import showIcon from '../../../asset/images/icon/show.png'
import hideIcon from '../../../asset/images/icon/hide.png'

const Input = styled.input`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  color: inherit;
  font-size: inherit;
  appearance: none;
  background: transparent;
`
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 14px;
`
const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
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
const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{interval}秒后重发</DisableMiniPrimaryBtn>
}

const ICON_SCHEMA = {
  text: showIcon,
  password: hideIcon
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.verify = this.verify.bind(this)
    this.handleGetCode = this.handleGetCode.bind(this)

    this.handleToggleNewPswd = this.handleToggle.bind(this, 'newPswd')
    this.handleToggleConfNewPswd = this.handleToggle.bind(this, 'confNewPswd')

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhoneClean = this.handleClean.bind(this, 'phone')
    this.handleNewPswdClean = this.handleClean.bind(this, 'newPswd')
    this.handleConfNewPswdClean = this.handleClean.bind(this, 'confNewPswd')
    this.handleCodeClean = this.handleClean.bind(this, 'code')

    this.state = {
      pass: false,

      phone: '',
      phoneClean: false,

      code: '',
      getCodeFlag: true,
      interval: config.changePswd.INTERVAL,

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

  async changePswd(phone, newPswd, code) {
    const loading = weui.loading('处理中')
    const params = {
      userPhoneNo: phone,
      password: newPswd,
      code: code
    }
    try {
      const {data} = await changePswd(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          push('/login')
        })
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
      userPhoneNo: this.state.phone,
      codeType: 2
    }
    try {
      const {data} = await api.getCode(params)
      if(data.status === 200) {
        this.setState({getCodeFlag: false}, this.countDown)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  handleGetCode() {
    if(!this.state.phone) {
      weui.alert('请输入手机号')
      return
    }
    this.getCode()
  }

  resetGetCode() {
    this.setState({interval: config.changePswd.INTERVAL, getCodeFlag: true})
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

  updateBtnStatus() {
    let flag = true

    if(!this.state.code) {
      flag = false
    }
    if(!this.state.phone) {
      flag = false
    }
    if(!this.state.newPswd) {
      flag = false
    }
    if(!this.state.confNewPswd) {
      flag = false
    }
    if(this.state.newPswd !== this.state.confNewPswd) {
      flag = false
    }    

    this.setState({pass: flag})
  }

  verify() {
    if(!this.state.phone) {
      weui.alert('请输入登录手机号')
      return
    }
    if(!this.state.newPswd) {
      weui.alert('请输入新密码')
      return
    }
    if(!this.state.confNewPswd) {
      weui.alert('请确认新密码')
      return
    }
    if(this.state.newPswd !== this.state.confNewPswd) {
      weui.alert('新密码不一致')
      return
    }
    if(!this.state.code) {
      weui.alert('请输入验证码')
      return
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
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
    this.changePswd(this.state.phone, this.state.newPswd, this.state.code)
  }

  render() {
    const {
      pass,
      code, codeClean, getCodeFlag,
      phone, phoneClean,
      newPswd, newPswdClean, newPswdType,
      confNewPswd, confNewPswdClean, confNewPswdType
    } = this.state

    return (
      <Page>
        <div className="group-list">
          <div className="group">
            <div className="group__body">
              <PrimaryInput
                type="text"
                name="phone"
                value={phone} 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入登录手机号"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__clean-btn"
                style={{visibility: phoneClean ? 'visible' : 'hidden'}} 
                onClick={this.handlePhoneClean} 
                src={closeIcon} 
                alt="清空" 
              />
            </div>
          </div>
          <div className="group">
            <div className="group__body">
              <PrimaryInput
                type={newPswdType} 
                name="newPswd"
                value={newPswd} 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="新密码"
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
              <PrimaryInput
                type={confNewPswdType} 
                name="confNewPswd"
                value={confNewPswd} 
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
          <div className="group">
            <div className="group__body">
              <PrimaryInput
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
        </div>
        <div className="u_m_xxx">
          {pass
            ? <PrimaryButton onClick={this.handleSubmit}>提交</PrimaryButton>
            : <DisablePrimaryButton onClick={this.verify}>提交</DisablePrimaryButton>
          }
        </div>
      </Page>
    )
  } 
}