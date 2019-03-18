import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {CSSTransition} from 'react-transition-group'
import api from '../api'

import kafei from '../asset/images/icon/kafei.png'
import moreSrc from '../asset/images/more.svg'

const StyledEllipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

// 入口
const LayoutNav = styled.div`
  width: 25%;
`
const LayoutNavInner = styled.div`
  margin: 5px;
  background: #eaeaea;
`

// 弹层
const StyledFixedBg = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
`
const StyledFixedLayer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 70%;
  background: #fff;
  display: flex;
  flex-direction: column;
`

// 区域
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
        <div style={{height: 50}}></div>
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
            <img src="http://img13.360buyimg.com/n0/jfs/t1/19531/26/3823/118504/5c2c35beE66ec977c/8133abedfda92680.jpg" alt="" />
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

  render() {
    const {show, loading} = this.state

    return (
      <div>
        <div style={{marginBottom: 10}}>
          <div style={{padding: '10px'}}>
            <div style={{width: 30, height: 30, background: '#ccc'}} onClick={this.handleToggle}></div>
          </div>
          <div style={{margin: '0 10px 10px 10px', background: '#ccc'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: 15}}>
              <div style={{width: 60, height: 20, background: '#eaeaea'}}></div>
              <div style={{width: 60, height: 20, background: '#eaeaea'}}></div>
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
              <BusinessEntry to="" icon={kafei} text="充话费" />
              <BusinessEntry to="" icon={kafei} text="充流量" />
              <BusinessEntry to="" icon={kafei} text="充油卡" />
              <BusinessEntry to="" icon={kafei} text="腾讯Q币" />
              <BusinessEntry to="" icon={kafei} text="视频VIP" />
              <BusinessEntry to="" icon={kafei} text="电子卡券" />
              <BusinessEntry to="" icon={kafei} text="信用卡还款" />
              <BusinessEntry to="" icon={kafei} text="违章查询" />
              <BusinessEntry to="" icon={kafei} text="双色球" />
              <BusinessEntry to="" icon={kafei} text="七乐彩" />
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
              : (
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  {this.state.items.map(item => (
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
          </LayoutMain>
        </LayoutGroup>

        <CSSTransition
          in={show}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >          
          <StyledFixedBg onClick={this.handleToggle} />
        </CSSTransition> 
        <CSSTransition
          in={show}
          classNames="slide"
          timeout={300}
          unmountOnExit
        >
          <StyledFixedLayer>
            <div styled={{flexShrink: 0}}>
              <div style={{height: 100, background: '#eaeaea'}}></div>
            </div>
            <div style={{overflow: 'auto'}}>
              <div style={{margin: 15}}>
                <div style={{height: 300, background: '#eaeaea'}}></div>
              </div>
              <div style={{margin: 15}}>
                <div style={{height: 100, background: '#eaeaea'}}></div>
              </div>
            </div>
          </StyledFixedLayer>
        </CSSTransition> 
      </div>
    )
  }
}

export default Home