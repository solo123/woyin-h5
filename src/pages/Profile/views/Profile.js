import React, {Component} from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import util from '@/util'
import {getUserInfo, switchAccount} from '@/api'
import {replace} from '@/services/redirect'
import Backhome from '@/components/Backhome'

import Page from './styled'

import profileIcon from '@/asset/images/me/profile.png'
import arrowIcon from '@/asset/images/icon/arrow_right.svg'

async function handleSwitchAccount(params) {
  const loading = weui.loading('处理中')
  try {
    const {data} = await switchAccount(params)
    if(data.status === 200) {
      // 写入当前商户id
      localStorage.setItem('currentMerchantId', params.merchantId)
      replace('')
    }else {
      weui.alert(data.msg)
    }
  }finally {
    loading.hide()
  }
}

function createAccoutList(data) {
  return data.map(item => {
    return {
      label: item.merchantName,
      onClick: () => {
        const params = {
          merchantId: item.merchantId,
          userId: item.userId
        }
        handleSwitchAccount(params)
      }
    }
  })
}

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      accountList: []
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
        const account = util.getAccountById(data.data)
        this.setState({...account, accountList: data.data})
      }
    }finally {
    }
  }

  handleClick() {
    const data = createAccoutList(this.state.accountList)
    if(!data.length) {
      return
    }
    weui.actionSheet(
      data, 
      [
        {
          label: '取消',
          onClick: function () {
          }
        }
      ])
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
          <dl onClick={this.handleClick}>
            <dt>切换账户</dt>
            <dd><img className="icon" src={arrowIcon} alt=""/></dd>
          </dl>
        </main>
        <Backhome />
      </Page>
    )
  }
}
