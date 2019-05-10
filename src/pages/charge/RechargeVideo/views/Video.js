import React, {Component} from 'react'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"
import classnames from 'classnames'

import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getProducts, getSubProducts, rechargeVideo} from '@/api'

import Backhome from '@/components/Backhome'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import OperatorList from './OperatorList'
import ProductList from './ProductList'
import Page from './styled'

const CancelToken = axios.CancelToken

class RechargeVideo extends Component {
  constructor(props) {
    super(props)
    
    this.selectOperator = this.selectOperator.bind(this)
    this.handleSelectProduct = this.handleSelectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',

      operatorId: '',
      operators: [],

      productId: '',
      products: [],

      subProductId: '',
      subProducts: [],

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
        this.loadData(productClassifyId)
      })
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorsSource && this.loadOperatorsSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
    this.loadSubProductsSource && this.loadSubProductsSource.cancel('Operation canceled by the user.')
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
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

  async loadSubProducts(id) {
    this.loadSubProductsSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadSubProductsSource.token})
      if(data.status === 200) {
        if(data.data.length) {
          this.setState({subProducts: data.data, subProductId: data.data[0].productClassifyId})
        }
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

  reset() {
    this.setState({
      subProducts: []
    })
  }

  resetProducts() {
    this.setState({productId: '', products: []})
  }

  loadData(id) {
    this.setState({operatorId: id}, () => {
      this.loadSubProducts(id)
        .then(() => {
          if(this.state.subProducts.length) {
            this.loadProducts(this.state.subProducts[0] && this.state.subProducts[0].productClassifyId)
          }else {
            this.loadProducts(id)
          }
        })      
    })
  }

  selectOperator(id) {
    this.reset()
    this.loadData(id)
  }

  handleSelectProduct(productId, integral) {
    this.setState({productId, integral})
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClickLoadSubProducts(id) {
    if(id === this.state.subProductId) {
      return
    }
    this.resetProducts()
    this.setState({subProductId: id}, () => {
      this.loadProducts(id)
    })
  }

  verify() {
    if(!this.state.username) {
      weui.alert('请输入会员卡号')
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
    const {operatorId, operators, productId, products, subProductId, subProducts} = this.state

    return (
      <Page>
        <Helmet title="视频VIP"/>

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

        {!!subProducts.length && (
          <section className="u_mb_xxx">
            <div className="u_p_xxx">
              <h2>子类</h2>
            </div>
            <div className="u_px_xxx u_pb_xxx">
              <ul className="product-list">
              {this.state.subProducts.map(item => {
                const itemClass = classnames('item', {'active': subProductId === item.productClassifyId})
                return (
                  <li 
                    key={item.productClassifyId}
                    onClick={() => this.handleClickLoadSubProducts(item.productClassifyId)}
                    className={itemClass}
                  >{item.productClassifyName}</li>
                )
              })}
              </ul>
            </div>
          </section>
        )}

        <section>
          <div className="u_p_xxx">
            <h2>选择面值</h2>
          </div>

          <div className="u_mx_xx">
            {products.length
              ? <ProductList productId={productId} items={products} handleClick={this.handleSelectProduct}/>
              : <EmptyArrayPlaceholder/>
            }
            
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