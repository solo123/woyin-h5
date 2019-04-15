import React from 'react'
import classnames from 'classnames'

function Item({id, type, name, handleToggleType}) {
  const itemClass = classnames({'active': id === type})
  return (
    <li 
      className={itemClass} 
      onClick={() => handleToggleType(id)}
    >
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