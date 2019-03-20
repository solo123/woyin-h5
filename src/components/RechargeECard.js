import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import SkeletonPlaceholder from '../common/SkeletonPlaceholder'
import EmptyArrayPlaceholder from '../common/EmptyArrayPlaceholder'
import api from '../api'

import appleIcon from '../asset/images/ecard/apple.png'
import bgyIcon from '../asset/images/ecard/bgy.png'
import bskIcon from '../asset/images/ecard/bsk.png'
import dqIcon from '../asset/images/ecard/dq.png'
import hgdsIcon from '../asset/images/ecard/hgds.png'
import jdIcon from '../asset/images/ecard/jd.png'
import kdjIcon from '../asset/images/ecard/kdj.png'
import qcsIcon from '../asset/images/ecard/qcs.png'
import snIcon from '../asset/images/ecard/sn.png'
import tmIcon from '../asset/images/ecard/tm.png'
import wnIcon from '../asset/images/ecard/wn.png'
import xbkIcon from '../asset/images/ecard/xbk.png'
import xcIcon from '../asset/images/ecard/xc.png'
import ymxIcon from '../asset/images/ecard/ymx.png'

import emptySrc from '../asset/images/empty.png'

const StyledEmpty = styled.div`
  color: #888;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
  }
`
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
  '1': tmIcon,
  '2': snIcon,
  '3': ymxIcon,
  '4': jdIcon,
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


const Item = ({data, index}) => {
  return (
    <StyledSection>
      <StyledTitle 
        style={{background: colorScheam[index]}}>
        {data.cateName}
      </StyledTitle>
      <StyledList>
        {data.children.map(item => {
          return (
            <LayoutCell key={item.id}>   
              <StyledCell to={`/recharge-ecard/${item.class}`}>
                <StyledIcon src={iconSchema[item.class]} />
                <StyledName>{item.name}</StyledName>
              </StyledCell>
            </LayoutCell>
          )
        })}
      </StyledList>
    </StyledSection>
  )
}

class RechargeECard extends Component {
  constructor(props) {
    super(props)

    this.loadInitData = this.loadInitData.bind(this)

    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount() {
    this.loadInitData()
  }

  loadInitData() {
    this.setState({loading: true})
    api.getECardList()
      .then(res => {
        const {data} = res
        if(data.code === '1') {
          this.setState({items: data.items})
        }
      })
      .then(() => {
        this.setState({loading: false})
      })
      .catch(err => {
      })
  }

  render() {
    const {loading, items} = this.state

    const list = items.map((item, index) => {
      return (
        <Item key={item.id} index={index} data={item} />
      )
    })

    return (
      <div>
        {loading
          ? <SkeletonPlaceholder />
          : (
            list.length
              ? list
              : <EmptyArrayPlaceholder />
          )
        }
      </div>
    )
  }
}

export default RechargeECard