import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'

import SkeletonPlaceholder from '../../../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../../../common/EmptyArrayPlaceholder'
import {getProducts} from '../../../api'

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

const StyledSection = styled.div`
  display: block;
  margin: 15px 10px;
`
const StyledTitle = styled.h2`
  color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  margin: 5px 5px 10px 5px;
  box-shadow: 0 2px 50px 0 rgba(12, 16, 20, .1);
`

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 7px;
`
const LayoutCell = styled.div`
  width: 50%;
`
const StyledCell = styled(Link)`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 10px;
  background: #fff;
`
const StyledName = styled.h3`
  font-size: 12px;
  margin-left: 10px;
  word-break: break-all;
`
const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
`

const colorScheam = [
  '#f4c652',
  '#f9896d',
  '#adda91',
  '#7c9bef'
]

const iconSchema = {
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

const CancelToken = axios.CancelToken

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      products: [],
      loading: false
    }
  }

  componentDidMount() {
    const {id} = this.props.history.location.state
    this.loadProducts(id)
  }

  componentWillUnmount() {
    this.loadUserInfoSource && this.loadUserInfoSource.cancel('Operation canceled by the user.')
  }

  async loadProducts(id) {
    this.setState({loading: true})
    this.loadUserInfoSource = CancelToken.source()
    try {
      const {data} = await getProducts(id, {cancelToken: this.loadUserInfoSource.token})
      if(data.status === 200) {
        this.setState({products: data.data})
      }
    }finally {
      this.setState({loading: false})
    }
  }

  render() {
    const {loading, products} = this.state

    if(loading) {
      return <div className="u_m_xxx"><SkeletonPlaceholder count={3} /></div>  
    }

    if(!products.length) {
      return <EmptyArrayPlaceholder />
    }

    return (
      <div>
        <StyledSection>
          <StyledTitle style={{background: colorScheam[0]}}>
            电子卡券
          </StyledTitle>
          <StyledList>
            {products.map(item => {
              return (
                <LayoutCell key={item.productClassifyId}>   
                  <StyledCell to={`/recharge-voucher/${item.productClassifyId}`}>
                    <StyledIcon src={iconSchema[item.productClassifyId]} />
                    <StyledName>{item.productClassifyName}</StyledName>
                  </StyledCell>
                </LayoutCell>
              )
            })}
          </StyledList>
        </StyledSection>
      </div>
    )
  }
}