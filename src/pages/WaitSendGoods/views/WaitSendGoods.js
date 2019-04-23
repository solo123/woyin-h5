import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDOrders} from '@/api'
import Backhome from '@/common/Backhome'
import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'

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
    const params = {
      limit: 20,
      page: 0,
      orderType: 1
    }
    this.getJDOrders(params)
  }

  async getJDOrders(params) {
    try {
      const {data} = await getJDOrders(params)
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
        <Helmet title="待发货" />

        {this.state.loading
          ? <div className="u_m_xxx"><SkeletonPlaceholder count={3}/></div>
          : <List items={this.state.items} />
        }

        <Backhome />
      </Page>
    )
  }
}