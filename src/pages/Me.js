import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'

import api from '../api'
import Menu from '../common/Menu'
import { replace } from '../services/redirect'

import arrowIcon from '../asset/images/icon/arrow_right.svg'

const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`

const Page = styled.div`
  padding-bottom: 50px;
  .title{
    font-size: 16px;
  }
  section{
    background: #fff;
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
  .cell{
    display: flex;
    align-items: center;
  }
  .arrow{
    width: 15px;
    height: 15px;
  }
  .label{
    color: #888;
  }
  .fixed-bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

class Me extends Component {
  state = {
    balance: "",
    contactMan: "",
    userPhoneNo: ""    
  }
  componentDidMount() {
    this.loadUserinfo()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  loadUserinfo = async () => {
    this._isMounted = true
    const {data} = await api.getUserInfo()
    if(data.status === 200) {
      if(!this._isMounted){return}
      if(!data.data.length) {return}
      this.setState({...data.data[0]})
    }
  }

  handleClick = e => {
    weui.confirm('是否退出当前账号？', () => {
      this.props.logout()
      replace('/login')
    })
  }

  render() {
    return (
      <Page>
        <div className="u_m_xxx">
          <h2 className="title">个人信息</h2>
        </div>
        <div className="u_m_xxx">
          <section>
            <div className="item">
              <div className="cell">
                <label className="label">姓名</label>
              </div>
              <div className="cell">
                {this.state.contactMan}
              </div>
            </div>
            <div className="item">
              <div className="cell">
                <label className="label">账户积分</label>
              </div>
              <div className="cell">
                {this.state.balance} 积分
              </div>
            </div>
            <div className="item">
              <div className="cell">
                <label className="label">手机号</label>
              </div>
              <div className="cell">
                {this.state.userPhoneNo}
              </div>
            </div>
            <div className="item">
              <div className="cell">
                <label className="label">银行卡</label>
              </div>
              <div className="cell">
                <Link to="/bankcard-list">
                  <img className="arrow" src={arrowIcon} />
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="u_m_xxx">
          <h2 className="title">记录相关</h2>
        </div>
        <div className="u_m_xxx">
          <section>
            <div className="item">
              <div className="cell">
                <label className="label">积分赎回记录</label>
              </div>
              <div className="cell">
                <Link to="/redeem-record">
                  <img className="arrow" src={arrowIcon} />
                </Link>
              </div>
            </div>            
            <div className="item">
              <div className="cell">
                <label className="label">我的订单</label>
              </div>
              <div className="cell">
                <Link to="/order">
                  <img className="arrow" src={arrowIcon} />
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="u_m_xxx">
          <h2 className="title">密码操作</h2>
        </div>
        <div className="u_m_xxx">
          <section>
            <div className="item">
              <div className="cell">
                <label className="label">修改登录密码</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} />
              </div>
            </div>
            <div className="item">
              <div className="cell">
                <label className="label">修改交易密码</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} />
              </div>
            </div>
            <div className="item">
              <div className="cell">
                <label className="label">找回交易密码</label>
              </div>
              <div className="cell">
                <img className="arrow" src={arrowIcon} />
              </div>
            </div>
          </section>
        </div>

        <div className="u_m_xxx">
          <PrimaryButton onClick={this.handleClick}>退出</PrimaryButton>
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