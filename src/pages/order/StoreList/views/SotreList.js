import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getJDOrders} from '@/api'
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


export default class extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
    
    this.currentPage = 0
    this.state = {
      placeholderLoading: true,
      items: []
    }
  }

  componentDidMount() {
    const params = {page: this.currentPage++, orderType: 0}
    this.loadNextPage(params)
    this.scroll = new SimpleScroll(this.scrollContainer, this.loadData)
  }

  componentWillUnmount() {
    this.scroll.destroy()
  }

  async loadNextPage(params) {
    try {
      const {data} = await getJDOrders(params)
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data]}, () => {
          if(data.data.length) {
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
    const params = {page: this.currentPage++, orderType: 0}
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  render() {
    const {placeholderLoading} = this.state
    return (
      <Page>
        <Helmet title="商品订单" />

        {this.state.loading
          ? <div className="u_m_xxx"><SkeletonPlaceholder count={3}/></div>
          : (
            <div className="container" ref={node => this.scrollContainer = node}>
              <main>
                <Content placeholderLoading={placeholderLoading} items={this.state.items} />
              </main>
            </div>            
          )
        }

        <Backhome />
      </Page>
    )
  }
}