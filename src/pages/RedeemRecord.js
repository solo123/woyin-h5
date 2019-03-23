import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import axios from 'axios'

import api from '../api'
import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import arrowDownIcon from '../asset/images/icon/arrow_down.svg'
import Backhome from '../common/Backhome'

const Page = styled.div`
  padding-top: 50px;
  .items{
    padding: 15px 15px 0 15px;
  }
  .fixed-top{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    .selecter{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      line-height: 50px;
      background: #fff;
      img{
        width: 15px;
        height: 15px;
        margin-left: 5px;
        transition: transform .3s;
        &.active{
          transform: rotate(180deg);
        }
      }
    }
  }
  .fixed-top-selecter-content{
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;
    z-index: 1;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-left: 15px;
      padding-bottom: 15px;
      background: #fff;
      border-bottom: 1px solid #eaeaea;
      li{
        font-size: 12px;
        margin-top: 10px;
        margin-right: 10px;
        padding: 7px 15px;
        border: 1px solid #eaeaea;
        &.active{
          color: rgb(77, 123, 254);
          border-color: rgb(77, 123, 254);
        }
      }
    }
  }
  .card{
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
    &__head{
      display: flex;
      justify-content: space-between;
      position: relative;
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
      font-size: 16px;
      font-weight: bold;
    }
    &__status{
      font-size: 12px;
    }
    .gray{
      color: #7e7e7e;
    }
  }
`

const SelectStatus = ({status, flag, handleClick}) => {
  if(flag) {
    return (
      <div className="fixed-top-selecter-content">
        <ul>
          <li onClick={() => handleClick('all', '全部')} className={classnames({'active': status === 'all'})}>
            全部
          </li>
          <li onClick={() => handleClick('11', '受理中')} className={classnames({'active': status === '11'})}>
            受理中
          </li>
          <li onClick={() => handleClick('12', '处理成功')} className={classnames({'active': status === '12'})}>
            处理成功
          </li>
          <li onClick={() => handleClick('13', '处理失败')} className={classnames({'active': status === '13'})}>
            处理失败
          </li>      
          <li onClick={() => handleClick('14', '待审核')} className={classnames({'active': status === '14'})}>
            待审核
          </li>
          <li onClick={() => handleClick('15', '审核通过')} className={classnames({'active': status === '15'})}>
            审核通过
          </li>
          <li onClick={() => handleClick('16', '审核拒绝')} className={classnames({'active': status === '16'})}>
            审核拒绝
          </li>
        </ul>
      </div>
    )
  }
  return null
}

const Item = () => {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__title">积分赎回</div>
        <div className="card__status">待审核</div>
      </div>
      <div className="card__body">
        <div>赎回399积分 手续费99积分 实际到账3元</div>
      </div>
      <div className="card__foot">
        <div className="gray">2019-02-11 11:18:05</div>
        <div>399 积分</div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  if(!items.length) {
    return (
      <EmptyArrayPlaceholder />
    )
  }
  return (
    <div>
      {
        items.map(item => {
          return (
            <Item 
              key={item.id}
            />
          )
        })
      }
    </div>
  )
}

const Content = ({loading, items}) => {
  if(loading) {
    return <SkeletonPlaceholder />
  }
  return <List items={items} />
}

let source = null

class RedeemRecord extends Component {
  state = {
    status: 'all',
    title: '全部',
    seletViewFlag: false,
    items: [],
    loading: true
  }

  componentDidMount() {
    this.loadData()
  }

  handleToggle = e => {
    this.setState({seletViewFlag: !this.state.seletViewFlag})
  }

  handleClick = (status, title) => {
    if(status == this.state.status) {
      return false
    }
    source.cancel()
    this.setState({status, title}, () => {
      this.handleToggle()
      this.loadData()
    })
  }

  loadData = async () => {
    this.setState({loading: true})
    source = axios.CancelToken.source()
    const {data} = await api.getRedeemRecordByStatus(this.state.status, {cancelToken: source.token})
    if(data.code === '1') {
      this.setState({items: data.items})
    }
    this.setState({loading: false})
  }

  render() {
    const {loading, items, seletViewFlag} = this.state
    return (
      <Page>
        <div className="fixed-top">
          <div className="selecter" onClick={this.handleToggle}>
            {this.state.title}
            <img src={arrowDownIcon} className={classnames({'active': seletViewFlag})} alt=""/>
          </div>
        </div>

        <SelectStatus 
          status={this.state.status}
          flag={seletViewFlag} 
          handleClick={this.handleClick}
        />

        <div className="items">
          <Content loading={loading} items={items} />
        </div>

        <Backhome />

      </Page>
    )
  }
}

export default RedeemRecord