import React, { Component } from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import api, {getProducts, rechargePhone} from '@/api'
import util from '@/util'
import ProductSkeleton from '@/common/ProductSkeleton'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'
import Backhome from '@/common/Backhome'
import List from './List'
import Nav from './Nav'
import Page from './styled'



const CancelToken = axios.CancelToken

const Product = ({loading, selectId, handleSelect, items}) => {
  if(loading) {
    return <ProductSkeleton />
  }
  if(items.length) {
    return <List items={items} selectId={selectId} handleSelect={handleSelect} />
  }
  return <EmptyArrayPlaceholder />
}

const SubmitBtn = ({pass, handleSubmit}) => {
  if(pass) {
    return <button className="btn btn-secondary" onClick={handleSubmit}>立即充值</button>
  }
  return <button className="btn btn-secondary disable" onClick={handleSubmit}>立即充值</button>
}

const CMCC = '2'
const CUCC = '3'
const CTCC = '4'

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)

    this.state = {
      pass: false,

      items: [],
      skeletonLoading: false,

      phone: '',
      selectId: '',

      type: CMCC,
      operators: [],

      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadOperatorById(id)
    this.loadProductsByType(this.state.type)
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorSource && this.loadOperatorSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
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

  async loadProductsByType(type) {
    this.setState({skeletonLoading: true})
    this.loadProductsSource = CancelToken.source()
    try {
      const {data} = await api.getRechargePhoneProductsByType(type, {cancelToken: this.loadProductsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({skeletonLoading: false})
    }
  }

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      chargeAddr: this.state.phone,
      productId: this.state.selectId,
      tranPwd: pswd
    }
    try {
      const {data} = await rechargePhone(params)
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
    if(this.state.phone && this.state.selectId && (this.state.integral <= this.state.availableIntegral)) {
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
    this.setState({type}, () => {
      this.loadProductsByType(type)
    })
  }

  handleSelect(selectId, integral) {
    this.setState({selectId, integral}, () => {
      this.updateBtnStatus()
    })
  }

  handleChange(e) {
    this.setState({phone: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleSubmit() {
    if(!this.state.phone) {
      weui.alert('请输入手机号')
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
        this.doSubmit(inputElem.value)
      }
    })
  }

  render() {
    const {selectId, type, items, operators, skeletonLoading, pass} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="话费充值"/>
        
        <header>
          <Nav type={type} items={operators} handleToggleType={this.handleToggleType} />
        </header>

        <main className="main">

          <div className="u_p_xxx">
            <div className="input-box">
              <input
                className="input input-primary" 
                type="number" 
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="请输入手机号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={skeletonLoading} selectId={selectId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <SubmitBtn pass={pass} handleSubmit={this.handleSubmit}/>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}