import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import {Helmet} from "react-helmet"

import arrowIcon from '@/asset/images/icon/arrow_right.svg'

const Page = styled.div`
  padding-top: 15px;
  nav{
    background: #fff;
    margin-bottom: 15px;
    a{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      &:after{
        content: " ";
        position: absolute;
        left: 15px;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        transform: scaleY(0.5);
      }
      &:last-child:after{
        content: none;
      }
      .icon{
        width: 20px;
        height: 20px;
      }
    }
  }
`

export default function() {
  return (
    <Page>
      <Helmet defaultTitle="沃银企服" title="设置"/>
      <nav>
        <Link to="/change-login-pswd">
          <span>修改登录密码</span>
          <img className="icon" src={arrowIcon} alt=""/></Link>
        <Link to="/change-trade-pswd">
          <span>修改交易密码</span>
          <img className="icon" src={arrowIcon} alt=""/></Link>
        <Link to="/find-trade-pswd">
          <span>找回交易密码</span>
          <img className="icon" src={arrowIcon} alt=""/></Link>
      </nav>
      <nav>
        <Link to="/developing">
          <span>关于我们</span>
          <img className="icon" src={arrowIcon} alt=""/>
        </Link>
        <Link to="/developing">
          <span>联系我们</span>
          <img className="icon" src={arrowIcon} alt=""/>
        </Link>
      </nav>
    </Page>
  )
}