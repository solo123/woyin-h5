import React, { Component } from 'react'
import styled from 'styled-components'

import empty from '../asset/images/empty.svg'

const StyledContainer = styled.div`
  padding: 40px 0;
  color: #aaa;
  text-align: center;
  img{
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
`

export default function () {
  return (
    <StyledContainer>
      <img src={empty} alt="暂无数据"/>
      <div>暂无数据</div>
    </StyledContainer>
  )
}