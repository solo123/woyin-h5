import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsList} from '@/api'

import Backhome from '@/components/Backhome'
import Page from './styled'
import List from './List'

import slogan from '@/asset/images/jd/slogan.png'
import more from '@/asset/images/more.svg'

class Home extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      id: 1,
      items: []
    }
  }

  componentDidMount() {
    const params = {goodsClassId: this.state.id, page: 0}    
    this.loadProducts(params)
  }

  async loadProducts(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await getJDGoodsList(params)
      if(data.status === 200) {
        this.setState({
          items: data.data.data
        })
      }
    }finally{
      loading.hide()
    }
  }

  handleClick(id) {
    this.setState({id: id}, () => {          
      const params = {goodsClassId: this.state.id, page: 0}    
      this.loadProducts(params)
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
          <img className="slogan" src={slogan} alt=""/>
        </header>

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

        <main>
          <List items={this.state.items} />
        </main>

        <Backhome />
      </Page>
    )    
  }
}

export default Home