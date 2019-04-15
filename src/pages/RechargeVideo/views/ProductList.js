import React from 'react'
import classnames from 'classnames'

function Item({id, name, buyPrice, selectId, selectProduct}) {
  const itemInnerClass = classnames('item__inner', {'active': id === selectId})
  return (
    <div className="item">
      <div className={itemInnerClass} onClick={selectProduct}>
        <div>{name}</div>
        <div className="item__integral">{buyPrice}积分</div>
      </div>
    </div>
  )
}

function List({selectId, items, selectProduct}) {
  return (
    <div className="product-list">
      {items.map(item => {
        const disCount = (Number(item.disCount) / 10).toFixed(2)
        const price = item.productCostBalance * disCount
        return (
          <Item
            className="item" 
            id={item.productId}
            key={item.productId} 
            selectId={selectId}
            buyPrice={price}
            name={item.productName}
            selectProduct={() => selectProduct(item.productId, price)}
          />
        )
      })}
    </div>
  )
}

export default List