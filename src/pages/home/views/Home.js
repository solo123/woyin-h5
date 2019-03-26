import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import api from '../../../api'
import {getItem} from '../../../services/storage'
import Menu from '../../../common/Menu'

import pedestalBg from '../../../asset/images/pedestal.png'
import integralIcon from '../../../asset/images/icon/integral.svg'
import couponIcon from '../../../asset/images/icon/coupon.svg'
import listIcon from '../../../asset/images/icon/list.svg'

import arrowRightWhiteIcon from '../../../asset/images/icon/arrow_right_white.svg'

import Store from './Store'
import Service from './Service'
import Product from './Product'

const Page = styled.div`
  padding-bottom: 50px;
  .header{
    position: relative;
    background: #4ba3f8;
    .wrap{
      overflow: hidden;
      padding: 20px 20px 0 20px;
    }
    .fixed{
      position: absolute;
      bottom: 0;
    }
    .fixed-btn-box{
      position: absolute;
      left: 0;
      right: 0;
      bottom: -15px;
      z-index: 10;
      display: flex;
      justify-content: center;
      .button{
        border: 0;
        padding: 0;
        outline: none;
        background: transparent;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 0 30px;
        line-height: 40px;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 3px 5px rgba(76,173,255,.2);
        .icon{
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
      }  
    }
    .card{
      color: #fff;
      position: relative;
      background: #5db4fb;
      border-radius: 3px;
      box-shadow: 0 24px 24px rgba(0, 0, 0, 0.3);
      .head{
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 15px;
        &:after{
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: #4ba2f7;
        }
      }
      .body{
        display: flex;
        justify-content: space-around;
        padding-top: 30px;
        padding-bottom: 40px;
        .cell{
          width: 100px;
          text-align: center;
          .icon{
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
          }
          .text{
            font-size: 12px;
          }
        }
      }
    }
    .label{
      color: #fff;
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 3px;
      background: #ffb049;
      margin-left: 5px;
    }
    .link{
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .section{
    background: #f7f7f7;
    .head{
        padding: 10px;
        margin-bottom: 5px;
      .title{
        position: relative;
        font-size: 16px;
        line-height: 1.1;
        padding-left: 12px;
        &:before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: #3b8afc;
        }
      }
    }
    .body{
      margin: 0 5px;
    }
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Auth = ({isAuthenticated, availableIntegral}) => {
  if(isAuthenticated) {
    return <div>可用积分：{availableIntegral}</div>
  }
  return (
    <Link className="link" to="/login">
      <span>登录查看</span><img src={arrowRightWhiteIcon} alt=""/>
    </Link>
  )
}
class Home extends Component {
  state = {
    items: [],
    loading: true,
    integral: '',
    availableIntegral: 0
  }

  componentDidMount() {
    this.loadHotsell()
    
    // 已登录用户需要获取可用积分
    if(this.props.isAuthenticated) {
      this.loadUserinfo()
    }
  }

  loadHotsell = async () => {
    const {data} = await api.getHotsell()
    if(data.code === '1') {
      this.setState({items: data.items})
    }
    this.setState({loading: false})
  }

  loadUserinfo = async () => {
    const {data} = await api.getUserInfo()
    if(data.status === 200) {
      if(data.data.length) {
        this.setState({availableIntegral: data.data[0].balance})
      }
    }
  }

  render() {
    const {loading, items, availableIntegral} = this.state
    const {isAuthenticated} = this.props

    return (
      <Page>

        <div className="header">
          <div className="wrap">
            <div className="card">
              <div className="head">
                <Auth
                  isAuthenticated={isAuthenticated} 
                  availableIntegral={availableIntegral}
                />
                <div>
                  <Link className="label" to="/redeem">赎回</Link>
                  <Link className="label" to="/transfer">转赠</Link>
                </div>
              </div>
              <div className="body">
                <div className="cell">
                  <img className="icon" src={integralIcon} alt=""/>
                  <p className="text">可赎回积分</p>
                </div>
                <div className="cell">
                  <img className="icon" src={couponIcon} alt=""/>
                  <p className="text">电子积分券</p>
                </div>
              </div>
            </div>
            <div className="fixed-btn-box">
              <button className="button">
                <img className="icon" src={listIcon} alt=""/>随心换购
              </button>              
            </div>
          </div>
          <div className="fixed">
            <img src={pedestalBg} alt=""/>
          </div>
        </div>

        <div className="section">
          <div className="head">
            <h2 className="title">常用服务</h2>
          </div>          
          <div className="body">
            <Service />
          </div>
        </div>
        <div className="section">
          <div className="head">
            <h2 className="title">商城专区</h2>
          </div>
          <div className="body">
            <Store />
          </div>
        </div>
        <div className="section">
          <div className="head">
            <h2 className="title">热卖商品</h2>
          </div>
          <div className="body">
            <Product loading={loading} items={items} />
          </div>
        </div>
        <div className="fixed-bottom">
          <Menu />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {isAuthenticated: state.auth.isAuthenticated}
}

export default withRouter(connect(mapStateToProps, null)(Home))