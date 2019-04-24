import React from 'react'
import classnames from 'classnames'

function Item({id, selectId, money, integral, handleClick}) {
  const itemInnerClass = classnames('item__inner', {'active': id === selectId})
  return (
    <div className="item">
      <div className={itemInnerClass} onClick={handleClick}>
        <div className="item__money">{money}元</div>
        <div className="item__integral">{integral}积分</div>
      </div>
    </div>
  )
}

function List({items, selectId, handleSelect}) {
  return (
    <div className="items">
    {items.map(item => {
      const disCount = (Number(item.disCount) / 10).toFixed(2)
      return (
        <Item
          key={item.productId}
          id={item.productId}
          selectId={selectId}
          money={item.salesPrice}
          integral={item.productCostBalance * disCount}
          handleClick={() => handleSelect(item.productId, item.productCostBalance * disCount)}
        />
      )
    })}
    </div>
  )
}

export default List