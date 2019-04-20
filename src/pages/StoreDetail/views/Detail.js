import React, {Component} from 'react';
import {Helmet} from "react-helmet"
import weui from 'weui.js'
import axios from 'axios'

import config from '@/config'
import {getUserInfo} from '@/api'
import Backhome from '@/common/Backhome'
import Layer from '@/common/Layer'
import ConfirmInfo from './ConfirmInfo'
import {push} from '@/services/redirect'
import Page from './styled'

const CancelToken = axios.CancelToken

class Detail extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)

    this.state = {
      show: false,

      count: 1,

      integral: 1400,
      availableIntegral: 1900     
    }
  }

  componentDidMount() {
    this.getUserInfo()
  }

  componentWillUnmount() {
    this.source && this.source.cancel('Operation canceled by the user.')
  }

  async getUserInfo() {
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
    if((this.state.integral * this.state.count) > this.state.availableIntegral) {
      weui.alert('积分不足')
      return false
    }
    return true
  }

  handleClick(count) {
    if(config.store.MAX_COUNT >= count && count >= config.ecard.MIN_COUNT) {
      this.setState({count})
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
    push('/store-confirm')
  }

  render() {
    const totalIntegral = this.state.count * this.state.integral
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="商品详情"  />

        <header>
          <div className="swiper">
            <img src="http://img13.360buyimg.com/n0/jfs/t19621/298/1931817790/260874/b4152b69/5add87fbNa0547d28.jpg" alt=""/>
          </div>
          <div className="info">
            <div className="head">
              <span className="price">¥14</span>
              <span className="badge">有货</span>
            </div>
            <h2>蓝月亮 芦荟抑菌 滋润保湿洗手液  500g瓶+500g袋装补充装</h2>
          </div>
        </header>

        <main>
          <table>
            <thead>
              <tr>
                <th colSpan="2">商品参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
              <tr>
                <th>功效</th>
                <td>清洁</td>
              </tr>
            </tbody>
          </table>
        </main>

        <div className="fixed-bottom">
          <div className="submit-btn" onClick={this.handleToggle}>立即兑换</div>
        </div>
            
        <Layer show={this.state.show} handleClose={this.handleToggle}>
          <ConfirmInfo
            count={this.state.count}
            totalIntegral={totalIntegral}
            availableIntegral={this.state.availableIntegral}
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