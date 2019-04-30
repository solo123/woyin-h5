import React from 'react'
import classnames from 'classnames'

import cnpc from '@/asset/images/recharge/cnpc.png'
import sinopec from '@/asset/images/recharge/sinopec.png'

const ICON_SCHEMA = {
  '10': cnpc,
  '11': sinopec
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
          currId={currId}
          id={item.productClassifyId}
          name={item.productClassifyName}
          handleToggleType={handleToggleType}
        />
      ))}
    </ul>
  )
}

export default Nav