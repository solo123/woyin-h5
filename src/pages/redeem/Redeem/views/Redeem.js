import React, {Component} from 'react'
import {connect} from 'react-redux'
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

function filterBankCard(items, id) {
  const result = items.filter((item) => item.id === id)
  return result && result.length && result[0]
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

const Bankcard = ({data}) => {
  return (
    <div className="bankcard">
      <div className="aside">
        <img className="icon" src={util.getBankCardLogo(data.bankCode)} alt=""/>
      </div>
      <div className="main" style={{marginLeft: 15}}>
        <p className="name">{data.bankName}(尾号<span className="card">{util.getBankcardLastNum(data.bankCard)}</span>)</p>
        <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
      </div>
    </div>
  )
}

const BankcardBox = ({loading, hasCard, data}) => {
  if(loading) {
    return <BankcardLoading/>
  }
  if(hasCard) {
    return <Bankcard data={data}/>
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
      id: '',

      agreementFlag: true,
      showAgreement: false,

      loading: true,
      hasCard: false,
      cardList: [],

      code: '',
      getCodeFlag: true,
      interval: config.redeem.INTERVAL,

      redeemFee: 0,
      actualReceived: 0,
      deductIntegral: 0,

      integral: 0,
      availableIntegral: 0,      
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

  handleBlur(e) {
    this.loadRedeemFee()
  }
  
  handleGetCode() {
    this.loadCode()
  }

  handleClick(e) {
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

  handleChange(e) {
    const name = e.target.name
    const value = name === 'integral' ? Number(e.target.value) : e.target.value    
    this.setState({[name]: value})
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
    if(!this.state.hasCard) {
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

        const card = filterBankCard(this.state.cardList, this.state.id)
        const params = {
          bankCode: card.bankCode,
          bankName: card.bankName,
          cardHoldName: card.cardHoldName,
          cardPhoneNo: card.userPhoneNo,
          bankCard: card.bankCard,

          amount: this.state.integral,
          code: this.state.code,
          tradPwd: inputElem.value
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {
      id,
      loading, 
      agreementFlag, 
      hasCard, 
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
            hasCard={hasCard} 
            data={filterBankCard(this.state.cardList, id)}
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

const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Redeem)