import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import axios from 'axios'
import weui from 'weui.js'

import api, {getProducts} from '../../../api'
import util from '../../../util'
import {replace} from '../../../services/redirect'
import ProductSkeleton from '../../../common/ProductSkeleton'
import EmptyArrayPlaceholder from '../../../common/EmptyArrayPlaceholder'
import Backhome from '../../../common/Backhome'

const CancelToken = axios.CancelToken

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
    height: 60px;
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
      <div className={classnames('item', {'active': id === selectId})} onClick={handleClick}>
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
  return <DisablePrimaryButton onClick={handleSubmit}>立即充值</DisablePrimaryButton>
}

const INIT_TYPE = '13'
const CUCC = '14'

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      pass: false,
      skeletonLoading: false,
      items: [],
      qq: '',
      chargeType: '2',
      selectId: '',
      operators: [],
      type: INIT_TYPE,
      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadOperatorById(id)
    this.loadProdcutsByType(this.state.type)
  }

  componentWillUnmount() {
    this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorSource.cancel('Operation canceled by the user.')
    this.loadProdcutsSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await api.getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({availableIntegral: Number(data.data[0].balance)})
      }
    }finally {
    }
  }

  async loadOperatorById(id) {
    this.loadOperatorSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadOperatorSource.token})
      if(data.status === 200) {
        this.setState({operators: data.data})
      }
    }finally {
    }
  }

  async loadProdcutsByType(type) {
    this.setState({skeletonLoading: true})
    this.loadProdcutsSource = CancelToken.source()
    try {
      const {data} = await api.getRechargePhoneProductsByType(type, {cancelToken: this.loadProdcutsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({skeletonLoading: false})
    }
  }

  async submitRecharge(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      chargeAddr: this.state.qq,
      chargeType: this.state.chargeType,
      productId: this.state.selectId,
      tranPwd: pswd,
    }
    try {
      const {data} = await api.rechargeQB(params)
      if(data.status === 200) {
        weui.alert(data.msg)
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

  retryTransPswd() {
    this.handleSubmit()
  }

  updateBtnStatus() {
    if(this.state.qq && this.state.selectId && (this.state.integral <= this.state.availableIntegral)) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  reset() {
    this.setState({selectId: ''}, () => {
      this.updateBtnStatus()
    })
  }

  handleToggleType(type) {
    if(type === this.state.type) {return}
    this.reset()
    const chargeType = type === '13' ? '2' : '3'
    this.setState({type, chargeType: chargeType}, () => {
      this.loadProdcutsByType(type)
    })
  }

  handleSelect(selectId, integral) {
    this.setState({selectId, integral}, () => {
      this.updateBtnStatus()
    })
  }

  handleChange(e) {
    this.setState({qq: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleSubmit() {
    if(!this.state.qq) {
      weui.alert('请输入QQ号')
      return
    }
    if(!this.state.selectId) {
      weui.alert('请选择产品')
      return
    }
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert('积分不足')
      return
    }

    util.paymentConfirm({
      title: '充值',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}
        this.submitRecharge(inputElem.value)
      }
    })
  }

  render() {
    const {selectId, type, items, operators, skeletonLoading, pass} = this.state

    const list = items.map(item => {
      const disCount = (Number(item.disCount) / 10).toFixed(2)
      return (
        <Item
          key={item.productId}
          id={item.productId}
          selectId={selectId}
          money={item.salesPrice}
          integral={item.productCostBalance * disCount}
          handleClick={() => this.handleSelect(item.productId, item.productCostBalance * disCount)}
        />
      )
    })

    return (
      <Page>
        
        <ul className="nav">
          {operators.map(item => (
            <li 
              key={item.productClassifyId} 
              className={classnames({'active': item.productClassifyId === type })} 
              onClick={() => this.handleToggleType(item.productClassifyId)}
            >{item.productClassifyName}</li>
          ))}
        </ul>

        <main className="main">

          <div className="input-box">
            <div className="input-inner-box">
              <StyledInput 
                type="number" 
                value={this.state.qq}
                onChange={this.handleChange} 
                placeholder="请输入QQ号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={skeletonLoading} list={list} />

          <div className="u_p_xxx">
            <SubmitBtn pass={pass} handleSubmit={this.handleSubmit}/>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}