import React from 'react'
import classnames from 'classnames'

import cmcc from '@/asset/images/recharge/cmcc.png'
import cucc from '@/asset/images/recharge/cucc.png'
import ctcc from '@/asset/images/recharge/ctcc.png'

const ICON_SCHEMA = {
  '2': cmcc,
  '3': cucc,
  '4': ctcc
}

function Item({id, currId, name, handleToggleType}) {
  const itemClass = classnames({'active': id === currId})
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

function Nav({items, currId, handleToggleType}) {
  return (
    <ul className="nav">
      {items.map(item => (
        <Item
          key={item.productClassifyId} 
          id={item.productClassifyId}
          currId={currId}
          name={item.productClassifyName}
          handleToggleType={handleToggleType}
        />
      ))}
    </ul>
  )
}

export default Nav