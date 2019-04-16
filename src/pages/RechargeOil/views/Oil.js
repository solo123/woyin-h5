import React, { Component } from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import api, {getProducts} from '@/api'
import util from '@/util'
import ProductSkeleton from '@/common/ProductSkeleton'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'
import Backhome from '@/common/Backhome'
import Nav from './Nav'
import List from './List'
import Page from './styled'
import banner from '@/asset/images/recharge/banner.png'

const CancelToken = axios.CancelToken

const Product = ({loading, selectId, items, handleSelect}) => {
  if(loading) {
    return <ProductSkeleton />
  }
  if(items.length) {
    return <List selectId={selectId} items={items} handleSelect={handleSelect} />
  }
  return <EmptyArrayPlaceholder />
}

const SubmitBtn = ({pass, verify, handleSubmit}) => {
  if(pass) {
    return <button className="btn btn-secondary" onClick={handleSubmit}>立即充值</button>
  }
  return <button className="btn btn-secondary disable" onClick={verify}>立即充值</button>
}

const INIT_TYPE = '10'

export default class extends Component {
  constructor(props) {
    super(props)

    this.verify = this.verify.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)

    this.state = {
      pass: false,

      items: [],
      skeletonLoading: false,

      cardNumber: '',
      selectId: '',
      
      type: INIT_TYPE,
      operators: [],
      cardType: '1',

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
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorSource && this.loadOperatorSource.cancel('Operation canceled by the user.')
    this.loadProdcutsSource && this.loadProdcutsSource.cancel('Operation canceled by the user.')
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

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    const params = {
      cardNumber: this.state.cardNumber,
      productId: this.state.selectId,
      tranPwd: pswd,
      cardType: this.state.cardType
    }
    try {
      const {data} = await api.rechargeOil(params)
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
    if(this.state.cardNumber && this.state.selectId && (this.state.integral <= this.state.availableIntegral)) {
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

    const cardType = type === '10' ? '1' : '2'

    this.setState({type, cardType: cardType}, () => {
      this.loadProdcutsByType(type)
    })
  }

  handleSelect(selectId, integral) {
    this.setState({selectId, integral}, () => {
      this.updateBtnStatus()
    })
  }

  handleChange(e) {
    this.setState({cardNumber: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  verify() {
    if(!this.state.cardNumber) {
      weui.alert('请输入加油卡卡号')
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
  }

  handleSubmit() {
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
        <Helmet defaultTitle="沃银企服" title="油卡充值"/>
        
        <header>
          <img src={banner} alt=""/>
          <div className="nav-box">
            <Nav type={type} items={operators} handleToggleType={this.handleToggleType} />
          </div>
        </header>

        <main className="main">

          <div className="u_p_xxx">
            <div className="input-box">
              <input
                className="input input-primary" 
                type="number" 
                value={this.state.cardNumber}
                onChange={this.handleChange} 
                placeholder="请输入加油卡卡号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={skeletonLoading} selectId={selectId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <SubmitBtn pass={pass} verify={this.verify} handleSubmit={this.handleSubmit}/>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}