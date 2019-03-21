import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'

import { push } from '../services/redirect'

import Backhome from '../common/Backhome'
import closeIcon from '../asset/images/icon/close.png'
import api from '../api';

const Button = styled.button`
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  padding: 0;
`
const PrimaryBtn = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(76, 173, 255, .54);
  background: -webkit-linear-gradient(47deg,#4cadff,#8ce0ff);
`
const Input = styled.input`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  color: inherit;
  font-size: inherit;
  -webkit-appearance: none;
  background: transparent;
`
const PrimaryInput = styled(Input)`
  color: #444;
  font-size: 14px;
`
const DisablePrimaryBtn = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`
const StyledBg = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
`
const LayoutBox = styled.div`
  margin: 15px;
`
const LayoutBtnBox = styled.div`
  margin: 15px;
`
const StyledCleanIcon = styled.img`
  width: 25px;
  height: 25px;
`
const LayoutGroup = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  align-items: center;
  &:after{
    content: " ";
    position: absolute;
    left: 15px;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
    z-index: 2;
  }
  &:last-child:after{
    content: none;
  }
`
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  display: flex;
  margin-left: 10px;
`

const SubmitBtn = ({pass, onSubmit}) => {
  if(pass) {
    return <PrimaryBtn onClick={onSubmit}>添加</PrimaryBtn>
  }else {
    return <DisablePrimaryBtn>添加</DisablePrimaryBtn>
  }
}

class AddBankcard extends Component {
  state = {
    pass: false,

    username: '',
    usernameCleanViewFlag: false,
    id: '',
    idCleanViewFlag: false,
    cardNo: '',
    cardNoCleanViewFlag: false,
    phone: '',
    phoneCleanViewFlag: false
  }

  check = () => {
    const {username, id, cardNo, phone} = this.state
    let flag = true

    if(!username) {
      flag = false
    }
    if(!id) {
      flag = false
    }
    if(!cardNo) {
      flag = false
    }
    if(!phone) {
      flag = false
    }
    return flag
  }

  updateBtnStatus = () => {
    if(this.check()) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  handleClick = (name) => {
    this.setState({[name]: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleFocus = (e) => {
    this.setState({[`${e.target.name}CleanViewFlag`]: true})
  }

  handleBlur = (e) => {
    const key =`${e.target.name}CleanViewFlag`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.updateBtnStatus()
      })
    }, 100)
  }

  handleSubmit = () => {
    const loading = weui.loading('处理中')
    api.addBankcard({
        username: this.state.username,
        id: this.state.id,
        cardNo: this.state.cardNo,
        phone: this.state.phone
      })
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          weui.alert(data.msg, () => {
            push('/bankcard-list')
          })
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
  }

  render() {
    const {
      usernameCleanViewFlag,
      idCleanViewFlag,
      cardNoCleanViewFlag,
      phoneCleanViewFlag
    } = this.state

    return (
      <div>
        <LayoutBox>
          <h2 className="u_my_xxx u_fs_xxx">请填写本人信息</h2>
          <StyledBg>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入姓名"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: usernameCleanViewFlag ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('username')}
                  src={closeIcon} 
                  alt="清空输入"
                />
              </LayoutFoot>
            </LayoutGroup>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="id" 
                  value={this.state.id} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入身份证号"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: idCleanViewFlag ? 'visible' : 'hidden'}}
                  onClick={() => this.handleClick('id')}
                  src={closeIcon} 
                  alt="清空输入" 
                />
              </LayoutFoot>
            </LayoutGroup>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="cardNo" 
                  value={this.state.cardNo} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入银行卡/信用卡号"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: cardNoCleanViewFlag ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('cardNo')}
                  src={closeIcon} 
                  alt="清空输入" 
                />
              </LayoutFoot>
            </LayoutGroup>            
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="phone" 
                  value={this.state.phone} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入银行预留手机号"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: phoneCleanViewFlag ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('phone')}
                  src={closeIcon} 
                  alt="清空输入" 
                />
              </LayoutFoot>
            </LayoutGroup>
          </StyledBg>
        </LayoutBox>

        <LayoutBtnBox>
          <SubmitBtn pass={this.state.pass} onSubmit={this.handleSubmit} />
        </LayoutBtnBox> 

        <Backhome />
      </div>
    )
  }
}

export default AddBankcard