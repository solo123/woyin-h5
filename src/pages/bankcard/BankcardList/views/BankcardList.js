import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getBankcardList, delBankCard} from '@/api'

import Backhome from '@/components/Backhome'
import SkeletonPlaceholder from '@/components/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '@/components/EmptyArrayPlaceholder'
import List from './List'
import Page from './styled'

const Content = ({loading, items, handleDel}) => {
  if(loading) {
    return <SkeletonPlaceholder count={3} />
  }
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return <List items={items} handleDel={handleDel} />
}

class BankcardList extends Component {
  constructor(props) {
    super(props)

    this.handleDel = this.handleDel.bind(this)

    this.state = {
      items: [],
      loading: true
    }
  }

  componentDidMount() {
    this.loadBankcardList()
  }

  async loadBankcardList() {
    try {
      const {data} = await getBankcardList()
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  async delBankCard(id) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await delBankCard(id)
      if(data.status === 200) {
        this.updateBankcard(id)
      }
      weui.alert(data.msg)
    }finally {
      loading.hide()
    }
  }

  updateBankcard(id) {
    const items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  handleDel(id) {
    weui.confirm('确定删除吗？', () => {
      this.delBankCard(id)
    })
  }

  render() {
    const {loading, items} = this.state
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="银行卡/信用卡列表"/>
        <div className="main">
          <Content loading={loading} items={items} handleDel={this.handleDel} />
        </div>

        <div className="fixed-bottom">
          <div className="u_m_xxx">
            <Link to="/bankcard-add">
              <button className="btn btn-secondary">添加银行卡</button>
            </Link>
          </div>
        </div>

        <Backhome />
      </Page>
    )
  }
}

export default BankcardList