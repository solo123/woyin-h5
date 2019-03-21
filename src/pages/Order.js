import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import api from '../api'
import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import Backhome from '../common/Backhome'

const LayoutPageContianer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`
const LayoutMain = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  overflow-y: auto;
`
const LayoutItems = styled.div`
  margin: 15px 15px 0 15px;
`
const StyledNav = styled.ul`
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
`
const StyledItem = styled.div`
  padding: 50px 20px;
  background: #fff;
  margin-bottom: 15px;
  font-size: 20px;
`

let currentPage = 1
let nextRequestId = 0

const Item = ({id}) => {
  return (
    <StyledItem>
      {id}
    </StyledItem>
  )
}

class Order extends Component {
  state = {
    status: '1',
    loading: true,
    isLoad: false,
    items: []
  }

  componentDidMount() {
    this.loadNextPage(this.state.status, currentPage) 
    this.scrollContainer.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    this.scrollContainer.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener = () => {
    if(this.state.isLoad){ return }

    const scrollTop = this.scrollContainer.scrollTop
    const winHeight = this.scrollContainer.offsetHeight
    const docHeight = this.itemsElem.offsetHeight

    if((scrollTop + winHeight) >= docHeight){
      this.setState({isLoad: true})
      this.loadNextPage(this.state.status, ++currentPage)
    }
  }

  loadNextPage = (status, page) => {
    const reqId = ++nextRequestId

    const ifNextRequestValid = (cb) => {
      if(nextRequestId === reqId){
        cb && cb()
      }
    }

    api.getOrderList(status, page)
      .then((res) => {
        ifNextRequestValid(() => {
          const {data} = res
          if(data.code === '1'){
            this.setState({
              isLoad: false,
              items: [...this.state.items, ...data.items]
            })
          }
        })
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  reset = () => {
    currentPage = 1
    this.setState({items: []})
  }

  handleClick = status => {
    this.reset()
    this.setState({status: status, loading: true}, () => {
      this.loadNextPage(status, currentPage)
    })
  }

  render() {
    const {loading, items, status} = this.state
    
    const List = items.map(item => (
        <Item key={item.id} id={item.id} />
      ))

    return (
      <LayoutPageContianer>
        <StyledNav>
          <li className={classNames({active: status === '1'})} onClick={() => this.handleClick('1')}>处理中</li>
          <li className={classNames({active: status === '2'})} onClick={() => this.handleClick('2')}>成功</li>
          <li className={classNames({active: status === '3'})} onClick={() => this.handleClick('3')}>失败</li>
        </StyledNav>

        <LayoutMain ref={node => this.scrollContainer = node}>
          <main ref={node => this.itemsElem = node}>
            <LayoutItems>{List}</LayoutItems>
            {loading ? <SkeletonPlaceholder /> : null}            
          </main>
        </LayoutMain>

        <Backhome />
      </LayoutPageContianer>
    )
  }
}

export default Order