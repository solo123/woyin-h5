import React from 'react'
import classnames from 'classnames'

function Item({id, currId, name, handleToggleType}) {
  const itemClass = classnames({'active': id === currId})
  return (
    <li 
      className={itemClass} 
      onClick={() => handleToggleType(id)}
    >
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