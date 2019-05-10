import React, {Component} from 'react'
import {connect} from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import config from '@/config'
import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getBankcardList, paymentToCard, getWithdrawFee, getCodeForWithdraw} from '@/api'

import Backhome from '@/components/Backhome'
import Card from './Card'
import Page from './styled'

import banner from '@/asset/images/creditCard/banner.jpg'

function filterBankCard(items, id) {
  const result = items.filter((item) => item.id === id)
  return result && result.length && result[0]
}

function SendMsgBtn ({flag, interval, handleClick}) {
  if(flag) {
    return <button className="btn btn-primary btn-mini" onClick={handleClick}>获取短信码</button>
  }
  return <button className="btn btn-mini disable">{interval}秒后重发</button>
}

const CancelToken = axios.CancelToken

class CreditCard extends Component {
  constructor(props) {
    super(props)

    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleOpenPicker = this.handleOpenPicker.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      // 短信码
      code: '',
      getCodeFlag: true,
      interval: config.creditCard.INTERVAL,

      // 信用卡
      id: '',
      hasCard: false,
      cardList: [],

      // 手续费
      poundage: 0,
      actualReceived: 0,
      money: 0,

      // 积分
      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadBankCardList()
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadCardListSource && this.loadCardListSource.cancel('Operation canceled by the user.')
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

  async loadBankCardList() {
    this.loadCardListSource = CancelToken.source()
    try {
      const {data} = await getBankcardList(null, {cancelToken: this.loadCardListSource.token})
      if(data.status === 200) {
        const cardList = util.filterCreditCardList(data.data)
        this.setState({cardList: cardList}, () => {
          const card = cardList[0]
          if(!card) {return}
          this.setState({id: card.id}, () => {
            this.setState({hasCard: true})
          })
        })        
      }
    }finally {
    }
  }

  async loadCode() {
    const loading = weui.loading('发送中')
    try {
      const {data} = await getCodeForWithdraw(this.props.phone)
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

  async loadWithdrawFee(params) {
    const {data} = await getWithdrawFee(params)
    if(data.status === 200) {
      this.updateFee(data.data)
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await paymentToCard(params)
      if(data.status === 200) {
        replace('/result', {type: 'success', title: data.msg})
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
    this.setState({interval: config.creditCard.INTERVAL, getCodeFlag: true})
  }

  updateFee({poundage, totalAmount, money}) {
    this.setState({
      poundage: poundage,
      totalAmount: totalAmount,
      money: money
    })
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
          this.setState({id: result[0].id})          
        }
      }
    })
  }

  handleGetCode() {
    this.loadCode()
  }

  handleBlur(e) {
    if(this.state.integral >= config.creditCard.MIN_INTEGRAL) {
      const params = {
        amount: this.state.integral
      }
      this.loadWithdrawFee(params)
    }else {
      this.setState({
        poundage: 0,
        totalAmount: 0,
        money: 0
      })
    }
  }

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value
    this.setState({[name]: value})
  }

  verify() {
    if(!this.state.hasCard) {
      weui.alert('暂无可用的信用卡')
      return
    }
    if(!this.state.integral) {
      weui.alert('请输入积分')
      return
    }
    if(this.state.integral < config.redeem.MIN_INTEGRAL) {
      weui.alert(`使用积分不能少于${config.redeem.MIN_INTEGRAL}`)
      return
    }  
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert('积分不足')
      return
    }    
    if(!this.state.code) {
      weui.alert('请输入短信码')
      return
    }

    return true
  }
  
  handleSubmit() {
    if(!this.verify()) {
      return
    }

    util.paymentConfirm({
      title: '信用卡还款',
      amount: this.state.integral,
      useable: this.state.availableIntegral,      
      callback: (e, input) => {
        if(!input.value.trim()) {return false}

        const card = filterBankCard(this.state.cardList, this.state.id)
        const params = {
          bankCard: card.bankCard,
          bankCode: card.bankCode,
          bankName: card.bankName,
          cardHoldName: card.cardHoldName,
          cardPhoneNo: card.userPhoneNo,

          code: this.state.code,
          tradPwd: input.value,
          amount: this.state.integral
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {
      id, 
      hasCard, 
      cardList, 
      getCodeFlag
    } = this.state
    const integral = this.state.integral || ''

    return (
      <Page>
        <Helmet title="信用卡还款"/>

        <header>
          <img src={banner} alt=""/>
        </header>

        <Card 
          hasCard={hasCard} 
          handleOpenPicker={this.handleOpenPicker}
          data={filterBankCard(cardList, id)}
        />

        <div className="u_bg_white">
          <div className="u_p_xxx">
            <h2>还款</h2>
            <div className="input-box">
              <input 
                text="number"
                name="integral" 
                value={integral} 
                className="input input-primary"
                onChange={this.handleChange} 
                onBlur={this.handleBlur} 
                placeholder={`最多可使用 ${this.state.availableIntegral} 积分`}
              />
              <div className="tip">可用积分：{this.state.availableIntegral}</div>
            </div>
          </div>
        
          <div className="u_px_xxx u_pb_xxx">
            <div className="info">
              <p>扣除 {this.state.totalAmount} 积分，还款 {this.state.money} 元</p>
              <p>手续费 {this.state.poundage} 积分，100 积分等于 1 元</p>
            </div>
          </div>

          <div className="u_px_xxx u_pb_xxx">
            <div className="group">
              <div className="group__body">
                <input 
                  text="number"
                  name="code"
                  value={this.state.code} 
                  className="input input-primary"
                  onChange={this.handleChange} 
                  placeholder="请输入短信码"
                />
              </div>
              <div className="group__foot">
                <SendMsgBtn flag={getCodeFlag} interval={this.state.interval} handleClick={this.handleGetCode} />
              </div>  
            </div>
          </div> 
        </div>

        <div className="u_p_xxx">
          <button className="btn btn-primary" onClick={this.handleSubmit}>立即还款</button>
        </div>

        <Backhome />
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard)