import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'

import api from '../../../api'
import { replace } from '../../../services/redirect'
import Menu from '../../../common/Menu'

import pedestalBg from '../../../asset/images/pedestal.png'
import integralIcon from '../../../asset/images/icon/integral.svg'
import couponIcon from '../../../asset/images/icon/coupon.svg'
import listIcon from '../../../asset/images/icon/list.svg'

import arrowRightWhiteIcon from '../../../asset/images/icon/arrow_right_white.svg'

import Store from './Store'
import Service from './Service'
import Product from './Product'

const LayoutFixedBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`
const Button = styled.button`
  border: 0;
  padding: 0;
  outline: none;
  background: transparent;
`
const LayoutPage = styled.div`
  padding-bottom: 50px;
  .header{
    position: relative;
    margin-bottom: 30px;

    .cell{
      width: 100px;
      height: 40px;
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
  .section{
    margin-bottom: 10px;
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
`

const StyledHeader = styled.div`
  color: #fff;
  padding: 30px 30px 0 30px;
  background: #4ba3f8;
  .head{
    position: relative;
    display: flex;
    justify-content: space-between;
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
    padding: 15px 0 40px 0;
  }
  .btn-icon{
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .label{
    color: #fff;
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 3px;
    background: #ffb049;
    margin-left: 5px;
    &:visited{
      color: #fff;
    }
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
  .card{
    background: #5db4fb;
    border-radius: 3px;
    box-shadow: 0 24px 24px rgba(0, 0, 0, 0.1);
  }
  .button{
    position: absolute;
    bottom: -20px;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0 30px;
    line-height: 40px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 3px 5px rgba(76,173,255,.2);
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
    api.getHotsell()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({items: data.items})
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
    api.getUserIntegral()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({availableIntegral: data.integral})
        }
      })      
  }

  handleLogout = () => {
    weui.confirm('是否退出当前账号？', () => {
      this.props.logout()
      replace('/login')
    })
  }

  render() {
    const {loading, items, availableIntegral} = this.state
    const {isAuthenticated} = this.props

    return (
      <LayoutPage>

        <div className="header">
          <StyledHeader>
            <div className="card">
              <div className="head">
                <Auth 
                  isAuthenticated={isAuthenticated} 
                  availableIntegral={availableIntegral}
                />
                <div>
                  <Link className="label" to="/redeem">赎回</Link>
                  <Link className="label" to="/redeem">转赠</Link>
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
              <Button className="button"><img className="btn-icon" src={listIcon} alt=""/>随心换购</Button>
            </div>
          </StyledHeader>
          <img style={{position: 'absolute', bottom: -35}} src={pedestalBg} alt=""/>
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
        
        <LayoutFixedBottom>
          <Menu />
        </LayoutFixedBottom>
      </LayoutPage>
    )
  }
}

const mapStateToProps = state => {
  return {isAuthenticated: state.auth.isAuthenticated}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({type: 'UNAUTH_USER'})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))