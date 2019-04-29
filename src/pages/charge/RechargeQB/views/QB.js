import React, {Component} from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import {getUserInfo, getProducts, getSubProducts, rechargeQB} from '@/api'
import util from '@/util'
import ProductSkeleton from '@/components/ProductSkeleton'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import Backhome from '@/components/Backhome'
import Nav from './Nav'
import Page from './styled'
import List from './List'

const CancelToken = axios.CancelToken

function Product({loading, selectId, items, handleSelect}) {
  if(loading) {
    return <ProductSkeleton />
  }
  if(items.length) {
    return <List selectId={selectId} items={items} handleSelect={handleSelect} />
  }
  return <EmptyArrayPlaceholder />
}

const INIT_TYPE = '13'

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

      qq: '',
      chargeType: '2',
      selectId: '',

      type: INIT_TYPE,
      operators: [],

      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    util.addClass(document.body, 'qq')
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadOperatorById(id)
    this.loadProdcutsByType(this.state.type)
  }

  componentWillUnmount() {
    util.removeClass(document.body, 'qq')
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
      const {data} = await rechargeQB(params)
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
    return true  
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
          chargeAddr: this.state.qq,
          chargeType: this.state.chargeType,
          productId: this.state.selectId,
          tranPwd: inputElem.value,
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {selectId, type, items, operators, loading} = this.state

    return (
      <Page>
        
        <Helmet defaultTitle="沃银企服" title="Q币充值"/>

        <header>
          <Nav type={type} items={operators} handleToggleType={this.handleToggleType} />
        </header>

        <main className="main">
          <div className="u_p_xxx">
            <div className="input-box">
              <input 
                type="number" 
                name="qq"
                className="input input-primary"
                value={this.state.qq}
                onChange={this.handleChange} 
                placeholder="请输入QQ号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x">充Q币</h2>
          <Product loading={loading} selectId={selectId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <button className="btn btn-quartus" onClick={this.handleSubmit}>立即充值</button>
          </div>
        </main>

        <Backhome />
      </Page>
    )
  }
}