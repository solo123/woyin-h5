import React, {Component} from 'react'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import api, {getProducts, getSubProducts, rechargeVideo} from '@/api'
import util from '@/util'
import Backhome from '@/common/Backhome'
import ProviderList from './ProviderList'
import ProductList from './ProductList'
import Page from './styled'

const CancelToken = axios.CancelToken

function getProviderById(arr, id) {
  const result = arr.filter(item => {
    return item.productClassifyId === id
  })
  if(result.length) {
    return result[0]
  }
  return null
}

class RechargeVideo extends Component {
  constructor(props) {
    super(props)
    
    this.selectProvider = this.selectProvider.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      subProducts: [],
      products: [],
      selectId: '',
      loadSubProdcutLoading: false,
      loadProductLoading: false,
      username: '',
      pickerViewFlag: false,

      providerName: '',
      providerId: '',

      integral: 0,
      availableIntegral: 0
    }
  }
  
  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadProducts(id)
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
    this.loadSubProductsSource && this.loadSubProductsSource.cancel('Operation canceled by the user.')
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
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

  async loadProducts(id) {
    this.loadProductsSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadProductsSource.token})
      if(data.status === 200) {
        this.setState({products: data.data}, () => {
          if(data.data.length) {
            this.setProduct(data.data[0])
            this.loadSubProducts(data.data[0].productClassifyId)
          }
        })
      }      
    }finally {
    }
  }

  async loadSubProducts(id) {
    this.loadSubProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadSubProductsSource.token})
      if(data.status === 200) {
        this.setState({subProducts: data.data})
      }      
    }finally {
    }
  }

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    this.submitSource = CancelToken.source()
    const params = {
      productId: this.state.selectId,
      chargeAddr: this.state.username,
      tranPwd: pswd
    }
    try {
      const {data} = await rechargeVideo(params, {cancelToken: this.submitSource.token})
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

  setProduct(provider) {
    this.setState({
      providerName: provider.productClassifyName,
      providerId: provider.productClassifyId
    })
  }

  selectProvider(id) {
    const provider = getProviderById(this.state.products, id)
    if(provider) {
      this.loadSubProducts(id)
      this.setProduct(provider)
    }
  }

  selectProduct(id, integral) {
    this.setState({selectId: id, integral: integral})
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  handleChange(e) {
    this.setState({username: e.target.value})
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
    const {providerId, products, selectId, subProducts} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="视频VIP"/>

        <header>
          <ProviderList selectId={providerId} items={products} selectProvider={this.selectProvider} />
        </header>

        <section className="u_mb_xxx">
          <div className="u_p_xxx">
            <h2>请输入会员卡号</h2>
          </div>
          <div className="u_px_xxx u_pb_xxx">
            <div className="input-box">
              <input
                type="text" 
                className="input input-primary"
                value={this.state.username}
                onChange={this.handleChange} 
                placeholder="请输入会员账号" 
                autoComplete="off"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="u_p_xxx">
            <h2>选择面值</h2>
          </div>

          <div className="u_mx_xx">
            <ProductList selectId={selectId} items={subProducts} selectProduct={this.selectProduct} />
          </div>

          <div className="u_mx_xxx u_pb_xxx u_pt_x">
            <button className="btn btn-tertiary" onClick={this.handleSubmit}>立即充值</button>
          </div>
        </section>

        <Backhome />
      </Page>
    )
  }
}

export default RechargeVideo