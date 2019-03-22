import React from 'react'
import styled from 'styled-components'

const LayoutPage = styled.div`
  display: flex;
  margin: 0 5px;
  .aside{
    flex: 1;
    background: #eaeaea;
  }
  .main{
    flex: 1;
    margin-left: 10px;
  }
  .cell{
    height: 80px;
    background: #eaeaea;
  }
`

export default function() {
  return (
    <LayoutPage>
      <div className="aside"></div>
      <div className="main">
        <div className="cell" style={{marginBottom: 10}}></div>
        <div className="cell"></div>
      </div>
    </LayoutPage>
  )
}