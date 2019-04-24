import React, {Component} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import weui from 'weui.js'

import {getJDGoodsList} from '@/api'

import dz from '@/asset/images/home/dz.png'
import hf from '@/asset/images/home/hf.png'
import ls from '@/asset/images/home/ls.png'

const Page = styled.div`
  .box__head{
    display: flex;
    justify-content: center;
    &.dz{
      color: #0084a1;
      background: #bff4ff;
    }
    &.hf{
      color: #e0605d;
      background: #fedcdb;
    }
    &.ls{
      color: #f3a831;
      background: #feefac;
    }
    .content{
      padding: 5px 0;
      display: flex;
      .text{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 30px;
        font-size: 12px;
        h2{
          font-size: 16px;
        }
        p{
          margin-bottom: 15px;
        }
        span{
          text-align: center;
          border: 1px solid;
          border-radius: 10px;
          line-height: 1.3;
        }
      }
      .img{
        width: 110px;
        height: 80px;
      }
    }
  }
  .swiper{
    padding: 10px;
    .swiper-box{
      overflow-x: auto;
      display: flex;
    }
  }
  .item{
    text-align: center;
    margin-right: 10px;
    padding: 10px;
    background: #fff;
    width: 100px;
    .img{
    }
    .title{
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .link{
      color: #fff;
      padding: 0 20px;
      font-size: 12px;
      border-radius: 10px;
      background: #ef1a20;
      display: inline-block;
    }
  }
`

const prefix = 'https://img13.360buyimg.com/n2/'

function Item({id, src, name, data}) {
  const to = {
    pathname: `/store-detail/${id}`,
    state: {detail: data}
  }
  return (
    <div className="item">
      <Link to={to}>
        <img className="img" src={`${prefix}${src}`} alt=""/>
        <p className="title">{name}</p>
        <span className="link">兑换</span>
      </Link>
    </div>
  )
}

class Cate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const params = {
      goodsClassId: this.props.id,
      page: 0
    }    
    this.loadProducts(params)
  }

  async loadProducts(params) {
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({
          items: data.data.data
        })
      }
    }finally {
    }
  }
  
  render() {
    const {children} = this.props
    return (
      <section className="box">
        {children}
        <div className="box__body">
          <div className="swiper">
            <div className="swiper-box">
              {this.state.items.map(item => {
                return (
                  <Item
                    key={item.skuId}
                    id={item.skuId}
                    src={item.imagePath}
                    name={item.name}
                    data={item}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ({loading, items}) => {
  return (
    <Page>
      <Cate id="2">
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
      
      <Cate id="5">
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

      <Cate id="4">
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
    </Page>
  )
}