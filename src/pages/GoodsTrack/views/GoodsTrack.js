import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDTrack} from '@/api'
import Backhome from '@/common/Backhome'
import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'

import List from './List'

import Page from './styled'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getJDTrack()
  }

  async getJDTrack() {
    try {
      const {data} = await getJDTrack()
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {}
  }

  render() {
    return (
      <Page>
        <Helmet title="物流信息" />
        <div className="u_m_xxx">
          <h1>物流信息</h1>
        </div>
        <div className="u_m_xxx">
          <List items={this.state.items} />
        </div>

        <Backhome />
      </Page>
    )
  }
}
