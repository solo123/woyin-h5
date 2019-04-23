import React, {Component} from 'react'
import {Link} from "react-router-dom"
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo, getBankcardList, paymentToCard, getWithdrawFee, getCodeForWithdraw} from '@/api'
import util from '@/util'
import config from '@/config'
import Backhome from '@/common/Backhome'
import Page from './styled'

import banner from '@/asset/images/creditCard/banner.jpg'
import plus from '@/asset/images/creditCard/plus.png'
import arrow from '@/asset/images/icon/arrow_right.svg'
import fzIcon from '@/asset/images/bank/fz.svg'
import gdIcon from '@/asset/images/bank/gd.svg'
import gsIcon from '@/asset/images/bank/gs.svg'
import hxIcon from '@/asset/images/bank/hx.svg'
import jsIcon from '@/asset/images/bank/js.svg'
import jtIcon from '@/asset/images/bank/jt.svg'
import msIcon from '@/asset/images/bank/ms.svg'
import nyIcon from '@/asset/images/bank/ny.svg'
import paIcon from '@/asset/images/bank/pa.svg'
import shIcon from '@/asset/images/bank/sh.svg'
import shfzIcon from '@/asset/images/bank/shfz.svg'
import xyIcon from '@/asset/images/bank/xy.svg'
import yzIcon from '@/asset/images/bank/yz.svg'
import zgIcon from '@/asset/images/bank/zg.svg'
import zsIcon from '@/asset/images/bank/zs.svg'
import zxIcon from '@/asset/images/bank/zx.svg'
import defaultIcon from '@/asset/images/bank/default.svg'

const BANKCARD_SCHEMA = {
  'GDB' : fzIcon,
  'CEB' : gdIcon,
  'ICBC' : gsIcon,
  'HXB' : hxIcon,
  'CCB' : jsIcon,
  'COMM' : jtIcon,
  'CMBC' : msIcon,
  'ABC' : nyIcon,
  'SZPAB' : paIcon,
  'BOS' : shIcon,
  'SPDB' : shfzIcon,
  'CIB' : xyIcon,
  'PSBC' : yzIcon,
  'BOC' : zgIcon,
  'CMB' : zsIcon,
  'CITIC' : zxIcon
}

function SendMsgBtn ({flag, interval, handleClick}) {
  if(flag) {
    return <button className="btn btn-mini" onClick={handleClick}>获取验证码</button>
  }
  return <button className="btn btn-mini disable">{interval}秒后重发</button>
}

function SubmitBtn({pass, handleSubmit}) {
  if(pass) {
    return <button className="btn btn-primary" onClick={handleSubmit}>立即还款</button>
  }
  return <button className="btn btn-primary disable">立即还款</button>
}

function Card({logo, bankName, bankCard, hasCard, handleOpenPicker}) {
  if(hasCard) {
    return (
      <div className="u_p_xxx u_mb_xx u_bg_white">
        <div className="card">
          <div className="aside">
            <img className="icon" src={logo} alt=""/>
          </div>
          <div className="main">
            <p className="title">{bankName} (尾号<span>{util.getBankcardLastNum(bankCard)}</span>)</p>
            <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
          </div>
          <div className="foot">
            <img className="arrow" onClick={handleOpenPicker} src={arrow} alt=""/>
          </div>
        </div>          
      </div>      
    )
  }
  return (
    <div className="empty">
      <Link to={{
        pathname: "bankcard-add",
        state: {from: '/credit-card'}
      }}>
        <div className="wrap">
          <img className="icon" src={plus} alt=""/>
          <p>请添加信用卡</p>
        </div>
      </Link>
      <p className="text">暂无可用</p>
    </div>
  )
}

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleOpenPicker = this.handleOpenPicker.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)

    this.state = {
      pass: false,

      interval: config.creditCard.INTERVAL,
      getCodeFlag: true,
      smsCode: '',

      loading: true,
      hasCard: false,
      bankCard: '',
      bankCode: '',
      bankName: '',
      cardHoldName: '',
      userPhoneNo: '',
      cardList: [],

      redeemFee: 0,
      actualReceived: 0,
      deductIntegral: 0,

      integral: '',
      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadBankCardList()
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({availableIntegral: Number(data.data[0].balance)})
      }
    }finally {
    }
  }

  async loadBankCardList() {
    try {
      const {data} = await getBankcardList()
      if(data.status === 200) {
        const cardList = util.filterBankCardByStatusAndType(data.data, 2, 1)
        this.setState({cardList: cardList}, () => {
          const card = cardList[0]
          if(card) {
            this.setCard(card)
          }
        })        
      }
    }finally {
      this.setState({loading: false})
    }
  }

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      amount: this.state.integral,
      bankCode: this.state.bankCode,
      bankName: this.state.bankName,
      cardHoldName: this.state.cardHoldName,
      cardPhoneNo: this.state.userPhoneNo,
      tradPwd: pswd,
      code: this.state.smsCode,
      bankCard: this.state.bankCard,
      payment: 2
    }
    try {
      const {data} = await paymentToCard(params)
      if(data.status === 200) {
        weui.alert(data.msg)
      }else if(data.status === 1017){
        util.confirmRetry('密码错误', () => {
          this.retryTransPswd()
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
    try {
      const {data} = await getCodeForWithdraw(this.state.userPhoneNo)
      if(data.status === 200) {
        this.setState({getCodeFlag: false}, () => {
          this.countDown()
        })
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  async getWithdrawFee() {
    const {data} = await getWithdrawFee(this.state.integral || 0)
    if(data.status === 200) {
      this.updateFee(data.data)
    }
  }

  setCard(card) {
    this.setState({
        bankName: card.bankName,
        bankCode: card.bankCode,
        bankCard: card.bankCard,
        cardHoldName: card.cardHoldName,
        userPhoneNo: card.userPhoneNo,
        bankcardLogo: BANKCARD_SCHEMA[card.bankCode] || defaultIcon
      }, () => {
        this.setState({hasCard: true}, () => {
          this.updateBtnStatus()
        })
    })
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

  resetGetCode() {
    this.setState({interval: config.creditCard.INTERVAL, getCodeFlag: true})
  }

  updateBtnStatus() {
    if(this.state.integral && this.state.hasCard && this.state.smsCode) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  updateFee({poundage, money, totalAmount}) {
    this.setState({
      redeemFee: poundage,
      actualReceived: money,
      deductIntegral: totalAmount
    })
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  handleOpenPicker() {
    if(!this.state.cardList.length) {
      weui.alert('暂无可用信用卡')
      return false
    }
    weui.picker(util.parseBankcardList(this.state.cardList), {
      defaultValue: [0],
      onConfirm: result => {
        if(result && result[0]){
          this.setCard(result[0])
        }
      }
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleGetCode() {
    this.getCode()
  }

  handleBlur(e) {
    this.getWithdrawFee()
  }

  handleSubmit() {
    // 错误提示
    
    util.paymentConfirm({
      title: '还款',
      amount: this.state.integral,
      useable: this.state.availableIntegral,      
      callback: (e, input) => {
        if(!input.value.trim()) {
          alert('请输入密码')
          return false
        }
        this.doSubmit(input.value)
      }
    })
  }

  render() {
    const {getCodeFlag} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="信用卡还款"/>

        <header>
          <img src={banner} alt=""/>
        </header>

        <Card 
          hasCard={this.state.hasCard} 
          logo={BANKCARD_SCHEMA[this.state.bankCode]}
          bankName={this.state.bankName}
          bankCard={this.state.bankCard}
          handleOpenPicker={this.handleOpenPicker}
        />

        <div className="u_bg_white">
          <div className="u_p_xxx">
            <h2>还款金额</h2>
            <div className="input-box">
              <input 
                name="integral" 
                className="input input-primary"
                value={this.state.integral} 
                onChange={this.handleChange} 
                onBlur={this.handleBlur} 
                placeholder={`最多可使用${this.state.availableIntegral}积分`}
              />
              <div className="tip">可用积分：{this.state.availableIntegral}</div>
            </div>
          </div>
        
          <div className="u_px_xxx u_pb_xxx">
            <div className="info">
              <p>扣除{this.state.deductIntegral}积分，还款{this.state.deductIntegral / 100}元</p>
              <p>手续费{this.state.redeemFee}积分，100积分等于1元</p>
            </div>
          </div>

          <div className="u_px_xxx u_pb_xxx">
            <div className="group">
              <div className="group__body">
                <input 
                  type="text"
                  className="input input-primary"
                  name="smsCode"
                  value={this.state.smsCode} 
                  onChange={this.handleChange} 
                  placeholder="请输入短信验证码"
                />
              </div>
              <div className="group__foot">
                <SendMsgBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode} />
              </div>  
            </div>
          </div> 
        </div>

        <div className="u_p_xxx">
          <SubmitBtn pass={this.state.pass} handleSubmit={this.handleSubmit} />
        </div>

        <Backhome />
      </Page>
    )
  }
}