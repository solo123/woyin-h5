import React from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"

import Backhome from '@/components/Backhome'
import Page from './styled'

function OrderEntry() {
  return (
    <Page>
      <Helmet title="全部订单"/>
      <nav>
        <div className="box">
          <Link to="/order">充值订单</Link>
        </div>
        <div className="box">
          <Link to="/order-store">商品订单</Link>
        </div>
        <div className="box">
          <Link to="/credit-record">信用卡还款记录</Link>
        </div>
        <div className="box">
          <Link to="/redeem-record">积分代卖记录</Link>
        </div>
        <div className="box">
          <Link to="/transfer-record">积分转赠记录</Link>
        </div>
      </nav>
      <Backhome/>
    </Page>
  )
}
 
export default OrderEntry