import React, {Component} from 'react';
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {getJDAddrList, deleteAddrById} from '@/api'
import {push} from '@/services/redirect'
import Page from './styled'
import List from './List'

class Addr extends Component {
  constructor(props) {
    super(props)

    this.handleCancel = this.handleCancel.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getAddrList()
  }

  async getAddrList() {
    try {
      const {data} = await getJDAddrList()
      if(data.status === 200) {
        this.setState({items: data.data})
        console.log(data.data)

      }
    }finally {
    }
  }

  async deleteAddr(id) {
    try {
      const {data} = await deleteAddrById(id)
      if(data.status === 200) {
        const items = this.state.items.filter(item => item.id !== id)
        this.setState({items: items})
      }
    }finally{}
  }

  handleClick() {
    push('/add-addr', {from: 'addr'})
  }

  handleCancel(e) {
  }

  handleDelete(id) {
    weui.confirm('确认删除吗？', () => {
      this.deleteAddr(id)
    })
  }

  render() {
    return (
      <Page>
        
        <List items={this.state.items} handleDelete={this.handleDelete}/>
        
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

export default Addr