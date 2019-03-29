import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import axios from 'axios'
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
const Input = styled.input`
  border: 0;
  width: 100%;
  outline: none;
  padding: 0;
  background: transparent;
`
const StyledInput = styled(Input)`
  font-size: 22px;
`

const Page = styled.div`
  .nav{
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
          content: '';
          position: absolute;
          left: 50%;
          bottom: 15px;
          transform: translate(-50%);
          height: 2px;
          width: 60px;
          background: #3b8afc;
        }
      }
    }
  }
  .main{
    background: #fff;
    .input-box{
      padding: 15px;
    }
    .input-inner-box{
      padding: 15px;
      background: #eaeaea;
    }
    .items{
      display: flex;
      flex-wrap: wrap;
      margin: 0 10px;
      .item-box{
        width: 33.33%;
        padding: 5px;
      }
      .item{
        font-family: industry;
        padding: 10px;
        text-align: center;
        border-radius: 2px;
        border: 2px solid #eaeaea;
        &.active{
          color: #3b8afc;
          border-color: #3b8afc;
        }
        &__money{
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        &__integral{
          font-size: 12px;
        }
      }
    }
  }
`

const Item = ({id, selectId, money, integral, handleClick}) => {
  return (
    <div className="item-box">
      <div className={classnames('item', {'active': id === selectId})} onClick={() => handleClick(id, integral)}>
        <div className="item__money">{money}元</div>
        <div className="item__integral">{integral}积分</div>
      </div>
    </div>
  )
}

const Product = ({loading, list}) => {
  if(loading) {
    return <ProductSkeleton />
  }
  if(list.length) {
    return <div className="items">{list}</div>
  }
  return <EmptyArrayPlaceholder />
}

const SubmitBtn = ({pass, handleSubmit}) => {
  if(pass) {
    return <PrimaryButton onClick={handleSubmit}>立即充值</PrimaryButton>
  }
  return <DisablePrimaryButton>立即充值</DisablePrimaryButton>
}

const CMCC = '2'
const CUCC = '3'
const CTCC = '4'

let source = null
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
    this.loadUserinfo()
    this.loadProdcuts(this.state.type)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  loadUserinfo = async () => {
    const {data} = await api.getUserInfo()
    if(data.status === 200) {
      this.setState({availableIntegral: data.data[0].balance})
    }
  }

  loadProdcuts = async type => {
    this.setState({loading: true})
    source = axios.CancelToken.source()
    
    this._isMounted = true
    try {
      const {data} = await api.getRechargePhoneProductsByType(type, {cancelToken: source.token})
      if(data.status === 200) {
        if(!this._isMounted){return}
        this.setState({items: data.data})
      }
    }finally {
      if(!this._isMounted){return}
      this.setState({loading: false})
    }
  }

  reset = () => {
    this.setState({selectId: ''}, () => {
      this.updateBtnStatus()
    })
  }

  handleToggleType = type => {
    if(type === this.state.type) {return}
    // 中断上次未完成的请求
    source.cancel('forced interrupt request')
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
        this.submitRecharge(inputElem.value)
      }
    })
  }

  submitRecharge = async(pswd) => {
    const loading = weui.loading('处理中')
    const params = {
      chargeAddr: this.state.phone,
      chargeType: '1',
      chargeMoney: '1',
      productId: this.state.selectId,
      tranPwd: pswd
    }

    try {
      const {data} = await api.rechargePhone(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          replace('/order')
        })
      }else if(data.status === 1017) {
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
        key={item.productId}
        id={item.productId}
        selectId={selectId}
        money={item.salesPrice}
        integral={item.salesPrice * 100}
        handleClick={this.selectProduct}
      />
    ))

    return (
      <Page>
        <ul className="nav">
          <li className={classnames({'active': type === CMCC })} onClick={() => this.handleToggleType(CMCC)}>中国移动</li>
          <li className={classnames({'active': type === CUCC })} onClick={() => this.handleToggleType(CUCC)}>中国联通</li>
          <li className={classnames({'active': type === CTCC })} onClick={() => this.handleToggleType(CTCC)}>中国电信</li>
        </ul>

        <main className="main">
          <div className="input-box">
            <div className="input-inner-box">
              <StyledInput 
                type="number" 
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="请输入手机号码" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={loading} list={list} />

          <div className="u_p_xxx">
            <SubmitBtn pass={pass} handleSubmit={this.handleSubmit}/>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}