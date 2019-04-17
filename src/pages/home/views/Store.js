import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

import jd from '@/asset/images/home/jd.png'
import yx from '@/asset/images/home/yx.png'
import zy from '@/asset/images/home/zy.png'

const LayoutPage = styled.div`
  margin: 0 10px;
  h2{
    font-size: 16px;
    font-weight: bold;
  }
  .aside{
    position: relative;
    .content{
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      color: #fff;
      text-align: center;
    }
  }
  .main{
    display: flex;
  }
  .cell{
    position: relative;
    flex: 1;
    & + .cell{
      margin-left: 10px;
    }
    .content{
      position: absolute;
      top: 15%;
      left: 10%;
      color: #fff;
    }
  }
`

export default function() {
  return (
    <LayoutPage>
      <div className="main" style={{marginBottom: 10}}>
        <div className="cell">
          <Link to="/developing">
            <img src={jd} alt=""/>
            <div className="content">
              <h2>京东商城</h2>
              <p>售前售后无忧</p>
            </div>
          </Link>
        </div>
        <div className="cell">
          <Link to="/developing">
            <img src={yx} alt=""/>
            <div className="content">
              <h2>网易严选</h2>
              <p>开启品质生活</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="aside">
        <Link to="/developing">
          <img src={zy} alt=""/>
          <div className="content">
            <h2>自营商城</h2>
            <p>产品丰富多样</p>
          </div>
        </Link>
      </div>
    </LayoutPage>
  )
}