import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import EmptyArrayPlaceholder from '../../../common/EmptyArrayPlaceholder'

const LayoutPage = styled.div`
  .list{
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    width: 50%;
  }
  .wrap{
    margin: 5px;
    padding: 10px;
    background: #fff;
  }
  .img{
    margin-bottom: 10px;
  }
  .title{
    font-weight: bold;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    color: #f53415;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: industry;
  }
  .box{
    display: flex;
    justify-content: space-between;
  }
  .badge{
    font-size: 12px;
    padding: 2px 8px;
    color: #7e7e7e7e;
    border-radius: 3px;
    background: #f2f2f2;
    &.active{
      color: #fff;
      background: #f63618;
    }
  }
`

const StyledItem = styled.div`
  height: 25px;
  background: #eee;
  margin: 10px 5px;
`


const ProductItems = ({items}) => {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return (
    <div className="list">
      {items.map(item => (
        <Item 
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

const Item = ({id, title, price, url, status}) => {
  return (
    <div className="item">
      <div className="wrap">
        <img className="img" src="https://img13.360buyimg.com/n0/jfs/t1/19531/26/3823/118504/5c2c35beE66ec977c/8133abedfda92680.jpg" alt="" />
        <div className="title">{title}</div>
        <div className="price">￥{price}</div>
        <div className="box">
          <div className="badge">{status}</div>
          <div className="badge active">兑换</div>
        </div>
      </div>
    </div>
  )
}

const HotsellSkeleton = () => {
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

export default ({loading, items}) => {
  if(loading) {
    return <HotsellSkeleton />
  }

  return (
    <LayoutPage>
      <ProductItems items={items} />
    </LayoutPage>
  )
}