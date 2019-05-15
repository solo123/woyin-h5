import React from 'react'
import {Link} from "react-router-dom"

import util from '@/util'

const STATUS_SCHEMA = {
  '11': '处理中',
  '12': '成功',
  '13': '失败'
}

function Item({id, date, name, totalAmt, status, data}) {
  const to = {
    pathname: `/order-charge/${id}`,
    state: {detail: data}
  }  
  return (
    <Link to={to} className="item">
      <div className="item__head">
        <h2 className="item__title">{name}</h2>
        <div className="item__status">{status}</div>
      </div>
      <div className="item__body">
        {name}
      </div>
      <div className="item__foot">
        <div>{date}</div>
        <div>合计积分 <strong>{totalAmt}</strong></div>
      </div>
    </Link>
  )
}

function List({items}) {
  return (
    <div className="list">
      {items.map(item => (
        <Item 
          key={item.byOrderDetail} 
          id={item.byOrderDetail}
          name={item.productName}
          byOrderDetail={item.byOrderDetail}
          status={STATUS_SCHEMA[item.status]}
          date={util.formatTimestamp(item.createTime)} 
          totalAmt={item.totalAmt}
          data={item}
        />
      ))}
    </div>
  )
}

export default List
    