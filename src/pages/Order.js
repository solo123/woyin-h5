import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import weui from 'weui.js'

import api from '../api'
import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import Backhome from '../common/Backhome'

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  nav{
    display: flex;
    flex-shrink: 0;
    line-height: 60px;
    background: #fff;
    a{
      flex: 1;
      text-align: center;
      transition: all .3s ease;
      color: #888;
      &.active{
        color: #444;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .container{
    flex-shrink: 1;
    flex-grow: 1;
    overflow-y: auto;
  }
  .list{
    margin: 15px 15px 0 15px;
    .item{
      background: #fff;
      margin-bottom: 15px;
      &__head{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eaeaea;
        padding: 15px;
      }
      &__body{
        padding: 15px 15px 0 15px;
      }
      &__foot{
        display: flex;
        justify-content: space-between;
        font-size: 12px;        
        padding: 15px;
      }
      &__title{
      }
      &__status{
        font-size: 12px;
      }
    }
  }
`

let currentPage = 1

const Item = ({id}) => {
  return (
    <div className="item">
      <div className="item__head">
        <h2 className="item__title">Q币</h2>
        <div className="item__status">处理中</div>
      </div>
      <div className="item__body">
        Q币
      </div>
      <div className="item__foot">
        <div>2019-01-20 17:27:36</div>
        <div>合计积分 106</div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  return items.map(item => {
    return <Item key={item.id} id={item.id} />
  })
}
    
const Content = ({loading, items}) => {
  if(loading) {
    return <div className="u_mx_xxx u_pt_xxx"><SkeletonPlaceholder count={3} /></div>
  }
  if(items.length) {
    return <div className="list"><List items={items} /></div>
  }
  return null
}

let isLoading = false
class Order extends Component {
  state = {
    status: '1',
    loading: true,
    items: []
  }

  componentDidMount() {
    this.loadNextPage(this.state.status, currentPage) 
    this.scrollContainer.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    this._isMounted = false
    this.scrollContainer.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener = () => {
    if(isLoading){ return }

    const scrollTop = this.scrollContainer.scrollTop
    const winHeight = this.scrollContainer.offsetHeight
    const docHeight = this.itemsElem.offsetHeight

    if((scrollTop + winHeight) >= docHeight){
      isLoading = true
      this.loading = weui.loading('加载中')
      this.loadNextPage(this.state.status, ++currentPage)
    }
  }

  loadNextPage = async(status, page) => {
    this._isMounted = true
    try {
      const {data} = await api.getOrderList(status, page)
      if(data.code === '1'){
        if(!this._isMounted){return}
        this.setState({
          items: [...this.state.items, ...data.items]
        }, () => {
          isLoading = false
        })
      }
    }finally {
      if(this.loading) {
        this.loading.hide()
      }
      if(!this._isMounted){return}
      this.setState({loading: false})
    }
  }

  reset = () => {
    currentPage = 1
    this.setState({items: []})
  }

  handleClick = status => {
    if(this.state.status === status) {return}
    this.reset()
    this.setState({status: status, loading: true}, () => {
      this.loadNextPage(status, currentPage)
    })
  }

  render() {
    const {loading, items, status} = this.state

    return (
      <Page>
        <nav>
          <a className={classNames({active: status === '1'})} onClick={() => this.handleClick('1')}>处理中</a>
          <a className={classNames({active: status === '2'})} onClick={() => this.handleClick('2')}>成功</a>
          <a className={classNames({active: status === '3'})} onClick={() => this.handleClick('3')}>失败</a>
        </nav>
        <div className="container" ref={node => this.scrollContainer = node}>
          <main ref={node => this.itemsElem = node}>
            <Content loading={loading} items={items} />
          </main>
        </div>
        <Backhome />
      </Page>
    )
  }
}

export default Order