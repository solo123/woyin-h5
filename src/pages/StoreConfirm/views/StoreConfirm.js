import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import arrow from '@/asset/images/icon/arrow_right.svg'
import locationIcon from '@/asset/images/location.svg'

import Backhome from '@/common/Backhome'
import {push} from '@/services/redirect'
import Page from './styled'

import {fetchAddr} from '../actions'
import {actions as addrActions} from '@/pages/StoreConfirm'

function AddBar({handleClick}) {
  return (
    <div className="add-bar">
      <span>新增收货地址</span>
      <img className="icon" onClick={handleClick} src={arrow} alt=""/>
    </div>    
  )
}

function Addr({name, phone, province, city, country, town, addr, handleClick}) {
  return (
    <div className="addr">
      <div className="addr__head">
        <img className="addr__icon" src={locationIcon} alt=""/>
      </div>
      <div className="addr__body">
        <h2>{name} {phone}</h2>
        <div>{province}{city}{country}{town} {addr}</div>
      </div>
      <div className="addr__foot">
        <img className="icon" onClick={handleClick} src={arrow} alt=""/>
      </div>
    </div>
  )
}

class StoreConfirm extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      addrs: [],
      addrId: '',

      name: '',
      phone: '',

      province: '',
      city: '',
      country: '',
      town: '',
      addr: ''
    }
  }

  componentDidMount() {
    if(this.props.status === 'loading') {
      this.props.loadAddr(() => {
        this.setDefaultAddr()
      })
    }else {
      this.setUseAddr()
    }
  }

  setUseAddr() {
    this.props.addrs.forEach(addr => {
      if(addr.use) {
        this.setState({
          addrId: addr.id,
          name: addr.name,
          phone: addr.phone,
          province: addr.province,
          city: addr.city,
          country: addr.country,
          town: addr.town,
          addr: addr.address
        })
      }
    })    
  }

  setDefaultAddr() {
    this.props.addrs.forEach(addr => {
      if(addr.defaultAddress) {
        this.setState({
          addrId: addr.id,
          name: addr.name,
          phone: addr.phone,
          province: addr.province,
          city: addr.city,
          country: addr.country,
          town: addr.town,
          addr: addr.address
        })
        this.props.selectAddr(addr.id)
      }
    })
  }

  handleClick() {
    if(!this.props.addrs.length) {
      push('/add-addr', {
        from: 'store'
      })        
    }else {
      push('/addr')
    }
  }

  handleSubmit() {
    push('/result')
  }

  render() {
    return (
      <Page>
        <Helmet defaultTitle="沃银企服" title="购买确认" />

        <header>
          {this.state.addrId
            ? <Addr {...this.state} handleClick={this.handleClick} />
            : <AddBar handleClick={this.handleClick} />
          }
        </header>

        <main>
          <section className="info">
            <h2>锐玛（EIRMAI） R10 单反相机干燥箱 防潮箱 密封镜头电子箱  中号 送大号吸湿卡 炫蓝色</h2>
            <ul>
              <li>
                <span>单价</span>
                <span>1000 积分</span>
              </li>
              <li>
                <span>数量</span>
                <span>x2</span>
              </li>
              <li>
                <span>运费</span>
                <span>600 积分</span>
              </li>
            </ul>
          </section>
          <div className="total">
            <span>订单总额</span>
            <span>10000积分</span>
          </div>
        </main>

        <div className="fixed-bottom">
          <div className="submit-btn" onClick={this.handleSubmit}>提交订单</div>
        </div>

        <Backhome />
      </Page>
    )
  }
}

const mapStateTopProps = (state) => {
  const addr = state.addr
  return {
    status: addr.status,
    addrs: addr.addrs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAddr: (cb) => {
      dispatch(fetchAddr(cb))
    },
    selectAddr: (id) => {
      dispatch(addrActions.selectAddr(id))
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(StoreConfirm)