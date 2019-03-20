import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'

import api from '../api'
import util from '../util'

import moreIcon from '../asset/images/icon/more.png'
import spinner from '../asset/images/spinner.svg'
import jsIcon from '../asset/images/bank/js.svg'

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
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const DisablePrimaryButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`
const MiniPrimaryButton = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const StyledBg = styled.div`
  background: #fff;
`
const StyledBox = styled.div`
  padding: 15px;
`
const StyledPick = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 15px 0;
  border-bottom: 1px solid #eaeaea;
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
  font-weight: bold;
  text-align: center;
`
const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
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
      <StyledTitle>转入信用卡</StyledTitle>
      <StyledMore onClick={onPicker} src={moreIcon} />
    </StyledPick>
  )
}

const BankCard = ({creditCardNo, creditCardName}) => {
  return (
    <StyledCard>
      <div className="aside">
        <img className="icon" src={jsIcon} alt=""/>
      </div>
      <div className="main">
        <p className="title">{creditCardName}(尾号<span className="card">{util.getBankCardLastNum(creditCardNo)}</span>)</p>
        <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
      </div>
    </StyledCard>
  )
}

class CreditCard extends Component {
  constructor(props) {
    super(props)

    this.openPicker =  this.openPicker.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.retryTransPswd = this.retryTransPswd.bind(this)
    this.checkTransPswd = this.checkTransPswd.bind(this)
    this.creditCardRepayment = this.creditCardRepayment.bind(this)
    this.updateSubmitBtnStatus = this.updateSubmitBtnStatus.bind(this)

    this.state = {
      pass: false,
      loading: true,
      hasCreditCard: false,
      creditCardNo: '',
      creditCardName: '',
      creditCardList: [],

      money: '1000'
    }
  }

  componentDidMount() {
    api.getCreditCardList()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({creditCardList: data.items}, () => {
            const firstCreditCard = data.items[0]
            if(firstCreditCard) {
              this.setCurrCreditCard(firstCreditCard.creditCardNo, firstCreditCard.creditCardName)
            }
          })
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  setCurrCreditCard(creditCardNo, creditCardName) {
    this.setState({creditCardNo, creditCardName, hasCreditCard: true}, () => {
      this.updateSubmitBtnStatus()
    })
  }
  
  openPicker() {
    if(!this.state.creditCardList.length) {
      weui.alert('暂无可用信用卡')
      return false
    }
    weui.picker(util.parseCreditCardList(this.state.creditCardList), {
      defaultValue: [0],
      onConfirm: result => {
        if(result && result[0]){
          this.setCurrCreditCard(result[0].creditCardNo, result[0].creditCardName)
        }
      }
    })
  }

  updateSubmitBtnStatus() {
    if(this.state.money && this.state.hasCreditCard) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  handleChange(e) {
    this.setState({money: e.target.value}, () => {
      this.updateSubmitBtnStatus()
    })
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  creditCardRepayment() {
    const loading = weui.loading('发起还款请求')
    api.creditCardRepayment({
      money: this.state.money,
      creditCardNo: this.state.creditCardNo
      })
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          weui.alert(data.msg)
        }else {
          alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
  }

  checkTransPswd(pswd) {
    const loading = weui.loading('校验交易密码')
    api.confirmTransPswd(pswd)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          // 密码通过
          this.creditCardRepayment()
        }else if(data.code === '0') {
          // 密码错误
          weui.confirm(data.msg, () => {
            this.retryTransPswd()
          })
        }else {
          // 其他
          alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
  }

  handleSubmit() {
    util.paymentConfirm({
      callback: (e, input) => {
        if(!input.value.trim()) {
          alert('请输入交易密码')
          return false
        }
        this.checkTransPswd(input.value)
      }
    })
  }

  render() {
    return (
      <StyledBg>
        <StyledBox>
          <CreditCardPick onPicker={this.openPicker} />
        </StyledBox>

        {this.state.loading
          ? (
              <LoadingSpinner src={spinner}>加载中...</LoadingSpinner>
            )
          : (
            this.state.hasCreditCard
              ? <div className="u_px_xxx"><BankCard creditCardNo={this.state.creditCardNo} creditCardName={this.state.creditCardName} /></div>
              : <div className="u_px_xxx"><StyledNoBankCard>暂无可用银行卡</StyledNoBankCard></div>
          )
        }

        <div className="u_p_xxx">
          <PrimaryInput value={this.state.money} onChange={this.handleChange} placeholder="最多可还款1000元" />
        </div>

        <StyledInfo className="u_px_xxx">
          <div>可用积分：335</div>
          <div>还款100元，需要支付10000积分</div>
          <div>手续费100积分（1元等于100积分）</div>
        </StyledInfo>

        <div className="u_p_xxx">
        {this.state.pass
          ? <PrimaryButton onClick={this.handleSubmit}>立即还款</PrimaryButton>
          : <DisablePrimaryButton>立即还款</DisablePrimaryButton>
        }
        </div>

      </StyledBg>
    )
  }
}

export default CreditCard