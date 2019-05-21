import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

import phoneIcon from '@/asset/images/icon/phone.png'
import flowIcon from '@/asset/images/icon/flow.png'
import oilIcon from '@/asset/images/icon/oil.png'
import videoIcon from '@/asset/images/icon/video.png'
import qqIcon from '@/asset/images/icon/qq.png'
import ecardIcon from '@/asset/images/icon/ecard.png'
import creditCardIcon from '@/asset/images/icon/credit_card.png'
import listIcon from '@/asset/images/icon/list.svg'

const LayoutPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2%;
  background: #fff;
  .item{
    position: relative;
    width: 20%;
    margin: 10px 0;
    text-align: center;
  }
  .icon{
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  .title{
    color: #444;
    font-size: 12px;
  }
  .badge{
    position: absolute;
    top: -10px;
    right: 0;
    font-size: 12px;
    color: #fff;
    padding: 0 3px;
    border-radius: 3px;
    background: #1aad19;
  }
`
function size(num) {
  const designWidth = 750
  const ratio = window.innerWidth / designWidth
  return parseInt(num * ratio)
}

function getDataByIdContainer() {
    const SCHEMA = {
      '11111': {
        pathname: 'recharge-phone',
        icon: phoneIcon
      },
      '77777': {
        pathname: 'recharge-traffic',
        icon: flowIcon
      },
      '100001': {
        pathname: 'recharge-oil',
        icon: oilIcon
      },
      '44444': {
        pathname: 'recharge-QB',
        icon: qqIcon
      },
      '100010': {
        pathname: 'recharge-video',
        icon: videoIcon
      },
      '100004': {
        pathname: 'voucher',
        icon: ecardIcon
      },
      '100017': {
        pathname: 'credit-card',
        icon: creditCardIcon
      }
    }
  
  return function(id) {
    return SCHEMA[id] || {
      pathname: 'developing',
      icon: listIcon      
    }
  }
}

const getData = getDataByIdContainer()

const Item = ({to, id, icon, text}) => {
  return (
    <div className="item">
      {(id === '11111') && <div className="badge">优惠</div>}
      <Link to={{
        pathname: to,
        state: {id: id}
      }}>
        <img className="icon" src={icon} style={{width: size(100), height: size(100)}} alt=""/>
        <div className="title">{text}</div>
      </Link>
    </div>
  )
}

export default function({items}) {
  return (
    <LayoutPage>
      {items.map(product => (
        <Item
          key={product.productClassifyId}
          id={product.productClassifyId}
          to={getData(product.productClassifyId).pathname}
          icon={getData(product.productClassifyId).icon}
          text={product.productClassifyName}
        />
      ))}
    </LayoutPage>
  )
}