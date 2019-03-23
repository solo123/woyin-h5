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

const LayoutPageContainer = styled.div`
  margin-bottom: 80px;
`
const LayoutFixedBottom = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`
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
const LayoutItems = styled.div`
  padding: 15px 15px 0 15px;
`

const StyledBankcard = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
`
const StyledBankcardIcon = styled.img`
  width: 50px;
  height: 50px;
`
const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`
const StyledLabel = styled.label`
  border-radius: 3px;
  padding: 3px 5px;
  color: #ccc;
  font-size: 12px;
  background: #f2f2f2;
`
const StyledBankcardNo = styled.div`
  color: #666;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  word-break: break-all;
  font-family: industry;
`
const StyledLabelBtn = styled(Button)`
  background: transparent;
`

const BANKCARD_SCHEMA = {
  '001': jsIcon,
  '002': zsIcon,
  '003': gsIcon
}

const Bankcard = ({id, bankcardNo, bankcardName, bankcardIcon, handleClick}) => {
  return (
    <StyledBankcard>
      <div style={{marginBottom: 15}}>
        <div style={{padding: 15}}>
            <div style={{display: 'flex'}}>
              <div>
                <StyledBankcardIcon src={bankcardIcon} />
              </div>
              <div style={{flex: 1, marginLeft: 15}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 5}}>
                  <div>
                    <StyledTitle>{bankcardName}</StyledTitle>
                  </div>
                  <div>
                    <StyledLabelBtn onClick={() => handleClick(id)}>删除</StyledLabelBtn>
                  </div>
                </div>
                <StyledLabel>认证成功</StyledLabel>
                <StyledBankcardNo>{bankcardNo}</StyledBankcardNo>
              </div>
            </div>
        </div>
      </div>
    </StyledBankcard>
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
          <Bankcard 
            key={item.id}
            id={item.id}
            bankcardNo={item.bankcardNo}
            bankcardName={item.bankcardName}
            bankcardIcon={BANKCARD_SCHEMA[item.bankcardClass]}
            handleClick={onDelect}
          />
        )
      })
    }
    </LayoutItems>
  )
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

  onDelect = id => {
  }

  render() {
    const {loading, items} = this.state
    return (
      <LayoutPageContainer>
        {true ? <div className="u_mx_xxx"><SkeletonPlaceholder count={3} /></div> : <List items={items} onDelect={this.onDelect} />}
        <LayoutFixedBottom>
          <LayoutBtnBox>
            <Link to="/bankcard-add">
              <PrimaryButton>添加银行卡</PrimaryButton>
            </Link>
          </LayoutBtnBox>
        </LayoutFixedBottom>

        <Backhome />
      </LayoutPageContainer>
    )
  }
}

export default BankcardList