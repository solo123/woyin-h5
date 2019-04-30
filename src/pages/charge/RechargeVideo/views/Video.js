import React, {Component} from 'react'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo, getProducts, getSubProducts, rechargeVideo} from '@/api'
import util from '@/util'

import Backhome from '@/components/Backhome'
import OperatorList from './OperatorList'
import ProductList from './ProductList'
import Page from './styled'

const CancelToken = axios.CancelToken

class RechargeVideo extends Component {
  constructor(props) {
    super(props)
    
    this.selectOperator = this.selectOperator.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      operatorId: '',
      operators: [],

      productId: '',
      products: [],

      username: '',

      integral: 0,
      availableIntegral: 0
    }
  }
  
  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadOperators(id)
      .then(() => {
        const {productClassifyId} = this.state.operators[0]
        if(!productClassifyId){return}
        this.setState({
          operatorId: productClassifyId
        }, () => {
          this.loadProducts(productClassifyId)
        })
      })
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorsSource && this.loadOperatorsSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
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

  async loadOperators(id) {
    this.loadOperatorsSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadOperatorsSource.token})
      if(data.status === 200) {
        this.setState({operators: data.data})
      }      
    }finally {
    }
  }

  async loadProducts(id) {
    this.loadProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadProductsSource.token})
      if(data.status === 200) {
        this.setState({products: data.data})
      }      
    }finally {
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    this.submitSource = CancelToken.source()
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

  selectOperator(id) {
    this.setState({operatorId: id}, () => {
      this.loadProducts(id)
    })
  }

  selectProduct(productId, integral) {
    this.setState({productId, integral})
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  verify() {
    if(!this.state.username) {
      weui.alert('请输入用户名')
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
          chargeAddr: this.state.username,
          productId: this.state.productId,
          tranPwd: inputElem.value
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {operatorId, operators, productId, products} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="视频VIP"/>

        <header>
          <OperatorList operatorId={operatorId} items={operators} selectOperator={this.selectOperator} />
        </header>

        <section className="u_mb_xxx">
          <div className="u_p_xxx">
            <h2>请输入会员卡号</h2>
          </div>
          <div className="u_px_xxx u_pb_xxx">
            <div className="input-box">
              <input
                type="text" 
                name="username"
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
            <ProductList productId={productId} items={products} selectProduct={this.selectProduct} />
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