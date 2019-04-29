import React from 'react'
import styled from 'styled-components'

const LayoutPage = styled.div`
  .w80{
    width: 80%;
  }
  .w50{
    width: 50%;
  }
  .w30{
    width: 30%;
  }
`
const StyledItem = styled.div`
    margin-bottom: 30px;
`
const StyledLine = styled.div`
    height: 25px;
    background: #eee;
    margin-bottom: 10px;
`
export default ({count = 1}) => {
  const items = []
  for(let i = 0; i < count; i++) {
    items.push((
      <StyledItem key={i}>
        <StyledLine/>
        <StyledLine className="w80"/>
        <StyledLine className="w50"/>
        <StyledLine className="w30"/>
      </StyledItem>
    ))
  }
  return <LayoutPage>{items}</LayoutPage>
}