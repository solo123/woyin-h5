import React, {Component} from 'react'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import config from '@/config'
import {getUserInfo, getBankcardList, redeemIntegral, getRedeemFee, getCodeForWithdraw} from '@/api'
import util from '@/util'

import Backhome from '@/components/Backhome'
import FullLayer from '@/components/FullLayer'
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
    this.handleToggleAgreement = this.handleToggleAgreement.bind(this)

    this.state = {
      integral: 0,
      availableIntegral: 0,

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
      deductIntegral: 0,

      showAgreement: false
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
          availableIntegral: Number(data.data[0].balance)
        })
      }
    }finally {
    }
  }

  async loadCardList() {
    try {
      const {data} = await getBankcardList()
      if(data.status === 200) {
        const cardList = util.filterBankCardByStatusAndType(data.data, 1, 1)
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

  async loadRedeemFee() {
    try {
      const {data} = await getRedeemFee(this.state.integral || 0)
      if(data.status === 200) {
        this.updateFee(data.data)
      }
    }finally {
    }
  }

  async loadCode() {
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

  async doSubmit(params) {
    const loading = weui.loading('处理中')
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

  verify() {
    if(this.state.integral < config.redeem.MIN_INTEGRAL) {
      weui.alert(`最少输入${config.redeem.MIN_INTEGRAL}积分`)
      return
    }
    if(this.state.integral > config.redeem.MAX_INTEGRAL) {
      weui.alert(`最多输入${config.redeem.MAX_INTEGRAL}积分`)
      return
    }
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert(`可用积分不足`)
      return
    }
    if(!this.state.bankCard) {
      weui.alert('暂无可用银行卡')
      return
    }
    if(!this.state.code) {
      weui.alert('请输入短信码')
      return
    }
    if(!this.state.agreementFlag) {
      weui.alert('请勾选代卖协议')
      return
    }
    return true
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
        this.setState({hasBankcard: true})
    })
  }

  handleBlur(e) {
    this.loadRedeemFee()
  }
  
  handleGetCode() {
    this.loadCode()
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
    this.setState({agreementFlag: !this.state.agreementFlag})
  }

  handleToggleAgreement() {
    this.setState({showAgreement: !this.state.showAgreement})
  }

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value    
    this.setState({[name]: value})
  }

  handleSubmit(e) {
    if(!this.verify()) {
      return
    }
    util.paymentConfirm({
      title: '代卖',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}

        const params = {
          amount: this.state.integral,
          bankCode: this.state.bankCode,
          bankName: this.state.bankName,
          cardHoldName: this.state.cardHoldName,
          cardPhoneNo: this.state.userPhoneNo,
          bankCard: this.state.bankCard,
          code: this.state.code,
          tradPwd: inputElem.value
        }        
        this.doSubmit(inputElem.value)
      }
    })
  }

  render() {
    const {
      loading, 
      agreementFlag, 
      hasBankcard, 
      bankCard, 
      bankName, 
      bankcardLogo,
      getCodeFlag
    } = this.state
    const integral = this.state.integral || ''
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
              value={integral} 
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
            同意用户 <span onClick={this.handleToggleAgreement} style={{color: '#007AFF'}}>《代卖规则协议》</span>
          </div>
        </div>

        <button className="btn btn-secondary" onClick={this.handleSubmit}>确认代卖</button>
        
        <FullLayer show={this.state.showAgreement} handleClose={this.handleToggleAgreement} close>
          <div style={{padding: '15px 15px 70px 15px'}}>
            <ol className="protocol">
              <li>
                积分赎回到帐时间为：
                <table>
                  <tbody>
                    <tr>
                      <th>9：00前订单</th>
                      <td>10：30处理</td>
                    </tr>
                    <tr>
                      <th>14：00前订单</th>
                      <td>14：30处理</td>
                    </tr>
                    <tr>
                      <th>17：00前订单</th>
                      <td>17：30处理</td>
                    </tr>
                  </tbody>
                </table>
                <div className="sub-text">（节假及周六日顺延，具体到帐时间以银行到帐时间为准）</div>
              </li>
              <li>每人每次赎回最低积分：100积分</li>
              <li>每人每天赎回最高积分：5000000积分</li>
              <li>每人每天最多赎回3次</li>
            </ol>
          </div>
          <div className="fixed-bottom">
            <div className="u_m_xxx">
              <button className="btn btn-secondary" onClick={this.handleToggleAgreement}>关闭</button>
            </div>
          </div>          
        </FullLayer>

        <Backhome />
      </Page>
    )
  }
}

export default Redeem