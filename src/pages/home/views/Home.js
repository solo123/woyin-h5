import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import {getUserInfo, _getService} from '@/api'

import Menu from '@/components/Menu'
import Service from './Service'
import Page from './styled'

import banner from '@/asset/images/banner.jpg'
import arrowRightWhiteIcon from '@/asset/images/icon/arrow_right_white.svg'
import logo from '@/asset/images/home/logo.png'
import jd from '@/asset/images/home/jd.png'
import yx from '@/asset/images/home/yx.png'
import zy from '@/asset/images/home/zy.png'
import util from '@/util';

function size(num) {
  const designWidth = 750
  const ratio = window.innerWidth / designWidth
  return parseInt(num * ratio)
}

const Auth = ({isAuthenticated, userName, userPhoneNo, merchantName}) => {
  if(isAuthenticated) {
    return (
      <Link className="content link" to="/integral">
        <div>
          <p>{userName} {userPhoneNo}</p>
          <small>所属商户：{merchantName}</small>
        </div>
        <div>
          <img src={arrowRightWhiteIcon} alt=""/>
        </div>
      </Link>
    )
  }
  return (
    <div>
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
          const account = util.getAccountById(data.data)
          this.setState({
            userName: account.userName,
            userPhoneNo: account.userPhoneNo,
            merchantName: account.merchantName
          })
        }
      }
    }finally {
    }
  }

  async loadProductList() {
    try {
      const {data} = await _getService()
      if(data.status === 200) {
        this.setState({menus: data.data})
      }
    }finally {
    }
  }

  render() {
    const {isAuthenticated} = this.props
    const {userName, userPhoneNo, merchantName} = this.state
    return (
      <Page>
        <Helmet title="服务"/>

        <header style={{height: size(200)}}>
          <Auth
            isAuthenticated={isAuthenticated} 
            userName={userName}
            userPhoneNo={userPhoneNo}
            merchantName={merchantName}
          />
        </header>

        <main>
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
              <div className="logos">
                <Link to="/store-jd">
                  <img src={logo} alt=""/>
                </Link>
                <Link to="/store-jd">
                  <img src={logo} alt=""/>
                </Link>
                <Link to="/store-jd">
                  <img src={logo} alt=""/>
                </Link>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="head">
              <h2 className="title">商城专区</h2>
            </div>
            <div className="body">
              <div className="entry">
                <div className="main" style={{marginBottom: 10}}>
                  <div className="cell">
                    <Link to="/store-jd">
                      <img src={jd} alt=""/>
                      <div className="content">
                        <h2>京东商城</h2>
                        <p>售前售后无忧</p>
                      </div>
                    </Link>
                  </div>
                  <div className="cell">
                    <img src={yx} alt=""/>
                    <div className="content">
                      <h2>网易严选</h2>
                      <p>开启品质生活</p>
                    </div>
                  </div>
                </div>
                <div className="aside">
                  <img src={zy} alt=""/>
                  <div className="content">
                    <h2>自营商城</h2>
                    <p>产品丰富多样</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
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