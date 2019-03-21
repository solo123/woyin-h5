import React from 'react'
import styled from 'styled-components'

const LayoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
`
const LayoutItem = styled.div`
  width: 33.33%;
  padding: 5px;
`

export default () => {
  return (
    <LayoutItems>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
      <LayoutItem>
        <div style={{height: 69, background: '#f7f7f8'}}></div>
      </LayoutItem>
    </LayoutItems>
  )
}