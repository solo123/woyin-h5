import React from 'react';
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"

import Backhome from '@/common/Backhome'
import Page from './styled'

import slogan from '@/asset/images/jd/slogan.png'
import more from '@/asset/images/more.svg'

function Product({title, src, price}) {
  return (
    <Link className="product" to="/store-detail/123456">
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
  )
}

export default function() {
  return (
    <Page>
      <Helmet defaultTitle="沃银企服" title="京东购物"  />

      <div className="top">
        <Link to="/store-sort">
          <img src={more} alt=""/>
        </Link>
      </div>

      <header>
        <img className="slogan" src={slogan} alt=""/>
      </header>

      <nav>
        <ul>
          <li>数码电器</li>
          <li>居家日用</li>
          <li>食品饮料</li>
          <li>美妆护肤</li>
          <li>电脑配件</li>
          <li>中外名酒</li>
        </ul>
      </nav>

      <main>
        <div className="layout">
          <div className="layout-item">
            <Product
              title="索尼（SONY）ILCE-7K 全画幅微单数码相机 标准套装（约2430万有效像素 28-70mm镜头 1080P录像 a7K）"
              src="http://yanxuan.nosdn.127.net/aed3ae23b0ee7ad024d545b1300f2ba7.png"
              price="6399"
            />
          </div>
          <div className="layout-item">
            <Product
              title="索尼（SONY）ILCE-7K 全画幅微单数码相机 标准套装（约2430万有效像素 28-70mm镜头 1080P录像 a7K）"
              src="http://yanxuan.nosdn.127.net/aed3ae23b0ee7ad024d545b1300f2ba7.png"
              price="6399"
            />
          </div>
          <div className="layout-item">
            <Product
              title="索尼（SONY）ILCE-7K 全画幅微单数码相机 标准套装（约2430万有效像素 28-70mm镜头 1080P录像 a7K）"
              src="http://yanxuan.nosdn.127.net/aed3ae23b0ee7ad024d545b1300f2ba7.png"
              price="6399"
            />
          </div>
        </div>
      </main>

      <Backhome />
    </Page>
  )
}