import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsSort, getJDGoodsList} from '@/api'

import Backhome from '@/components/Backhome'
import Page from './styled'
import List from './List'

class StoreSort extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentId: '',
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
    this.setState({currentId: id})
    const loading = weui.loading('加载中')
    const params = {
      goodsClassId: id,
      page: 0
    }
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({items: data.data.data})
      }      
    }finally {
      loading.hide()
    }
  }

  render() {
    const {currentId} = this.state
    return (
      <Page>
        <Helmet title="商品分类"/>

        <div className="layout">
          <div className="layout__aside">
            <ul className="menu">
              {this.state.menus.map(item => {
                return (
                  <li 
                    key={item.id} 
                    className={classNames({active: currentId === item.id})}  
                    onClick={() => this.getGoodsList(item.id)}
                  >
                    {item.category}
                  </li>
                )
              })}
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