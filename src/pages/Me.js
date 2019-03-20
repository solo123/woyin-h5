import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import weui from 'weui.js'

import Menu from '../common/Menu'
import { replace } from '../services/redirect'

import arrowIcon from '../asset/images/icon/arrow_right.svg'

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
const LayoutBtnBox = styled.div`
  margin: 15px;
`
const LayoutPageContianer = styled.div`
  padding-bottom: 50px;
`
const LayoutFixedBottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`
const LayoutItem = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  justify-content: space-between;
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
`
const LayoutCell = styled.div`
  display: flex;
  align-items: center;
`

const StyledTitle = styled.h2`
  font-size: 16px;
`
const StyledBg = styled.div`
  background: #fff;
`
const StyledArrow = styled.img`
  width: 15px;
  height: 15px;
`
const StyledLabel = styled.div`
  color: #888;
`

class Me extends Component {
  handleClick = e => {
    weui.confirm('是否退出当前账号？', () => {
      this.props.logout()
      replace('/login')
    })
  }

  render() {
    return (
      <LayoutPageContianer>
        <LayoutBtnBox>
          <StyledTitle>个人信息</StyledTitle>
        </LayoutBtnBox>
        <LayoutBtnBox>
          <StyledBg>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>姓名</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                高强
              </LayoutCell>
            </LayoutItem>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>账户积分</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                335 积分
              </LayoutCell>
            </LayoutItem>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>手机号</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                15014095291
              </LayoutCell>
            </LayoutItem>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>银行卡</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                <Link to="/bankcard-list">
                  <StyledArrow src={arrowIcon} />
                </Link>
              </LayoutCell>
            </LayoutItem>
          </StyledBg>
        </LayoutBtnBox>

        <LayoutBtnBox>
          <StyledTitle>密码操作</StyledTitle>
        </LayoutBtnBox>
        <LayoutBtnBox>
          <StyledBg>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>修改登录密码</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                <StyledArrow src={arrowIcon} />
              </LayoutCell>
            </LayoutItem>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>修改交易密码</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                <StyledArrow src={arrowIcon} />
              </LayoutCell>
            </LayoutItem>
            <LayoutItem>
              <LayoutCell>
                <StyledLabel>找回交易密码</StyledLabel>
              </LayoutCell>
              <LayoutCell>
                <StyledArrow src={arrowIcon} />
              </LayoutCell>
            </LayoutItem>
          </StyledBg>
        </LayoutBtnBox>

        <LayoutBtnBox>
          <PrimaryButton onClick={this.handleClick}>退出</PrimaryButton>
        </LayoutBtnBox>

        <LayoutFixedBottom>
          <Menu />
        </LayoutFixedBottom>
      </LayoutPageContianer>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({type: 'UNAUTH_USER'})
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Me))