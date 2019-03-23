import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import api from '../api'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import Backhome from '../common/Backhome'
import jsIcon from '../asset/images/bank/js.svg'
import zsIcon from '../asset/images/bank/zs.svg'
import gsIcon from '../asset/images/bank/gs.svg'

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
const LayoutPage = styled.div`
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

const Bankcard = ({id, bankcardNo, bankcardName, bankcardIcon, handleClick}) => {
  return (
    <div className="card">
      <div className="card__aside">
        <img className="card__logo" src={bankcardIcon} alt="" />
      </div>
      <div className="card__main">
        <div className="card__group">
          <h2 className="card__title">{bankcardName}</h2>
          <a onClick={() => handleClick(id)}>删除</a>
        </div>
        <label className="card__label">认证成功</label>
        <div className="card__no">{bankcardNo}</div>
      </div>
    </div>
  )
}

const List = ({items}) => {
  if(!items.length) {
    return <EmptyArrayPlaceholder />
  }
  return (
    <div>
      {
        items.map(item => {
          return (
            <Bankcard 
              key={item.id}
              id={item.id}
              bankcardNo={item.bankcardNo}
              bankcardName={item.bankcardName}
              bankcardIcon={BANKCARD_SCHEMA[item.bankcardClass]}
            />
          )
        })
      }
    </div>
  )
}

const Content = ({loading, items}) => {
  if(loading) {
    return <SkeletonPlaceholder count={3} />
  }

  return <List items={items} />
}

class BankcardList extends Component {
  state = {
    items: [],
    loading: true
  }

  componentDidMount() {
    api.getBankcardList()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({items: data.items})
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  render() {
    const {loading, items} = this.state
    return (
      <LayoutPage>
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
      </LayoutPage>
    )
  }
}

export default BankcardList