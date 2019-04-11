import React, { Component } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import weui from 'weui.js'
import axios from 'axios'

import config from '../../../config'
import Opeator from '../../../common/Operator'
import {getUserInfo, getSubProducts, rechargeVoucher} from '../../../api'
import util from '../../../util'

import appleIcon from '../../../asset/images/ecard/apple.png'
import bgyIcon from '../../../asset/images/ecard/bgy.png'
import bskIcon from '../../../asset/images/ecard/bsk.png'
import dqIcon from '../../../asset/images/ecard/dq.png'
import hgdsIcon from '../../../asset/images/ecard/hgds.png'
import jdIcon from '../../../asset/images/ecard/jd.png'
import kdjIcon from '../../../asset/images/ecard/kdj.png'
import qcsIcon from '../../../asset/images/ecard/qcs.png'
import snIcon from '../../../asset/images/ecard/sn.png'
import tmIcon from '../../../asset/images/ecard/tm.png'
import wnIcon from '../../../asset/images/ecard/wn.png'
import xbkIcon from '../../../asset/images/ecard/xbk.png'
import xcIcon from '../../../asset/images/ecard/xc.png'
import ymxIcon from '../../../asset/images/ecard/ymx.png'

const ICON_SCHEAM = {
  '20': tmIcon,
  '2': snIcon,
  '3': ymxIcon,
  '19': jdIcon,
  '5': xcIcon,
  '6': xcIcon,
  '7': hgdsIcon,
  '8': kdjIcon,
  '9': bskIcon,
  '10': xbkIcon,
  '11': dqIcon,
  '12': bgyIcon,
  '13': appleIcon,
  '14': wnIcon,
  '15': qcsIcon
}

const StyledPageContainer = styled.div`
  padding-bottom: 50px;
`
const StyledPage = styled.div`
  background: #fff;

  dt{
    font-size: 14px;
    margin-bottom: 10px;
  }
  dd{
    color: #888;
    margin-bottom: 10px;
    ol{
      margin-left: 1em;
      li {
        margin-bottom: 5px;
        list-style: decimal;
      }
    }
  }
`
const LayoutBox = styled.div`
  padding: 15px;
`
const StyledBgBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f6f6f6;
  margin-bottom: 15px;
`
const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
`
const StyledName = styled.h2`
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`
const StyledOpeator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledTitle = styled.h2`
  font-size: 14px;
  padding: 15px;
  border-bottom: 1px solid #f6f6f6;
`
const StyledTextRight = styled.div`
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 12px;
  color: #b5b5b5;
  text-align: right;
`

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
`
const StyledItem = styled.div`
  width: 90px;
  padding: 5px;
`
const StyledItemInner = styled.div`
  padding: 10px;
  text-align: center;
  font-family: industry;
  border: 1px solid #eaeaea;
  &.active{
    color: #fff;
    background: #e1c38c;
    border-color: #c89850;
  }
`
const StyledFixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
`
const LayoutFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledSubmitBtn = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 0 30px;
  line-height: 50px;
  background: #e1c38c;
`
const StyledDisableSubmitBtn = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 0 30px;
  line-height: 50px;
  background: #ccc;
`
const StyledSumBox = styled.div`
  line-height: 50px;
  padding: 0 15px;
`
const StyledSum = styled.span`
  color: #F53415;
  font-family: industry;
`

const Item = ({id, selectId, price, integral, handleSelect}) => {
  return (
    <StyledItem>
      <StyledItemInner 
        className={classnames({active: selectId === id})}
        onClick={() => handleSelect(id, integral)}
      >
        {price}元
      </StyledItemInner>
    </StyledItem>
  )
}

const CancelToken = axios.CancelToken

const TITLE_SCHEAM = {
  '20': '京东E卡',
  '2': '京东E卡',
  '3': '京东E卡',
  '19': '京东E卡',
  '5': '京东E卡',
  '6': '京东E卡',
  '7': '京东E卡',
  '8': '京东E卡',
  '9': '京东E卡',
  '10': '京东E卡',
  '11': '京东E卡',
  '12': '京东E卡',
  '13': '京东E卡',
  '14': '京东E卡',
  '15': '京东E卡'
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      count: config.ecard.MIN_COUNT,
      class: props.match.params.id,
      pass: false,
      name: TITLE_SCHEAM[props.match.params.id],
      selectId: '',
      items: [],

      integral: 0,
      availableIntegral: 0
    }
  }

  componentDidMount() {
    this.loadUserInfo()
    this.loadSubProducts(this.state.class)
  }

  componentWillUnmount() {
    this.submitSource && this.submitSource.cancel('Operation canceled by the user.')
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
    this.loadSubProductsSource && this.loadSubProductsSource.cancel('Operation canceled by the user.')
  }

  async loadUserInfo() {
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getUserInfo(null, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({availableIntegral: Number(data.data[0].balance)})
      }
    }finally {
    }
  }

  async loadSubProducts(id) {
    this.setState({skeletonLoading: true})
    this.loadSubProductsSource = CancelToken.source()
    try {
      const {data} = await getSubProducts(id, {cancelToken: this.loadSubProductsSource.token})
      if(data.status === 200) {
        this.setState({items: data.data})
      }
    }finally {
      this.setState({skeletonLoading: false})
    }
  }

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    this.submitSource = CancelToken.source()
    const params = {
      productId: this.state.selectId,
      amount: this.state.count,
      tranPwd: pswd
    }
    try {
      const {data} = await rechargeVoucher(params, {cancelToken: this.submitSource.token})
      if(data.status === 200) {
        weui.alert(data.msg)
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

  handleSelect(id, integral) {
    this.setState({selectId: id, integral: integral}, () => {
      this.updateBtnStatus()
    })
  }

  handleClick(count) {
    if(config.ecard.MAX_COUNT >= count && count >= config.ecard.MIN_COUNT) {
      this.setState({count}, () => {
        this.updateBtnStatus()
      })
    }
  }

  updateBtnStatus() {
    if(this.state.selectId) {
      this.setState({pass: true})
    }else {
      this.setState({pass: false})
    }
  }

  handleChange(e) {
  }

  handleSubmit() {
    const sum = this.state.count * this.state.integral
    util.paymentConfirm({
      title: '兑换卡券',
      useable: this.state.availableIntegral,
      amount: sum,
      callback: (e, input) => {
        if(!input.value.trim()) {
          alert('请输入交易密码')
          return false
        }
        this.doSubmit(input.value)
      }
    })
  }

  retryTransPswd() {
    this.handleSubmit()
  }


  render() {
    const {pass, items, selectId} = this.state

    return (
      <div>
        <StyledPageContainer>
          <div className="u_mb_xx">
            <StyledPage>
                <LayoutBox>
                  <StyledBgBox>
                    <StyledIcon src={ICON_SCHEAM[this.state.class]} />
                    <StyledName>{TITLE_SCHEAM[this.state.class]}</StyledName>
                  </StyledBgBox>
                  <StyledOpeator>
                    <span>兑换数量(最多可购{config.ecard.MAX_COUNT}张)</span>
                    <Opeator 
                      count={this.state.count}
                      onClick={this.handleClick}
                      onChange={this.handleChange}
                    />
                  </StyledOpeator>
                </LayoutBox>
            </StyledPage>
          </div>
          <div className="u_mb_xx">
            <StyledPage>
              <StyledTitle>选择面值</StyledTitle>
              <div>
                <StyledItems>
                  {items.map(item => {
                    const disCount = (Number(item.disCount) / 10).toFixed(2)
                    return (
                      <Item 
                        key={item.productId} 
                        id={item.productId}
                        price={item.salesPrice} 
                        selectId={selectId}
                        integral={item.productCostBalance * disCount}
                        handleSelect={this.handleSelect}
                      />
                    )
                  })}
                </StyledItems>
                <StyledTextRight>订单支付后立即生效，不可退回</StyledTextRight>
              </div>
            </StyledPage>
          </div>
          <div className="u_mb_xx">
            <StyledPage>
              <StyledTitle>产品详情</StyledTitle>
              <LayoutBox>
                <dl>
                  <dt>有效期：</dt>
                  <dd>京东E卡有效期为3个月</dd>
                </dl>
                <dl>
                  <dt>商品说明：</dt>
                  <dd>
                    <ol>
                      <li>购买成功后您将收到对应产品的京东E卡信息；</li>
                      <li>京东E卡不记名、不挂失、不兑现、不计息、不可修改密码。购买后需要妥善保管卡号及密码；</li>
                      <li>京东E卡仅能购买京东自营商品 （页面显示有“京东自营”或者商品编号为6位或者7位数，但出版物、全球购、虚拟产品、部分团购及抢购商品、投资金银类、夺宝岛和第三方卖家商品不在此内）；</li>
                      <li>使用京东E卡购买的商品发生退货时，所支付资金会自动退回到卡内；</li>
                      <li>登录京东首页，选择喜欢的商品加入购物车并根据页面上的提示进行购物操作。在提交订单页面，点击“使用优惠/抵用“，选择礼品卡，输入您的京东E卡的密码，点击绑定即可绑定到您的账户中，然后根据需要选择您使用的京东E卡，点击提交订单即可完成操作。注：如需一次使用多张E卡，可点击“添加礼品卡“继续绑定，然后点击勾选多张E卡即可使用；</li>
                      <li>京东将不会对E卡消费的金额开具发票。</li>
                    </ol>					
                  </dd>
                </dl>
              </LayoutBox>
            </StyledPage>
          </div>
          <StyledFixedBottom>
            <LayoutFlex>
              <StyledSumBox>兑换积分：<StyledSum>{this.state.integral * this.state.count}</StyledSum></StyledSumBox>
              {pass
                ? <StyledSubmitBtn onClick={this.handleSubmit}>立即兑换</StyledSubmitBtn>
                : <StyledDisableSubmitBtn>立即兑换</StyledDisableSubmitBtn>
              }
            </LayoutFlex>
          </StyledFixedBottom>
        </StyledPageContainer>
      </div>
    )
  }
}