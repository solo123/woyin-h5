import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo} from '@/api'
import {replace} from '@/services/redirect'

import Menu from '@/common/Menu'
import Page from './styled'

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
import settingIcon from '@/asset/images/icon/setting.png'

const CancelToken = axios.CancelToken

class Me extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.state = {
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
          <div className="card">
            <Link to="/profile">
              <img className="profile" src={profile} alt=""/>
            </Link>
            <div>
              <img className="icon" src={rule} alt=""/>
              <img className="icon" src={arrowIcon} alt=""/>
            </div>
          </div>
        </header>

        <div className="u_mb_xx">
          <div className="service">
            <div className="service__body">
              <div className="cell">
                <Link to="/redeem">
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
                <img className="icon" src={settingIcon} alt=""/>
                <label className="label">在线客服</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>
            <Link className="item" to="/developing">
              <div className="cell">
                <img className="icon" src={settingIcon} alt=""/>
                <label className="label">意见反馈</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>       
            <Link className="item" to="/setting">
              <div className="cell">
                <img className="icon" src={settingIcon} alt=""/>
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