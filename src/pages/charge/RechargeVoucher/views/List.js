import React from 'react'
import classnames from 'classnames'

import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

const Item = ({id, productId, price, handleSelect}) => {
  return (
    <div className="item">
      <div
        className={classnames('item__inner', {active: productId === id})}
        onClick={handleSelect}
      >
        {price}元
      </div>
    </div>
  )
}

function List({productId, items, handleSelect}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div className="flex-wrap">
    {items.map(item => {
      const integral = Number(item.productCostBalance) * Number(item.disCount)
      return (
        <Item 
          key={item.productId} 
          id={item.productId}
          price={item.salesPrice} 
          productId={productId}
          handleSelect={() => handleSelect(item.productId, integral)}
        />
      )
    })}
    </div>
  )
}

export default List