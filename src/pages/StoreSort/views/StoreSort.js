import React, {Component} from 'react'
import {Helmet} from "react-helmet"

import {getJDGoodsSort, getJDGoodsList} from '@/api'

import Backhome from '@/common/Backhome'
import Page from './styled'
import List from './List'

class StoreSort extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      items: []
    }
  }

  componentDidMount() {
    this.getGoodsSort(id => {
      this.getGoodsList(id)
    })
  }

  async getGoodsSort(cb) {
    try {
      const {data} = await getJDGoodsSort()
      if(data.status === 200) {
        this.setState({menus: data.data})
        cb && cb(data.data[0].id)
      }
    }finally {
    }
  }

  async getGoodsList(id) {
    const params = {
      goodsClassId: id,
      page: '0'
    }
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({items: data.data.data})
      }      
    }finally {
    }
  }

  render() {
    return (
      <Page>
        <Helmet title="商品分类"/>

        <div className="layout">
          <div className="layout__aside">
            <ul className="menu">
              {this.state.menus.map(item => <li key={item.id} onClick={() => this.getGoodsList(item.id)}>{item.category}</li>)}
            </ul>
          </div>
          <div className="layout__main">
            <List items={this.state.items} />
          </div>
        </div>
        
        <Backhome />
      </Page>
    )
  }
}

export default StoreSort