import React from 'react'
import classnames from 'classnames'

import cnpc from '@/asset/images/recharge/cnpc.png'
import sinopec from '@/asset/images/recharge/sinopec.png'

const ICON_SCHEMA = {
  '10': cnpc,
  '11': sinopec
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