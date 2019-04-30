import React, {Component} from 'react'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import {addBankcard} from '@/api'
import {push} from '@/services/redirect'

import Backhome from '@/components/Backhome'
import Page from './styled'

import closeIcon from '@/asset/images/icon/close.png'

class AddBankcard extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
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

  async doSubmit(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await addBankcard(params)
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          const {from} = this.props.location.state || {from: '/bankcard-list'}
          push(from)
        })
      }else {
        weui.alert(data.msg)
      }
    }finally {
      loading.hide()
    }
  }

  handleClick(name) {
    this.setState({[name]: ''})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFocus(e) {
    this.setState({[`${e.target.name}CleanViewFlag`]: true})
  }

  handleBlur(e) {
    const key =`${e.target.name}CleanViewFlag`
    setTimeout(() => {
      this.setState({[key]: false})
    }, 100)
  }

  verify() {
    if(!this.state.username) {
      weui.alert('请输入姓名')
      return false
    }
    if(!this.state.id) {
      weui.alert('请输入身份证号')
      return false
    }
    if(!this.state.cardNo) {
      weui.alert('请输入卡号')
      return false
    }
    if(!this.state.phone) {
      weui.alert('请输入手机号')
      return false
    }    
    return true
  }
  
  handleSubmit() {
    if(!this.verify()) {
      return
    }
    const params = {
      cardPhoneNo: this.state.phone,
      bankCard: this.state.cardNo,
      cardHoldName: this.state.username,
      idNo: this.state.id
    }    
    this.doSubmit(params)
  }

  render() {
    const {
      username, usernameCleanViewFlag,
      id, idCleanViewFlag,
      cardNo, cardNoCleanViewFlag,
      phone, phoneCleanViewFlag
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
                  value={username} 
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
                  value={id} 
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
                  value={cardNo} 
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
                value={phone} 
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
          <button className="btn btn-secondary" onClick={this.handleSubmit}>添加</button>
        </div> 

        <Backhome />
      </Page>
    )
  }
}

export default AddBankcard