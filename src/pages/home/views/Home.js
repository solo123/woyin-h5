import React, { Component } from 'react';
import styled from 'styled-components'
import {Helmet} from "react-helmet"
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import api, {getProducts} from '@/api'

import Menu from '@/common/Menu'
import Store from './Store'
import Service from './Service'
import Product from './Product'

import banner from '@/asset/images/banner.jpg'
import arrowRightWhiteIcon from '@/asset/images/icon/arrow_right_white.svg'

const Page = styled.div`
  padding-bottom: 50px;
  header{
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 20px;
    height: 88px;
    background: linear-gradient(to right, #ff5c4e, #f22d3a);
    font-weight: bold;
    font-size: 16px;
    font-family: industry;
    .link{
      display: flex;
      align-items: center;

      color: #fff;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .banner-box{
    padding: 0 10px 10px 10px;
    background: #fff;
  }
  .section{
    margin-bottom: 10px;
    .head{
      padding: 10px 0;
      .title{
        font-size: 16px;
        text-align: center;
      }
    }
    .body{
      padding-bottom: 10px;
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
    return (
      <div className="content">
         <div>我的积分：{availableIntegral}</div>
      </div>
    )
  }
  return (
    <div className="content">
      <Link className="link" to="/login">
        <span>我的积分：登录查看</span><img src={arrowRightWhiteIcon} alt=""/>
      </Link>
    </div>
  )
}
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      items: [],
      loading: true,
      integral: '',
      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadHotsell()
    this.loadProductList()
    if(this.props.isAuthenticated) {
      this.loadUserinfo()
    }
  }

  componentWillUnmount() {
  }

  async loadProductList() {
    try {
      const {data} = await getProducts()
      if(data.status === 200) {
        this.setState({menus: data.data})
      }
    }finally {
    }
  }

  async loadHotsell() {
    try {
      this.setState({items: []})
    }finally {
      this.setState({loading: false})
    }
  }

  async loadUserinfo() {
    try {
      const {data} = await api.getUserInfo()
      if(data.status === 200) {
        if(data.data.length) {
          this.setState({
            availableIntegral: data.data[0].balance,
            merchantName: data.data[0].merchantName
          })
        }
      }
    }finally {
    }
  }

  render() {
    const {loading, items, availableIntegral} = this.state
    const {isAuthenticated} = this.props
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="服务"  />
        <header>
          <Auth
            isAuthenticated={isAuthenticated} 
            availableIntegral={availableIntegral}
          />
        </header>

        <div className="section">
          <Service items={this.state.menus}/>
          <div className="banner-box">
            <img src={banner} alt=""/>
          </div>
        </div>

        <div className="section">
          <div className="head">
            <h2 className="title">消费码</h2>
          </div>
          <div className="body">
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div style={{height: 50, width: 80, background: '#eaeaea'}}></div>
              <div style={{height: 50, width: 80, background: '#eaeaea'}}></div>
              <div style={{height: 50, width: 80, background: '#eaeaea'}}></div>
            </div>
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