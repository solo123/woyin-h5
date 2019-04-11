import React from 'react'
import styled from 'styled-components'

const LayoutPage = styled.div`
  margin: 0 10px;
  .aside{
    height: 80px;
    background: #eaeaea;
  }
  .main{
    display: flex;
  }
  .cell{
    flex: 1;
    height: 80px;
    background: #eaeaea;
    & + .cell{
      margin-left: 10px;
    }
  }
`

export default function() {
  return (
    <LayoutPage>
      <div className="main" style={{marginBottom: 10}}>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>
      <div className="aside"></div>
    </LayoutPage>
  )
}