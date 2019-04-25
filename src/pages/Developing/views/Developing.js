import React from 'react';
import styled from 'styled-components'
import {Helmet} from "react-helmet"

import {replace} from '@/services/redirect'

import Backhome from '@/components/Backhome'
import developing from '@/asset/images/developing.svg'

const Page = styled.div`
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
    <Page>
      <Helmet defaultTitle="沃银企服" title="开发中"  />
      <div className="content">
        <img className="img" src={developing} alt=""/>
        <h1>该页面正在开发中</h1>
      </div>
      <div className="box">
        <button className="btn btn-secondary" onClick={() => replace('/')}>返回首页</button>
      </div>

      <Backhome />
    </Page>
  )
}