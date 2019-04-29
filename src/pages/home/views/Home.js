import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import {getUserInfo, getProducts} from '@/api'
import Menu from '@/components/Menu'
import Store from './Store'
import Service from './Service'
import Product from './Product'
import Page from './styled'

import banner from '@/asset/images/banner.jpg'
import arrowRightWhiteIcon from '@/asset/images/icon/arrow_right_white.svg'

const Auth = ({isAuthenticated, userName, userPhoneNo, merchantName}) => {
  if(isAuthenticated) {
    return (
      <div className="content">
        <div>{userName} {userPhoneNo}</div>
        <small>所属商户：{merchantName}</small>
      </div>
    )
  }
  return (
    <div className="content">
      <Link className="link" to="/login">
        <span>登录查看</span><img src={arrowRightWhiteIcon} alt=""/>
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

      userName: '',
      userPhoneNo: '',
      merchantName: ''
    }
  }

  componentDidMount() {
    this.loadProductList()

    if(this.props.isAuthenticated) {
      this.loadUserInfo()
    }
  }

  componentWillUnmount() {
  }

  async loadUserInfo() {
    try {
      const {data} = await getUserInfo()
      if(data.status === 200) {
        if(data.data.length) {
          this.setState({
            userName: data.data[0].userName,
            userPhoneNo: data.data[0].userPhoneNo,
            merchantName: data.data[0].merchantName
          })
        }
      }
    }finally {
    }
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

  render() {
    const {isAuthenticated} = this.props
    const {loading, items, userName, userPhoneNo, merchantName} = this.state
    return (
      <Page>
        <Helmet title="服务"/>
        <header>
          <Auth
            isAuthenticated={isAuthenticated} 
            userName={userName}
            userPhoneNo={userPhoneNo}
            merchantName={merchantName}
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