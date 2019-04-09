import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'
import {Link} from 'react-router-dom'

import api from '../api'
import util from '../util'
import {replace} from '../services/redirect'
import {getItem} from '../services/storage'

import Backhome from '../common/Backhome'

import arrowRightIcon from '../asset/images/icon/arrow_right.svg'
import checkedIcon from '../asset/images/icon/checked.png'
import uncheckedIcon from '../asset/images/icon/unchecked.svg'

import fzIcon from '../asset/images/bank/fz.svg'
import gdIcon from '../asset/images/bank/gd.svg'
import gsIcon from '../asset/images/bank/gs.svg'
import hxIcon from '../asset/images/bank/hx.svg'
import jsIcon from '../asset/images/bank/js.svg'
import jtIcon from '../asset/images/bank/jt.svg'
import msIcon from '../asset/images/bank/ms.svg'
import nyIcon from '../asset/images/bank/ny.svg'
import paIcon from '../asset/images/bank/pa.svg'
import shIcon from '../asset/images/bank/sh.svg'
import shfzIcon from '../asset/images/bank/shfz.svg'
import xyIcon from '../asset/images/bank/xy.svg'
import yzIcon from '../asset/images/bank/yz.svg'
import zgIcon from '../asset/images/bank/zg.svg'
import zsIcon from '../asset/images/bank/zs.svg'
import zxIcon from '../asset/images/bank/zx.svg'
import defaultIcon from '../asset/images/bank/default.svg'

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
  padding: 5px 10px;
  line-height: 1.5;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`
const DisableMiniPrimaryBtn = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
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
  font-size: 16px;
  font-family: industry;
`
const MinPrimaryInput = styled(Input)`
  font-family: industry;
  font-size: 14px;
`

const Page = styled.div`
  padding: 15px;
  background: #fff;
  .trigger-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: 20px;
      height: 20px;
    }
  }
  .empty{
    color: #888;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .bankcard{
    display: flex;
    .icon{
      width: 50px;
      height: 50px;
    }
    .card{
      font-family: industry;
    }
    .main{
      flex: 1;
      .name{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .text{
        line-height: 1.5;
        font-size: 12px;
        color: #888;
      }
    }
  }
  .input-box{
    padding: 15px;
    background: #f4f4f4;
  }
  .small-text{
    color: #888;
    font-size: 12px;
  }

  .checkbox{
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  .flex-y-center{
    display: flex;
    align-items: center;
  }
  .group{
    display: flex;
    align-items: center;
    &__body{
      flex: 1;
    }
    &__foot{
      margin-left: 10px;
    }
  }  
  .loading{
    display: flex;
    &__head{
     width: 50px;
     height: 50px;
     background: #eaeaea;
    }
    &__main{
      flex: 1;
      margin-left: 15px;
    }
    &__line{
      height: 20px;
      background: #eaeaea;
    }
  }
`

const MIN_INTEGRAL = 100
const MAX_INTEGRAL = 5000000

const BANKCARD_SCHEMA = {
  jsIcon,
  zsIcon,
  gsIcon
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

const SendMessageBtn = ({flag, timer, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{timer}秒后重发</DisableMiniPrimaryBtn>
}

const SubmitBtn = ({pass, handleSubmit}) => {
  if(pass) {
    return <PrimaryButton onClick={handleSubmit}>确认赎回</PrimaryButton>
  }
  return <DisablePrimaryButton>确认赎回</DisablePrimaryButton>
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

const BankcardBox = ({loading, hasBankcard, bankcardLogo, bankcard, bankname}) => {
  if(loading) {
    return <BankcardLoading />
  }
  if(hasBankcard) {
    return <Bankcard logo={bankcardLogo} bankcardNo={bankcard} bankcardName={bankname} />
  }
  return <div className="empty">暂无可用银行卡</div>
}

const Agreement = ({agreementFlag}) => {
  return <img className="checkbox" src={agreementFlag ? checkedIcon : uncheckedIcon} />
}

class Redeem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      integral: '',
      availableIntegral: 0,

      smsCode: '',

      pass: false,
      loading: true,
      hasBankcard: false,
      agreementFlag: true,
      bankcardList: [],
      bankCard: '',
      bankName: '',
      bankcardLogo: '',

      timer: 60,
      sendMsgCodeFlag: true,
      phone: '',
      redeemFee: 0,
      actualReceived: 0,
      deductIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadBankcardList()
  }

  componentWillUnmount() {
  }

  async loadUserInfo() {
    const {data} = await api.getUserInfo()
    if(data.status === 200) {
      this.setState({
        availableIntegral: data.data[0].balance,
        phone: data.data[0].userPhoneNo
      })
    }
  }

  async loadBankcardList() {
    const {data} = await api.getBankcardList()
    this.setState({loading: false})
    if(data.status === 200) {
      this.setState({bankcardList: data.data}, () => {
        const card = data.data[0]
        if(card) {
          this.setCard(card)
        }
      })
    }
  }

  setCard = (card) =>  {
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

  handleClick = e => {
    if(!this.state.bankcardList.length) {
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

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleBlur = async e => {
    const {data} = await api.getRedeemFee(this.state.integral || 0)
    if(data.status === 200) {
      this.updateFee(data.data)
    }
  }

  updateFee = ({poundage, money, totalAmount}) => {
    this.setState({
      redeemFee: poundage,
      actualReceived: money,
      deductIntegral: totalAmount
    })
  }

  updateBtnStatus = () => {
    let flag = true

    if(this.state.integral < MIN_INTEGRAL) {
      flag = false
    }
    if(this.state.integral > MAX_INTEGRAL) {
      flag = false
    }
    if(!this.state.bankCard) {
      flag = false
    }
    if(!this.state.smsCode) {
      flag = false
    }
    if(!this.state.agreementFlag) {
      flag = false
    }

    this.setState({pass: flag})
  }

  handleSubmit = e => {
    util.paymentConfirm({
      title: '赎回',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}
        this.doSubmit(inputElem.value)
      }
    })
  }

  doSubmit = async(pswd) => {
    const loading = weui.loading('处理中')
    const params = {
      amount: this.state.integral,

      bankCode: this.state.bankCode,
      bankName: this.state.bankName,
      cardHoldName: this.state.cardHoldName,
      cardPhoneNo: this.state.userPhoneNo,
      bankCard: this.state.bankCard,
      code: this.state.smsCode,
      
      tradPwd: pswd,
      payment: 1
    }
    try {
      const {data} = await api.redeemIntegral(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          replace('/redeem-record')
        })
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

  // 重试交易密码
  retryTransPswd = () => {
    this.handleSubmit()
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

  resetMessageState = () => {
    this.setState({timer: 10, sendMsgCodeFlag: true})
  }

  getMsgCode = async() => {
    const loading = weui.loading('发送中')
    const params = {userPhoneNo: this.state.phone, codeType: 3}   
    const {data} = await api.getCode(params)
    if(data.status === 200) {
      this.setState({sendMsgCodeFlag: false}, () => {
        this.countDown()
      })
      weui.alert(data.msg)
    }else {
      weui.alert(data.msg)
    }
    loading.hide()
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
      sendMsgCodeFlag
    } = this.state

    const placeholder = `最多可赎回${this.state.availableIntegral}`

    return (
      <Page>

        <div className="u_mb_xxx">
          <div className="trigger-bar">
            <label>转入银行卡</label>
            <img className="icon" onClick={this.handleClick} src={arrowRightIcon} alt="箭头" />
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
            <PrimaryInput 
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
              <MinPrimaryInput 
                type="text"
                name="smsCode"
                value={this.state.smsCode} 
                onChange={this.handleChange} 
                placeholder="请输入短信验证码"
              />
            </div>
            <div className="group__foot">
              <SendMessageBtn flag={sendMsgCodeFlag} timer={this.state.timer} handleClick={this.getMsgCode} />
            </div>  
          </div>
        </div> 

        <div className="u_mb_xxx">
          <div className="small-text flex-y-center" onClick={this.handleToggle}>
            <Agreement agreementFlag={agreementFlag} />
            同意用户<Link to="/redeen-agreement" style={{color: '#007AFF'}}>《赎回规则协议》</Link>
          </div>
        </div>

        <SubmitBtn pass={pass} handleSubmit={this.handleSubmit} />
        
        <Backhome />
      </Page>
    )
  }
}

export default Redeem