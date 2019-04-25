import React, { Component } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {transferRecord} from '@/api'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'

import Backhome from '@/components/Backhome'
import Page from './styled'
import List from './List'
import SimpleScroll from '@/components/SimpleScroll'

const Content = ({placeholderLoading, type, items}) => {
  if(placeholderLoading) {
    return <SkeletonPlaceholder count={3}/>
  }
  return <List items={items} type={type} />
}

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.loadData = this.loadData.bind(this)

    this.currentPage = 0
    this.state = {
      type: '1',
      items: [],
      placeholderLoading: true
    }
  }

  componentDidMount() {
    this.scroll = new SimpleScroll(this.wrapper, this.loadData)
    this.loadData()
  }

  componentWillUnmount() {
    this.scroll.destroy()
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadNextPage(params) {
    this.source = CancelToken.source()
    try {
      const {data} = await transferRecord(params, {cancelToken: this.source.token})
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data]}, () => {
          this.scroll.finish()
        })
      }
    }finally {
      if(this.loading) {
        this.loading.hide()
      }
      this.setState({placeholderLoading: false})
    }
  }

  reset() {
    this.currentPage = 0
    this.scroll.closeScroll()
    this.setState({items: []})
  }

  loadData() {
    const params = {page: this.currentPage++, accessType: this.state.type}
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  handleClick(type) {
    if(type === this.state.type) {return}
    this.reset()
    this.setState({type, placeholderLoading: true}, () => {
      const params = {page: this.currentPage++, accessType: type}
      this.loadNextPage(params)
    })
  }

  render() {
    const {placeholderLoading, items, type} = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="积分转赠记录"/>

        <div className="page">
          <div className="page-head">
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
          </div>
          <div className="page-body">
            <div className="wrapper" ref={node => this.wrapper = node}>
              <div className="scroller">
                <div className="u_px_xxx u_pt_xxx">
                  <Content placeholderLoading={placeholderLoading} items={items} type={type} />
                </div>
              </div>
            </div>
          </div>
        </div>


          

        <Backhome />
      </Page>
    )
  }
}
