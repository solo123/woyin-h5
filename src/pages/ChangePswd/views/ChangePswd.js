import React, { Component } from 'react'
import weui from 'weui.js'
import styled from 'styled-components'
import Page from './styled'

import {changePswd} from '../../../api'

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

const iconSchema = {
  text: showIcon,
  password: hideIcon
}

class ChangePswd extends Component {
  constructor(props) {
    super(props)

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

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClean(e, name) {
    console.log(name)
  }

  handleBlur(e) {
    this.setState({[`${e.target.name}Clean`]: false})
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}Clean`]: true})
  }

  async changePswd(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      pswd: pswd
    }
    try {
      const {data} = await changePswd(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          // do something
        })
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  handleSubmit(e) {
    this.changePswd(this.state.newPswd)
  }

  render() {
    const {
      oldPswd, oldPswdClean, oldPswdType,
      newPswd, newPswdClean, newPswdType,
      confNewPswd, confNewPswdClean, confNewPswdType
    } = this.state

    return (
      <Page>
        <div className="group-list">
          <div className="group">
            <div className="group__body">
              <PrimaryInput
                type={oldPswdType} 
                name="oldPswd"
                value={oldPswd} 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入原登录密码"
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
                onClick={this.handleToggle} 
                src={iconSchema[oldPswdType]}
                alt="切换" 
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
                placeholder="新登录密码"
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
                onClick={this.handleToggle} 
                src={iconSchema[newPswdType]}
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
                placeholder="确认新登录密码"
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
                onClick={this.handleToggle} 
                src={iconSchema[confNewPswdType]}
                alt="切换" 
              />                
            </div>
          </div>
        </div>
        <div className="u_m_xxx">
          <PrimaryButton onClick={this.handleClick}>提交</PrimaryButton>
        </div>
      </Page>
    )
  } 
}

export default ChangePswd