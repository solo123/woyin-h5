import React from 'react'
import classnames from 'classnames'

function Item({id, productId, money, integral, handleSelect}) {
  const itemInnerClass = classnames('item__inner', {'active': id === productId})
  return (
    <div className="item">
      <div className={itemInnerClass} onClick={handleSelect}>
        <div className="item__money">{money}元</div>
        <div className="item__integral">{integral}积分</div>
      </div>
    </div>
  )
}

function List({productId, items, handleSelect}) {
  return (
    <div className="items">
      {items.map(item => {
        const integral = Number(item.productCostBalance) * Number(item.disCount)
        return (
          <Item
            key={item.productId}
            id={item.productId}
            productId={productId}
            money={item.salesPrice}
            integral={integral}
            handleSelect={() => handleSelect(item.productId, integral)}
          />
        )
      })}
    </div>
  )
}

export default List