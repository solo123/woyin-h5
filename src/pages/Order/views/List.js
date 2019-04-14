import React from 'react'
import util from '@/util'

const STATUS_SCHEMA = {
  '11': '处理中',
  '12': '成功',
  '13': '失败'
}

const Item = ({date, name, productValue, status}) => {
  return (
    <div className="item">
      <div className="item__head">
        <h2 className="item__title">{name}</h2>
        <div className="item__status">{status}</div>
      </div>
      <div className="item__body">
        {name}
      </div>
      <div className="item__foot">
        <div>{date}</div>
        <div>合计积分 <strong>{productValue}</strong></div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  return (
    <div className="list">
      {items.map(item => (
        <Item 
          key={item.byOrderDetail} 
          name={item.productName}
          byOrderDetail={item.byOrderDetail}
          status={STATUS_SCHEMA[item.status]}
          date={util.formatTimestamp(item.createTime)} 
          productValue={item.productValue}
        />
      ))}
    </div>
  )
}

export default List
    