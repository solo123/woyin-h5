import React, {Component} from 'react';
import {Helmet} from "react-helmet"
import weui from 'weui.js'
import axios from 'axios'

import config from '@/config'
import {getUserInfo} from '@/api'
import Backhome from '@/components/Backhome'
import Layer from '@/components/Layer'
import ConfirmInfo from './ConfirmInfo'
import {push} from '@/services/redirect'
import Page from './styled'

const prefix = 'https://img13.360buyimg.com/n0/'
const CancelToken = axios.CancelToken

class Detail extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)

    const integral = Math.round(this.props.location.state.detail.jdPrice * 100)
    this.state = {
      show: false,
      count: 1,
      integral: integral,
      balance: 0     
    }
  }

  componentDidMount() {
    this.loadUserInfo()
  }

  componentWillUnmount() {
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.source = CancelToken.source()
    try {
      const {data} = await getUserInfo()
      if(data.status === 200) {
        if(!data.data.length) {return}
        this.setState({...data.data[0]})
      }      
    }finally {
    }
  }

  verify() {
    if((this.state.integral * this.state.count) > this.state.balance) {
      weui.alert('积分不足')
      return false
    }
    return true
  }

  handleClick(count) {
    count = Number(count)
    if(config.store.MAX_COUNT >= count && count >= config.ecard.MIN_COUNT) {
      this.setState({count: count})
    }    
  }

  handleChange() {
  }

  handleToggle() {
    this.setState({show: !this.state.show})
  }

  handleSubmit() {
    if(!this.verify()) {
      return
    }
    const {name, jdPrice, skuId} = this.props.location.state.detail
    const {count} = this.state
    push('/store-confirm', {
      name,
      jdPrice,
      skuId,
      count
    })
  }

  render() {
    const totalIntegral = this.state.count * this.state.integral
    const {name, jdPrice, imagePath, param} = this.props.location.state.detail
    return (
      <Page>
        <Helmet title="商品详情"  />

        <header>
          <div className="swiper">
            <img src={`${prefix}${imagePath}`} alt=""/>
          </div>
          <div className="info">
            <div className="head">
              <span className="price">¥{jdPrice}</span>
              <span className="badge">有货</span>
            </div>
            <h2>{name}</h2>
          </div>
        </header>
        <main>
          <div dangerouslySetInnerHTML={{__html: param}}></div>
        </main>

        <div className="fixed-bottom">
          <div className="submit-btn" onClick={this.handleToggle}>立即兑换</div>
        </div>
            
        <Layer show={this.state.show} handleClose={this.handleToggle}>
          <ConfirmInfo
            count={this.state.count}
            totalIntegral={totalIntegral}
            balance={this.state.balance}
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Layer>

        <Backhome />
      </Page>
    )
  }
}

export default Detail