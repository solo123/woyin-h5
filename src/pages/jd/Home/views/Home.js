import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsList} from '@/api'

import Backhome from '@/components/Backhome'
import SimpleScroll from '@/components/SimpleScroll'
import Page from './styled'
import List from './List'

import slogan from '@/asset/images/jd/slogan.png'
import more from '@/asset/images/more.svg'

let currentPage = 0

class Home extends Component {
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      id: 1,
      items: []
    }
  }

  componentDidMount() {
    const params = {goodsClassId: this.state.id, page: currentPage++}    
    this.loadNextPage(params)
    this.scroll = new SimpleScroll(this.scrollContainer, this.loadData)
  }

  componentWillUnmount() {
    this.scroll.destroy()
  }

  async loadNextPage(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({items: [...this.state.items, ...data.data.data]}, () => {
          if(data.data.data.length) {
            this.scroll.finish()
          }else {
            // 加载已经穷尽
            // 在底部插入提示
          }
        })
      }
    }finally{
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
        <Helmet defaultTitle="沃银企服" title="京东购物"  />

        <div className="top">
          <Link to="/store-sort">
            <img src={more} alt=""/>
          </Link>
        </div>

        <header>
          <div className="logo">
            <img className="slogan" src={slogan} alt=""/>
          </div>
          <nav>
            <ul>
              <li className={classNames({active: id === 1})} onClick={() => this.handleClick(1)}>手机配件</li>
              <li className={classNames({active: id === 2})} onClick={() => this.handleClick(2)}>数码产品</li>
              <li className={classNames({active: id === 3})} onClick={() => this.handleClick(3)}>家居日用</li>
              <li className={classNames({active: id === 4})} onClick={() => this.handleClick(4)}>食品饮料</li>
              <li className={classNames({active: id === 5})} onClick={() => this.handleClick(5)}>个人护理</li>
              <li className={classNames({active: id === 10})} onClick={() => this.handleClick(10)}>中外名酒</li>
            </ul>
          </nav>
        </header>

        <div className="container" ref={node => this.scrollContainer = node}>
          <main>
            <List items={this.state.items} />
          </main>
        </div>

        <Backhome />
      </Page>
    )    
  }
}

export default Home