import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import api from '../api'
import util from '../util'

import emptySrc from '../asset/images/empty.png'

/*
 |--------------------------------------------------------------------------
 | button
 |--------------------------------------------------------------------------
 */
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
/*
 |--------------------------------------------------------------------------
 | input
 |--------------------------------------------------------------------------
 */
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
const BigPrimaryInput = styled(Input)`
  color: #444;
  font-size: 16px;
  font-weight: bold;
  font-family: industry;
`

const StyledNav = styled.ul`
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  li{
    position: relative;
    height: 60px;
    line-height: 60px;
    flex: 1;
    text-align: center;
    &.active{
      font-size: 16px;
      font-weight: bold;
      &:after{
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%);
        content: '';
        display: block;
        height: 5px;
        border-radius: 5px;
        width: 20px;
        background: #e1c38c;
      }
    }
  }
`

const StyledMain = styled.div`
  background: #fff;
`
const StyledBox = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
`
const StyledInputBox = styled.div`
  padding: 20px 15px;
`

const LayoutItem = styled.div`
  width: 33.33%;
  padding: 5px;
`
const StyledItem = styled.div`
  font-family: industry;
  padding: 10px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #eaeaea;
  &.active{
    color: #fff;
    background: #e1c38c;
    border-color: #c89850;
    .integral{
      color: #fff;
    }
  }
  .money{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .integral{
    color: #555;
    font-size: 12px;
  }
`
const LayoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
`
const StyledEmpty = styled.div`
  color: #888;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
  }
`

const Item = ({id, selectId, money, integral, clickHandle}) => {
  return (
    <LayoutItem>
      <StyledItem 
        className={classnames({'active': id === selectId})}
        onClick={() => clickHandle(id)}>
        <div className="money">{money}M</div>
        <div className="integral">{integral}积分</div>
      </StyledItem>
    </LayoutItem>
  )
}

const CMCC = '1'
const CUCC = '2'
const CTCC = '3'

class RechargeFlow extends Component {
  constructor(props) {
    super(props)

    this.reset = this.reset.bind(this)
    this.checkTransPswd = this.checkTransPswd.bind(this)
    this.retryPaymentPswd = this.retryPaymentPswd.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loadProdcuts = this.loadProdcuts.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateButtonStatus = this.updateButtonStatus.bind(this)

    this.state = {
      type: CMCC,
      phone: '',
      selectId: '',
      items: [],
      pass: false,
      loading: false
    }
  }

  componentDidMount() {
    this.loadProdcuts(this.state.type)
  }

  handleChange(e) {
    this.setState({phone: e.target.value}, () => {
      this.updateButtonStatus()
    })
  }

  handleSubmit(e) {
    util.paymentConfirm({
      title: '充值',
      subtitle: '壹企服',
      amount: 3000,
      useable: 5000000,
      callback: (e, inputElem) => {
        if(!inputElem.value) {
          return false
        }
        this.checkTransPswd()
      }
    })
  }

  checkTransPswd() {
    const loading = weui.loading('处理中')
    api.confirmTransPswd()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.submitRecharge()
        }else if(data.code === '2'){
          weui.confirm(data.msg, () => {
            this.retryPaymentPswd()
          })
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
      .catch(err => {
      })
  }

  submitRecharge() {
    const loading = weui.loading('处理中')
    api.rechargeFlow(this.state.selectId, this.state.phone)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          weui.alert(data.msg)
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
      .catch(err => {
      })
  }

  // 重试交易密码
  retryPaymentPswd() {
    this.handleSubmit()
  }

  loadProdcuts(type) {
    this.setState({loading: true})
    api.getRechargeFlowProductsByType(type)
      .then(res => {
        const {data} = res
        this.setState({items: data, loading: false})
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  updateButtonStatus() {
    if(this.state.phone && this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  reset() {
    this.setState({selectId: ''}, () => {
      this.updateButtonStatus()
    })
  }

  handleSwitch(e) {
    const type = e.currentTarget.getAttribute('data-type')
    this.reset()
    this.setState({type}, () => {
      this.loadProdcuts(type)
    })
  }

  selectProduct(selectId) {
    this.setState({selectId}, () => {
      this.updateButtonStatus()
    })
  }

  render() {
    const {selectId, type, items, loading, pass} = this.state

    const list = items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        selectId={selectId}
        money={item.money}
        integral={item.integral}
        clickHandle={this.selectProduct}
      />
    ))

    return (
      <div>
        <StyledNav>
          <li className={classnames({'active': type === CMCC })} onClick={this.handleSwitch} data-type={CMCC}>中国移动</li>
          <li className={classnames({'active': type === CUCC })} onClick={this.handleSwitch} data-type={CUCC}>中国联通</li>
          <li className={classnames({'active': type === CTCC })} onClick={this.handleSwitch} data-type={CTCC}>中国电信</li>
        </StyledNav>
        <StyledMain>
          <StyledInputBox>
            <StyledBox>
              <BigPrimaryInput 
                type="text" 
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="请输入手机号码" 
                autoComplete="off"
              />
            </StyledBox>
          </StyledInputBox>
          <h2 className="u_m_xx">请选择面值</h2>
          {loading
            ? <SkeletonPlaceholder /> 
            : (list.length ? <LayoutItems>{list}</LayoutItems> : <EmptyArrayPlaceholder />)}
          <div className="u_p_xxx">
            {pass
              ? <PrimaryButton onClick={this.handleSubmit}>立即充值</PrimaryButton>
              : <DisablePrimaryButton>立即充值</DisablePrimaryButton>
            }
          </div>
        </StyledMain>
      </div>
    )
  }
}

export default RechargeFlow