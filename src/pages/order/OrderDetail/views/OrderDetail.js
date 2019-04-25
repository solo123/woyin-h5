import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import Backhome from '@/components/Backhome'
import Page from './styled'


const STATUS_SCHEMA = {
  10: '代付款',
  11: '处理中', 
  12: '成功', 
  13: '失败', 
  14: '取消'
}

class OrderDetail extends Component {
  render() { 
    const {status, byOrderDetail, productName, productValue, createTime} = this.props.location.state.detail
    return (
      <Page>
        <Helmet title="订单详情" />

          <header>
            {productName}
          </header>

          <main>
            <dl>
              <dt>订单状态：</dt>
              <dd>{STATUS_SCHEMA[status]}</dd>
            </dl>
            <dl>
              <dt>内部单号：</dt>
              <dd>{byOrderDetail}</dd>
            </dl>
            <dl>
              <dt>创建时间：</dt>
              <dd>{createTime}</dd>
            </dl>
            <dl>
              <dt>产品名称：</dt>
              <dd>{productName}</dd>
            </dl>
            <dl>
              <dt>交易积分：</dt>
              <dd>{productValue}</dd>
            </dl>
          </main>

        <Backhome />
      </Page>      
    )
  }
}
 
export default OrderDetail;