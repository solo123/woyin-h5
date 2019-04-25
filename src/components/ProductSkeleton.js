import React from 'react'
import styled from 'styled-components'

const LayoutPage = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  li{
    width: 33.33%;
    padding: 5px;
    .cell{
      height: 71px;
      background: #eaeaea;
    }
  }
`

export default () => (
  <LayoutPage>
    <li>
      <div className="cell"></div>
    </li>
    <li>
      <div className="cell"></div>
    </li>
    <li>
      <div className="cell"></div>
    </li>
  </LayoutPage>
)