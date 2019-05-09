import React, {Component} from 'react'
import {connect} from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import config from '@/config'
import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getBankcardList, redeemIntegral, getRedeemFee, getCodeForWithdraw} from '@/api'

import Backhome from '@/components/Backhome'
import FullLayer from '@/components/FullLayer'
import BankCard from './BankCard'
import Page from './styled'

import moreIcon from '@/asset/images/icon/more.png'
import checkedIcon from '@/asset/images/icon/checked.png'
import uncheckedIcon from '@/asset/images/icon/unchecked.svg'

function filterBankCard(items, id) {
  const result = items.filter((item) => item.id === id)
  return result && result.length && result[0]
}

const SendMessageBtn = ({flag, interval, handleClick}) => {
  if(flag) {
    return <button className="btn btn-secondary btn-mini" onClick={handleClick}>获取验证码</button>
  }
  return <button className="btn btn-secondary btn-mini disable">{interval}秒后重发</button>
}

const Agreement = ({agreementFlag}) => {
  return <img className="checkbox" src={agreementFlag ? checkedIcon : uncheckedIcon} alt="" />
}

const CancelToken = axios.CancelToken

class Redeem extends Component {
  constructor(props) {
    super(props)

    this.handleGetCode = this.handleGetCode.bind(this)
    this.handleOpenPicker = this.handleOpenPicker.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleToggleAgreement = this.handleToggleAgreement.bind(this)

    this.state = {
      id: '',

      agreementFlag: true,
      showAgreement: false,

      loading: true,
      hasCard: false,
      cardList: [],

      code: '',
      getCodeFlag: true,
      interval: config.redeem.INTERVAL,

      poundage: 0,
      money: 0,
      totalAmount: 0,

      integral: 0,
      availableIntegral: 0,      
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadCardList()
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
        this.setState({
          availableIntegral: Number(account.balance)
        })
      }
    }finally {
    }
  }

  async loadCardList() {
    this.loadCardListSource = CancelToken.source()
    try {
      const {data} = await getBankcardList(null, {cancelToken: this.loadCardListSource.token})
      if(data.status === 200) {
        const cardList = util.filterDepositCardList(data.data)
        this.setState({cardList}, () => {
          const card = cardList[0]
          if(!card) {return}
          this.setState({id: card.id}, () => {
            this.setState({hasCard: true})
          })
        })
      }
    }finally {
      this.setState({loading: false})
    }
  }

  async loadRedeemFee(params) {
    try {
      const {data} = await getRedeemFee(params)
      if(data.status === 200) {
        this.updateFee(data.data)
      }
    }finally {
    }
  }

  async loadCode() {
    const loading = weui.loading('处理中')
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

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await redeemIntegral(params)
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
    this.setState({interval: config.redeem.INTERVAL, getCodeFlag: true})
  }

  updateFee({poundage, money, totalAmount}) {
    this.setState({
      poundage: poundage,
      money: money,
      totalAmount: totalAmount
    })
  }

  handleOpenPicker(e) {
    if(!this.state.cardList.length) {
      weui.alert('暂无可用')
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

  handleToggle() {
    this.setState({agreementFlag: !this.state.agreementFlag})
  }

  handleToggleAgreement(e) {
    e.stopPropagation()
    this.setState({showAgreement: !this.state.showAgreement})
  }

  handleBlur(e) {
    if(this.state.integral >= config.redeem.MIN_INTEGRAL) {
      const params = {
        amount: this.state.integral || 0
      }
      this.loadRedeemFee(params)
    }else {
      this.setState({
        poundage: 0,
        money: 0,
        totalAmount: 0
      })
    }
  }
  
  handleGetCode() {
    this.loadCode()
  }

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value    
    this.setState({[name]: value})
  }

  verify() {
    if(!this.state.hasCard) {
      weui.alert('暂无可用银行卡')
      return
    }    
    if(!this.state.integral) {
      weui.alert('请输入积分')
      return
    }    
    if(this.state.integral < config.redeem.MIN_INTEGRAL) {
      weui.alert(`代卖积分不能少于${config.redeem.MIN_INTEGRAL}`)
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
    if(!this.state.code) {
      weui.alert('请输入短信码')
      return
    }
    if(!this.state.agreementFlag) {
      weui.alert('请勾选积分代卖协议')
      return
    }
    return true
  }

  handleSubmit(e) {
    if(!this.verify()) {
      return
    }

    util.paymentConfirm({
      title: '积分代卖',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, input) => {
        if(!input.value.trim()) {return false}

        const card = filterBankCard(this.state.cardList, this.state.id)
        const params = {
          bankCode: card.bankCode,
          bankName: card.bankName,
          cardHoldName: card.cardHoldName,
          cardPhoneNo: card.userPhoneNo,
          bankCard: card.bankCard,

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
      loading, 
      cardList,
      agreementFlag, 
      hasCard, 
      getCodeFlag
    } = this.state
    const integral = this.state.integral || ''
    const placeholder = `最多可代卖${this.state.availableIntegral}积分（不得少于${config.redeem.MIN_INTEGRAL}）`

    return (
      <Page>
        <Helmet title="积分代卖"/>

        <div className="u_mb_xxx">
          <div className="trigger-bar">
            <label>选择银行卡</label>
            <img className="icon" onClick={this.handleOpenPicker} src={moreIcon} alt="箭头" />
          </div>
        </div>

        <div className="u_mb_xxx">
          <BankCard loading={loading} hasCard={hasCard} data={filterBankCard(cardList, id)}/>
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
            <p>扣除{this.state.totalAmount}积分</p>
            <p>实际到账{this.state.money}元(手续费{this.state.poundage}积分，100积分等于1元)</p>
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
                placeholder="请输入短信码"
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
            同意用户 <span onClick={this.handleToggleAgreement} style={{color: '#007AFF'}}>《积分代卖规则协议》</span>
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

const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Redeem)