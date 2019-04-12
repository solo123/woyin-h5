import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'
import axios from 'axios'

import api, {getBankcardList, paymentToCard, getWithdrawFee, getCodeForWithdraw} from '../../../api'
import util from '../../../util'
import {replace} from '../../../services/redirect'
import config from '../../../config'
import Backhome from '../../../common/Backhome'

import moreIcon from '../../../asset/images/icon/more.png'
import spinner from '../../../asset/images/spinner.svg'

import fzIcon from '../../../asset/images/bank/fz.svg'
import gdIcon from '../../../asset/images/bank/gd.svg'
import gsIcon from '../../../asset/images/bank/gs.svg'
import hxIcon from '../../../asset/images/bank/hx.svg'
import jsIcon from '../../../asset/images/bank/js.svg'
import jtIcon from '../../../asset/images/bank/jt.svg'
import msIcon from '../../../asset/images/bank/ms.svg'
import nyIcon from '../../../asset/images/bank/ny.svg'
import paIcon from '../../../asset/images/bank/pa.svg'
import shIcon from '../../../asset/images/bank/sh.svg'
import shfzIcon from '../../../asset/images/bank/shfz.svg'
import xyIcon from '../../../asset/images/bank/xy.svg'
import yzIcon from '../../../asset/images/bank/yz.svg'
import zgIcon from '../../../asset/images/bank/zg.svg'
import zsIcon from '../../../asset/images/bank/zs.svg'
import zxIcon from '../../../asset/images/bank/zx.svg'
import defaultIcon from '../../../asset/images/bank/default.svg'

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
  font-weight: bold;
  font-family: industry;
`
const MinPrimaryInput = styled(Input)`
  font-family: industry;
  font-size: 14px;
`
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

const StyledBox = styled.div`
  padding: 15px 15px 0 15px;
`
const StyledPick = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 0 15px 0;
  &:after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    transform: scaleY(.3);
    background: #eaeaea;    
  }
`
const StyledTitle = styled.div`
  font-size: 14px;
`
const StyledMore = styled.img`
  width: 25px;
  height: 25px;
`
const StyledNoBankCard = styled.div`
  color: #888;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  text-align: center;
`
const StyledCard = styled.div`
  display: flex;
  .icon{
    width: 40px;
    height: 40px;
    display: block;
  }
  .card{
    font-family: industry;
  }
  .main{
    flex: 1;
    margin-left: 10px;
    p{
      margin: 0;
    }
    .title{
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
`
const StyledInfo = styled.div`
  color: #888;
  font-size: 12px;
`

const Page = styled.div`
  background: #fff;
  .input-box{
    padding: 15px;
    background: #f4f4f4;    
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
`

const LoadingSpinner = ({src, children}) => {
  const StyledSpinner = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    img{
      width: 70px;
      height: 70px;
      border-radius: 3px;
    }
  `
  return (
    <StyledSpinner>
      <img src={src} alt=""/>
      {children}
    </StyledSpinner>
  )
}

const CreditCardPick = function({onPicker}) {
  return (
    <StyledPick>
      <StyledTitle>选择信用卡</StyledTitle>
      <StyledMore onClick={onPicker} src={moreIcon} />
    </StyledPick>
  )
}

const BankCard = ({bankCard, bankName}) => {
  return (
    <StyledCard>
      <div className="aside">
        <img className="icon" src={jsIcon} alt=""/>
      </div>
      <div className="main">
        <p className="title">{bankName}(尾号<span className="card">{util.getBankcardLastNum(bankCard)}</span>)</p>
        <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
      </div>
    </StyledCard>
  )
}

const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{interval}秒后重发</DisableMiniPrimaryBtn>
}

const CancelToken = axios.CancelToken

const BANKCARD_SCHEMA = {
  jsIcon,
  zsIcon,
  gsIcon
}

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
      const {data} = await api.getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
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
        const cardList = util.filterBankCardByStatusAndType(data.data, '2', '1')
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
        weui.alert(data.msg, () => {
          replace('/credit-record')
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

  resetGetCode = () => {
    this.setState({interval: config.creditCard.INTERVAL, getCodeFlag: true})
  }

  updateBtnStatus() {
    if(this.state.integral && this.state.hasCard && this.state.smsCode) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  updateFee = ({poundage, money, totalAmount}) => {
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
        <StyledBox>
          <CreditCardPick onPicker={this.handleOpenPicker} />
        </StyledBox>

        {this.state.loading
          ? (
              <LoadingSpinner src={spinner}>加载中...</LoadingSpinner>
            )
          : (
            this.state.hasCard
              ? <div className="u_px_xxx"><BankCard bankCard={this.state.bankCard} bankName={this.state.bankName} /></div>
              : <div className="u_px_xxx"><StyledNoBankCard>暂无可用银行卡</StyledNoBankCard></div>
          )
        }

        <div className="u_p_xxx">
          <div className="input-box">
            <PrimaryInput 
              name="integral" 
              value={this.state.integral} 
              onChange={this.handleChange} 
              onBlur={this.handleBlur} 
              placeholder={`最多可使用${this.state.availableIntegral}积分`}
            />
          </div>
        </div>

        <StyledInfo className="u_px_xxx u_mb_xxx">
          <div>可用积分：{this.state.availableIntegral}</div>
          <p>扣除{this.state.deductIntegral}积分，还款{this.state.deductIntegral / 100}元</p>
          <p>手续费{this.state.redeemFee}积分，100积分等于1元</p>
        </StyledInfo>

        <div className="u_mx_xxx">
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
              <SendMessageBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode} />
            </div>  
          </div>
        </div> 

        <div className="u_p_xxx">
        {this.state.pass
          ? <PrimaryButton onClick={this.handleSubmit}>立即还款</PrimaryButton>
          : <DisablePrimaryButton>立即还款</DisablePrimaryButton>
        }
        </div>

        <Backhome />

      </Page>
    )
  }
}