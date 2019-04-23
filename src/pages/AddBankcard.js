import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'
import {Helmet} from "react-helmet"

import {addBankcard} from '@/api'
import {push} from '@/services/redirect'

import Backhome from '@/common/Backhome'

import closeIcon from '@/asset/images/icon/close.png'

const Page = styled.div`
  margin: 15px;
  .form{
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
    .close-btn{
      width: 25px;
      height: 25px;
    }
  }
  .group{
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
      background: #eaeaea;
      transform: scaleY(0.5);
    }
    &:last-child:after{
      content: none;
    }
    &__body{
      flex: 1;
    }
    &__foot{
      display: flex;
      margin-left: 10px;
    }
  }
`

const SubmitBtn = ({pass, onSubmit}) => {
  if(pass) {
    return <button className="btn btn-secondary" onClick={onSubmit}>添加</button>
  }else {
    return <button className="btn btn-secondary disable" onClick={onSubmit}>添加</button>
  }
}

class AddBankcard extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
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
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  async doSubmit(phone, bankCard, username, id) {
    const loading = weui.loading('处理中')
    const params = {
      cardPhoneNo: phone,
      bankCard: bankCard,
      cardHoldName: username,
      idNo: id
    }
    try {
      const {data} = await addBankcard(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          const {from} = this.props.location.state || {from: false}
          if(from) {
            push(from)
          }else {
            push('/bankcard-list')
          }
        })
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  check() {
    let flag = true
    const {username, id, cardNo, phone} = this.state

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

  verify(phone, cardNo, username, id) {
    if(!username) {
      weui.alert('请输入姓名')
      return false
    }
    if(!id) {
      weui.alert('请输入身份证号')
      return false
    }
    if(!cardNo) {
      weui.alert('请输入卡号')
      return false
    }
    if(!phone) {
      weui.alert('请输入手机号')
      return false
    }    
    return true
  }

  updateBtnStatus() {
    if(this.check()) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  handleClick(name) {
    this.setState({[name]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}CleanViewFlag`]: true})
  }

  handleBlur(e) {
    const key =`${e.target.name}CleanViewFlag`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.updateBtnStatus()
      })
    }, 100)
  }

  handleSubmit() {
    const {phone, cardNo, username, id} = this.state
    if(!this.verify(phone, cardNo, username, id)) {
      return
    }

    this.doSubmit(phone, cardNo, username, id)
  }

  render() {
    const {
      usernameCleanViewFlag,
      idCleanViewFlag,
      cardNoCleanViewFlag,
      phoneCleanViewFlag
    } = this.state

    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="添加银行卡/信用卡"/>
        <main>
          <h2 className="u_my_xxx u_fs_xxx">请填写本人信息</h2>
          <div className="form">
            <div className="group">
              <div className="group__body">
                <input
                  className="input" 
                  type="text" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入姓名"
                />
              </div>
              <div className="group__foot">
                <img
                  className="close-btn" 
                  style={{visibility: usernameCleanViewFlag ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('username')}
                  src={closeIcon} 
                  alt="清空输入"
                />
              </div>
            </div>
            <div className="group">
              <div className="group__body">
                <input
                  className="input" 
                  type="text" 
                  name="id" 
                  value={this.state.id} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入身份证号"
                />
              </div>
              <div className="group__foot">
                <img
                  className="close-btn" 
                  style={{visibility: idCleanViewFlag ? 'visible' : 'hidden'}}
                  onClick={() => this.handleClick('id')}
                  src={closeIcon} 
                  alt="清空输入" 
                />
              </div>
            </div>
            <div className="group">
              <div className="group__body">
                <input
                  className="input" 
                  type="text" 
                  name="cardNo" 
                  value={this.state.cardNo} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入银行卡/信用卡号"
                />
              </div>
              <div className="group__foot">
                <img
                  className="close-btn" 
                  style={{visibility: cardNoCleanViewFlag ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('cardNo')}
                  src={closeIcon} 
                  alt="清空输入" 
                />
              </div>
            </div>            
            <div className="group">
            <div className="group__body">
              <input
                className="input" 
                type="text" 
                name="phone" 
                value={this.state.phone} 
                onChange={this.handleChange} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                placeholder="请输入银行预留手机号"
              />
            </div>
            <div className="group__foot">
              <img
                className="close-btn" 
                style={{visibility: phoneCleanViewFlag ? 'visible' : 'hidden'}} 
                onClick={() => this.handleClick('phone')}
                src={closeIcon} 
                alt="清空输入" 
              />
            </div>
          </div>
          </div>
        </main>

        <div className="u_mt_xxx">
          <SubmitBtn pass={this.state.pass} onSubmit={this.handleSubmit} />
        </div> 

        <Backhome />
      </Page>
    )
  }
}

export default AddBankcard