import React from 'react'
import {Link} from "react-router-dom"

import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

const prefix = 'https://img13.360buyimg.com/n2/'

function Item({id, name, src, price, data}) {
  const to = {
    pathname: `/store-detail/${id}`,
    state: {detail: data}
  }
  return (
    <Link to={to} className="product">
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
            src={`${prefix}${product.imagePath}`}
            price={product.price}
            data={product}
          />
        )
      })}
    </div>
  )
}

export default List