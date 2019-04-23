import React from 'react'
import { Link } from "react-router-dom"
import {Helmet} from "react-helmet"

import util from '@/util'
import Page from './styled'
import money from '@/asset/images/icon/money.svg'

export default function(props) {
  const {title = '', name = '', integral = 0, date = new Date().getTime()} = props

  return (
    <Page>
      <Helmet title="结果" />
      <header>
        <img src={money} alt=""/>
        <h1>{title}</h1>
      </header>
      <div className="u_m_xxx">
        <ul>
          <li>
            <span>商品名称</span>
            <span>{name}</span>
          </li>
          <li>
            <span>扣除积分</span>
            <span>{integral}</span>
          </li>
          <li>
            <span>创建时间</span>
            <span>{util.formatTimestamp2(date)}</span>
          </li>
        </ul>
      </div>

      <div className="u_m_xxx">
        <Link className="btn btn-secondary" to="">回到首页</Link>
      </div>
    </Page>
  )
}