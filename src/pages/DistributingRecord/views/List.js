import React from 'react'

import util from '@/util'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

function Item({points, remark, createTime}) {
  return (
    <div className="item">
      <div>
        <h3>添加积分</h3>
        <div className="date">{util.formatTimestamp(createTime)}</div>
      </div>
      <div className="integral">+{points}</div>
    </div>
  )
}

function List({items}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div className="list">
      {items.map(item => {
        return (
          <Item
            key={item.id}
            points={item.points}
            remark={item.remark}
            createTime={item.createTime}
          />
        )
      })}
    </div>
  )
}

export default List