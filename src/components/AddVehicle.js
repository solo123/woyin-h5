import React, { Component } from 'react'
import styled from 'styled-components'
import weui from 'weui.js'

import { push } from '../services/redirect'

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

const StyledFixedBg = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .5);
`
const LayoutFixedBottom = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  background: #f7f7f8;
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
const LayoutHead = styled.div`
`
const LayoutBody = styled.div`
  flex: 1;
`
const LayoutFoot = styled.div`
  display: flex;
  margin-left: 10px;
`
const StyledLabel = styled.label`
  display: block;
  padding: 2px 4px;
  border-radius: 3px;
  margin-right: 10px;
  border: 1px solid #cb9e58;
`
const StyledCells = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
`
const StyledCell = styled.li`
  margin: 5px;
  padding: 5px 5px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
`
const Provinces = ({onSelect}) => {
  return (
    <StyledCells>
      <StyledCell onClick={() => onSelect('粤')}>粤</StyledCell>
      <StyledCell onClick={() => onSelect('苏')}>苏</StyledCell>
      <StyledCell onClick={() => onSelect('闽')}>闽</StyledCell>
      <StyledCell onClick={() => onSelect('湘')}>湘</StyledCell>
      <StyledCell onClick={() => onSelect('鄂')}>鄂</StyledCell>
      <StyledCell onClick={() => onSelect('赣')}>赣</StyledCell>
      <StyledCell onClick={() => onSelect('浙')}>浙</StyledCell>
      <StyledCell onClick={() => onSelect('京')}>京</StyledCell>
      <StyledCell onClick={() => onSelect('沪')}>沪</StyledCell>
      <StyledCell onClick={() => onSelect('津')}>津</StyledCell>
      <StyledCell onClick={() => onSelect('渝')}>渝</StyledCell>
      <StyledCell onClick={() => onSelect('桂')}>桂</StyledCell>
      <StyledCell onClick={() => onSelect('陕')}>陕</StyledCell>
      <StyledCell onClick={() => onSelect('宁')}>宁</StyledCell>
      <StyledCell onClick={() => onSelect('皖')}>皖</StyledCell>
      <StyledCell onClick={() => onSelect('蒙')}>蒙</StyledCell>
      <StyledCell onClick={() => onSelect('贵')}>贵</StyledCell>
      <StyledCell onClick={() => onSelect('晋')}>晋</StyledCell>
      <StyledCell onClick={() => onSelect('琼')}>琼</StyledCell>
      <StyledCell onClick={() => onSelect('辽')}>辽</StyledCell>
      <StyledCell onClick={() => onSelect('吉')}>吉</StyledCell>
      <StyledCell onClick={() => onSelect('黑')}>黑</StyledCell>
      <StyledCell onClick={() => onSelect('冀')}>冀</StyledCell>
      <StyledCell onClick={() => onSelect('甘')}>甘</StyledCell>
      <StyledCell onClick={() => onSelect('豫')}>豫</StyledCell>
      <StyledCell onClick={() => onSelect('鲁')}>鲁</StyledCell>
      <StyledCell onClick={() => onSelect('新')}>新</StyledCell>
      <StyledCell onClick={() => onSelect('川')}>川</StyledCell>
      <StyledCell onClick={() => onSelect('青')}>青</StyledCell>
      <StyledCell onClick={() => onSelect('云')}>云</StyledCell>
      <StyledCell onClick={() => onSelect('藏')}>藏</StyledCell>
    </StyledCells>
  )
}
const SubmitBtn = ({pass, onSubmit}) => {
  if(pass) {
    return <PrimaryBtn onClick={onSubmit}>添加</PrimaryBtn>
  }else {
    return <DisablePrimaryBtn>添加</DisablePrimaryBtn>
  }
}
class AddVehicle extends Component {
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

  toggleProvincePicker = () => {
    this.setState({
      provinceViewFlag: !this.state.provinceViewFlag
    })
  }

  openVehicleTypePicker = () => {
    const vehicleTypes = [
      { label: '大型汽车', value: '01' },
      { label: '小型汽车', value: '02' },
      { label: '使馆汽车', value: '03' },
      { label: '领馆汽车', value: '04' },
      { label: '境外汽车', value: '05' },
      { label: '外籍汽车', value: '06' },
      { label: '两、三轮摩托车', value: '07' },
      { label: '轻便摩托车', value: '08' },
      { label: '使馆摩托车', value: '09' },
      { label: '领馆摩托车', value: '10' },
      { label: '境外摩托车', value: '11' },
      { label: '外籍摩托车', value: '12' },
      { label: '农用运输车', value: '13' },
      { label: '拖拉机', value: '14' },
      { label: '挂车', value: '15' },
      { label: '教练汽车', value: '16' },
      { label: '教练摩托车', value: '17' },
      { label: '试验汽车', value: '18' },
      { label: '试验摩托车', value: '19' },
      { label: '临时入境汽车', value: '20' },
      { label: '临时入境摩托车', value: '21' },
      { label: '临时行驶车', value: '22' },
      { label: '警用汽车', value: '23' },
      { label: '警用摩托车', value: '24' },
      { label: '香港入出境车', value: '26' },
      { label: '澳门入出境车', value: '27' }
    ]

    weui.picker(vehicleTypes, {
      defaultValue: ['01'],
      onConfirm: result => {
        if(result && result[0]){
          this.setState({
            vehicleType: result[0].label
          }, () => {
            this.updateSumbitBtnStatus()
          })
        }
      }
    })    
  }

  selectProvince = (province) => {
    this.setState({
      province: province
    })
    this.toggleProvincePicker()
  }

  handleSubmit = () => {
    const loading = weui.loading('处理中')
    api.addVehicle({
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
              <LayoutHead>
                <StyledLabel onClick={this.toggleProvincePicker}>{this.state.province}</StyledLabel>
              </LayoutHead>
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

            <LayoutGroup onClick={this.openVehicleTypePicker}>
              <LayoutBody>
                <PrimaryInput 
                  type="text" 
                  name="vehicleType" 
                  readOnly
                  defaultValue={this.state.vehicleType} 
                  placeholder="请选择车辆类型"
                />
              </LayoutBody>
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

        {this.state.provinceViewFlag
          && (
            <div>
              <StyledFixedBg onClick={this.toggleProvincePicker}></StyledFixedBg>
              <LayoutFixedBottom>
                <Provinces onSelect={this.selectProvince} />
              </LayoutFixedBottom>
            </div>
          )
        }

        <LayoutBtnBox>
          <SubmitBtn pass={this.state.pass} onSubmit={this.handleSubmit} />
        </LayoutBtnBox> 
      </div>
    )
  }
}

export default AddVehicle