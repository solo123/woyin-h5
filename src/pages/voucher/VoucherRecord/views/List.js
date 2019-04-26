import React from 'react'
import util from '@/util'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

function Item({amount, voucherId, voucherPwd, expireTime}) {
  let pswd = voucherPwd
  if(pswd && pswd.indexOf('http') > -1) {
    pswd = <a href={pswd}>{pswd}</a>
  }
  return (
    <div className="card">
      <div className="head">
        <div className="title">京东E卡1</div>
        <div className="subtitle">100积分</div>
      </div>
      <dl>
        <dt>卡号：</dt><dd>{voucherId}</dd>
      </dl>
      <dl>
        <dt>密码：</dt><dd>{pswd}</dd>
      </dl>
      <dl>    
        <dt>面值：</dt><dd>{amount}元</dd>
      </dl>
      <div className="date">有效期至：{expireTime || '--'}</div>
    </div>
  )
}

function List({items}) {
  if(!items.length) {
    return (
      <EmptyArrayPlaceholder />
    )
  }
  return (
    <div>
      {items.map(item => {
        return (
          <Item 
            key={item.buyOrderId}
            amount={item.amount}
            voucherId={item.voucherId}
            voucherPwd={item.voucherPwd}
            expireTime={util.formatTimestamp(item.expireTime)}
            productName={item.productName}
          />
        )
      })}      
    </div>
  )
}

export default List