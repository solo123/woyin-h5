import React from 'react'
import {Helmet} from "react-helmet"

import util from '@/util'

import Backhome from '@/components/Backhome'
import Page from './styled'

const STATUS_SCHEMA = {
  16: '待收货'
}

function OrderStore(props) {
  console.log(props.location.state.detail)
  const {status, orderId, externalOrder, goodsName, totalScore, createTime} = props.location.state.detail
  return (
    <Page>
      <Helmet title="订单详情" />

        <header>
          京东商城
        </header>

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
 
export default OrderStore