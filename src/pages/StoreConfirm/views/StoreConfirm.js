import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from "react-helmet"
import weui from 'weui.js'

import arrow from '@/asset/images/icon/arrow_right.svg'
import locationIcon from '@/asset/images/location.svg'

import util from '@/util'
import FullLayer from '@/common/FullLayer'
import {getJDAddrList, deleteAddrById, placeOrder, getJDFreight} from '@/api'
import Backhome from '@/common/Backhome'
import {replace} from '@/services/redirect'
import Page from './styled'
import AddrList from './AddrList'
import AddAddr from './AddAddr'
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

function Addr({name, phone, province, city, county, town, addr, handleClick}) {
  return (
    <div className="addr">
      <div className="addr__head">
        <img className="addr__icon" src={locationIcon} alt=""/>
      </div>
      <div className="addr__body">
        <h2>{name} {phone}</h2>
        <div>{province}{city}{county}{town} {addr}</div>
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
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggleAddAddr = this.handleToggleAddAddr.bind(this)
    this.handleAddAddr = this.handleAddAddr.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.state = {
      addrs: [],

      addrId: '',
      name: '',
      phone: '',

      province: '',
      city: '',
      county: '',
      town: '',
      addr: '',

      freight: 0,

      showAddrList: false,
      showAddAddr: false,

      availableIntegral: 10000
    }
  }

  componentDidMount() {
    this.loadAddrs()
  }

  async loadAddrs() {
    try {
      const {data} = await getJDAddrList()
      if(data.status === 200) {
        this.setState({addrs: data.data}, () => {
          this.setDefaultAddr()
        })
      }
    }finally {
    }
  }
  
  async deleteAddr(id) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await deleteAddrById(id)
      if(data.status === 200) {
        this.removeAddrById(id)
      }
    }finally{
      loading.hide()
    }
  }

  async getFreight(params) {
    try {
      const {data} = await getJDFreight(params)
      if(data.status === 200) {
        this.setState({freight: data.data.freight})
      }
    }finally {
    }
  }

  removeAddrById(id) {
    const addrs = this.state.addrs.filter(item => item.id !== id)
    this.setState({addrs: addrs})
  }

  setUseAddr() {
    this.state.addrs.forEach(addr => {
      if(addr.use) {
        this.setCurrAddr(addr)
      }
    })    
  }

  setCurrAddr(addr) {
    this.setState({
      addrId: addr.id,
      name: addr.name,
      phone: addr.phone,
      province: addr.province,
      city: addr.city,
      county: addr.county,
      town: addr.town,
      addr: addr.address
    }, () => {
      const params = {
        skuId: this.props.location.state.skuId,
        count: this.props.location.state.count,
        addressId: addr.id
      }
      this.getFreight(params)
    })    
  }

  setAddrUsed(id, cb) {
    const addrs = this.state.addrs.map(item => {
      if(item.id === id) {
        return {
          ...item,
          use: true
        }
      }else {
        return {
          ...item,
          use: false
        }
      }
    })
    this.setState({addrs}, cb)
  }

  setDefaultAddr() {
    const addrs = this.state.addrs.map(addr => {
      if(addr.defaultAddress) {
        this.setCurrAddr(addr)
        return {
          ...addr,
          use: true
        }
      }
      return addr
    })
    this.setState({addrs: addrs})
  }

  handleClick() {
    if(!this.state.addrs.length) {
      // 显示新增地址弹层
      this.handleToggleAddAddr()
    }else {
      this.setState({showAddrList: true})
    }
  }

  handleDelete(e, id) {
    e.stopPropagation()
    weui.confirm('确认删除吗？', () => {
      this.deleteAddr(id)
    })
  }

  handleSelect(id) {
    this.setAddrUsed(id, () => {
      this.setState({showAddrList: false})
      this.setUseAddr()   
    })
  }

  handleToggle() {
    this.setState({showAddrList: false})
  }

  handleToggleAddAddr() {
    this.setState({showAddAddr: !this.state.showAddAddr})
  }

  handleAddAddr(addr) {
    if(addr.defaultAddress === 1) {
      const addrs = this.state.addrs.map(item => {
        return {
          ...item,
          defaultAddress: 0
        }
      })
      this.setState({addrs: [...addrs, addr]}, () => {
        this.setAddrUsed(addr.id)
        this.setCurrAddr(addr)
        this.handleToggleAddAddr()
      })      
    }else {
      this.setState({addrs: [...this.state.addrs, addr]}, () => {
        this.setAddrUsed(addr.id)
        this.setCurrAddr(addr)
        this.handleToggleAddAddr()
      })
    }
  }

  async doSubmit(pswd) {
    const loading = weui.loading('处理中')
    const {skuId, count} = this.props.location.state
    const {addrId} = this.state
    const params = {
      skuId: skuId,
      count: count,
      addressId: addrId,
      tranPwd: pswd
    }
    try {
      const {data} = await placeOrder(params)
      if(data.status === 200) {
        setTimeout(() => {
          replace('/result')
        }, 300)
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

  retryTransPswd() {
    this.handleSubmit()
  }

  handleSubmit() {
    const {freight} = this.state
    const {count, jdPrice} = this.props.location.state
    const totalIntegral = ((count * jdPrice) * 100) + (freight * 100)
    util.paymentConfirm({
      title: '兑换',
      amount: totalIntegral,
      useable: this.state.availableIntegral,
      callback: (e, inputElem) => {
        if(!inputElem.value) {return false}
        this.doSubmit(inputElem.value)
      }
    })
  }

  render() {
    const {name, count} = this.props.location.state
    const freight = this.state.freight * 100
    const jdPrice = this.props.location.state.jdPrice * 100
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
            <h2>{name}</h2>
            <ul>
              <li>
                <span>单价</span>
                <span>{jdPrice} 积分</span>
              </li>
              <li>
                <span>数量</span>
                <span>x {count}</span>
              </li>
              <li>
                <span>运费</span>
                <span>{freight} 积分</span>
              </li>
            </ul>
          </section>
          <div className="total">
            <span>订单总额</span>
            <span>{count * jdPrice + freight} 积分</span>
          </div>
        </main>

        <div className="fixed-bottom">
          <div className="submit-btn" onClick={this.handleSubmit}>提交订单</div>
        </div>

        <FullLayer show={this.state.showAddrList}>
          <AddrList 
            addrs={this.state.addrs} 
            handleClose={this.handleToggle}
            handleDelete={this.handleDelete}
            handleSelect={this.handleSelect}
            handleOk={this.handleToggleAddAddr}
          />
        </FullLayer>

        <FullLayer show={this.state.showAddAddr}>
          <AddAddr
            handleCancel={this.handleToggleAddAddr}
            addAddr={this.handleAddAddr}
          />
        </FullLayer>

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