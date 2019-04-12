import React, { Component } from 'react'
import styled from 'styled-components'

import {replace} from '../services/redirect'

import Backhome from '../common/Backhome'
import notFound from '../asset/images/404.svg'

const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`
const LayoutBtnBox = styled.div`
  margin: 15px;
`

const StyledPage = styled.div`
  padding-top: 50px;
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
      <div className="content">
        <img className="img" src={notFound} alt=""/>
        <h1>对不起，您访问的页面不存在</h1>
      </div>
      <LayoutBtnBox>
        <PrimaryButton onClick={() => replace('/')}>返回首页</PrimaryButton>
      </LayoutBtnBox>
      <Backhome />
    </StyledPage>
  )
}