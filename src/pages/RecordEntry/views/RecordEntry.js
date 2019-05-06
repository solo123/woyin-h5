import React, {Component} from 'react'
import {createGlobalStyle} from 'styled-components'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"

import Backhome from '@/components/Backhome'
import Page from './styled'

import banner from '@/asset/images/recordEntry/banner.jpg'
import entry_0 from '@/asset/images/recordEntry/entry_0.png'
import entry_1 from '@/asset/images/recordEntry/entry_1.png'
import entry_2 from '@/asset/images/recordEntry/entry_2.png'
import arrow from '@/asset/images/recordEntry/arrow.png'

const GlobalStyle = createGlobalStyle`
  body{
    background: #f7f7f8 url(${banner}) no-repeat;
    background-size: contain;
  }
`

export default class extends Component {

  render() {
    return (
      <Page>
        <GlobalStyle/>
        <Helmet title="记录入口"/>

        <header>
          <h1>积分消费记录</h1>
        </header>

        <ul>
          <li>
            <Link className="link" to="/redeem-record">
              <img src={entry_0} alt=""/>
              <img className="arrow" src={arrow} alt=""/>
              <div className="content">
                <h2>积分代卖记录</h2>
                <p>积分代卖记录，轻松赚钱</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="link" to="/transfer-record">
              <img src={entry_1} alt=""/>
              <img className="arrow" src={arrow} alt=""/>
              <div className="content">
                <h2>积分转赠记录</h2>
                <p>积分转赠记录，轻松查看积分动态</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className="link" to="/credit-record">
              <img src={entry_2} alt=""/>
              <img className="arrow" src={arrow} alt=""/>
              <div className="content">
                <h2>信用卡还款记录</h2>
                <p>信用卡还款记录，轻松还款不怕逾期</p>
              </div>
            </Link>
          </li>
        </ul>

        <Backhome />
      </Page>
    )
  }
}