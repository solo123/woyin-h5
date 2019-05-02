import React, {Component} from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"

import {getUserInfo} from '@/api'
import Backhome from '@/components/Backhome'

import Page from './styled'

import profileIcon from '@/asset/images/me/profile.png'

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
        this.setState({...data.data[0]})
      }
    }finally {
    }
  }

  render() {
    const {userName, merchantName, userPhoneNo} = this.state
    return (
      <Page>
        <Helmet title="个人资料"/>

        <header>
          <img src={profileIcon} alt=""/>
        </header>

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
