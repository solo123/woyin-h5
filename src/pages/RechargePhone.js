import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import api from '../api'
import util from '../util'

const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
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
        background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
      }
    }
  }
`
const StyledMain = styled.div`
  background: #fff;
`
const Input = styled.input`
  border: 0;
  width: 100%;
  outline: none;
  padding: 0;
  background: transparent;
`
const StyledInput = styled(Input)`
  font-family: industry;
  font-size: 22px;
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
    background: #8ce0ff;
    border-color: #8ce0ff;
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

const Item = ({id, selectId, money, integral, clickHandle}) => {
  return (
    <LayoutItem>
      <StyledItem 
        className={classnames({'active': id === selectId})}
        onClick={() => clickHandle(id)}>
        <div className="money">{money}元</div>
        <div className="integral">{integral}积分</div>
      </StyledItem>
    </LayoutItem>
  )
}

const CMCC = '1'
const CUCC = '2'
const CTCC = '3'

export default class extends Component {
  state = {
    pass: false,
    loading: false,
    items: [],
    phone: '',
    selectId: '',
    type: CMCC
  }

  componentDidMount() {
    this.loadProdcuts(this.state.type)
  }

  loadProdcuts = (type) => {
    this.setState({loading: true})
    api.getRechargePhoneProductsByType(type)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({items: data.items})
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  reset = () => {
    this.setState({selectId: ''}, () => {
      this.updateButtonStatus()
    })
  }

  toggleType = e => {
    const type = e.currentTarget.getAttribute('data-type')
    this.reset()
    this.setState({type}, () => {
      this.loadProdcuts(type)
    })
  }

  selectProduct = (selectId) => {
    this.setState({selectId}, () => {
      this.updateButtonStatus()
    })
  }

  handleChange = e => {
    this.setState({phone: e.target.value}, () => {
      this.updateButtonStatus()
    })
  }

  handleSubmit = () => {
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

  nextStep = e => {
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

  submitRecharge = () => {
    const loading = weui.loading('处理中')
    api.rechargePhone(this.state.selectId, this.state.phone)
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
  retryPaymentPswd = () => {
    this.handleSubmit()
  }

  updateButtonStatus = () => {
    if(this.state.phone && this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
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
          <li className={classnames({'active': type === CMCC })} onClick={this.toggleType} data-type={CMCC}>中国移动</li>
          <li className={classnames({'active': type === CUCC })} onClick={this.toggleType} data-type={CUCC}>中国联通</li>
          <li className={classnames({'active': type === CTCC })} onClick={this.toggleType} data-type={CTCC}>中国电信</li>
        </StyledNav>

        <StyledMain>
          <StyledInputBox>
            <StyledBox>
              <StyledInput 
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