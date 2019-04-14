import React, { Component } from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getVoucherRecord} from '../../../api'
import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'

import Page from './styled'
import Backhome from '../../../common/Backhome'
import SimpleScroll from '@/components/SimpleScroll'
import List from './List'

const Content = ({placeholderLoading, items}) => {
  if(placeholderLoading) {
    return <SkeletonPlaceholder count={3} />
  }
  return <List items={items} />
}

const CancelToken = axios.CancelToken
export default class extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)

    this.currentPage = 0

    this.state = {
      items: [],
      placeholderLoading: true
    }
  }

  componentDidMount() {
    this.scroll = new SimpleScroll(this.wrapper, this.loadData)

    const params = {page: this.currentPage++}
    this.loadNextPage(params)
  }

  componentWillUnmount() {
    this.scroll.destroy()
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadNextPage(params) {
    this.source = CancelToken.source()
    try {
      const {data} = await getVoucherRecord(params)
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
    const params = {page: this.currentPage++}
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }  

  render() {
    const {items, placeholderLoading} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="电子卡券"/>

        <div className="page">
          <div className="page-body">

            <div className="wrapper" ref={node => this.wrapper = node}>
              <div className="scroller">

                <div className="u_px_xxx u_pt_xxx">
                  <Content items={items} placeholderLoading={placeholderLoading} />
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