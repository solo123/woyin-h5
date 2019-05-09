import React from 'react'
import classnames from 'classnames'

function Item({id, name, integral, productId, handleClick}) {
  const itemInnerClass = classnames('item__inner', {'active': id === productId})
  return (
    <div className="item">
      <div className={itemInnerClass} onClick={handleClick}>
        <div>{name}</div>
        <div className="item__integral">{integral}积分</div>
      </div>
    </div>
  )
}

function List({productId, items, handleClick}) {
  return (
    <div className="product-list">
      {items.map(item => {
        const integral = Number(item.productCostBalance) * Number(item.disCount)
        return (
          <Item
            className="item" 
            id={item.productId}
            key={item.productId} 
            productId={productId}
            integral={integral}
            name={item.productName}
            handleClick={() => handleClick(item.productId, integral)}
          />
        )
      })}
    </div>
  )
}

export default List