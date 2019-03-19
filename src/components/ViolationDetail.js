import React, { Component } from 'react'
import styled from 'styled-components'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import { push } from '../services/redirect'
import api from '../api'

class ViolationDetail extends Component {
  state = {
    loading: true
  }
  
  componentDidMount() {
    api.getViolationList()
      .then(res => {
        const {data} = res
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
          : <div>违章详情</div>
        }
      </div>
    )
  }
}

export default ViolationDetail