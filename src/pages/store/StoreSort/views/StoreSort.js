import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsSort, getJDGoodsList} from '@/api'

import Backhome from '@/components/Backhome'
import SimpleScroll from '@/components/SimpleScroll'
import Page from './styled'
import List from './List'

let currentPage = 0

class StoreSort extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      id: '',
      menus: [],
      items: []
    }
  }

  componentDidMount() {
    this.loadGoodsSort(id => {
      this.setState({id: id}, () => {
        const params = {goodsClassId: this.state.id, page: currentPage++}    
        this.loadNextPage(params)
      })
    })

    this.scroll = new SimpleScroll(this.scrollContainer, this.loadData)
  }

  componentWillUnmount() {
    this.scroll.destroy()
  }

  async loadGoodsSort(cb) {
    try {
      const {data} = await getJDGoodsSort()
      if(data.status === 200) {
        this.setState({menus: data.data})
        if(data.data[0] && data.data[0].id) {
          cb && cb(data.data[0].id)
        }
      }
    }finally {
    }
  }

  async loadNextPage(params) {
    const loading = weui.loading('加载中')
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data.data]}, () => {
          if(data.data.data.length) {
            this.scroll.finish()
          }
        })
      }      
    }finally {
      loading.hide()
    }
  }

  loadData() {
    const params = {goodsClassId: this.state.id, page: currentPage++}   
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  reset() {
    currentPage = 0
    this.scroll.closeScroll()
    this.setState({items: []})
  }

  handleClick(id) {
    if(this.state.id === id) {return}
    this.reset()
    this.setState({id: id}, () => {          
      const params = {goodsClassId: this.state.id, page: currentPage++} 
      this.loadNextPage(params)
    })
  }

  render() {
    const {id} = this.state
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
                    className={classNames({active: id === item.id})}  
                    onClick={() => this.handleClick(item.id)}
                  >
                    {item.category}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="layout__main" ref={node => this.scrollContainer = node}>
            <main>
              <List items={this.state.items} />
            </main>
          </div>
        </div>
        
        <Backhome />
      </Page>
    )
  }
}

export default StoreSort