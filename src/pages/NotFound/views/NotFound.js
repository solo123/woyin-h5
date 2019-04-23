import React from 'react'
import styled from 'styled-components'
import {Helmet} from "react-helmet"

import {replace} from '@/services/redirect'

import Backhome from '@/common/Backhome'
import notFound from '@/asset/images/404.svg'

const StyledPage = styled.div`
  padding-top: 50px;
  .box{
    margin: 15px;
  }
  .content{
    text-align: center;
    margin-bottom: 50px;
  }
  .img{
    width: 100px;
    margin-bottom: 20px;
  }
  h1{
    color: #888;
    font-size: 16px;
    font-weight: bold;
  }
`

export default function() {
  return (
    <StyledPage>
      <Helmet defaultTitle="沃银企服" title="页面不存在"/>
      <div className="content">
        <img className="img" src={notFound} alt=""/>
        <h1>对不起，您访问的页面不存在</h1>
      </div>
      <div className="box">
        <button className="btn btn-secondary" onClick={() => replace('/')}>返回首页</button>
      </div>
      <Backhome />
    </StyledPage>
  )
}