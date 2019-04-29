import React from 'react'
import classnames from 'classnames'

function Item({id, selectId, money, integral, handleSelect}) {
  const itemInnerClass = classnames('item__inner', {'active': id === selectId})
  return (
    <div className="item">
      <div className={itemInnerClass} onClick={handleSelect}>
        <div className="item__money">{money}元</div>
        <div className="item__integral">{integral}积分</div>
      </div>
    </div>
  )
}

function List({id, items, handleSelect}) {
  return (
    <div className="items">
      {items.map(item => {
        return (
          <Item
            key={item.productId}
            id={item.productId}
            selectId={id}
            money={item.salesPrice}
            integral={item.productCostBalance * item.disCount}
            handleSelect={() => handleSelect(item.productId, item.productCostBalance * item.disCount)}
          />
        )
      })}
    </div>
  )
}

export default List