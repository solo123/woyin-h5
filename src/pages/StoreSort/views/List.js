import React from 'react'
import {Link} from "react-router-dom"

function Item({name, price}) {
  return (
    <Link to="" className="product">
      <div className="product__aside">
        <div className="product__thumb">
          <img src="http://img13.360buyimg.com/n0/jfs/t19621/298/1931817790/260874/b4152b69/5add87fbNa0547d28.jpg" alt=""/>
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
  return (
    <div className="product-list">
      {items.map(product => {
        return (
          <Item
            key={product.skuId}
            id={product.skuId}
            name={product.name}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default List