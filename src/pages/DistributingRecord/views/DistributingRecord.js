import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getIntegralList} from '@/api'
import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import List from './List'
import Page from './styled'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      items: []
    }
  }

  componentDidMount() {
    this.loadIntegralList()
  }

  async loadIntegralList() {
    try {
      const {data} = await getIntegralList()
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
        <Helmet title="积分派发记录"/>

        <main>
          {this.state.loading
            ? <div className="u_m_xxx"><SkeletonPlaceholder count={3}/></div>
            : <List items={this.state.items} />
          }
        </main>

        <Backhome />
      </Page>
    )
  }
}
