import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo} from '@/api'
import {replace} from '@/services/redirect'

import FullLayer from '@/components/FullLayer'
import Menu from '@/components/Menu'
import Page from './styled'

import message from '@/asset/images/me/message.png'
import headphone from '@/asset/images/me/headphone.png'
import setting from '@/asset/images/me/setting.png'
import email from '@/asset/images/me/email.svg'
import profile from '@/asset/images/me/profile.png'
import rule from '@/asset/images/me/rule.png'
import arrowIcon from '@/asset/images/icon/arrow_right.svg'
import integralIcon from '@/asset/images/me/integral.png'
import couponIcon from '@/asset/images/me/coupon.png'
import orderIcon from '@/asset/images/icon/order.png'
import car2Icon from '@/asset/images/icon/car2.png'
import car3Icon from '@/asset/images/icon/car3.png'
import cardIcon from '@/asset/images/icon/card.png'
import card2Icon from '@/asset/images/icon/card2.png'
import recordIcon from '@/asset/images/icon/record.png'

const CancelToken = axios.CancelToken

class Me extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleToggleRuler = this.handleToggleRuler.bind(this)

    this.state = {
      showRuler: false,
      balance: 0,
      integralCoupon: 0
    }    
  }

  componentDidMount() {
    this.loadUserInfo()
  }

  componentWillUnmount() {
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.source = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.source.token})
      if(data.status === 200) {
        if(!data.data.length) {return}
        this.setState({...data.data[0]})
      }
    }finally {
    }
  }

  handleToggleRuler() {
    this.setState({showRuler: !this.state.showRuler})
  }

  handleClick(e) {
    weui.confirm('是否退出当前账号？', () => {
      this.props.logout()
      replace('/login')
    })
  }

  render() {
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="我的"/>
        <header>
          <div className="top">
            <img className="email" src={email} alt=""/>
          </div>
          <div className="card">
            <Link to="/profile">
              <img className="profile" src={profile} alt=""/>
            </Link>
            <div onClick={this.handleToggleRuler}>
              <img className="icon" src={rule} alt=""/>
              <img className="icon" src={arrowIcon} alt=""/>
            </div>
          </div>
        </header>

        <div className="u_mb_xx">
          <div className="service">
            <div className="service__body">
              <div className="cell">
                <Link to="/integral">
                  <img className="icon" src={integralIcon} alt=""/>
                  {this.state.balance} 积分
                </Link>
              </div>
              <div className="cell">
                <Link to="/voucher-record">
                  <img className="icon" src={couponIcon} alt=""/>
                  我的卡券
                </Link>
              </div>
              <div className="cell">
                <Link to="/bankcard-list">
                  <img className="icon" src={cardIcon} alt=""/>
                  银行卡
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="u_mb_xx">
          <div className="service">
            <div className="service__body">
              <div className="cell">
                <Link to="/wait-send-goods">
                  <img className="icon" src={car2Icon} alt=""/>
                  待发货
                </Link>
              </div>
              <div className="cell">
                <Link to="/wait-receiv-goods">
                  <img className="icon" src={car3Icon} alt=""/>
                  待收货
                </Link>
              </div>
              <div className="cell">
                <Link to="/order">
                  <img className="icon" src={orderIcon} alt=""/>
                  全部订单
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section>
            <Link className="item" to="/credit-record">
              <div className="cell">
                <img className="icon" src={card2Icon} alt=""/>
                <label className="label">信用卡还款记录</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link> 
            <Link className="item" to="/redeem-record">
              <div className="cell">
                <img className="icon" src={recordIcon} alt=""/>
                <label className="label">积分代卖记录</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link> 
            <Link className="item" to="/transfer-record">
              <div className="cell">
                <img className="icon" src={recordIcon} alt=""/>
                <label className="label">积分转赠记录</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>  
            <Link className="item" to="/developing">
              <div className="cell">
                <img className="icon" src={headphone} alt=""/>
                <label className="label">在线客服</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>
            <Link className="item" to="/developing">
              <div className="cell">
                <img className="icon" src={message} alt=""/>
                <label className="label">意见反馈</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>       
            <Link className="item" to="/setting">
              <div className="cell">
                <img className="icon" src={setting} alt=""/>
                <label className="label">设置</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>
          </section>
        </div>

        <div className="u_m_xxx">
          <button className="btn btn-secondary" onClick={this.handleClick}>退出</button>
        </div>

        <FullLayer show={this.state.showRuler} handleClose={this.handleToggleRuler} close>
          <div style={{padding: '15px 15px 70px 15px'}}>
            <ol className="ruler">
              <li>
                <h2>1、什么是沃银福利积分？</h2>
                <p>沃银福利（www.1qifu.com）上的商品以及服务的价格全部以积分为单位进行标识。沃银福利积分专属于沃银福利，仅限于沃银福利内使用。</p>
              </li>
              <li>
                <h2>2、如何获取沃银福利积分？</h2>
                <p>个人在注册或激活成为沃银福利用户后，可通过企业发放积分和个人充值兑换积分的方式获取。个人积分充值的方式、兑换比例如下：</p>
                <p>客户在沃银福利客户端成功激活后，可在个人账户“积分充值”处，通过支付宝、银联等支付方式，以“1元=100积分”的兑换比例进行积分购买，沃银福利会在确认相关账款到账后将积分发放至对应的个人账户中。</p>
              </li>
              <li>
                <h2>3、沃银福利积分如何使用？</h2>
                <p>个人用户可在沃银福利购物时直接使用积分进行支付，在点击购买后，页面会提示所需支付积分数。</p>
              </li>
              <li>
                <h2>4、沃银福利积分的规则有哪些？</h2>
                <ol>
                  <li>（1）积分专属沃银福利，仅限沃银福利内使用，在沃银福利购物可以直接使用。</li>
                  <li>（2）积分可以累积且不设有效期；若交易后发生退款，原则上积分原路退回。</li>
                  <li>（3）企业发放给员工的积分需要员工在沃银福利客户端上激活账户后方可使用，若员工始终不激活，积分不退还。</li>
                  <li>（4）已经在沃银福利客户端上生成账户的员工离职后，个人账户中积分可以正常使用；但不能使用企业积分进行相关商品或者服务进行支付。</li>
                  <li>（5）积分不能兑换现金。</li>
                </ol>
              </li>
            </ol>          
          </div>
          <div className="fixed-bottom">
            <div className="u_m_xxx">
              <button className="btn btn-secondary" onClick={this.handleToggleRuler}>关闭</button>
            </div>
          </div>          
        </FullLayer>

        <div className="fixed-bottom">
          <Menu />
        </div>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({type: 'UNAUTH_USER'})
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Me))