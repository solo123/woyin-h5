import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'
import {Link} from 'react-router-dom'

import api from '../api'
import util from '../util'

import Backhome from '../common/Backhome'

import jsIcon from '../asset/images/bank/js.svg'
import zsIcon from '../asset/images/bank/zs.svg'
import gsIcon from '../asset/images/bank/gs.svg'

import arrowRightIcon from '../asset/images/icon/arrow_right.svg'
import checkedIcon from '../asset/images/icon/checked.png'
import uncheckedIcon from '../asset/images/icon/unchecked.svg'




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


const LayoutPrimaryBox = styled.div`
  margin-bottom: 15px;
`
const LayoutSecondaryBox = styled.div`
  margin-bottom: 5px;
`
const LayoutGroup = styled.div`
  display: flex;
  align-items: center;
`
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  margin-left: 10px;
`

const StyledCheckedIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`
const StyledBg = styled.div`
  padding: 15px;
  background: #fff;
`
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`
const StyledCard = styled.div`
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
const StyledSmallText = styled.div`
  color: #888;
  font-size: 12px;
`
const StyledNoBankcard = styled.div`
  color: #888;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
const StyledInputBox = styled.div`
  padding: 15px;
  line-height: 1;
  background: #f4f4f4;
`

const MIN_INTEGRAL = 100
const MAX_INTEGRAL = 5000000

const bankcardLogoSchema = {
  '001': jsIcon,
  '002': zsIcon,
  '003': gsIcon
}

const BankCard = ({logo, bankcardNo, bankcardName}) => {
  return (
    <StyledCard>
      <div className="aside">
        <img className="icon" src={logo} alt=""/>
      </div>
      <div className="main" style={{marginLeft: 15}}>
        <p className="title">{bankcardName}(尾号<span className="card">{util.getBankcardLastNum(bankcardNo)}</span>)</p>
        <p className="text">预计下一工作日到账，实际以银行到账日为准</p>
      </div>
    </StyledCard>
  )
}

const CurrBankcard = ({hasBankcard, bankcardLogo, bankcardNo, bankcardName}) => {
  if(hasBankcard) {
    return <BankCard logo={bankcardLogo} bankcardNo={bankcardNo} bankcardName={bankcardName} />
  }
  return <StyledNoBankcard>暂无可用银行卡</StyledNoBankcard>
}

const LoadingBankcard = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: 50, height: 50, background: '#eaeaea'}}></div>
      <div style={{flex: 1, marginLeft: 15}}>
        <div style={{width: '50%', height: 20, background: '#eaeaea', marginBottom: 10}}></div>
        <div style={{height: 20, background: '#eaeaea'}}></div>
      </div>
    </div>
  )
}

let sendMsgFlag = false

const SendMessageBtn = ({flag, timer, handleClick}) => {
  if(flag) {
    return <MiniPrimaryBtn onClick={handleClick}>获取验证码</MiniPrimaryBtn>
  }
  return <DisableMiniPrimaryBtn>{timer}秒后重发</DisableMiniPrimaryBtn>
}

class Redeem extends Component {
  state = {
    integral: '',


    smsCode: '',

    pass: false,
    loading: true,
    hasBankcard: false,
    agreementBool: true,
    bankcardList: [],
    bankcardNo: '',
    bankcardName: '',
    bankcardLogo: '',

    timer: 10,
    sendMsgCodeFlag: true,
    phone: '15014095291',
    redeemFee: 0,
    actualReceived: 0,
    deductIntegral: 0
  }

  componentDidMount() {
    api.getBankcardList()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({bankcardList: data.items}, () => {
            const firstBankcard = data.items[0]
            if(firstBankcard) {
              this.setCurrBankcard(firstBankcard.bankcardNo, firstBankcard.bankcardName, firstBankcard.bankcardClass)
            }
          })
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  setCurrBankcard = (bankcardNo, bankcardName, bankcardClass) =>  {
    this.setState({bankcardNo, bankcardName, bankcardLogo: bankcardLogoSchema[bankcardClass]}, () => {
      this.setState({hasBankcard: true})
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
          this.setCurrBankcard(result[0].bankcardNo, result[0].bankcardName, result[0].bankcardClass)
        }
      }
    })
  }

  handleToggle = e => {
    this.setState({agreementBool: !this.state.agreementBool}, () => {
      this.updateSubmitBtnStatus()
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateSubmitBtnStatus()
    })
  }

  handleBlur = e => {
    api.getRedeemFee(this.state.integral)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.updateFee(data)
        }
      })
  }

  updateFee = ({redeemFee, actualReceived, deductIntegral}) => {
    this.setState({
      redeemFee,
      actualReceived,
      deductIntegral
    })
  }

  updateSubmitBtnStatus = () => {
    let flag = true

    if(this.state.integral < MIN_INTEGRAL) {
      flag = false
    }
    if(this.state.integral > MAX_INTEGRAL) {
      flag = false
    }
    if(!this.state.bankcardNo) {
      flag = false
    }
    if(!this.state.smsCode) {
      flag = false
    }
    if(!this.state.agreementBool) {
      flag = false
    }

    this.setState({pass: flag})
  }

  handleSubmit = e => {
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

  getMsgCode = () => {
    const loading = weui.loading('发送中')
    sendMsgFlag = true
    api.sendMsgCode(this.state.phone)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({sendMsgCodeFlag: false}, () => {
            this.countDown()
          })
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
        sendMsgFlag = false
      })
  }

  render() {
    const {
      pass, 
      loading, 
      agreementBool, 
      hasBankcard, 
      bankcardNo, 
      bankcardName, 
      bankcardLogo,
      sendMsgCodeFlag
    } = this.state

    return (
      <StyledBg>

        <LayoutPrimaryBox>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <label>转入银行卡</label>
            </div>
            <div>
              <StyledIcon onClick={this.handleClick} src={arrowRightIcon} alt="" />
            </div>
          </div>
        </LayoutPrimaryBox>

        <LayoutPrimaryBox>
          {loading ? <LoadingBankcard /> : <CurrBankcard hasBankcard={hasBankcard} bankcardLogo={bankcardLogo} bankcardNo={bankcardNo} bankcardName={bankcardName}/>}
        </LayoutPrimaryBox>

        <LayoutSecondaryBox>
          <StyledInputBox>
            <PrimaryInput 
              type="text"
              name="integral"
              value={this.state.integral} 
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="最多可赎回892积分"
            />
          </StyledInputBox>
        </LayoutSecondaryBox>

        <LayoutPrimaryBox>
          <StyledSmallText>
            <p>实际扣除{this.state.deductIntegral}积分</p>
            <p>实际到账{this.state.actualReceived}元(手续费{this.state.redeemFee}积分，100积分等于1元)</p>
          </StyledSmallText>
        </LayoutPrimaryBox>

        <LayoutPrimaryBox>
          <LayoutGroup>
            <LayoutBody>
              <div style={{lineHeight: 1}}>
                <MinPrimaryInput 
                  type="text"
                  name="smsCode"
                  value={this.state.smsCode} 
                  onChange={this.handleChange} 
                  placeholder="请输入短信验证码"
                />
              </div>
            </LayoutBody>
            <LayoutFoot>
              <SendMessageBtn flag={sendMsgCodeFlag} timer={this.state.timer} handleClick={this.getMsgCode} />
            </LayoutFoot>  
          </LayoutGroup>
        </LayoutPrimaryBox> 

        <LayoutPrimaryBox>
          <StyledSmallText 
            onClick={this.handleToggle}
            style={{display: 'flex', alignItems: 'center'}}>
            {agreementBool
              ? <StyledCheckedIcon src={checkedIcon} />
              : <StyledCheckedIcon src={uncheckedIcon} />
            }
            同意用户<Link to="/redeen-agreement" style={{color: '#007AFF'}}>《赎回规则协议》</Link>
          </StyledSmallText>
        </LayoutPrimaryBox>

        {pass
          ? <PrimaryButton onClick={this.handleSubmit}>确认赎回</PrimaryButton>
          : <DisablePrimaryButton>确认赎回</DisablePrimaryButton>}
        
        <Backhome />
      </StyledBg>
    )
  }
}

export default Redeem