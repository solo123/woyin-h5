import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import api from '../api'
import {getItem} from '../services/storage'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import Backhome from '../common/Backhome'

import fzIcon from '../asset/images/bank/fz.svg'
import gdIcon from '../asset/images/bank/gd.svg'
import gsIcon from '../asset/images/bank/gs.svg'
import hxIcon from '../asset/images/bank/hx.svg'
import jsIcon from '../asset/images/bank/js.svg'
import jtIcon from '../asset/images/bank/jt.svg'
import msIcon from '../asset/images/bank/ms.svg'
import nyIcon from '../asset/images/bank/ny.svg'
import paIcon from '../asset/images/bank/pa.svg'
import shIcon from '../asset/images/bank/sh.svg'
import shfzIcon from '../asset/images/bank/shfz.svg'
import xyIcon from '../asset/images/bank/xy.svg'
import yzIcon from '../asset/images/bank/yz.svg'
import zgIcon from '../asset/images/bank/zg.svg'
import zsIcon from '../asset/images/bank/zs.svg'
import zxIcon from '../asset/images/bank/zx.svg'
import defaultIcon from '../asset/images/bank/default.svg'

const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`
const Page = styled.div`
  margin-bottom: 80px;
  .main{
    padding: 15px 15px 0 15px;
  }
  .card{
    display: flex;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    &__main{
      flex: 1;
      margin-left: 15px;
    }
    &__logo{
      width: 50px;
      height: 50px;
    }
    &__title{
      font-size: 16px;
      font-weight: bold;
    }
    &__group{
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &__label{
      color: #ccc;
      font-size: 12px;
      padding: 3px 5px;
      border-radius: 3px;
      background: #f2f2f2;
    }
    &__no{
      color: #666;
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
      word-break: break-all;
      font-family: industry;
    }
  }
  .fixed-bottom{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
`

const BANKCARD_SCHEMA = {
  '001': jsIcon,
  '002': zsIcon,
  '003': gsIcon
}

// 绑定状态 0 待处理　１绑定成功　２绑定失败　３冻结
const STATUS_SCHEMA = [
  '待处理',
  '绑定成功',
  '绑定失败',
  '冻结'
]

const Item = ({id, status, bankcardNo, bankcardName, bankcardIcon}) => {
  return (
    <div className="card">
      <div className="card__aside">
        <img className="card__logo" src={bankcardIcon} alt="" />
      </div>
      <div className="card__main">
        <div className="card__group">
          <h2 className="card__title">{bankcardName}</h2>
        </div>
        <label className="card__label">{status}</label>
        <div className="card__no">{bankcardNo}</div>
      </div>
    </div>
  )
}

const List = ({items}) => (
  <div>
    {items.map(item => (
      <Item 
        key={item.bankCard}
        id={item.bankCard}
        status={STATUS_SCHEMA[item.status]}
        bankcardNo={item.bankCard}
        bankcardName={item.bankName}
        bankcardIcon={BANKCARD_SCHEMA[item.bankcardClass] || defaultIcon}
      />
    ))}
  </div>
)

const Content = ({loading, items}) => {
  if(loading) {
    return <SkeletonPlaceholder count={3} />
  }
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return <List items={items} />
}

class BankcardList extends Component {
  state = {
    items: [],
    loading: true
  }

  componentDidMount() {
    this.loadBankcardList()
  }

  async loadBankcardList() {
    try {
      const {data} = await api.getBankcardList()
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    const {loading, items} = this.state
    return (
      <Page>
        <div className="main">
          <Content loading={loading} items={items} />
        </div>

        <div className="fixed-bottom">
          <div className="u_m_xxx">
            <Link to="/bankcard-add">
              <PrimaryButton>添加银行卡</PrimaryButton>
            </Link>
          </div>
        </div>

        <Backhome />
      </Page>
    )
  }
}

export default BankcardList