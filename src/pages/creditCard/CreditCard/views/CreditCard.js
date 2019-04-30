import React, {Component} from 'react'
import {connect} from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import config from '@/config'
import util from '@/util'
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
      redeemFee: 0,
      actualReceived: 0,
      deductIntegral: 0,

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
        const cardList = util.filterCreditCardList(data.data)
        this.setState({cardList: cardList}, () => {
          const card = cardList[0]
          if(card) {
            this.setState({id: card.id}, () => {
              this.setState({hasCard: true})
            })
          }
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

  async loadWithdrawFee() {
    const {data} = await getWithdrawFee(this.state.integral || 0)
    if(data.status === 200) {
      this.updateFee(data.data)
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
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

  updateFee({poundage, money, totalAmount}) {
    this.setState({
      redeemFee: poundage,
      actualReceived: money,
      deductIntegral: totalAmount
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

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value
    this.setState({[name]: value})
  }

  handleGetCode() {
    this.loadCode()
  }

  handleBlur(e) {
    this.loadWithdrawFee()
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
    if(!this.state.code) {
      weui.alert('请输入短信码')
      return
    }
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert('积分不足')
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
        if(!input.value.trim()) {
          alert('请输入密码')
          return false
        }

        const card = filterBankCard(this.state.cardList, this.state.id)
        const params = {
          bankCard: card.bankCard,
          bankCode: card.bankCode,
          bankName: card.bankName,
          cardHoldName: card.cardHoldName,
          cardPhoneNo: card.userPhoneNo,

          tradPwd: input.value,
          code: this.state.code,
          amount: this.state.integral
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {id, getCodeFlag} = this.state
    const integral = this.state.integral || ''

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="信用卡还款"/>

        <header>
          <img src={banner} alt=""/>
        </header>

        <Card 
          hasCard={this.state.hasCard} 
          handleOpenPicker={this.handleOpenPicker}
          data={filterBankCard(this.state.cardList, id)}
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
              <p>扣除 {this.state.deductIntegral} 积分，还款 {this.state.deductIntegral / 100} 元</p>
              <p>手续费 {this.state.redeemFee} 积分，100 积分等于 1 元</p>
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