import React from 'react'
import classnames from 'classnames'

import cmcc from '@/asset/images/recharge/cmcc.png'
import cucc from '@/asset/images/recharge/cucc.png'
import ctcc from '@/asset/images/recharge/ctcc.png'

const ICON_SCHEMA = {
  '6': cmcc,
  '7': cucc,
  '8': ctcc
}

function Item({id, type, name, handleToggleType}) {
  const itemClass = classnames({'active': id === type})
  return (
    <li 
      className={itemClass} 
      onClick={() => handleToggleType(id)}
    >
      <img className="icon" src={ICON_SCHEMA[id]} alt=""/>
      {name}
    </li>
  )
}

function Nav({items, type, handleToggleType}) {
  return (
    <ul className="nav">
      {items.map(item => (
        <Item
          key={item.productClassifyId} 
          type={type}
          id={item.productClassifyId}
          name={item.productClassifyName}
          handleToggleType={handleToggleType}
        />
      ))}
    </ul>
  )
}

export default Nav