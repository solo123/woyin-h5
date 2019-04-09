import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'

import config from '../../../config'
import {integralTransferRecord} from '../../../api'
import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'

import Page from './styled'
import Backhome from '../../../common/Backhome'
import List from './List'

const Content = ({loading, items}) => {
  if(loading) {
    return <SkeletonPlaceholder />
  }
  return <List items={items} />
}

let source = null

const CancelToken = axios.CancelToken

export default class extends Component {
  state = {
    status: '10',
    title: '新建',
    seletViewFlag: false,
    items: [],
    loading: true
  }

  componentDidMount() {
    this.loadData()
  }

  componentWillUnmount() {
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadData() {
    this.setState({loading: true})
    this.source = CancelToken.source()
    const params = {
      limit: config.redeem.PAGE_LIMIT,
      page: 0
    }
    try {
      const {data} = await integralTransferRecord(params, {cancelToken: this.source.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  handleToggle = e => {
    this.setState({seletViewFlag: !this.state.seletViewFlag})
  }

  handleClick = (status, title) => {
    if(status === this.state.status) {return}
    source.cancel()
    this.setState({status, title}, () => {
      this.handleToggle()
      const params = {
        status: status,
        limit: config.redeem.PAGE_LIMIT,
        page: 0
      } 
      this.loadData(params)
    })
  }

  render() {
    const {loading, items} = this.state
    return (
      <Page>

        <div className="items">
          <Content loading={loading} items={items} />
        </div>

        <Backhome />
      </Page>
    )
  }
}
