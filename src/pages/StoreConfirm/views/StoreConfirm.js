import React, {Component} from 'react';
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import arrow from '@/asset/images/icon/arrow_right.svg'

import config from '@/config'
import Backhome from '@/common/Backhome'
import {push} from '@/services/redirect'
import Page from './styled'

class StoreConfirm extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      addrs: []
    }
  }

  handleClick() {
    if(this.state.addrs.length) {
      push('/addr')
    }else {
      push('/add-addr', {
        from: 'store'
      })
    }
  }

  handleSubmit() {
    push('/result')
  }

  render() {
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="购买确认" />

        <header>
          <div className="add-bar">
            <span>新增收货地址</span>
            <img className="icon" onClick={this.handleClick} src={arrow} alt=""/>
          </div>
        </header>

        <main>
          <section className="info">
            <h2>锐玛（EIRMAI） R10 单反相机干燥箱 防潮箱 密封镜头电子箱  中号 送大号吸湿卡 炫蓝色</h2>
            <ul>
              <li>
                <span>单价</span>
                <span>1000 积分</span>
              </li>
              <li>
                <span>数量</span>
                <span>x2</span>
              </li>
              <li>
                <span>运费</span>
                <span>600 积分</span>
              </li>
            </ul>
          </section>
          <div className="total">
            <span>订单总额</span>
            <span>10000积分</span>
          </div>
        </main>

        <div className="fixed-bottom">
          <div className="submit-btn" onClick={this.handleSubmit}>提交订单</div>
        </div>

        <Backhome />
      </Page>
    )
  }
}

export default StoreConfirm