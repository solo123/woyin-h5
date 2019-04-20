import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

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

function Item({children, title, subTitle, type}) {
  return (
    <section className="box">
      {children}
      <div className="box__body">
        <div className="swiper">
          <div className="swiper-box">
            <div className="item">
              <Link to="/store-jd">
                <img className="img" src={src} alt=""/>
                <p className="title">大头风扇大头风扇</p>
                <span className="link">兑换</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/store-jd">
                <img className="img" src={src} alt=""/>
                <p className="title">大头风扇大头风扇</p>
                <span className="link">兑换</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/store-jd">
                <img className="img" src={src} alt=""/>
                <p className="title">大头风扇大头风扇</p>
                <span className="link">兑换</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/store-jd">
                <img className="img" src={src} alt=""/>
                <p className="title">大头风扇大头风扇</p>
                <span className="link">兑换</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const src = 'https://yanxuan.nosdn.127.net/aed3ae23b0ee7ad024d545b1300f2ba7.png'

export default ({loading, items}) => {
  return (
    <Page>
      <Item>
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
      </Item>
      <Item>
        <Link to="/store-jd">
          <div className="box__head hf">
            <div className="content">
              <div className="text">
                <h2>护肤类</h2>
                <p>护肤类分类标语</p>
                <span>查看详情</span>
              </div>
              <img className="img" src={hf} alt=""/>
            </div>
          </div>
        </Link>
      </Item>
      <Item>
        <Link to="/store-jd">
          <div className="box__head ls">
            <div className="content">
              <div className="text">
                <h2>零食类</h2>
                <p>零食类分类标语</p>
                <span>查看详情</span>
              </div>
              <img className="img" src={ls} alt=""/>
            </div>
          </div>
        </Link>
      </Item>
    </Page>
  )
}