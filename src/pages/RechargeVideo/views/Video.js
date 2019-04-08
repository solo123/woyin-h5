import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'
import axios from 'axios'

import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'
import api, {getProducts, getSubProducts, rechargeVideo} from '../../../api'
import util from '../../../util'
import {replace} from '../../../services/redirect'
import Backhome from '../../../common/Backhome'

import moreIcon from '../../../asset/images/icon/more.png'
import spinner from '../../../asset/images/spinner.svg'
import dataIcon from '../../../asset/images/data.svg'

import ykIcon from '../../../asset/images/video/icon_yk.png'
import iqyIcon from '../../../asset/images/video/icon_iqy.png'
import kgIcon from '../../../asset/images/video/icon_kg.png'
import kwIcon from '../../../asset/images/video/icon_kw.png'
import mgtvIcon from '../../../asset/images/video/icon_mgtv.png'
import qqyyIcon from '../../../asset/images/video/icon_qqyy.png'
import shIcon from '../../../asset/images/video/icon_sh.png'
import txspIcon from '../../../asset/images/video/icon_txsp.png'

const CancelToken = axios.CancelToken

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
const DisablePrimaryButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-radius: 3px;
  background: #ccc;
`
const Input = styled.input`
  border: 0;
  width: 100%;
  outline: none;
  padding: 0;
  background: transparent;
`
const StyledInput = styled(Input)`
  font-size: 22px;
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
    color: #3b8afc;
    border-color: #3b8afc;
  }
`
const LayoutBoxSecondary = styled.div`
  color: #888;
  margin: 15px;
  background: #fff;
`
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

const ICON_SCHEMA = {
  '16': txspIcon,
  '17': iqyIcon,
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

const ProductItem = function({id, name, buyPrice, selectId, handleClick}) {
  return (
    <LayoutProductItem onClick={() => handleClick(id, buyPrice)}>
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

const getProviderById = (arr, id) => {
  const result = arr.filter(item => {
    return item.productClassifyId === id
  })
  if(result.length) {
    return result[0]
  }
  return null
}

class RechargeVideo extends Component {
  constructor(props) {
    super(props)
    
    this.selectProvider = this.selectProvider.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTogglePicker = this.handleTogglePicker.bind(this)

    this.state = {
      pass: false,
      subProducts: [],
      products: [],
      selectId: '',
      loadSubProdcutLoading: false,
      loadProductLoading: false,
      username: '',
      pickerViewFlag: false,
      selectProviderName: '',
      selectProviderClass: '',

      integral: 0,
      availableIntegral: 0
    }
  }
  
  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadUserInfo()
    this.loadProducts(id)
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadProductsSource && this.loadProductsSource.cancel('Operation canceled by the user.')
    this.loadSubProductsSource && this.loadSubProductsSource.cancel('Operation canceled by the user.')
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await api.getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({availableIntegral: Number(data.data[0].balance)})
      }
    }finally {
    }
  }

  async loadProducts(id) {
    this.setState({loadProductLoading: true})
    this.loadProductsSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadProductsSource.token})
      if(data.status === 200) {
        this.setState({products: data.data}, () => {
          if(data.data.length) {
            this.setProduct(data.data[0])
            this.loadSubProducts(data.data[0].productClassifyId)
          }
        })
      }      
    }finally {
      this.setState({loadProductLoading: false})
    }
  }

  async loadSubProducts(id) {
    this.setState({loadSubProdcutLoading: true})
    this.loadSubProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadSubProductsSource.token})
      if(data.status === 200) {
        this.setState({subProducts: data.data})
      }      
    }finally {
      this.setState({loadSubProdcutLoading: false})
    }
  }

  async submitRecharge(pswd) {
    const loading = weui.loading('处理中')
    this.submitSource = CancelToken.source()
    const params = {
      productId: this.state.selectId,
      chargeAddr: this.state.username,
      chargeType: '1',
      tranPwd: pswd
    }
    try {
      const {data} = await rechargeVideo(params, {cancelToken: this.submitSource.token})
      if(data.status === 200) {
        weui.alert(data.msg, () => {
          replace('/order')
        })
      }else if(data.status === 1017) {
        util.confirmRetry('密码错误', () => {
          this.retryTransPswd()
        })
      }else {
        weui.alert(data.msg)
      }  
    }finally {
      loading.hide() 
    }
  }

  updateBtnStatus() {
    if(this.state.username && this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }    
  }

  setProduct(provider) {
    this.setState({
      selectProviderName: provider.productClassifyName,
      selectProviderClass: provider.productClassifyId
    }, () => {
      this.updateBtnStatus()
    })
  }

  selectProvider(id) {
    const provider = getProviderById(this.state.products, id)
    if(provider) {
      this.loadSubProducts(id)
      this.setProduct(provider)
    }
    this.handleTogglePicker()
  }

  selectProduct(id, integral) {
    this.setState({selectId: id, integral: integral}, () => {
      this.updateBtnStatus()
    })
  }

  retryTransPswd() {
    this.handleSubmit()
  }

  handleTogglePicker() {
    this.setState({pickerViewFlag: !this.state.pickerViewFlag})
  }

  handleChange(e) {
    this.setState({username: e.target.value}, () => {
      this.updateBtnStatus()
    })
  }

  handleSubmit() {
    util.paymentConfirm({
      title: '充值',
      amount: this.state.integral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}
        this.submitRecharge(inputElem.value)
      }
    })
  }

  render() {
    const {pass, products, subProducts} = this.state

    const providerItems = products.map(item => {
      return (
        <Item 
          key={item.productClassifyId} 
          id={item.productClassifyId}
          name={item.productClassifyName}
          icon={ICON_SCHEMA[item.productClassifyId]} 
          selectProvider={this.selectProvider}
        />
      )
    })

    const productItems = subProducts.map(item => {
      return (
        <ProductItem 
          id={item.productId}
          key={item.productId} 
          selectId={this.state.selectId}
          buyPrice={item.productCostBalance}
          name={item.productName}
          handleClick={this.selectProduct}
        />
      )
    })

    return (
      <div>

        {this.state.loadProductLoading
          ? (
            <LayoutBoxSecondary>
              <LoadingSpinner src={spinner}>加载中...</LoadingSpinner>
            </LayoutBoxSecondary>
          )
          : (
            this.state.selectProviderName
             ? (
              <StyledProvider>
                <StyledIcon src={ICON_SCHEMA[this.state.selectProviderClass]} alt=""/>
                <StyledName>{this.state.selectProviderName}</StyledName>
                <StyledArrow onClick={this.handleTogglePicker} src={moreIcon} alt=""/>
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
          <StyledInput
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
        {this.state.loadSubProdcutLoading
          ? <div className="u_mx_xxx"><SkeletonPlaceholder /></div>
          : (
            <StyledProductList>
              {productItems}
            </StyledProductList>
            )
        }
        
        {this.state.pickerViewFlag && (
          <StyledPicker>
            <StyledPickerBg onClick={this.handleTogglePicker} />
            <StyledPickerContent>
              {providerItems}
            </StyledPickerContent>
          </StyledPicker>
        )}

        <LayoutBox>
          {pass
            ? <PrimaryButton onClick={this.handleSubmit}>立即充值</PrimaryButton>
            : <DisablePrimaryButton>立即充值</DisablePrimaryButton>}
        </LayoutBox>

        <Backhome />
      </div>
    )
  }
}

export default RechargeVideo