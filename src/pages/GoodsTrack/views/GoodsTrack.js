import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDTrack} from '@/api'
import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'

import List from './List'
import Page from './styled'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    this.loadJDTrack()
  }

  async loadJDTrack() {
    try {
      const {data} = await getJDTrack()
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <Page>
        <Helmet title="物流信息" />
        <div className="u_m_xxx">
          <h1>物流信息</h1>
        </div>

        {this.state.loading
          ? <div className="u_m_xxx"><SkeletonPlaceholder count={3}/></div>
          : (
              <div className="u_m_xxx">
                <List items={this.state.items} />
              </div>
            )
        }

        <Backhome />
      </Page>
    )
  }
}
