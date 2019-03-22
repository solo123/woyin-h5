import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

import fenleiActive from '../asset/images/icon/fenlei_active.svg'
import fenlei from '../asset/images/icon/fenlei.svg'
import liwuActive from '../asset/images/icon/liwu_active.svg'
import liwu from '../asset/images/icon/liwu.svg'
import wodeActive from '../asset/images/icon/wode_active.svg'
import wode from '../asset/images/icon/wode.svg'

const LayoutItems = styled.ul`
  display: flex;
  justify-content: space-between;
`
const LayoutItem = styled.li`
  flex: 1;
`
const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  background: #fff;
  font-size: 12px;
  padding: 6px 0;
  box-shadow: 0 -3px 4px rgba(0,0,0,.03);
`
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`
const StyledText = styled.p`
  color: #bfbfbf;
`
const StyledActiveText = styled(StyledText)`
  color: #3b8afc;
`

const MenuItem = ({to, path, icon, iconActive, text}) => {
  const match = to === path 
  return (
    <StyledLink to={to}>
      {match ? <StyledIcon src={iconActive} alt=""/> : <StyledIcon src={icon} alt=""/>}
      {match ? <StyledActiveText>{text}</StyledActiveText>: <StyledText>{text}</StyledText>}
    </StyledLink>
  )
}

const Menu = function({match}) {
  return (
    <LayoutItems>
      <LayoutItem>
        <MenuItem to="/" path={match.path} icon={fenlei} iconActive={fenleiActive} text="服务"/>
      </LayoutItem>
      <LayoutItem>
        <MenuItem to="/choice" path={match.path} icon={liwu} iconActive={liwuActive} text="精选"/>
      </LayoutItem>
      <LayoutItem>
        <MenuItem to="/me" path={match.path} icon={wode} iconActive={wodeActive} text="我的"/>
      </LayoutItem>
    </LayoutItems>
  ) 
}

export default withRouter(connect(null, null)(Menu))