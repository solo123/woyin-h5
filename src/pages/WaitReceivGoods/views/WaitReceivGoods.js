import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDOrders} from '@/api'
import Backhome from '@/common/Backhome'

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
    const params = {
      limit: 20,
      page: 0,
      orderType: 2
    }
    this.getJDOrders(params)
  }

  async getJDOrders(params) {
    try {
      const {data} = await getJDOrders(params)
      if(data.status === 200) {
        console.log(data)
        this.setState({items: data.data})
      }
    }finally {
    }
  }

  render() {
    return (
      <Page>
        <Helmet title="待收货" />

        <List items={this.state.items} />

        <Backhome />
      </Page>
    )
  }
}