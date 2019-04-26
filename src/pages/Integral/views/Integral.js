import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"

import {getIntegralList} from '@/api'
import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import List from './List'
import Page from './styled'

import banner from '@/asset/images/integral/banner.png'
import integral from '@/asset/images/integral/integral.png'
import transfer from '@/asset/images/integral/transfer.png'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      items: []
    }
  }

  componentDidMount() {
    this.loadIntegralList()
  }

  async loadIntegralList() {
    try {
      const {data} = await getIntegralList()
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <Page>
        <Helmet title="我的积分"/>

        <header>
          <img src={banner} alt=""/>
          <div className="content">
            <div className="integral">
              <div>
                可用积分：<strong>2500</strong>
              </div>
              <div>
                <Link to="/distributing-record">积分派发记录</Link>
              </div>
            </div>
            <Link to="/">添加积分券</Link>
          </div>
        </header>
        
        <nav>
          <Link to="/redeem">
            <img src={integral} alt=""/>积分代卖
          </Link>
          <Link to="/transfer">
            <img src={transfer} alt=""/>积分转赠
          </Link>
        </nav>

        <main>
          <h2>积分券记录</h2>
          {this.state.loading
            ? <div className="u_m_xxx"><SkeletonPlaceholder count={2}/></div>
            : <List items={this.state.items} />
          }
        </main>

        <Backhome />
      </Page>
    )
  }
}