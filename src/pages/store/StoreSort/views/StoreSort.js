import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsSort, getJDGoodsList} from '@/api'

import Backhome from '@/components/Backhome'
import SimpleScroll from '@/components/SimpleScroll'
import Page from './styled'
import List from './List'


class StoreSort extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.currentPage = 0

    this.state = {
      id: 0,
      menus: [],
      items: [],
      completed: false
    }
  }

  componentDidMount() {
    this.loadGoodsSort(() => {
      this.setState({id: 0}, () => {
        const params = {goodsClassId: 0, page: this.currentPage++}    
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
          }else {
            this.setState({completed: true})
          }
        })
      }      
    }finally {
      loading.hide()
    }
  }

  loadData() {
    const params = {goodsClassId: this.state.id, page: this.currentPage++}   
    this.loading = weui.loading('加载中')
    this.loadNextPage(params)
  }

  reset() {
    this.currentPage = 0
    this.scroll.closeScroll()
    this.setState({items: [], completed: false})
  }

  handleClick(id) {
    if(this.state.id === id) {return}
    this.reset()
    this.setState({id: id}, () => {          
      const params = {goodsClassId: this.state.id, page: this.currentPage++} 
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
              {this.state.menus.map((item, index) => {
                return (
                  <li 
                    key={item.id} 
                    className={classNames({active: id === index})}  
                    onClick={() => this.handleClick(index)}
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
              {(this.state.completed && !!this.state.items.length) && (<div style={{textAlign: 'center', padding: 10, color: '#aaa'}}>没有更多了</div>)}
            </main>
          </div>
        </div>
        
        <Backhome />
      </Page>
    )
  }
}

export default StoreSort