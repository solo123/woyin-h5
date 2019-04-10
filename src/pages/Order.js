import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import weui from 'weui.js'

import api from '../api'
import SkeletonPlaceholder from '../common/SkeletonPlaceholder'

import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import Backhome from '../common/Backhome'

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  ul{
    display: flex;
    flex-shrink: 0;
    line-height: 60px;
    background: #fff;
    li{
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
    strong{
      color: #F53415;
    }
    .item{
      background: #fff;
      margin-bottom: 15px;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.06);
      &__head{
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        &:after{
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          transform: scaleY(.3);
          background: #eaeaea;
        }
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
const STATUS_SCHEMA = {
  '11': '处理中',
  '12': '成功',
  '13': '失败'
}

const Item = ({date, name, productValue, status}) => {
  return (
    <div className="item">
      <div className="item__head">
        <h2 className="item__title">{name}</h2>
        <div className="item__status">{status}</div>
      </div>
      <div className="item__body">
        {name}
      </div>
      <div className="item__foot">
        <div>{date}</div>
        <div>合计积分 <strong>{productValue}</strong></div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  return items.map(item => {
    return (
      <Item 
        key={item.byOrderDetail} 
        name={item.productName}
        byOrderDetail={item.byOrderDetail}
        status={STATUS_SCHEMA[item.status]}
        date={item.createTime} 
        productValue={item.productValue}
      />
    )
  })
}
    
const Content = ({loading, items}) => {
  if(loading) {
    return <div className="u_mx_xxx u_pt_xxx"><SkeletonPlaceholder count={3} /></div>
  }
  if(items.length) {
    return <div className="list"><List items={items} /></div>
  }
  return <EmptyArrayPlaceholder />
}

let isLoading = false
class Order extends Component {
  state = {
    status: '11',
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
    const params = {
      status: this.state.status,
      limit: 10,
      page: 0
    }
    try {
      const {data} = await api.getOrderList(params)
      if(data.status === 200){
        if(!this._isMounted){return}
        if(!data.data.count){return}
        this.setState({
          items: [...this.state.items, ...data.data.data]
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
          <ul>
            <li className={classNames({active: status === '11'})} onClick={() => this.handleClick('11')}>处理中</li>
            <li className={classNames({active: status === '12'})} onClick={() => this.handleClick('12')}>成功</li>
            <li className={classNames({active: status === '13'})} onClick={() => this.handleClick('13')}>失败</li>
          </ul>
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