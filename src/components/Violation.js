import React, { Component } from 'react'
import styled from 'styled-components'

import { push } from '../services/redirect'

const LayoutFixedBottom = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`
const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const LayoutBtnBox = styled.div`
  margin: 15px;
`
const LayoutItems = styled.div`
  padding: 15px 15px 0 15px;
`
const LayoutPageContainer = styled.div`
  margin-bottom: 80px;
`
const StyledItem = styled.div`
  padding: 50px 20px;
  margin-bottom: 15px;
  background: #fff;
`
const Item = () => {
  return (
    <StyledItem>
      item
    </StyledItem>
  )
}

class Violation extends Component {
  state = {
    items: []
  }

  handleClick = () => {
    push('/add-vehicle')
  }

  render() {
    return (
      <LayoutPageContainer>
        <LayoutItems>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </LayoutItems>
        <LayoutFixedBottom>
          <LayoutBtnBox>
            <PrimaryButton onClick={this.handleClick}>添加车辆</PrimaryButton>
          </LayoutBtnBox>
        </LayoutFixedBottom>
      </LayoutPageContainer>
    )
  }
}

export default Violation