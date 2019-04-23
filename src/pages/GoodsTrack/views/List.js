import React from 'react'

import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

function Item({content, msgTime, operator}) {
  return (
    <div className="item">
      <h2>{content}</h2>
      <dl>
        <dt>操作方</dt>
        <dd>{operator}</dd>
      </dl>
      <dl>
        <dt>时间</dt>
        <dd>{msgTime}</dd>
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
    {items.map((item, index) => {
      return (
        <Item 
          key={index}
          content={item.content}
          msgTime={item.msgTime}
          operator={item.operator}
        />
      )
    })}
    </div>
  )
}

export default List