import React from 'react'
import {Link} from "react-router-dom"
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'

function Product({id, title, src, price, data}) {
  const to = {
    pathname: `/store-detail/${id}`,
    state: {detail: data}
  }
  return (
    <div className="layout-item">
      <Link className="product" to={to}>
        <div className="product-thumb">
          <img src={src} alt=""/>
        </div>
        <div className="product-title">{title}</div>
        <div className="product-price">￥{price}</div>
        <div className="product-info">
          <span className="product-status">有货</span>
          <span className="product-btn">兑换</span>
        </div>
      </Link>
    </div>                
  )
}

function List({items}) {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return (
    <div className="layout">
      {items.map(item => {
        return (
          <Product
            key={item.skuId}
            id={item.skuId}
            title={item.name}
            src={`https://img13.360buyimg.com/n1/${item.imagePath}`}
            price={item.jdPrice}
            data={item}
          />
        )
      })}    
    </div>
  )
}

export default List