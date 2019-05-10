import React, {Component} from 'react'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getSubProducts, getProducts, rechargePhone, getPhoneDistrict} from '@/api'

import ProductSkeleton from '@/components/ProductSkeleton'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import Backhome from '@/components/Backhome'
import List from './List'
import Nav from './Nav'
import Page from './styled'

import banner from '@/asset/images/recharge/banner.png'

const CancelToken = axios.CancelToken
const TYPE = '22222'
const TYPE_TEXT = '广东移动'

const Product = ({loading, productId, handleSelect, items}) => {
  if(loading) {
    return <ProductSkeleton />
  }
  if(items.length) {
    return <List items={items} productId={productId} handleSelect={handleSelect} />
  }
  return <EmptyArrayPlaceholder />
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggleType = this.handleToggleType.bind(this)

    this.state = {
      currId: '',
      items: [],
      operators: [],
      skeletonLoading: false,

      phone: '',
      productId: '',

      phoneDistrict: '',

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
          this.loadProductsByType(productClassifyId)
        })
      })
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadOperatorSource && this.loadOperatorSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
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
        this.setState({operators: data.data})
      }
    }finally {
    }
  }

  async loadProductsByType(id) {
    this.setState({skeletonLoading: true})
    this.loadProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadProductsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({skeletonLoading: false})
    }
  }

  async loadPhoneDistrict(phone) {
    try {
      const {data} = await getPhoneDistrict(phone)
      if(data.status === 200) {
        this.setState({phoneDistrict: data.data.province + data.data.phoneType})
      }
    }finally {
    }
  }

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await rechargePhone(params)
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
      this.loadProductsByType(id)
    })
  }

  handleSelect(productId, integral) {
    this.setState({productId, integral})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur(e) {
    // 1 长度达到11位 发起请求 否则置空
    const {phone} = this.state
    if(phone && (phone.length >= 7 && phone.length <= 11)) {
      this.loadPhoneDistrict(phone)
    }else {
      this.setState({phoneDistrict: ''})
    }
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
    if(this.state.currId === TYPE) {
      if(this.state.phoneDistrict !== TYPE_TEXT) {
        weui.alert(`优惠充值仅支持${TYPE_TEXT}用户`)
        return
      }
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
          chargeAddr: this.state.phone,
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
        <Helmet defaultTitle="沃银企服" title="话费充值"/>
        
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
                onBlur={this.handleBlur}
                placeholder="请输入手机号" 
                autoComplete="off"
              />
            </div>
          </div>

          <h2 className="u_mx_xxx u_mb_x flex-space-between">请选择面值 <span>{this.state.phoneDistrict}</span></h2>
          <Product loading={skeletonLoading} productId={productId} items={items} handleSelect={this.handleSelect} />

          <div className="u_p_xxx">
            <button className="btn btn-secondary" onClick={this.handleSubmit}>立即充值</button>
          </div>

          <div className="u_p_xxx">
            <div className="explain">
              <h2>充值说明：</h2>
              {currId === TYPE
                ? (
                  <ul>
                    <li>【充值对象】仅限<strong>广东移动手机用户</strong>，其它省份用户无法充值；</li>
                    <li>【充值次数】1个号码一个月只可以办理一次，额度有限先到先得；</li>
                    <li>【到账时间】下单后，<strong>工作日内24-72小时到账</strong>，移动周末不办理，周未下的单顺延至周一才处理的！敬请注意；</li>
                    <li>【使用范围】可抵扣移动套餐月租、语音、除梦网外的一切费用；</li>
                    <li>【查询方式】1.本机编辑“ye”发送到10086；2.打电话，拨打移动客服电话1008611；</li>
                    <li>【注意事项】欠费，停机，空号等状态异常的号码不可充值；</li>
                    <li>【售后服务】72小时内，如充值失败，积分将返回到您的账户。</li>
                  </ul>
                )
                : (
                  <ul>
                    <li>注意：广东联通10.20面值不支持充值，充值一般为实时到账，如有疑问请联系客服</li>
                  </ul>
                )
              }
            </div>          
          </div>
          
        </main>

        <Backhome />
      </Page>
    )
  }
}