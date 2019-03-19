import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import api from '../api'

const LayoutItems = styled.div`
  padding: 15px 15px 0 15px;
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

const Item = ({id, title, detail}) => {
  return (
    <StyledItem to={`/violation-detail/${id}`}>
      <StyledHead>
        {title}
      </StyledHead>
      <StyledBody>
        {detail}
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
            title={item.title}
            detail={item.detail}
          />
        )
      })}
    </LayoutItems>
  )
}

class ViolationList extends Component {
  state = {
    items: [],
    loading: true
  }
  
  componentDidMount() {
    api.getViolationList()
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

  render() {
    return (
      <div>
        {this.state.loading
          ? <SkeletonPlaceholder />
          : <List items={this.state.items}/>
        }
      </div>
    )
  }
}

export default ViolationList