import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'

import api from '../api'
import { replace } from '../services/redirect'
import Menu from '../common/Menu'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import fenleiActive from '../asset/images/icon/fenlei_active.svg'

import phoneIcon from '../asset/images/icon/phone.png'
import flowIcon from '../asset/images/icon/flow.png'
import oilIcon from '../asset/images/icon/oil.png'
import videoIcon from '../asset/images/icon/video.png'
import qqIcon from '../asset/images/icon/qq.png'
import lotteryIcon from '../asset/images/icon/lottery.png'
import sevenLotteryIcon from '../asset/images/icon/seven_lottery.png'
import ecardIcon from '../asset/images/icon/ecard.png'
import creditCardIcon from '../asset/images/icon/credit_card.png'
import carIcon from '../asset/images/icon/car.png'

const LayoutPageContianer = styled.div`
  padding-bottom: 50px;
`
const LayoutFixedBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`
const StyledEllipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const LayoutNav = styled.div`
  width: 25%;
`
const LayoutNavInner = styled.div`
  margin: 5px 0;
  text-align: center;
`
const StyledTitle = styled.h2`
  position: relative;
  font-size: 16px;
  padding-left: 12px;
  line-height: 1.1;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: #3b8afc;
  }
`
const LayoutGroup = styled.div`
  margin-bottom: 10px;
`
const LayoutHead = styled.div`
  padding: 10px;
  margin-bottom: 5px;
`
const LayoutMain = styled.div`
  margin: 0 5px;
`
const StyledLable = styled(Link)`
  color: #fff;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 3px;
  background: #ffb049;
  &:visited{
    color: #fff;
  }
`

// skeleton
const HotsellSkeleton = () => {
  const StyledItem = styled.div`
    height: 25px;
    background: #eee;
    margin: 10px 5px;
  `
  return (
    <div>
      <div style={{margin: '15px 0'}}>
        <StyledItem/>
        <StyledItem style={{width: '80%'}} />
        <StyledItem style={{width: '50%'}} />
        <StyledItem style={{width: '30%'}} />
      </div> 
      <div style={{margin: '15px 0'}}>
        <StyledItem/>
        <StyledItem style={{width: '80%'}} />
        <StyledItem style={{width: '50%'}} />
        <StyledItem style={{width: '30%'}} />
      </div>     
    </div>
  )
}

const BusinessEntry = ({to, icon, text}) => (
  <LayoutNav>
    <LayoutNavInner>
      <Link to={to}>
        <img style={{width: 40, height: 40, marginBottom: 5}} src={icon} alt=""/>
        <div style={{fontSize: 12, color: '#444'}}>{text}</div>
      </Link>
    </LayoutNavInner>
  </LayoutNav>
)

const ProductThumb = ({id, title, price, url, status}) => {
  const LayoutItem = styled.div`
    width: 50%;
  `
  const LayoutItemInner = styled.div`
    margin: 5px;
  `
  const StyledProduct = styled.div`
    padding: 10px;
    background: #fff;
  `
  const StyledPhoto = styled.div`
    margin-bottom: 10px;
  `
  const StyledTitle = styled(StyledEllipsis)`
    font-weight: bold;
    margin-bottom: 5px;
  `
  const StyledPrice = styled.div`
    color: #f53415;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: industry;
  `
  const StyledOperators = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const StyledBadge = styled.div`
    font-size: 12px;
    padding: 2px 8px;
    color: #7e7e7e7e;
    border-radius: 3px;
    background: #f2f2f2;
  `
  const StyledBadgeActive = styled(StyledBadge)`
    color: #fff;
    background: #f63618;
  `
  return (
    <LayoutItem>
      <LayoutItemInner>
        <StyledProduct>
          <StyledPhoto>
            <img src="https://img13.360buyimg.com/n0/jfs/t1/19531/26/3823/118504/5c2c35beE66ec977c/8133abedfda92680.jpg" alt="" />
          </StyledPhoto>
          <StyledTitle>{title}</StyledTitle>
          <StyledPrice>￥{price}</StyledPrice>
          <StyledOperators>
            <StyledBadge>{status}</StyledBadge>
            <StyledBadgeActive>兑换</StyledBadgeActive>
          </StyledOperators>
        </StyledProduct>
      </LayoutItemInner>
    </LayoutItem>
  )
}

const ProductItems = ({items}) => {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {items.map(item => (
        <ProductThumb 
          key={item.id}
          url={item.url}
          title={item.title}
          price={item.price}
          status={item.status}
        />
      ))}
    </div>
  )
}

class Home extends Component {
  state = {
    items: [],
    loading: true,
    show: false,
    integral: '',
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
  }

  handleToggle = e => {
    this.setState({show: !this.state.show})
  }

  handleLogout = () => {
    weui.confirm('是否退出当前账号？', () => {
      this.props.logout()
      replace('/login')
    })
  }

  render() {
    const {show, loading, items} = this.state
    return (
      <LayoutPageContianer>
        <div style={{marginBottom: 10}}>
          <div style={{margin: '10px', background: '#ccc'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: 15}}>
              <div style={{width: 60, height: 20, background: '#eaeaea'}}></div>
              <div>
                <StyledLable to="/redeem">赎回</StyledLable>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: 15}}>
              <div style={{width: 100, height: 50, background: '#eaeaea'}}></div>
              <div style={{width: 100, height: 50, background: '#eaeaea'}}></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: 15}}>
              <div style={{width: 120, height: 40, background: '#eaeaea'}}></div>
            </div>
          </div>
        </div>
        
        <LayoutGroup>
          <LayoutHead>
            <StyledTitle>常用服务</StyledTitle>
          </LayoutHead>
          <LayoutMain>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <BusinessEntry to="/recharge-phone" icon={phoneIcon} text="充话费" />
              <BusinessEntry to="" icon={flowIcon} text="充流量" />
              <BusinessEntry to="" icon={oilIcon} text="充油卡" />
              <BusinessEntry to="" icon={qqIcon} text="腾讯Q币" />
              <BusinessEntry to="" icon={videoIcon} text="视频VIP" />
              <BusinessEntry to="" icon={ecardIcon} text="电子卡券" />
              <BusinessEntry to="" icon={creditCardIcon} text="信用卡还款" />
              <BusinessEntry to="" icon={carIcon} text="违章查询" />
              <BusinessEntry to="" icon={lotteryIcon} text="双色球" />
              <BusinessEntry to="" icon={sevenLotteryIcon} text="七乐彩" />
            </div>
          </LayoutMain>
        </LayoutGroup>

        <LayoutGroup>
          <LayoutHead>
            <StyledTitle>商城专区</StyledTitle>
          </LayoutHead>
          <LayoutMain>
            <div style={{display: 'flex', margin: '0 5px'}}>
              <div style={{flex: '1', background: '#eaeaea'}}></div>
              <div style={{flex: '1', marginLeft: 10}}>
                <div style={{height: 80, background: '#eaeaea', marginBottom: 10}}></div>
                <div style={{height: 80, background: '#eaeaea'}}></div>
              </div>
            </div>
          </LayoutMain>
        </LayoutGroup>
        
        <LayoutGroup>
          <LayoutHead>
            <StyledTitle>热卖商品</StyledTitle>
          </LayoutHead>
          <LayoutMain>
            {loading
              ? <HotsellSkeleton />
              : <ProductItems items={items} />
            }
          </LayoutMain>
        </LayoutGroup>
        
        <LayoutFixedBottom>
          <Menu />
        </LayoutFixedBottom>
      </LayoutPageContianer>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({type: 'UNAUTH_USER'})
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Home))