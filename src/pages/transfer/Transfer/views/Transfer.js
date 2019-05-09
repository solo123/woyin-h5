import React, {Component} from 'react'
import weui from 'weui.js'
import {Helmet} from "react-helmet"
import axios from 'axios'

import config from '@/config'
import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, integralTransfer, getTransferFee} from '@/api'

import Backhome from '@/components/Backhome'
import Page from './styled'

import closeIcon from '@/asset/images/icon/close.png'
import showIcon from '@/asset/images/icon/show.png'
import hideIcon from '@/asset/images/icon/hide.png'

const iconSchema = {
  text: showIcon,
  password: hideIcon
}

const CancelToken = axios.CancelToken

class Transfer extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.passwordToggle = this.passwordToggle.bind(this)

    this.handleFocusIntegral = this.handleFocus.bind(this, 'integral')

    this.state = {
      integral: 0,
      integralCleanView: false,

      account: '',
      accountCleanView: false,

      password: '',
      passwordCleanView: false,

      passwordType: 'password',
      passwordIcon: iconSchema['password'],

      // 手续费
      poundage: 0,
      money: 0,
      amount: 0,

      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()    
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        const account = util.getAccountById(data.data)
        this.setState({availableIntegral: Number(account.balance)})
      }
    }finally {
    }
  }

  async loadTransferFee(params) {
    try {
      const {data} = await getTransferFee(params)
      if(data.status === 200) {
        this.updateFee(data.data)
      }
    }finally {
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await integralTransfer(params)
      if(data.status === 200) {
        replace('/result', {type: 'success', title: data.msg})
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  updateFee({poundage, money, amount}) {
    this.setState({
      poundage: poundage,
      money: money,
      amount: amount
    })
  }

  handleClean(key) {
    this.setState({[key]: ''})
  }

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value    
    this.setState({[name]: value})
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}CleanView`]: true})
  }

  handleBlur(e) {
    const name = e.target.name

    if(name === 'integral') {
      if(this.state.integral >= 100) {
        const params = {
          amount: this.state.integral
        }
        this.loadTransferFee(params)
      }else {
        this.setState({
          poundage: 0,
          money: 0,
          amount: 0
        })
      }
    }

    const key =`${e.target.name}CleanView`
    setTimeout(() => {
      this.setState({[key]: false})
    }, 100)
  }

  passwordToggle() {
    const type = this.state.passwordType === 'password' ? 'text' : 'password'
    this.setState({passwordType: type, passwordIcon: iconSchema[type]})
  }

  verify() {
    if(!this.state.integral) {
      weui.alert('请输入转赠的积分')
      return
    }
    if(this.state.integral < config.transfer.MIN_INTEGRAL) {
      weui.alert(`转赠积分不能少于${config.transfer.MIN_INTEGRAL}`)
      return
    }    
    if(!this.state.account) {
      weui.alert('请输入对方登录账号')
      return
    }
    if(!this.state.password) {
      weui.alert('请输入交易密码')
      return
    }
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert('可用积分不足')
      return
    }
    return true    
  }

  handleSubmit(e) {
    if(!this.verify()){
      return
    }

    const params = {
      to: this.state.account,
      num: this.state.integral,
      tranPwd: this.state.password
    }    
    this.doSubmit(params)
  }

  render() {
    const {integralCleanView, accountCleanView, passwordCleanView} = this.state
    const integral = this.state.integral || ''

    return (
      <Page>
        <Helmet title="积分转赠"/>

        <main>
          <div className="group">
            <div className="group__body">
              <input
                type="text" 
                name="integral" 
                value={integral} 
                className="input" 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder={`请输入转赠的积分（不能少于${config.transfer.MIN_INTEGRAL}）`} 
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__icon" 
                style={{visibility: integralCleanView ? 'visible' : 'hidden'}} 
                onClick={() => this.handleClean('integral')} 
                src={closeIcon} 
                alt="" 
              />
            </div>
          </div>
          <div className="group">
            <div className="group__body">
              <input
                type="text" 
                name="account" 
                value={this.state.account} 
                className="input" 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入对方登录账号"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__icon" 
                style={{visibility: accountCleanView ? 'visible' : 'hidden'}} 
                onClick={() => this.handleClean('account')} 
                src={closeIcon} 
                alt="" 
              />
            </div>
          </div>
          <div className="group">
            <div className="group__body">
              <input
                type={this.state.passwordType} 
                name="password" 
                value={this.state.password} 
                className="input" 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                maxLength={config.pswd.PSWD_DIGIT}
                placeholder="请输入交易密码"
              />
            </div>
            <div className="group__foot">
              <img 
                className="group__icon" 
                style={{visibility: passwordCleanView ? 'visible' : 'hidden'}} 
                onClick={() => this.handleClean('password')} 
                src={closeIcon} 
                alt="" 
              />
              <img 
                className="group__icon" 
                onClick={this.passwordToggle} 
                src={this.state.passwordIcon} 
                alt=""
              />
            </div>
          </div>
        </main>

        <div className="u_m_xxx" style={{textAlign: 'right'}}>
          手续费 {this.state.poundage} 积分，实际到账 {this.state.amount} 积分
        </div>
        
        <div className="u_m_xxx">
          <button className="btn btn-secondary" onClick={this.handleSubmit}>转赠</button>
        </div>

        <Backhome/>
      </Page>
    )
  }
}

export default Transfer