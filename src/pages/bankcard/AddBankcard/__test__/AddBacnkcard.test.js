import React from 'react'
import {shallow} from 'enzyme'

import AddBankcard from '../views/AddBankcard'

it('应该找到一个按钮', () => {
  const wrapper = shallow(<AddBankcard/>)
  expect(wrapper.find('.btn.btn-secondary').length).toBe(1)
})

it('绑定银行卡姓名不能含有非中文字符', () => {
  const wrapper = shallow(<AddBankcard/>)
  let value = 'tom'
  let name = 'username'
  wrapper.find({name: 'username'}).simulate('change', {target: {name, value}})
  wrapper.find('.btn.btn-secondary').simulate('click')
  expect(wrapper.find('.msg').text()).toEqual('姓名输入不合法')

  value = '范思哲x'
  wrapper.find({name: 'username'}).simulate('change', {target: {name, value}})
  wrapper.find('.btn.btn-secondary').simulate('click')
  expect(wrapper.find('.msg').text()).toEqual('姓名输入不合法')

  value = 'x范思哲'
  wrapper.find({name: 'username'}).simulate('change', {target: {name, value}})
  wrapper.find('.btn.btn-secondary').simulate('click')
  expect(wrapper.find('.msg').text()).toEqual('姓名输入不合法')

  value = '范思x哲'
  wrapper.find({name: 'username'}).simulate('change', {target: {name, value}})
  wrapper.find('.btn.btn-secondary').simulate('click')
  expect(wrapper.find('.msg').text()).toEqual('姓名输入不合法')

  value = '范思哲'
  wrapper.find({name: 'username'}).simulate('change', {target: {name, value}})
  wrapper.find('.btn.btn-secondary').simulate('click')
  expect(wrapper.find('.msg').text()).toEqual('请输入身份证号')

  // 1. 给用户名输入框触发change，并且填充e.target.value
  // 2. 触发提交按钮
  // 3. 检测页面上的弹层内容是否符合预期
  // 4. 检测this.verify的返回值是否符合预期
})