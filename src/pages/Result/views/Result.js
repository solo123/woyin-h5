import React from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"

import Page from './styled'

import success from '@/asset/images/success.svg'
import fail from '@/asset/images/fail.svg'

const ICON_SCHEMA = {
  'success': success,
  'fail': fail
}

export default function(props) {
  const {type = 'success', title = ''} = props.location.state

  return (
    <Page>
      <Helmet title="结果"/>

      <header>
        <img src={ICON_SCHEMA[type]} alt=""/>
        <h1>{title}</h1>
      </header>
      <div className="u_m_xxx">
        <Link className="btn btn-secondary" to="">回到首页</Link>
      </div>
    </Page>
  )
}