import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import phoneIcon from '../../../asset/images/icon/phone.png'
import flowIcon from '../../../asset/images/icon/flow.png'
import oilIcon from '../../../asset/images/icon/oil.png'
import videoIcon from '../../../asset/images/icon/video.png'
import qqIcon from '../../../asset/images/icon/qq.png'
import lotteryIcon from '../../../asset/images/icon/lottery.png'
import sevenLotteryIcon from '../../../asset/images/icon/seven_lottery.png'
import ecardIcon from '../../../asset/images/icon/ecard.png'
import creditCardIcon from '../../../asset/images/icon/credit_card.png'
import carIcon from '../../../asset/images/icon/car.png'

const LayoutPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 25%;
    margin: 5px 0;
    text-align: center;
  }
  .icon{
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  .title{
    color: #444;
    font-size: 12px;
  }
`

const Item = ({to, icon, text}) => (
  <div className="item">
    <Link to={to}>
      <img className="icon" src={icon} alt=""/>
      <div className="title">{text}</div>
    </Link>
  </div>
)

export default function() {
  return (
    <LayoutPage>
      <Item to="/recharge-phone" icon={phoneIcon} text="充话费"/>
      <Item to="" icon={flowIcon} text="充流量"/>
      <Item to="" icon={oilIcon} text="充油卡"/>
      <Item to="" icon={qqIcon} text="腾讯Q币"/>
      <Item to="" icon={videoIcon} text="视频VIP"/>
      <Item to="" icon={ecardIcon} text="电子卡券"/>
      <Item to="" icon={creditCardIcon} text="信用卡还款"/>
      <Item to="" icon={carIcon} text="违章查询"/>
      <Item to="" icon={lotteryIcon} text="双色球"/>
      <Item to="" icon={sevenLotteryIcon} text="七乐彩"/>
    </LayoutPage>
  )
}