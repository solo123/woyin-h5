import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getRedeemRecord} from '@/api'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import arrowDownIcon from '@/asset/images/icon/arrow_down.svg'
import Backhome from '@/components/Backhome'
import List from './List'
import Select from './Select'
import Page from './styled'
import SimpleScroll from '@/components/SimpleScroll'

const Content = ({placeholderLoading, items}) => {
  if(placeholderLoading) {
    return <SkeletonPlaceholder count={3} />
  }
  return <List items={items} />
}

let currentPage = 0
const CancelToken = axios.CancelToken
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
      seletViewFlag: false,
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
      const {data} = await getRedeemRecord(params, {cancelToken: this.source.token})
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data.withdrawal]}, () => {
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
    this.setState({seletViewFlag: !this.state.seletViewFlag})
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
    const {placeholderLoading, items, seletViewFlag} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="积分代卖记录"/>

        <div className="page">
          <div className="page-head">
            <div className="selecter" onClick={this.handleToggle}>
              {this.state.title}
              <img src={arrowDownIcon} className={classnames({'active': seletViewFlag})} alt=""/>
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
          flag={seletViewFlag} 
          handleClick={this.handleClick}
        />

        <Backhome />
      </Page>
    )
  }
}