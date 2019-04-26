import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getUserInfo} from '@/api'
import Backhome from '@/components/Backhome'

import Page from './styled'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadUserInfo()
  }

  async loadUserInfo() {
    try {
      const {data} = await getUserInfo()
      if(data.status === 200) {
        this.setState({...data.data[0]})
      }
    }finally {}
  }

  render() {
    const {userName, merchantName, userPhoneNo} = this.state
    return (
      <Page>
        <Helmet title="个人资料" />
        <main>
          <dl>
            <dt>姓名</dt>
            <dd>{userName}</dd>
          </dl>
          <dl>
            <dt>所属商户</dt>
            <dd>{merchantName}</dd>
          </dl>
          <dl>
            <dt>手机号码</dt>
            <dd>{userPhoneNo}</dd>
          </dl>
        </main>
        <Backhome />
      </Page>
    )
  }
}
