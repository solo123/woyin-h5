import React from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"

import util from '@/util'

import Backhome from '@/components/Backhome'
import Page from './styled'

import arrowIcon from '@/asset/images/icon/arrow_right.svg'

const STATUS_SCHEMA = {
  16: '待收货'
}

function OrderGoodsDetail(props) {
  const {status, orderId, externalOrder, goodsName, totalScore, createTime} = props.location.state.detail

  return (
    <Page>
      <Helmet title="订单详情" />

        <header>
          京东商城
        </header>

        <Link to={`/order-goods-track/${orderId}`} className="track">
          <span>物流信息</span>
          <img src={arrowIcon} alt=""/>
        </Link>

        <main>
          <dl>
            <dt>订单状态：</dt>
            <dd>{STATUS_SCHEMA[status] || '其他'}</dd>
          </dl>
          <dl>
            <dt>内部单号：</dt>
            <dd>{orderId}</dd>
          </dl>
          <dl>
            <dt>京东单号：</dt>
            <dd>{externalOrder}</dd>
          </dl>
          <dl>
            <dt>创建时间：</dt>
            <dd>{util.formatTimestamp(createTime)}</dd>
          </dl>
          <dl>
            <dt>产品名称：</dt>
            <dd>{goodsName}</dd>
          </dl>
          <dl>
            <dt>交易积分：</dt>
            <dd>{totalScore}</dd>
          </dl>
        </main>

        <footer>
          <p>如需申请退货/款请致电京东办理</p>
          <p>400-606-9068</p>
        </footer>

      <Backhome />
    </Page>      
  )
}
 
export default OrderGoodsDetail