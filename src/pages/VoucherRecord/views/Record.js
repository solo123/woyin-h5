import React, { Component } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import config from '../../../config'
import {getVoucherRecord} from '../../../api'
import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'

import Page from './styled'
import Backhome from '../../../common/Backhome'

function Item({amount, voucherId, voucherPwd, expireTime}) {
  return (
    <div className="item">
      <div className="box">
        <div className="title">京东E卡1</div>
        <div className="subtitle">100积分</div>
      </div>
      <dl>
        <dt>卡号：</dt><dd>{voucherId}</dd>
      </dl>
      <dl>
        <dt>密码：</dt><dd>{voucherPwd}</dd>
      </dl>
      <dl>    
        <dt>面值：</dt><dd>{amount}元</dd>
      </dl>
      <div className="date">有效期至：{expireTime}</div>
    </div>
  )
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const params = {
      limit: config.voucher.PAGE_LIMIT,
      page: 0
    }
    this.loadCardList(params)
  }

  componentWillUnmount() {
  }

  async loadCardList(params) {
    try {
      const {data} = await getVoucherRecord(params)
      if(data.status === 200) {

        data.data = [
          {buyOrderId: 12, amount: 50, voucherId: 21212121, voucherPwd: 1212121212, expireTime: 2121212121, productName: 'dfasfasfd'}
        ]
        this.setState({items: data.data})
      }
    }finally {
    }
  }

  render() {
    const {items} = this.state
    return (
      <Page>
        <div className="list">
          {items.map(item => {
            return (
              <Item 
                key={item.buyOrderId}
                amount={item.amount}
                voucherId={item.voucherId}
                voucherPwd={item.voucherPwd}
                expireTime={item.expireTime}
                productName={item.productName}
              />
            )
          })}
        </div>

        <Backhome />
      </Page>
    )
  }
}