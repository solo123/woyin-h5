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
  padding: 2% 0;
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

function getIconByIdContainer() {
  const PRODUCT_ICON_SCHEMA = {
    '11111': phoneIcon,
    '77777': flowIcon,
    '100001': oilIcon,
    '44444': qqIcon,
    '100010': videoIcon,
    '100004': ecardIcon,
    '100017': creditCardIcon
  }
  return function(id) {
    return PRODUCT_ICON_SCHEMA[id] || listIcon
  }
}

function getRouteByIdContainer() {
  const PRODUCT_ICON_SCHEMA = {
    '11111': 'recharge-phone',
    '77777': 'recharge-traffic',
    '100001': 'recharge-oil',
    '44444': 'recharge-QB',
    '100010': 'recharge-video',
    '100004': 'voucher',
    '100017': 'credit-card'
  }
  return function(id) {
    return PRODUCT_ICON_SCHEMA[id] || listIcon
  }
}

const getIconById = getIconByIdContainer()
const getRouteById = getRouteByIdContainer()

const Item = ({to, id, icon, text}) => {
  return (
    <div className="item">
      {(id === '11111') && <div className="badge">优惠</div>}
      <Link to={{
        pathname: to,
        state: {id: id}
      }}>
        <img className="icon" src={icon} alt=""/>
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
          to={getRouteById(product.productClassifyId)}
          icon={getIconById(product.productClassifyId)}
          text={product.productClassifyName}
        />
      ))}
    </LayoutPage>
  )
}