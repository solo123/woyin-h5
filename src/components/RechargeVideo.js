import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import api from '../api'
import util from '../util'

import moreIcon from '../asset/images/icon/more.png'

import ykIcon from '../asset/images/video/icon_yk.png'
import iqyIcon from '../asset/images/video/icon_iqy.png'
import kgIcon from '../asset/images/video/icon_kg.png'
import kwIcon from '../asset/images/video/icon_kw.png'
import mgtvIcon from '../asset/images/video/icon_mgtv.png'
import qqyyIcon from '../asset/images/video/icon_qqyy.png'
import shIcon from '../asset/images/video/icon_sh.png'
import txspIcon from '../asset/images/video/icon_txsp.png'

const StyledProvider = styled.div`
  display: flex;
  padding: 15px;
  margin: 15px;
  border-radius: 3px;
  background: #fff;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
`
const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`
const StyledName = styled.h2`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
`
const StyledArrow = styled.img`
  width: 25px;
  height: 25px;
`

const LayoutBox = styled.div`
  margin: 15px;
`
const LayoutTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
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
const BigPrimaryInput = styled(Input)`
  color: #444;
  font-size: 16px;
  font-weight: bold;
  font-family: industry;
`

const StyledPicker = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`
const StyledPickerBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
`
const StyledPickerContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #fff;

  display: flex;
  flex-wrap: wrap;
`


const iconSchema = {
  '1': ykIcon,
  '2': iqyIcon,
  '3': kgIcon,
  '4': kwIcon,
  '5': mgtvIcon,
  '6': qqyyIcon,
  '7': shIcon,
  '8': txspIcon,
  '9': txspIcon
}

const Item = ({name, icon, handleSelectProvider}) => {
  const StyleItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #eaeaea;
    &:last-child{
      border-bottom: 0;
    }
    &:nth-child(2n - 1){
      border-right: 1px solid #eaeaea;
    }
  `
  const StyledIcon = styled.img`
    width: 30px;
    height: 30px;
  `
  const StyledName = styled.h3`
    margin-left: 10px;
  `
  return (
    <StyleItem onClick={handleSelectProvider}>
      <StyledIcon src={icon} alt=""/>
      <StyledName>{name}</StyledName>
    </StyleItem>
  )
}

class RechargeVideo extends Component {
  constructor(props) {
    super(props)

    this.loadVideoProviders = this.loadVideoProviders.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.handleOpenPicker = this.handleOpenPicker.bind(this)

    this.state = {
      providers: [],
      loading: false,
      username: '',
      pickerViewFlag: true
    }
  }
  
  componentDidMount() {
    this.loadVideoProviders()
  }

  loadVideoProviders() {
    this.setState({loading: true})
    api.getVideoProviders()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({providers: data.items, loading: false})
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  handleOpenPicker() {
    this.setState({pickerViewFlag: !this.state.pickerViewFlag})
  }

  handleChange(e) {
    this.setState({username: e.target.value})
  }

  render() {
    const {providers} = this.state

    const items = providers.map(item => {
      return (
        <Item 
          key={item.id} 
          name={item.name}
          icon={iconSchema[item.class]} 
          handleSelectProvider={this.handleSelectProvider}
        />
      )
    })


    return (
      <div>
        <StyledProvider>
          <StyledIcon src={ykIcon} alt=""/>
          <StyledName>优酷土豆</StyledName>
          <StyledArrow onClick={this.handleOpenPicker} src={moreIcon} alt=""/>
        </StyledProvider>
        <LayoutBox>
          <BigPrimaryInput
            type="text" 
            value={this.state.username}
            onChange={this.handleChange} 
            placeholder="请输入会员账号" 
            autoComplete="off"
          />
        </LayoutBox>
        <LayoutBox>
          <LayoutTitle>选择面值</LayoutTitle>
        </LayoutBox>

        {this.state.pickerViewFlag
          ? (<StyledPicker>
              <StyledPickerBg onClick={this.handleOpenPicker} />
              <StyledPickerContent>
                {items}
              </StyledPickerContent>
            </StyledPicker>)
          : null}
      </div>
    )
  }
}

export default RechargeVideo