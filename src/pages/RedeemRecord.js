import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'
import classnames from 'classnames'

import api from '../api'
import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import { replace } from '../services/redirect'
import arrowDownIcon from '../asset/images/icon/arrow_down.svg'
import Backhome from '../common/Backhome'

const LayoutPageContianer = styled.div`
  padding-top: 50px;
`
const LayoutFixedTitle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
`
const LayoutFixedTop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  z-index: 10;
`
const StyledSelectTirgger = styled.div`
  background: #fff;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  img{
    width: 15px;
    height: 15px;
    margin-left: 5px;
    transition: transform .3s;
    &.active{
      transform: rotate(180deg);
    }
  }
`
const StyledSelect = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-bottom: 15px;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  li{
    padding: 8px 15px;
    line-height: 1;
    margin-top: 10px;
    margin-right: 10px;
    border: 1px solid #eaeaea;
    &.active{
      color: rgb(77, 123, 254);
      border-color: rgb(77, 123, 254);
    }
  }
`
const LayoutItems = styled.div`
  padding: 15px 15px 0 15px;
`

const SelectStatus = ({status, flag, handleClick}) => {
  if(flag) {
    return (
      <LayoutFixedTop>
        <StyledSelect>
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
        </StyledSelect>
      </LayoutFixedTop>
    )
  }
  return null
}

const StyledCard = styled.div`
  background: #fff;
  border-radius: 3px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .06);
  .hd{
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
      -webkit-transform: scaleY(.3);
      transform: scaleY(.3);
      background: #eaeaea;
    }
  }
  .bd{
    padding: 15px 15px 0 15px;
  }
  .ft{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 15px;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .status{
    font-size: 12px;
  }
  .gray{
    color: #7e7e7e;
  }
`
const Item = () => {
  return (
    <StyledCard>
      <div className="hd">
        <div className="title">积分赎回</div>
        <div className="status">待审核</div>
      </div>
      <div className="bd">
        <div>赎回399积分 手续费99积分 实际到账3元</div>
      </div>
      <div className="ft">
        <div className="gray">2019-02-11 11:18:05</div>
        <div>399 积分</div>
      </div>
    </StyledCard>
  )
}

const List = ({items, onDelect}) => {
  if(!items.length) {
    return (
      <EmptyArrayPlaceholder />
    )
  }
  return (
    <LayoutItems>
    {
      items.map(item => {
        return (
          <Item 
            key={item.id}
          />
        )
      })
    }
    </LayoutItems>
  )
}

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
    this.setState({status, title}, () => {
      this.handleToggle()
      this.loadData()
    })
  }

  loadData = () => {
    this.setState({loading: true})
    api.getRedeemRecordByStatus(this.state.status)
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
    const {loading, items, seletViewFlag} = this.state
    return (
      <LayoutPageContianer>
        <LayoutFixedTitle>
          <StyledSelectTirgger onClick={this.handleToggle}>
            {this.state.title}
            <img src={arrowDownIcon} className={classnames({'active': seletViewFlag})} alt=""/>
          </StyledSelectTirgger>
        </LayoutFixedTitle>

        <SelectStatus 
          status={this.state.status}
          flag={seletViewFlag} 
          handleClick={this.handleClick}
        />

        {loading ? <SkeletonPlaceholder /> : <List items={items} onDelect={this.onDelect} />}

        <Backhome />

      </LayoutPageContianer>
    )
  }
}

export default RedeemRecord