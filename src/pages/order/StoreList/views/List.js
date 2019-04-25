import React from 'react'
import {Link} from 'react-router-dom'

import util from '@/util'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

function Item({id, createTime, goodsName, status, totalScore, data}) {
  const to = {
    pathname: `/order-store/${id}`,
    state: {detail: data}
  }  
  return (
    <Link to={to} className="item">
      <div className="head">
        <span className="title">京东商城</span>
      </div>
      <div className="body">
        {goodsName}
      </div>
      <div className="foot">
        <span>{util.formatTimestamp(createTime)}</span>
        <span>{totalScore} 积分</span>
      </div>
    </Link>
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
            createTime={order.createTime}
            goodsName={order.goodsName}
            totalScore={order.totalScore}
            status={order.status}
            data={order}
          />          
        )
      })}
    </div>
  )
}

export default List