import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import weui from 'weui.js'
import classNames from 'classnames'

import {getJDGoodsList, getJDGoodsSort} from '@/api'

import Backhome from '@/components/Backhome'
import SimpleScroll from '@/components/SimpleScroll'
import Page from './styled'
import List from './List'

import slogan from '@/asset/images/jd/slogan.png'
import more from '@/asset/images/more.svg'

class Home extends Component {
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
        if(data.data[0] && data.data[0].page_num) {
          cb && cb(data.data[0].page_num)
        }
      }
    }finally {
    }
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
            this.setState({completed: true})
          }
        })
      }
    }finally{
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
    const {id, menus} = this.state
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
              {menus.map((item, index) => {
                return (
                  <li 
                    key={item.page_num}
                    className={classNames({active: id === index})} 
                    onClick={() => this.handleClick(index)}
                  >{item.name}</li>
                )
              })}
            </ul>
          </nav>
        </header>

        <div className="container" ref={node => this.scrollContainer = node}>
          <main>
            <List items={this.state.items}/>
            {(this.state.completed && !!this.state.items.length) && (<div style={{textAlign: 'center', paddingBottom: 10, color: '#aaa'}}>没有更多了</div>)}
          </main>
        </div>

        <Backhome />
      </Page>
    )    
  }
}

export default Home