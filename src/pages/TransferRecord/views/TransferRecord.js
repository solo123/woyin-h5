import React, { Component } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import {Helmet} from "react-helmet"

import config from '../../../config'
import {integralTransferRecord} from '../../../api'
import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'

import Backhome from '../../../common/Backhome'
import Page from './styled'
import List from './List'

const Content = ({loading, type, items}) => {
  if(loading) {
    return <SkeletonPlaceholder />
  }
  return <List items={items} type={type} />
}

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      type: '1',
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    const params = {
      limit: config.redeem.PAGE_LIMIT,
      page: 0,
      accessType: this.state.type
    }    
    this.loadData(params)
  }

  componentWillUnmount() {
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadData(params) {
    this.setState({loading: true})
    this.source = CancelToken.source()

    try {
      const {data} = await integralTransferRecord(params, {cancelToken: this.source.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  handleClick(type) {
    if(type === this.state.type) {return}
    this.setState({type}, () => {
      const params = {
        limit: config.transfer.PAGE_LIMIT,
        page: 0,
        accessType: type
      } 
      this.loadData(params)
    })
  }

  render() {
    const {loading, items, type} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="积分转赠记录"/>
        <nav>
          <ul>
            <li 
              className={classNames({active: type === '1'})} 
              onClick={() => this.handleClick('1')}
            >转赠</li>
            <li 
              className={classNames({active: type === '2'})} 
              onClick={() => this.handleClick('2')}
            >获得</li>
          </ul>
        </nav>

        <div className="container" ref={node => this.scrollContainer = node}>
          <main ref={node => this.itemsElem = node}>
            <div className="items">
              <Content loading={loading} items={items} type={type} />
            </div>
          </main>
        </div>

        <Backhome />
      </Page>
    )
  }
}
