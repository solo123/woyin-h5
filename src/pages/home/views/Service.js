import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import phoneIcon from '@/asset/images/icon/phone.png'
import flowIcon from '@/asset/images/icon/flow.png'
import oilIcon from '@/asset/images/icon/oil.png'
import videoIcon from '@/asset/images/icon/video.png'
import qqIcon from '@/asset/images/icon/qq.png'
import lotteryIcon from '@/asset/images/icon/lottery.png'
import sevenLotteryIcon from '@/asset/images/icon/seven_lottery.png'
import ecardIcon from '@/asset/images/icon/ecard.png'
import creditCardIcon from '@/asset/images/icon/credit_card.png'
import carIcon from '@/asset/images/icon/car.png'
import listIcon from '@/asset/images/icon/list.svg'

const LayoutPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2% 0;
  background: #fff;
  .item{
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
`

function getIconByIdContainer() {
  const PRODUCT_ICON_SCHEMA = {
    '1': phoneIcon,
    '5': flowIcon,
    '9': oilIcon,
    '12': qqIcon,
    '15': videoIcon,
    '18': ecardIcon,
    '22': creditCardIcon
  }
  return function(id) {
    return PRODUCT_ICON_SCHEMA[id] || listIcon
  }
}

function getRouteByIdContainer() {
  const PRODUCT_ICON_SCHEMA = {
    '1': 'recharge-phone',
    '5': 'recharge-traffic',
    '9': 'recharge-oil',
    '12': 'recharge-QB',
    '15': 'recharge-video',
    '18': 'voucher',
    '22': 'credit-card'
  }
  return function(id) {
    return PRODUCT_ICON_SCHEMA[id] || listIcon
  }
}

const getIconById = getIconByIdContainer()
const getRouteById = getRouteByIdContainer()

const Item = ({to, id, icon, text}) => (
  <div className="item">
    <Link to={{
      pathname: to,
      state: {id: id}
    }}>
      <img className="icon" src={icon} alt=""/>
      <div className="title">{text}</div>
    </Link>
  </div>
)

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