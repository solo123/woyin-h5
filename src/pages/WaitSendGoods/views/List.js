import React from 'react'

import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

function Item({id, name, phone, goodsName, externalOrder, totalScore, addr}) {
  return (
    <div className="item">
      <dl>
        <dt>收件人</dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>收入电话</dt>
        <dd>{phone}</dd>
      </dl>
      <dl>
        <dt>收货地址</dt>
        <dd>{addr}</dd>
      </dl>
      <dl>
        <dt>商品名称</dt>
        <dd>{goodsName}</dd>
      </dl>
      <dl>
        <dt>合计积分</dt>
        <dd>{totalScore}</dd>
      </dl>
      <dl>
        <dt>外部单号</dt>
        <dd>{externalOrder}</dd>
      </dl>
    </div>
  )
}

function List({items}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div className="list">
      {items.map(order => {
        return (
          <Item
            key={order.id}
            id={order.id}
            name={order.name}
            phone={order.phone}
            externalOrder={order.externalOrder}
            goodsName={order.goodsName}
            totalScore={order.totalScore}
            addr={order.address}
          />          
        )
      })}
    </div>
  )
}

export default List