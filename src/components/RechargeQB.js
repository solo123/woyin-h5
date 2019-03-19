import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
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
const MiniPrimaryButton = styled(Button)`
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
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
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 14px;
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

const EmptyPlaceholder = () => (
  <StyledEmpty>
    <img src={emptySrc} alt=""/>
    <div>暂无数据</div>
  </StyledEmpty>
)

const Item = ({id, selectId, money, integral, clickHandle}) => {
  return (
    <LayoutItem>
      <StyledItem 
        className={classnames({'active': id === selectId})}
        onClick={() => clickHandle(id)}>
        <div className="money">{money}个</div>
        <div className="integral">{integral}积分</div>
      </StyledItem>
    </LayoutItem>
  )
}

class RechargeQB extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.loadProdcuts = this.loadProdcuts.bind(this)
    this.selectProduct = this.selectProduct.bind(this)

    this.nextStep = this.nextStep.bind(this)
    this.submitRecharge = this.submitRecharge.bind(this)
    this.retryPaymentPswd = this.retryPaymentPswd.bind(this)

    this.state = {
      loading: false,
      items: [],
      pass: false,
      qq: '',
      selectId: ''
    }
  }

  componentDidMount() {
    this.loadProdcuts()
  }

  loadProdcuts() {
    this.setState({loading: true})
    api.getRechargeQBProductsByType()
      .then(res => {
        const {data} = res
        this.setState({items: data, loading: false})
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  handleChange(e) {
    this.setState({qq: e.target.value}, () => {
      this.updateButtonStatus()
    })
  }

  selectProduct(selectId) {
    this.setState({selectId}, () => {
      this.updateButtonStatus()
    })
  }

  updateButtonStatus() {
    if(this.state.qq && this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  handleSubmit() {
    util.paymentConfirm({
      title: '充值',
      subtitle: '壹企服',
      amount: 3000,
      useable: 5000000,
      callback: (e, inputElem) => {
        if(!inputElem.value) {
          return false
        }
        this.nextStep()
      }
    })
  }

  nextStep() {
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

  // 重试交易密码
  retryPaymentPswd() {
    this.handleSubmit()
  }
  
  submitRecharge() {
    const loading = weui.loading('处理中')
    api.rechargeQB(this.state.selectId, this.state.qq)
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
        <StyledMain>
          <StyledInputBox>
            <StyledBox>
              <BigPrimaryInput 
                type="text" 
                value={this.state.qq}
                onChange={this.handleChange} 
                placeholder="请输入QQ号码" 
                autoComplete="off"
              />
            </StyledBox>
          </StyledInputBox>
          <h2 className="u_mx_xxx u_my_x">请选择面值</h2>
          {loading
              ? <SkeletonPlaceholder /> 
              : (list.length ? <LayoutItems>{list}</LayoutItems> : <EmptyPlaceholder />)}
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

export default RechargeQB