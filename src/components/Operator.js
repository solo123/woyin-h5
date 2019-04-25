import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 105px;
  display: inline-block;
  vertical-align: middle;
  span,
  input {
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #f6f6f6;
    text-align: center;
  }
  .num{
    -webkit-appearance: none;
    border-radius: 0;
    width: 45px;
    height: 30px;
    line-height: normal;
    border: 0;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    background: #f6f6f6;
    font-size: 12px;
    text-align: center;
    font-family: industry;
  }
`
export default ({count, onClick, onChange}) => {
  return (
    <StyledContainer>
      <span className="minus" onClick={() => onClick(count - 1)}>-</span>
      <input className="num" type="text" onChange={onChange} value={count}/>
      <span className="plus" onClick={() => onClick(count + 1)}>+</span>
    </StyledContainer>
  )
}

