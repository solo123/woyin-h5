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
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
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
    province: '粤',
    provinceViewFlag: false,
    vehicleNo: '',
    vehicleNoCleanView: false,
    vehicleType: '',
    vehicleVin: '',
    vehicleVinCleanView: false,
    engineNo: '',
    engineNoCleanView: false,
    ownerName: '',
    ownerNameCleanView: false
  }

  check = () => {
    const {
      vehicleNo, 
      vehicleType, 
      vehicleVin, 
      engineNo, 
      ownerName
    } = this.state
    let flag = true

    if(!vehicleNo) {
      flag = false
    }
    if(!vehicleType) {
      flag = false
    }
    if(!vehicleVin) {
      flag = false
    }
    if(!engineNo) {
      flag = false
    }
    if(!ownerName) {
      flag = false
    }
    return flag
  }

  updateSumbitBtnStatus = () => {
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
      this.updateSumbitBtnStatus()
    })
  }

  handleFocus = (e) => {
    this.setState({[`${e.target.name}CleanView`]: true})
  }

  handleBlur = (e) => {
    const key =`${e.target.name}CleanView`
    setTimeout(() => {
      this.setState({[key]: false}, () => {
        this.updateSumbitBtnStatus()
      })
    }, 100)
  }

  handleSubmit = () => {
    const loading = weui.loading('处理中')
    api.addBankcard({
        vehicleNo: this.state.province + this.state.vehicleNo,
        vehicleType: this.state.vehicleType,
        vehicleVin: this.state.vehicleVin,
        engineNo: this.state.engineNo,
        ownerName: this.state.ownerName
      })
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          weui.alert(data.msg, () => {
            push('/violation')
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
      vehicleNoCleanView,
      vehicleVinCleanView,
      engineNoCleanView,
      ownerNameCleanView
    } = this.state

    return (
      <div>
        <LayoutBox>
          <StyledBg>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="vehicleNo" 
                  value={this.state.vehicleNo} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入车牌号"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: vehicleNoCleanView ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('vehicleNo')}
                  src={closeIcon} 
                  alt=""
                />
              </LayoutFoot>
            </LayoutGroup>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="vehicleVin" 
                  value={this.state.vehicleVin} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请确认发动机号后6位"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: vehicleVinCleanView ? 'visible' : 'hidden'}}
                  onClick={() => this.handleClick('vehicleVin')}
                  src={closeIcon} 
                  alt="" 
                />
              </LayoutFoot>
            </LayoutGroup>
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="ownerName" 
                  value={this.state.ownerName} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请输入车架号后6位"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: ownerNameCleanView ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('ownerName')}
                  src={closeIcon} 
                  alt="" 
                />
              </LayoutFoot>
            </LayoutGroup>            
            <LayoutGroup>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="engineNo" 
                  value={this.state.engineNo} 
                  onChange={this.handleChange} 
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  placeholder="请确认车主姓名"
                />
              </LayoutBody>
              <LayoutFoot>
                <StyledCleanIcon 
                  style={{visibility: engineNoCleanView ? 'visible' : 'hidden'}} 
                  onClick={() => this.handleClick('engineNo')}
                  src={closeIcon} 
                  alt="" 
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