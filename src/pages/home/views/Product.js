import React, {Component} from 'react'
import {Link} from "react-router-dom"

import {getSellingGoods} from '@/api'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'

import dz from '@/asset/images/home/dz.png'
import hf from '@/asset/images/home/hf.png'
import ls from '@/asset/images/home/ls.png'

const prefix = 'https://img13.360buyimg.com/n2/'

function Item({id, src, name, data}) {
  const to = {
    pathname: `/store-detail/${id}`,
    state: {detail: data}
  }
  return (
    <div className="item">
      <Link to={to}>
        <img className="img" src={src} alt=""/>
        <p className="title">{name}</p>
        <span className="link">兑换</span>
      </Link>
    </div>
  )
}

function Cate(props) {
  const {loading, items, children} = props

  return (
    <section className="box">
      <div>
        {children}
      </div>
      <div className="box__body">
        {loading
          ? <div className="u_m_xxx"><SkeletonPlaceholder/></div>
          : (
              <div className="swiper">
                <div className="swiper-box">
                  {items.map(item => {
                    return (
                      <Item
                        key={item.skuId}
                        id={item.skuId}
                        src={`${prefix}${item.imagePath}`}
                        name={item.name}
                        data={item}
                      />
                    )
                  })}
                </div>
              </div>
            )
        }
      </div>
    </section>
  )
}

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    this.loadHotSell()
  }

  async loadHotSell() {
    try {
      const {data} = await getSellingGoods()
      if(data.status === 200) {
        this.setState({
          items: data.data.host
        })
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    const {loading, items} = this.state
    const one = items[0] || []
    const two = items[1] || []
    const three = items[2] || []

    return (
      <div>
        <Cate loading={loading} items={one}>
          <Link to="/store-jd">
            <div className="box__head dz">
              <div className="content">
                <div className="text">
                  <h2>电子产品</h2>
                  <p>电子产品分类标语</p>
                  <span>查看详情</span>
                </div>
                <img className="img" src={dz} alt=""/>
              </div>
            </div>
          </Link>
        </Cate>
        <Cate loading={loading} items={two}>
          <Link to="/store-jd">
            <div className="box__head ls">
              <div className="content">
                <div className="text">
                  <h2>食品饮料</h2>
                  <p>零食类分类标语</p>
                  <span>查看详情</span>
                </div>
                <img className="img" src={ls} alt=""/>
              </div>
            </div>
          </Link>
        </Cate>
        <Cate loading={loading} items={three}>
          <Link to="/store-jd">
            <div className="box__head hf">
              <div className="content">
                <div className="text">
                  <h2>护肤美容</h2>
                  <p>护肤类分类标语</p>
                  <span>查看详情</span>
                </div>
                <img className="img" src={hf} alt=""/>
              </div>
            </div>          
          </Link>
        </Cate>
      </div>
    )
  }
}

export default Product