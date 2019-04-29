import React, {Component} from 'react';
import weui from 'weui.js'

import {getAddr, addJDAddr} from '@/api'

import Page from './styled'
import Backhome from '@/components/Backhome'

import AddrSelect from './AddrSelect'

function parseObjectToArr(data) {
  const arr = []
  Object.keys(data).map(key => {
    return arr.push({
      text: key,
      value: data[key]
    })
  })
  return arr
}

function getSelectText(select) {
  return select.options[select.selectedIndex].text
}

class AddAddr extends Component {
  constructor(props) {
    super(props)

    this.handleProvince = this.handleProvince.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleCounty = this.handleCounty.bind(this)
    this.handleTown = this.handleTown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      name: '',
      phone: '',
      addr: '',

      province: '',
      provinceText: '',
      provinceData: [],
      city: '',
      cityText: '',
      cityData: [],
      county: '',
      countyText: '',
      countyData: [],
      town: '',
      townText: '',
      townData: [],

      isDefault: 0
    }
  }

  componentDidMount() {
    this.loadAddr(1, null, data => {
      this.setState({provinceData: data})
    })
  }

  async loadAddr(type = 1, addressId = '', cb = () => {}) {
    const params = {type, addressId}
    const loading = weui.loading('加载中')
    try {
      const {data} = await getAddr(params)
      if(data.status === 200 && !!data.data) {
        data.data = parseObjectToArr(data.data)
        cb(data.data)
      }
    }finally {
      loading.hide()
    }
  }

  async addAddr(params) {
    const loading = weui.loading('处理中')
    try {
      const {data} = await addJDAddr(params)
      if(data.status === 200) {
        this.props.addAddr({
          ...params,
          id: data.data
        })
      }
    }finally {
      loading.hide()
    }
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({[name]: value})
  }

  handleProvince(e) {
    const select = e.target
    const text = getSelectText(select)
    const value = select.value
    this.setState({
      province: value,
      provinceText: text,
      city: "",
      cityText: '',
      cityData: [],
      county: "",
      countyText: '',
      countyData: [],
      town: "",
      townText: '',
      townData: []   
    }, () => {
      this.loadAddr(2, value, data => {
        this.setState({cityData: data})
      })
    })
  }

  handleCity(e) {
    const select = e.target
    const text = getSelectText(select)
    const value = select.value
    this.setState({
      city: value,
      cityText: text,
      county: "",
      countyText: '',
      countyData: [],
      town: "",
      townText: '',
      townData: []    
    }, () => {
      this.loadAddr(3, value, data => {
        this.setState({countyData: data})
      })      
    })    
  }

  handleCounty(e) {
    const select = e.target
    const text = getSelectText(select)
    const value = select.value
    this.setState({
      county: value,
      countyText: text,
      town: "",
      townText: '',
      townData: []   
    }, () => {
      this.loadAddr(4, value, data => {
        this.setState({townData: data})
      })      
    })    
  }

  handleTown(e) {
    const select = e.target
    const text = getSelectText(select)
    const value = select.value
    this.setState({town: value, townText: text})    
  }

  handleCancel() {
    this.props.history.goBack()
  }

  verify() {
    if(!this.state.name) {
      weui.alert('请输入收件人姓名')
      return false
    }
    if(!this.state.phone) {
      weui.alert('请输入联系电话')
      return false
    }
    if(!this.state.addr) {
      weui.alert('请输入详细地址')
      return false
    }
    return true
  }

  handleSubmit() {
    if(!this.verify()) {
      return
    }
    const params = {
      name: this.state.name,
      phone: this.state.phone,

      provinceNo: this.state.province,
      province: this.state.provinceText,
      cityNo: this.state.city,
      city: this.state.cityText,
      countyNo: this.state.county,
      county: this.state.countyText,
      townNo: this.state.town,
      town: this.state.townText,            

      address: this.state.addr,
      defaultAddress: this.state.isDefault ? 1 : 0
    }
    this.addAddr(params)
  }

  render() {
    return (
      <Page>
        <div className="group">
          <div className="group__head">收件人</div>
          <div className="group__body">
            <input 
              type="text" 
              name="name"
              className="input" 
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="请输入收件人姓名"
            />
          </div>
        </div>
        <div className="group">
          <div className="group__head">联系电话</div>
          <div className="group__body">
            <input
              type="text" 
              name="phone"
              className="input" 
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="请输入联系电话"
            />
          </div>
        </div>
        <div className="group">
          <div className="group__head">省份</div>
          <div className="group__body">
            <AddrSelect
              data={this.state.provinceData}
              handleChange={this.handleProvince}
            />
          </div>
        </div>
        <div className="group">
          <div className="group__head">市级</div>
          <div className="group__body">
            <AddrSelect
              data={this.state.cityData}
              handleChange={this.handleCity}
            />
          </div>
        </div>
        <div className="group">
          <div className="group__head">地区</div>
          <div className="group__body">
            <AddrSelect
              data={this.state.countyData}
              handleChange={this.handleCounty}
            />
          </div>
        </div>
        {!!this.state.townData.length && (
          <div className="group">
            <div className="group__head">乡镇</div>
            <div className="group__body">
              <AddrSelect
                data={this.state.townData}
                handleChange={this.handleTown}
              />
            </div>
          </div>
        )}
        <div className="group">
          <div className="group__head">详细地址</div>
          <div className="group__body">
            <textarea
              name="addr"
              value={this.state.addr} 
              onChange={this.handleChange} 
              placeholder="请输入详细地址"
            />
          </div>
        </div>
        <div className="group">
          <div className="group__head">设为默认</div>
          <div className="group__body">
            <input 
              type="checkbox"
              name="isDefault"
              checked={this.state.isDefault}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="fixed-bottom">
          <div className="btn-list">
            <div onClick={this.props.handleCancel}>取消</div>
            <div onClick={this.handleSubmit}>确定</div>
          </div>
        </div>

        <Backhome />
      </Page>
    )
  }
}

export default AddAddr