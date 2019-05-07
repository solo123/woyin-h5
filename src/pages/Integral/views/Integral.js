import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import axios from 'axios'

import {getUserInfo} from '@/api'

import Backhome from '@/components/Backhome'
import Page from './styled'

import banner from '@/asset/images/integral/banner.png'
import integral from '@/asset/images/integral/integral.png'
import transfer from '@/asset/images/integral/transfer.png'

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        if(!data.data.length) {return}
        this.setState({...data.data[0]})
      }
    }finally {
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
              <div className="info">
                可用积分：<strong>{this.state.balance}</strong>
              </div>
              <div>
                <Link to="/distributing-record">积分派发记录</Link>
              </div>
            </div>
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

        <div className="link">
          <Link to="/record-entry">积分记录</Link>
        </div>

        <Backhome/>
      </Page>
    )
  }
}