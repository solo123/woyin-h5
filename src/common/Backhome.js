import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom"

import homeIcon from '../asset/images/icon/home.svg'

const LayoutFixedRight = styled.div`
  position: fixed;
  right: 0;
  bottom: 100px;
`
const StyledBackhome = styled.div`
  background: rgba(0, 0, 0, .5);
  padding: 5px 3px 6px 5px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`
const StyledHomeIcon = styled.img`
  width: 35px;
  height: 35px;
`

export default function () {
  return (
    <LayoutFixedRight>
      <Link to="/">
        <StyledBackhome>
          <StyledHomeIcon src={homeIcon} alt="回到首页" />
        </StyledBackhome>
      </Link>
    </LayoutFixedRight>
  )
}