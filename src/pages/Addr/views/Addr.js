import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {deleteAddrById} from '@/api'
import {push} from '@/services/redirect'
import Page from './styled'
import List from './List'
import SkeletonPlaceholder from '@/common/SkeletonPlaceholder'

import {actions as addrActions} from '@/pages/StoreConfirm'

class Addr extends Component {
  constructor(props) {
    super(props)

    this.handleCancel = this.handleCancel.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      items: []
    }
  }

  async deleteAddr(id) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await deleteAddrById(id)
      if(data.status === 200) {
        this.props.deleteAddr(id)
      }
    }finally{
      loading.hide()
    }
  }

  handleClick() {
    push('/add-addr', {from: 'addr'})
  }

  handleCancel(e) {
    this.props.history.goBack()
  }

  handleDelete(e, id) {
    e.stopPropagation()
    weui.confirm('确认删除吗？', () => {
      this.deleteAddr(id)
    })
  }

  handleSelect(id) {
    if(id) {
      this.props.selectAddr(id)
      push('/store-confirm')
    }
  }

  render() {
    return (
      <Page>
        
        {this.props.status === 'loading'
          ? <div className="u_m_xxx"><SkeletonPlaceholder count={3} /></div>
          : <List items={this.props.addrs} handleDelete={this.handleDelete} handleSelect={this.handleSelect} />
        }
        
        <div className="fixed-bottom">
          <div className="btn-list">
            <div onClick={this.handleCancel}>取消</div>
            <div onClick={this.handleClick}>新增地址</div>
          </div>
        </div>
      </Page>
    )
  }
}

const mapStateTopProps = (state) => {
  const addr = state.addr
  return {
    status: addr.status,
    addrs: addr.addrs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAddr: (id) => {
      dispatch(addrActions.deleteAddr(id))
    },
    selectAddr: (id) => {
      dispatch(addrActions.selectAddr(id))
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Addr)