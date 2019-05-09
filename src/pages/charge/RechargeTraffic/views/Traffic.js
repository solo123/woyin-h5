import React, {Component} from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getProducts, getSubProducts, rechargeTraffic} from '@/api'

import ProductSkeleton from '@/components/ProductSkeleton'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import Backhome from '@/components/Backhome'
import Nav from './Nav'
import List from './List'
import Page from './styled'

import banner from '@/asset/images/recharge/banner.png'

const CancelToken = axios.CancelToken

function filterData(data) {
  return data.map(item => {
    return {
      ...item,
      productClassifyName: item.productClassifyName.slice(0, 4)
    }
  })
}

function Product({loading, productId, items, handleSelect}) {
  if(loading) {
    return <ProductSkeleton/>
  }
  if(items.length) {
    return <List productId={productId} items={items} handleSelect={handleSelect}/>
  }
  return <EmptyArrayPlaceholder />
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      currId: '',
      items: [],
      operators: [],
      skeletonLoading: false,

      phone: '',
      productId: '',

      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadOperatorById(id)
      .then(() => {
        const {productClassifyId} = this.state.operators[0]
        if(!productClassifyId){return}
        this.setState({
          currId: productClassifyId
        }, () => {
          this.loadProdcutsByType(productClassifyId)
        })
      })
  }

  componentWillUnmount() {
    this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorSource.cancel('Operation canceled by the user.')
    this.loadProdcutsSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        const account = util.getAccountById(data.data)
        this.setState({availableIntegral: Number(account.balance)})
      }
    }finally {
    }
  }

  async loadOperatorById(id) {
    this.loadOperatorSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadOperatorSource.token})
      if(data.status === 200) {
        const result = filterData(data.data)
        this.setState({operators: result})
      }
    }finally {
    }
  }

  async loadProdcutsByType(id) {
    this.setState({skeletonLoading: true})
    this.loadProdcutsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadProdcutsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({skeletonLoading: false})
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await rechargeTraffic(params)
      if(data.status === 200) {
        replace('/result', {type: 'success', title: data.msg})
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

  reset() {
    this.setState({productId: ''})
  }

  handleToggleType(id) {
    if(id === this.state.currId) {return}
    this.reset()
    this.setState({currId: id}, () => {
      this.loadProdcutsByType(id)
    })
  }

  handleSelect(productId, integral) {
    this.setState({productId, integral})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  verify() {
    if(!this.state.phone) {
      weui.alert('请输入手机号')
      return
    }
    if(this.state.phone.length !== 11) {
      weui.alert('请输入合法的手机号')
      return
    }    
    if(!this.state.productId) {
      weui.alert('请选择产品')
      return
    }
    if(this.state.integral > this.state.availableIntegral) {
      weui.alert('积分不足')
      return
    }   
    return true
  }

  handleSubmit() {
    if(!this.verify()) {
      return
    }

    util.paymentConfirm({
      title: '充值',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}

        const params = {
          phone: this.state.phone,
          productId: this.state.productId,
          tranPwd: inputElem.value
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {productId, currId, items, operators, skeletonLoading} = this.state

    return (
      <Page>
        <Helmet title="流量充值"/>

        <header>
          <img src={banner} alt=""/>
          <div className="nav-box">
            <Nav currId={currId} items={operators} handleToggleType={this.handleToggleType} />
          </div>
        </header>

        <main className="main">

           <div className="u_p_xxx">
            <div className="input-box">
              <input
                className="input input-primary" 
                type="number" 
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="请输入手机号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={skeletonLoading} productId={productId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <button className="btn btn-secondary" onClick={this.handleSubmit}>立即充值</button>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}