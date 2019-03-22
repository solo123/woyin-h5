import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import EmptyArrayPlaceholder from '../../../common/EmptyArrayPlaceholder'

const StyledItem = styled.div`
  height: 25px;
  background: #eee;
  margin: 10px 5px;
`
const StyledEllipsis = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
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

const ProductThumb = ({id, title, price, url, status}) => {
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

  return <ProductItems items={items} />
}