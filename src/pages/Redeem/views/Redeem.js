import React, {Component} from 'react'
import weui from 'weui.js'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet"

import config from '@/config'
import {getUserInfo, getBankcardList, redeemIntegral, getRedeemFee, getCodeForWithdraw} from '@/api'
import util from '@/util'

import Backhome from '@/common/Backhome'
import Page from './styled'

import moreIcon from '@/asset/images/icon/more.png'
import checkedIcon from '@/asset/images/icon/checked.png'
import uncheckedIcon from '@/asset/images/icon/unchecked.svg'
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

const BankcardLoading = () => {
  return (
    <div className="loading">
      <div className="loading__head"></div>
      <div className="loading__main">
        <div className="loading__line" style={{width: '50%', marginBottom: 10}}></div>
        <div className="loading__line"></div>
      </div>
    </div>
  )
}

const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <button className="btn btn-secondary btn-mini" onClick={handleClick}>获取验证码</button>
  }
  return <button className="btn btn-secondary btn-mini disable">{interval}秒后重发</button>
}

const SubmitBtn = ({pass, handleSubmit}) => {
  if(pass) {
    return <button className="btn btn-secondary" onClick={handleSubmit}>确认代卖</button>
  }
  return <button className="btn btn-secondary disable">确认代卖</button>
}

const Bankcard = ({logo, bankcardNo, bankName}) => {
  return (
    <div className="bankcard">
      <div className="aside">
        <img className="icon" src={logo} alt=""/>
      </div>
      <div className="main" style={{marginLeft: 15}}>
        <p className="name">{bankName}(尾号<span className="card">{util.getBankcardLastNum(bankcardNo)}</span>)</p>
        <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
      </div>
    </div>
  )
}

const BankcardBox = ({loading, hasBankcard, bankcardLogo, bankcard, bankName}) => {
  if(loading) {
    return <BankcardLoading />
  }
  if(hasBankcard) {
    return <Bankcard logo={bankcardLogo} bankcardNo={bankcard} bankName={bankName} />
  }
  return <div className="empty">暂无可用银行卡</div>
}

const Agreement = ({agreementFlag}) => {
  return <img className="checkbox" src={agreementFlag ? checkedIcon : uncheckedIcon} alt="" />
}

class Redeem extends Component {
  constructor(props) {
    super(props)

    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      integral: '',
      availableIntegral: 0,

      pass: false,
      loading: true,
      hasBankcard: false,
      agreementFlag: true,
      bankcardList: [],
      bankCard: '',
      bankName: '',
      bankcardLogo: '',

      code: '',
      interval: config.redeem.INTERVAL,
      getCodeFlag: true,

      phone: '',
      redeemFee: 0,
      actualReceived: 0,
      deductIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadCardList()
  }

  componentWillUnmount() {
  }

  async loadUserInfo() {
    try {
      const {data} = await getUserInfo()
      if(data.status === 200) {
        this.setState({
          phone: data.data[0].userPhoneNo,
          availableIntegral: data.data[0].balance
        })
      }
    }finally {
    }
  }

  async loadCardList() {
    try {
      const {data} = await getBankcardList()
      if(data.status === 200) {
        const cardList = util.filterBankCardByStatusAndType(data.data, '1', '1')
        this.setState({bankcardList: cardList}, () => {
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

  async getRedeemFee() {
    try {
      const {data} = await getRedeemFee(this.state.integral || 0)
      if(data.status === 200) {
        this.updateFee(data.data)
      }
    }finally {
    }
  }

  async getCode() {
    const loading = weui.loading('发送中')
    try {
      const {data} = await getCodeForWithdraw(this.state.phone)
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

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      amount: this.state.integral,
      bankCode: this.state.bankCode,
      bankName: this.state.bankName,
      cardHoldName: this.state.cardHoldName,
      cardPhoneNo: this.state.userPhoneNo,
      bankCard: this.state.bankCard,
      code: this.state.code,
      tradPwd: pswd,
      payment: 1
    }
    try {
      const {data} = await redeemIntegral(params)
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

  retryTransPswd() {
    this.handleSubmit()
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
    this.setState({interval: config.redeem.INTERVAL, getCodeFlag: true})
  }

  updateFee({poundage, money, totalAmount}) {
    this.setState({
      redeemFee: poundage,
      actualReceived: money,
      deductIntegral: totalAmount
    })
  }

  updateBtnStatus() {
    let flag = true

    if(this.state.integral < config.redeem.MIN_INTEGRAL) {
      flag = false
    }
    if(this.state.integral > config.redeem.MAX_INTEGRAL) {
      flag = false
    }
    if(!this.state.bankCard) {
      flag = false
    }
    if(!this.state.code) {
      flag = false
    }
    if(!this.state.agreementFlag) {
      flag = false
    }

    this.setState({pass: flag})
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
        this.setState({hasBankcard: true}, () => {
          this.updateBtnStatus()
        })
    })
  }

  handleBlur(e) {
    this.getRedeemFee()
  }
  
  handleGetCode() {
    this.getCode()
  }

  handleClick(e) {
    if(!this.state.bankcardList.length) {
      weui.alert('暂无可用')
      return false
    }
    weui.picker(util.parseBankcardList(this.state.bankcardList), {
      defaultValue: [0],
      onConfirm: result => {
        if(result && result[0]){
          this.setCard(result[0])
        }
      }
    })
  }

  handleToggle = e => {
    this.setState({agreementFlag: !this.state.agreementFlag}, () => {
      this.updateBtnStatus()
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleSubmit(e) {
    util.paymentConfirm({
      title: '代卖',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}
        this.doSubmit(inputElem.value)
      }
    })
  }

  render() {
    const {
      pass, 
      loading, 
      agreementFlag, 
      hasBankcard, 
      bankCard, 
      bankName, 
      bankcardLogo,
      getCodeFlag
    } = this.state

    const placeholder = `最多可代卖${this.state.availableIntegral}积分`

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="积分代卖"/>
        <div className="u_mb_xxx">
          <div className="trigger-bar">
            <label>选择银行卡</label>
            <img className="icon" onClick={this.handleClick} src={moreIcon} alt="箭头" />
          </div>
        </div>

        <div className="u_mb_xxx">
          <BankcardBox 
            loading={loading} 
            hasBankcard={hasBankcard} 
            bankcardLogo={bankcardLogo} 
            bankName={bankName}
            bankcard={bankCard} 
          />
        </div>

        <div className="u_mb_x">
          <div className="input-box">
            <input
              className="input" 
              type="number"
              name="integral"
              value={this.state.integral} 
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder={placeholder}
            />
          </div>
        </div>

        <div className="u_mb_xxx">
          <div className="small-text">
            <p>扣除{this.state.deductIntegral}积分</p>
            <p>实际到账{this.state.actualReceived}元(手续费{this.state.redeemFee}积分，100积分等于1元)</p>
          </div>
        </div>

        <div className="u_mb_xxx">
          <div className="group">
            <div className="group__body">
              <input
                className="input" 
                type="text"
                name="code"
                value={this.state.code} 
                onChange={this.handleChange} 
                placeholder="请输入短信验证码"
              />
            </div>
            <div className="group__foot">
              <SendMessageBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode} />
            </div>  
          </div>
        </div> 

        <div className="u_mb_xxx">
          <div className="small-text flex-y-center" onClick={this.handleToggle}>
            <Agreement agreementFlag={agreementFlag} />
            同意用户<Link to="/redeen-agreement" style={{color: '#007AFF'}}>《代卖规则协议》</Link>
          </div>
        </div>

        <SubmitBtn pass={pass} handleSubmit={this.handleSubmit} />
        
        <Backhome />
      </Page>
    )
  }
}

export default Redeem