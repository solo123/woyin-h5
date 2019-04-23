import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo} from '../api'
import Menu from '../common/Menu'
import { replace } from '../services/redirect'

import headerBg from '../asset/images/header_bg.png'
import arrowIcon from '../asset/images/icon/arrow_right.svg'

import orderIcon from '../asset/images/icon/order.png'
import car2Icon from '../asset/images/icon/car2.png'
import car3Icon from '../asset/images/icon/car3.png'
import moneyIcon from '../asset/images/icon/money.png'
import cardIcon from '../asset/images/icon/card.png'
import card2Icon from '../asset/images/icon/card2.png'
import card3Icon from '../asset/images/icon/card3.png'
import giftIcon from '../asset/images/icon/gift.png'
import lotteryIcon from '../asset/images/icon/lottery.png'
import recordIcon from '../asset/images/icon/record.png'
import record2Icon from '../asset/images/icon/record2.png'
import settingIcon from '../asset/images/icon/setting.png'

const Page = styled.div`
  padding-bottom: 50px;
  header{
    color: #fff;
    padding: 20px;
    background: url(${headerBg}) top center no-repeat;
    background-size: 100%;
    .card{
      display: flex;
      color: #333;
      background: #fff;
      font-family: industry;
      border-radius: 5px;
      &__cell{
        text-align: center;
        flex: 1;
        padding: 20px;
      }
    }
  }
  .title{
    font-size: 16px;
  }
  section{
    background: #fff;
    .cell{
      display: flex;
      align-items: center;
      .icon{
        width: 25px;
        margin-right: 5px;
      }
    }
  }
  .item{
    position: relative;
    padding: 15px;
    display: flex;
    justify-content: space-between;    
    &:after{
      content: " ";
      position: absolute;
      left: 15px;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #e5e5e5;
      transform: scaleY(0.5);
    }
    &:last-child:after{
      content: none;
    }
  }
  .arrow{
    width: 15px;
    height: 15px;
  }
  .label{
    color: #444;
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .service{
    background: #fff;
    &__head{
      position: relative;
      padding: 15px;
      &:after{
        content: " ";
        position: absolute;
        left: 15px;
        bottom: 0;
        right: 15px;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        transform: scaleY(0.5);
      }
    }
    &__title{
      font-size: 16px;
      font-weight: bold;
    }
    &__body{
      display: flex;
      padding: 20px 0;
    }
    .cell {
      flex: 1;
      a{
        text-align: center;
        display: block;
      }
      .icon{
        width: 25px;
        display: block;
        margin: 0 auto 5px auto;
      }
    }
  }
`
const CancelToken = axios.CancelToken

class Me extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    balance: 0,
    contactMan: "--",
    userPhoneNo: "--",
    integralCoupon: 0
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
            <div className="card__cell">
              <p>{this.state.balance}</p>
              <p>我的积分</p>
            </div>
            <div className="card__cell">
              <p>{this.state.integralCoupon}</p>
              <p>电子积分券</p>
            </div>
          </div>
        </header>

        <div className="u_mb_xx">
          <div className="service">
            <div className="service__body">
              <div className="cell">
                <Link to="/redeem">
                  <img className="icon" src={card3Icon} alt=""/>
                  {this.state.balance} 积分
                </Link>
              </div>
              <div className="cell">
                <Link to="/transfer">
                  <img className="icon" src={giftIcon} alt=""/>
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
                <Link to="/developing">
                  <img className="icon" src={car2Icon} alt=""/>
                  待发货
                </Link>
              </div>
              <div className="cell">
                <Link to="/developing">
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
            <Link className="item" to="/voucher-record">
              <div className="cell">
                <img className="icon" src={recordIcon} alt=""/>
                <label className="label">电子卡券</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>  
            <Link className="item" to="/setting">
              <div className="cell">
                <img className="icon" src={settingIcon} alt=""/>
                <label className="label">在线客服</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} alt="" />
              </div>
            </Link>
            <Link className="item" to="/setting">
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