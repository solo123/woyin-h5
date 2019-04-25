import React from 'react'
import styled from 'styled-components'

const LayoutPage = styled.div`
  .item{
    margin-bottom: 30px;
  }
  .line{
    height: 25px;
    background: #eee;
    margin-bottom: 10px;
  }
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

export default ({count = 1}) => {
  const items = []
  for(let i = 0; i < count; i++) {
    items.push((
      <div key={i} className="item">
        <div className="line"></div>
        <div className="line w80"></div>
        <div className="line w50"></div>
        <div className="line w30"></div>
      </div>
    ))
  }
  return <LayoutPage>{items}</LayoutPage>
}