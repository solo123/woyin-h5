import React from 'react'
import {Link} from "react-router-dom"

import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

function Item({name, src, price}) {
  return (
    <Link to="" className="product">
      <div className="product__aside">
        <div className="product__thumb">
          <img src={src} alt=""/>
        </div>      
      </div>
      <div className="product__main">
        <div className="product__title">{name}</div>
        <div className="product__price">￥{price}</div>
        <div className="product__info">
          <span className="product__label">有货</span>
          <span className="product__label product__label--primary">兑换</span>
        </div>
      </div>
    </Link>
  )
}

function List({items}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }

  return (
    <div className="product-list">
      {items.map(product => {
        return (
          <Item
            key={product.skuId}
            id={product.skuId}
            name={product.name}
            src={`https://img13.360buyimg.com/n1/${product.imagePath}`}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default List