import React from 'react'
import {Link} from 'react-router-dom'

import util from '@/util';

function Item({id, name}) {
  const to = {
    pathname: `/recharge-voucher/${id}`,
    state: {name: name}
  }
  return (
    <div className="item-box">   
      <Link className="item" to={to}>
        <img className="icon" src={util.getVoucherLogo(id)} alt="" />
        <p className="name">{name}</p>
      </Link>
    </div>
  )
}

function List({items}) {
  return (
    <div className="list">
    {items.map(item => {
      return (
        <Item
          key={item.productClassifyId}
          id={item.productClassifyId}
          name={item.productClassifyName}
        />
      )
    })}
    </div>
  )
}

export default List