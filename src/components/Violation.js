import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import { push } from '../services/redirect'
import api from '../api';

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
const StyledItem = styled(Link)`
  display: block;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 3px;
`
const StyledHead = styled.div`
  position: relative;
  padding: 15px;
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background: #eaeaea;
    transform: scaleY(.5);
  }
`
const StyledBody = styled.div`
  padding: 15px;
`
const LayoutFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledLabel = styled.div`
  color: #888;
`
const Item = ({id, vehicleNo, type, vin, enginNo}) => {
  return (
    <StyledItem to={`/violation/${id}`}>
      <StyledHead>
        {vehicleNo}
      </StyledHead>
      <StyledBody>
        <LayoutFlex>
          <StyledLabel>车辆类型</StyledLabel>
          <div>{type}</div>
        </LayoutFlex>
        <LayoutFlex>
          <StyledLabel>车架号</StyledLabel>
          <div>{vin}</div>
        </LayoutFlex>
        <LayoutFlex>
          <StyledLabel>发动机号</StyledLabel>
          <div>{enginNo}</div>
        </LayoutFlex>
      </StyledBody> 
    </StyledItem>
  )
}

const List = ({items}) => {
  return (
    <LayoutItems>
      {items.map(item => {
        return (
          <Item 
            key={item.id}
            id={item.id}
            vehicleNo={item.vehicleNo}
            type={item.type}
            vin={item.vin}
            enginNo={item.enginNo}
          />
        )
      })}
    </LayoutItems>
  )
}

class Violation extends Component {
  state = {
    items: [],
    loading: true
  }
  
  componentDidMount() {
    api.getVehicleList()
      .then(res => {
        const {data} = res
        this.setState({items: data.items})
      })
      .then(() => {
        this.setState({loading: false})
      })
      .catch(err => {
      })
  }

  handleClick = () => {
    push('/add-vehicle')
  }

  render() {
    return (
      <LayoutPageContainer>
        {this.state.loading
          ? <SkeletonPlaceholder />
          : <List items={this.state.items}/>
        }
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