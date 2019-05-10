import React from 'react'
import styled from 'styled-components'
import {Link, withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import service from '@/asset/images/icon/service.png'
import serviceActive from '@/asset/images/icon/service_active.png'
import choice from '@/asset/images/icon/choice.png'
import choiceActive from '@/asset/images/icon/choice_active.png'
import my from '@/asset/images/icon/my.png'
import myActive from '@/asset/images/icon/my_active.png'

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
  color: #f53b40;
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
        <MenuItem to="/" path={match.path} icon={service} iconActive={serviceActive} text="服务"/>
      </LayoutItem>
      <LayoutItem>
        <MenuItem to="/choice" path={match.path} icon={choice} iconActive={choiceActive} text="精选"/>
      </LayoutItem>
      <LayoutItem>
        <MenuItem to="/me" path={match.path} icon={my} iconActive={myActive} text="我的"/>
      </LayoutItem>
    </LayoutItems>
  ) 
}

export default withRouter(connect(null, null)(Menu))