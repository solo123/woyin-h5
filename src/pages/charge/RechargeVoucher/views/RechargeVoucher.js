import React, {Component} from 'react'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import config from '@/config'
import util from '@/util'
import {replace} from '@/services/redirect'
import {getUserInfo, getSubProducts, rechargeVoucher} from '@/api'

import Backhome from '@/components/Backhome'
import Opeator from '@/components/Operator'
import List from './List'
import Page from './styled'

const CancelToken = axios.CancelToken

class RechargeVoucher extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      count: config.ecard.MIN_COUNT,

      productId: '',
      products: [],

      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadSubProducts(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadSubProductsSource && this.loadSubProductsSource.cancel('Operation canceled by the user.')
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

  async loadSubProducts(id) {
    this.loadSubProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadSubProductsSource.token})
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
      const {data} = await rechargeVoucher(params, {cancelToken: this.submitSource.token})
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

  getTotalIntegral() {
    return this.state.count * this.state.integral
  }

  handleSelect(productId, integral) {
    this.setState({productId, integral})
  }

  handleClick(count) {
    if(config.ecard.MAX_COUNT >= count && count >= config.ecard.MIN_COUNT) {
      this.setState({count})
    }
  }

  verify() {
    if(!this.state.productId) {
      weui.alert('请选择产品')
      return
    }    
    if(this.getTotalIntegral() > this.state.availableIntegral) {
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
      title: '兑换卡券',
      useable: this.state.availableIntegral,
      amount: this.getTotalIntegral(),
      callback: (e, input) => {
        if(!input.value.trim()) {return false}

        const params = {
          productId: this.state.productId,
          amount: this.state.count,
          tranPwd: input.value
        }        
        this.doSubmit(params)
      }
    })
  }

  render() {
    const {products, productId} = this.state

    return (
      <Page>
        <Helmet title="电子卡券"/>

        <header>
          <div className="box">
            <img className="logo" src={util.getVoucherLogo(this.props.match.params.id)} alt=""/>
            <h1>{this.props.location.state.name}</h1>
          </div>
          <div className="flex-space-between-center">
            <span>兑换数量(最多可购{config.ecard.MAX_COUNT}张)</span>
            <Opeator
              count={this.state.count}
              onClick={this.handleClick}
              onChange={() => {}}
            />
          </div>
        </header>

        <section>
          <h2>选择面值</h2>
          <div className="u_m_xx">
            <List productId={productId} items={products} handleSelect={this.handleSelect}/>
          </div>
          <div className="tips">订单支付后立即生效，不可退回</div>
        </section>

        <section>
          <h2>产品详情</h2>
          <div className="u_p_xxx">
            <dl>
              <dt>有效期：</dt>
              <dd>京东E卡有效期为3个月</dd>
            </dl>
            <dl>
              <dt>商品说明：</dt>
              <dd>
                <ol>
                  <li>购买成功后您将收到对应产品的京东E卡信息；</li>
                  <li>京东E卡不记名、不挂失、不兑现、不计息、不可修改密码。购买后需要妥善保管卡号及密码；</li>
                  <li>京东E卡仅能购买京东自营商品 （页面显示有“京东自营”或者商品编号为6位或者7位数，但出版物、全球购、虚拟产品、部分团购及抢购商品、投资金银类、夺宝岛和第三方卖家商品不在此内）；</li>
                  <li>使用京东E卡购买的商品发生退货时，所支付资金会自动退回到卡内；</li>
                  <li>登录京东首页，选择喜欢的商品加入购物车并根据页面上的提示进行购物操作。在提交订单页面，点击“使用优惠/抵用“，选择礼品卡，输入您的京东E卡的密码，点击绑定即可绑定到您的账户中，然后根据需要选择您使用的京东E卡，点击提交订单即可完成操作。注：如需一次使用多张E卡，可点击“添加礼品卡“继续绑定，然后点击勾选多张E卡即可使用；</li>
                  <li>京东将不会对E卡消费的金额开具发票。</li>
                </ol>					
              </dd>
            </dl>
          </div>
        </section>

        <div className="fixed-bottom u_bg_white">
          <div className="info flex-space-between">
            <div className="main">兑换积分：<span className="num">{this.state.integral * this.state.count}</span></div>
            <div className="aside" onClick={this.handleSubmit}>立即兑换</div>
          </div>
        </div>

        <Backhome/>
      </Page>
    )
  }
}

export default RechargeVoucher