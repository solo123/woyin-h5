import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import api from '../api'
import util from '../util'

import moreIcon from '../asset/images/icon/more.png'
import spinner from '../asset/images/spinner.svg'
import dataIcon from '../asset/images/data.svg'

import ykIcon from '../asset/images/video/icon_yk.png'
import iqyIcon from '../asset/images/video/icon_iqy.png'
import kgIcon from '../asset/images/video/icon_kg.png'
import kwIcon from '../asset/images/video/icon_kw.png'
import mgtvIcon from '../asset/images/video/icon_mgtv.png'
import qqyyIcon from '../asset/images/video/icon_qqyy.png'
import shIcon from '../asset/images/video/icon_sh.png'
import txspIcon from '../asset/images/video/icon_txsp.png'


const Button = styled.button`
  border: 0;
  padding: 0;
  width: 100%;
  outline: none;
  display: block;
  background: transparent;
`
const PrimaryButton = styled(Button)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(207, 162, 95, .58);
  background: -webkit-linear-gradient(47deg, #c89850, #e1c38c);
`
const DisablePrimaryButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`

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
  '3': txspIcon,
  '4': txspIcon,
  '5': mgtvIcon,
  '6': shIcon,
  '7': qqyyIcon,
  '8': kgIcon,
  '9': kwIcon
}

const Item = ({id, name, icon, selectProvider}) => {
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
    <StyleItem onClick={() => selectProvider(id)}>
      <StyledIcon src={icon} alt=""/>
      <StyledName>{name}</StyledName>
    </StyleItem>
  )
}

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
`
const LayoutProductItem = styled.div`
  width: 50%;
`
const StyledProductItem = styled.div`
  margin: 5px;
  padding: 10px;
  background: #fff;
  text-align: center;
  border-radius: 3px;
  font-family: industry;
  border: 1px solid #eaeaea;
  &.active{
    color: #fff;
    background: #e1c38c;
    border-color: #c89850;
  }
`

const LayoutBoxSecondary = styled.div`
  color: #888;
  margin: 15px;
  background: #fff;
`

const ProductItem = function({id, name, buyPrice, selectId, handleClick}) {
  return (
    <LayoutProductItem onClick={() => handleClick(id)}>
      <StyledProductItem className={classnames({'active': selectId === id})}>
        <div>{name}</div>
        <div>{buyPrice}积分</div>
      </StyledProductItem>
    </LayoutProductItem>
  )
}

const LoadingSpinner = ({src, children}) => {
  const StyledSpinner = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    img{
      width: 70px;
      height: 70px;
      border-radius: 3px;
    }
  `
  return (
    <StyledSpinner>
      <img src={src} alt=""/>
      {children}
    </StyledSpinner>
  )
}

const StyledData = styled.div`
    display: flex;
    align-items: center;
  padding: 15px;
      font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  img{
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`



const getProviderById = (arr, id) => {
  const result = arr.filter(item => {
    return item.id === id
  })
  if(result.length) {
    return result[0]
  }
  return null
}

class RechargeVideo extends Component {
  constructor(props) {
    super(props)
    
    this.setProvider = this.setProvider.bind(this)
    this.loadVideoProducts = this.loadVideoProducts.bind(this)
    this.loadVideoProviders = this.loadVideoProviders.bind(this)
    this.selectProvider = this.selectProvider.bind(this)
    this.selectProduct = this.selectProduct.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOpenPicker = this.handleOpenPicker.bind(this)

    this.validationPswd = this.validationPswd.bind(this)
    this.submitRecharge = this.submitRecharge.bind(this)
    this.retryPaymentPswd = this.retryPaymentPswd.bind(this)

    this.updateButtonStatus = this.updateButtonStatus.bind(this)

    this.state = {
      pass: false,
      products: [],
      providers: [],
      selectId: '',
      loadProdcutLoading: false,
      loadProvidersLoading: false,
      username: '',
      pickerViewFlag: false,

      selectProviderName: '',
      selectProviderClass: ''
    }
  }
  
  componentDidMount() {
    this.loadVideoProviders()
  }

  updateButtonStatus() {
    if(this.state.username && this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }    
  }

  loadVideoProviders() {
    this.setState({loadProvidersLoading: true})
    api.getVideoProviders()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({
            providers: data.items, 
            loadProvidersLoading: false
          }, () => {
            if(data.items.length) {
              this.setProvider(data.items[0])
              this.loadVideoProducts(data.items[0].id)
            }
          })
        }
      })
      .then(() => {
        this.setState({loadProvidersLoading: false})
      })
  }

  loadVideoProducts(id) {
    this.setState({loadProdcutLoading: true})
    api.getVideoProducts(id)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({products: data.items, loadProdcutLoading: false})
        }
      })
      .then(() => {
        this.setState({loadProdcutLoading: false})
      })
  }

  setProvider(provider) {
    this.setState({
      selectProviderName: provider.name,
      selectProviderClass: provider.class
    }, () => {
      this.updateButtonStatus()
    })
  }

  selectProvider(id) {
    const provider = getProviderById(this.state.providers, id)

    if(provider) {
      this.loadVideoProducts(id)
      this.setProvider(provider)
    }
    this.handleOpenPicker()
  }

  handleOpenPicker() {
    this.setState({pickerViewFlag: !this.state.pickerViewFlag})
  }

  handleChange(e) {
    this.setState({username: e.target.value}, () => {
      this.updateButtonStatus()
    })
  }

  selectProduct(id) {
    this.setState({selectId: id}, () => {
      this.updateButtonStatus()
    })
  }

  // 重试交易密码
  retryPaymentPswd() {
    this.handleSubmit()
  }

  submitRecharge() {
    const loading = weui.loading('处理中')
    api.rechargePhone(this.state.selectId, this.state.phone)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          weui.alert(data.msg)
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
      .catch(err => {
      })
  }

  validationPswd(pswd) {
    const loading = weui.loading('处理中')
    api.confirmTransPswd(pswd)
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.submitRecharge()
        }else if(data.code === '2'){
          weui.confirm(data.msg, () => {
            this.retryPaymentPswd()
          })
        }else {
          weui.alert(data.msg)
        }
      })
      .then(() => {
        loading.hide()
      })
      .catch(err => {
      })
  }

  handleSubmit() {
    util.paymentConfirm({
      title: '充值',
      subtitle: '壹企服',
      amount: 3000,
      useable: 5000000,
      callback: (e, inputElem) => {
        if(!inputElem.value) {
          return false
        }
        this.validationPswd(inputElem.value)
      }
    })
  }

  render() {
    const {pass, providers, products} = this.state

    const providerItems = providers.map(item => {
      return (
        <Item 
          key={item.id} 
          id={item.id}
          name={item.name}
          icon={iconSchema[item.class]} 
          selectProvider={this.selectProvider}
        />
      )
    })

    const productItems = products.map(item => {
      return (
        <ProductItem 
          id={item.productId}
          key={item.productId} 
          selectId={this.state.selectId}
          buyPrice={item.buyPrice}
          name={item.productName}
          handleClick={this.selectProduct}
        />
      )
    })

    return (
      <div>

        {this.state.loadProvidersLoading
          ? (
            <LayoutBoxSecondary>
              <LoadingSpinner src={spinner}>加载中...</LoadingSpinner>
            </LayoutBoxSecondary>
          )
          : (
            this.state.selectProviderName
             ? (
              <StyledProvider>
                <StyledIcon src={iconSchema[this.state.selectProviderClass]} alt=""/>
                <StyledName>{this.state.selectProviderName}</StyledName>
                <StyledArrow onClick={this.handleOpenPicker} src={moreIcon} alt=""/>
              </StyledProvider>
             )
            : (
              <LayoutBoxSecondary>
                <StyledData>
                  <img  src={dataIcon} alt=""/>
                  暂无数据
                </StyledData>
              </LayoutBoxSecondary>
            )
          )
        }

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
        {this.state.loadProdcutLoading
          ? <SkeletonPlaceholder />
          : (
            <StyledProductList>
              {productItems}
            </StyledProductList>
            )
        }
        
        {this.state.pickerViewFlag
          ? (<StyledPicker>
              <StyledPickerBg onClick={this.handleOpenPicker} />
              <StyledPickerContent>
                {providerItems}
              </StyledPickerContent>
            </StyledPicker>)
          : null
        }

        <LayoutBox>
          {pass
            ? <PrimaryButton onClick={this.handleSubmit}>立即充值</PrimaryButton>
            : <DisablePrimaryButton>立即充值</DisablePrimaryButton>}
        </LayoutBox>
      </div>
    )
  }
}

export default RechargeVideo