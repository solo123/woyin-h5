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

const LayoutNav = styled.div`
  width: 25%;
`
const LayoutNavInner = styled.div`
  margin: 5px 0;
  text-align: center;
`

const BusinessEntry = ({to, icon, text}) => (
  <LayoutNav>
    <LayoutNavInner>
      <Link to={to}>
        <img style={{width: 40, height: 40, marginBottom: 5}} src={icon} alt=""/>
        <div style={{fontSize: 12, color: '#444'}}>{text}</div>
      </Link>
    </LayoutNavInner>
  </LayoutNav>
)

export default function() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <BusinessEntry to="/recharge-phone" icon={phoneIcon} text="充话费" />
      <BusinessEntry to="" icon={flowIcon} text="充流量" />
      <BusinessEntry to="" icon={oilIcon} text="充油卡" />
      <BusinessEntry to="" icon={qqIcon} text="腾讯Q币" />
      <BusinessEntry to="" icon={videoIcon} text="视频VIP" />
      <BusinessEntry to="" icon={ecardIcon} text="电子卡券" />
      <BusinessEntry to="" icon={creditCardIcon} text="信用卡还款" />
      <BusinessEntry to="" icon={carIcon} text="违章查询" />
      <BusinessEntry to="" icon={lotteryIcon} text="双色球" />
      <BusinessEntry to="" icon={sevenLotteryIcon} text="七乐彩" />
    </div>
  )
}