import React, { Component } from 'react'
import {Helmet} from "react-helmet"
import axios from 'axios'

import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/common/EmptyArrayPlaceholder'
import {getProducts} from '@/api'
import Page from './styled'
import List from './List'
import Backhome from '@/common/Backhome'

import banner from '@/asset/images/ecard/banner.png'

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadProducts(id)
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
  }

  async loadProducts(id) {
    this.setState({loading: true})
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    const {loading, items} = this.state

    if(loading) {
      return <div className="u_m_xxx"><SkeletonPlaceholder count={3} /></div>  
    }

    if(!items.length) {
      return <EmptyArrayPlaceholder />
    }

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="电子卡券"  />
        <header>
          <img src={banner} alt=""/>
        </header>
        <section>
          <h2 className="purple">
            电商平台电子券
          </h2>
          <List items={items} />
        </section>
        <section>
          <h2 className="blue">
            交通旅行
          </h2>
          <List items={items} />
        </section>
        <section>
          <h2 className="blue-deep">
            饮食美味
          </h2>
          <List items={items} />            
        </section>
        <section>
          <h2 className="orange">
            购物消费
          </h2>
          <List items={items} />            
        </section>
        
        <Backhome />
      </Page>
    )
  }
}