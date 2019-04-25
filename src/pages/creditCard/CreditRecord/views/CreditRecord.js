import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import {getCreditRecord} from '@/api'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import arrowDownIcon from '@/asset/images/icon/arrow_down.svg'
import Backhome from '@/components/Backhome'
import Page from './styled'
import Select from './Select'
import List from './List'
import SimpleScroll from '@/components/SimpleScroll'

const Content = ({placeholderLoading, items}) => {
  if(placeholderLoading) {
    return <SkeletonPlaceholder count={3} />
  }
  return <List items={items} />
}

const CancelToken = axios.CancelToken

let currentPage = 0
export default class extends Component {
  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.loadData = this.loadData.bind(this)

    this.state = {
      status: '10',
      title: '新建',
      items: [],
      selectFlag: false,
      placeholderLoading: true
    }
  }

  componentDidMount() {
    this.scroll = new SimpleScroll(this.wrapper, this.loadData)
    const params = {page: currentPage++, status: this.state.status}
    this.loadNextPage(params)
  }

  componentWillUnmount() {
    this.scroll.destroy()
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadNextPage(params) {
    this.source = CancelToken.source()
    try {
      const {data} = await getCreditRecord(params, {cancelToken: this.source.token})
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data.withdrawal]}, () => {
          if(data.data.withdrawal.length) {
            this.scroll.finish()
          }
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
    currentPage = 0
    this.scroll.closeScroll()
    this.setState({items: []})
  }

  loadData() {
    const params = {page: currentPage++, status: this.state.status}
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  handleToggle(e) {
    this.setState({selectFlag: !this.state.selectFlag})
  }

  handleClick(status, title) {
    if(status === this.state.status) {return}
    this.handleToggle()
    this.reset()
    this.setState({status, title, placeholderLoading: true}, () => {
      const params = {page: currentPage++, status: this.state.status}
      this.loadNextPage(params)
    })
  }

  render() {
    const {placeholderLoading, items, selectFlag} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="信用卡还款记录"/>

        <div className="page">
          <div className="page-head">

            <div className="selecter" onClick={this.handleToggle}>
              {this.state.title}
              <img src={arrowDownIcon} className={classnames({'active': selectFlag})} alt=""/>
            </div>

          </div>
          <div className="page-body">

            <div className="wrapper" ref={node => this.wrapper = node}>
              <div className="scroller">

                <div className="u_px_xxx u_pt_xxx">
                  <Content placeholderLoading={placeholderLoading} items={items} />
                </div>

              </div>
            </div>

          </div>
        </div>

        <Select 
          status={this.state.status}
          flag={selectFlag} 
          handleClick={this.handleClick}
          handleClose={this.handleToggle}
        />

        <Backhome />
      </Page>
    )
  }
}