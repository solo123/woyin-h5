import React, {Component} from 'react'
import classNames from 'classnames'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getOrderList} from '@/api'
import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import SimpleScroll from '@/components/SimpleScroll'
import List from './List'
import Page from './styled'

const Content = ({placeholderLoading, items}) => {
  if(placeholderLoading) {
    return <div className="u_mx_xxx u_pt_xxx"><SkeletonPlaceholder count={3} /></div>
  }
  if(items.length) {
    return <List items={items} />
  }
  return <EmptyArrayPlaceholder />
}

class OrderList extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.currentPage = 0
    this.state = {
      status: '11',
      items: [],
      placeholderLoading: true
    }
  }

  componentDidMount() {
    const params = {page: this.currentPage++, status: this.state.status}
    this.loadNextPage(params)
    this.scroll = new SimpleScroll(this.scrollContainer, this.loadData)
  }

  componentWillUnmount() {
    this.scroll.destroy()
  }

  async loadNextPage(params) {
    try {
      const {data} = await getOrderList(params)
      if(data.status === 200){
        this.setState({items: [...this.state.items, ...data.data.data]}, () => {
          if(data.data.data.length) {
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

  loadData() {
    const params = {page: this.currentPage++, status: this.state.status}
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  reset() {
    this.currentPage = 0
    this.scroll.closeScroll()
    this.setState({items: []})
  }

  handleClick(status) {
    if(this.state.status === status) {return}
    this.reset()
    this.setState({status: status, placeholderLoading: true}, () => {
      const params = {page: this.currentPage++, status: this.state.status}
      this.loadNextPage(params)      
    })
  }

  render() {
    const {placeholderLoading, status, items} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="我的订单"/>
        <ul>
          <li className={classNames({active: status === '11'})} onClick={() => this.handleClick('11')}>处理中</li>
          <li className={classNames({active: status === '12'})} onClick={() => this.handleClick('12')}>成功</li>
          <li className={classNames({active: status === '13'})} onClick={() => this.handleClick('13')}>失败</li>
        </ul>
        <div className="container" ref={node => this.scrollContainer = node}>
          <main>
            <Content placeholderLoading={placeholderLoading} items={items} />
          </main>
        </div>
        <Backhome />
      </Page>
    )
  }
}

export default OrderList