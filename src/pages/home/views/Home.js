import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import util from '@/util'
import {getUserInfo, _getService, getHotSell} from '@/api'

import Menu from '@/components/Menu'
import Service from './Service'
import Page from './styled'

import banner from '@/asset/images/home/banner.png'
import banner2 from '@/asset/images/home/banner2.jpg'
import arrowRightWhiteIcon from '@/asset/images/icon/arrow_right_white.svg'
import jd from '@/asset/images/home/jd.png'
import yx from '@/asset/images/home/yx.png'
import zy from '@/asset/images/home/zy.png'
import label from '@/asset/images/home/label.png'

function size(num) {
  const designWidth = 750
  const ratio = window.innerWidth / designWidth
  return parseInt(num * ratio)
}



const iconStyle = {
  width: size(55),
  height: size(55),
  marginRight: size(10)
}
const boxStyle = {
  padding: size(15),
  margin: size(10)
}
const logosStyle = {
  padding: size(10)
}
const jdStyle = {
  width: size(348),
  height: size(335)
}
const cellStyle = {
  width: size(341),
  height: size(156)
}
const asideStyle = {
  marginLeft: size(20)
}
const yxStyle = {
  ...cellStyle,
  marginBottom: size(18)
}
const titleStyle = {
  fontSize: size(30)
}
const innerStyle = {
  padding: size(20)
}
const labelStyle = {
  width: size(25),
  height: size(13)
}

const Auth = ({isAuthenticated, userName, userPhoneNo, merchantName}) => {
  if(isAuthenticated) {
    return (
      <Link className="content link" to="/integral">
        <div>
          <p style={{fontSize: 14}}>{userName} {userPhoneNo}</p>
          <small>所属商户：{merchantName}</small>
        </div>
        <img src={arrowRightWhiteIcon} alt=""/>
      </Link>
    )
  }
  return (
    <div>
      <Link className="link" to="/login">
        登录查看<img src={arrowRightWhiteIcon} alt=""/>
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

      userName: '',
      userPhoneNo: '',
      merchantName: ''
    }
  }

  componentDidMount() {
    this.loadProductList()
    this.loadHot()

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

  async loadHot() {
    try {
      const {data} = await getHotSell()
      if(data.status === 200) {
        this.setState({
          items: data.data.host
        })
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    const {isAuthenticated} = this.props
    const {userName, userPhoneNo, merchantName, items} = this.state

    const one = items[0] || []
    const two = items[1] || []

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

          <div className="section u_bg_white">
            <div className="service">
              <Service items={this.state.menus}/>
              <div className="u_p_xxx">
                <img src={banner} alt=""/>
              </div>              
            </div>
          </div>

          <div className="section u_bg_white">
            <div className="section__head">
              <img src={label} style={labelStyle} alt=""/>
              <h2 className="section__title">付款码</h2>
              <img src={label} style={labelStyle} alt=""/>
            </div>
            <div className="section__body">
              <div style={logosStyle} className="payment">
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(100005)} alt=""/>
                    <p>京东商城</p>
                  </div>
                </div>
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(100006)} alt=""/>
                    <p>天猫商城</p>
                  </div>
                </div>
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(100007)} alt=""/>
                    <p>苏宁易购</p>
                  </div>
                </div>
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(22)} alt=""/>
                    <p>唯品会</p>
                  </div>
                </div>
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(6)} alt=""/>
                    <p>携程旅游</p>
                  </div>
                </div>
                <div className="item">
                  <div style={boxStyle} className="box">
                    <img style={iconStyle} src={util.getVoucherLogo(14)} alt=""/>
                    <p>万宁购物</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={banner2} alt=""/>
          </div>
          
          <div className="section u_bg_white">
            <div className="section__head">
              <img src={label} style={labelStyle} alt=""/>
              <h2 className="section__title">商城专区</h2>
              <img src={label} style={labelStyle} alt=""/>
            </div>
            <div className="section__body">
              <div className="entry">
                <div className="main">
                  <div style={jdStyle} className="cell">
                    <Link to="/store-jd">
                      <img src={jd} alt=""/>
                    </Link>
                  </div>
                  <div style={asideStyle}>
                    <div style={yxStyle} className="cell gray">
                      <img src={yx} alt=""/>
                    </div>                
                    <div style={cellStyle} className="cell gray">
                      <img src={zy} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section__head">
              <img src={label} style={labelStyle} alt=""/>
              <h2 className="section__title">热门推荐</h2>
              <img src={label} style={labelStyle} alt=""/>
            </div>
            <div className="section__body">
              <div className="hot">
                <div className="box">
                  {two.map((item, index) => {
                    const to = {
                      pathname: `/store-detail/${item.skuId}`,
                      state: {detail: item}
                    }                    
                    if(index < 2) {
                      return (
                        <Link to={to} key={item.skuId} className="item">
                          <div style={innerStyle} className="inner">
                            <h3 style={titleStyle}>热门商品</h3>
                            <p>{item.name}</p>
                            <img src={`https://img13.360buyimg.com/n2/${item.imagePath}`} alt=""/>
                          </div>
                        </Link>                      
                      )
                    }
                    return null
                  })}                
                </div>
                <div className="box">
                  {one.map((item, index) => {
                    const to = {
                      pathname: `/store-detail/${item.skuId}`,
                      state: {detail: item}
                    }
                    if(index < 6) {
                      return (
                        <Link to={to} key={item.skuId} className="item item-three">
                          <div style={innerStyle} className="inner">
                            <h3 style={titleStyle}>热门商品</h3>
                            <p>{item.name}</p>
                            <img src={`https://img13.360buyimg.com/n2/${item.imagePath}`} alt=""/>
                          </div>
                        </Link>                      
                      )
                    }
                    return null
                  })}
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