import React, {Component} from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import {getUserInfo, getProducts, getSubProducts, rechargeTraffic} from '@/api'
import util from '@/util'
import ProductSkeleton from '@/components/ProductSkeleton'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import Backhome from '@/components/Backhome'
import Nav from './Nav'
import List from './List'
import Page from './styled'

import banner from '@/asset/images/recharge/banner.png'

const CancelToken = axios.CancelToken

function Product({loading, id, items, handleSelect}) {
  if(loading) {
    return <ProductSkeleton />
  }
  if(items.length) {
    return <List id={id} items={items} handleSelect={handleSelect}/>
  }
  return <EmptyArrayPlaceholder />
}

const CMCC = '6'

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      items: [],
      loading: false,

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
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
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
    this.setState({loading: true})
    this.loadProdcutsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(type, {cancelToken: this.loadProdcutsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await rechargeTraffic(params)
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

  reset() {
    this.setState({selectId: ''})
  }

  verify() {
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
    return true
  }

  handleToggleType(type) {
    if(type === this.state.type) {return}
    this.reset()
    this.setState({type}, () => {
      this.loadProdcutsByType(type)
    })
  }

  handleSelect(selectId, integral) {
    this.setState({selectId: selectId, integral: Number(integral)})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
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
          productId: this.state.selectId,
          tranPwd: inputElem.value,
          range: '0'
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {selectId, type, items, operators, loading} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="登录"/>

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
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange} 
                placeholder="请输入手机号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">请选择面值</h2>
          <Product loading={loading} id={selectId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <button className="btn btn-secondary" onClick={this.handleSubmit}>立即充值</button>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}