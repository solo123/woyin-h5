import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import api from '../api'
import util from '../util'
import {replace} from '../services/redirect'
import ProductSkeleton from '../common/ProductSkeleton'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import Backhome from '../common/Backhome'

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
    flex: 1;
    height: 60px;
    line-height: 60px;
    text-align: center;
    &.active{
      color: #3b8afc;
      font-size: 16px;
      font-weight: bold;
      &:after{
        position: absolute;
        left: 50%;
        bottom: 15px;
        transform: translate(-50%);
        content: '';
        display: block;
        height: 2px;
        width: 60px;
        background: #3b8afc;
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

const Item = ({id, selectId, money, integral, handleClick}) => {
  return (
    <LayoutItem>
      <StyledItem 
        className={classnames({'active': id === selectId})}
        onClick={() => handleClick(id, integral)}>
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
    
    type: CMCC,
    integral: 0,
    availableIntegral: 0
  }

  componentDidMount() {
    api.getUserIntegral()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({availableIntegral: data.integral})
        }
      })
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
      this.updateBtnStatus()
    })
  }

  handleToggleType = type => {
    this.reset()
    this.setState({type}, () => {
      this.loadProdcuts(type)
    })
  }

  selectProduct = (selectId, integral) => {
    this.setState({selectId,integral}, () => {
      this.updateBtnStatus()
    })
  }

  handleChange = e => {
    this.setState({phone: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleSubmit = () => {
    util.paymentConfirm({
      title: '充值',
      subtitle: '壹企服',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {
          return false
        }
        this.checkTransPswd(inputElem.value)
      }
    })
  }

  checkTransPswd = pswd => {
    const loading = weui.loading('处理中')
    api.confirmTransPswd(pswd)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.submitRecharge()
        }else if(data.code === '2'){
          util.confirmRetry(data.msg, () => {
            this.retryTransPswd()
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
          weui.alert(data.msg, () => {
            replace('/order')
          })
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
  }

  // 重试交易密码
  retryTransPswd = () => {
    this.handleSubmit()
  }

  updateBtnStatus = () => {
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
        handleClick={this.selectProduct}
      />
    ))

    return (
      <div>
        <StyledNav>
          <li className={classnames({'active': type === CMCC })} onClick={() => this.handleToggleType(CMCC)}>中国移动</li>
          <li className={classnames({'active': type === CUCC })} onClick={() => this.handleToggleType(CUCC)}>中国联通</li>
          <li className={classnames({'active': type === CTCC })} onClick={() => this.handleToggleType(CTCC)}>中国电信</li>
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
            ? <ProductSkeleton /> 
            : (list.length ? <LayoutItems>{list}</LayoutItems> : <EmptyArrayPlaceholder />)}
          <div className="u_p_xxx">
            {pass
              ? <PrimaryButton onClick={this.handleSubmit}>立即充值</PrimaryButton>
              : <DisablePrimaryButton>立即充值</DisablePrimaryButton>
            }
          </div>
        </StyledMain>

        <Backhome />
      </div>
    )
  }
}