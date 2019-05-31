import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BankcardList from '../views/BankcardList'

Enzyme.configure({adapter: new Adapter()})

it('页面上应该存在一个添加银行卡的按钮', () => {
  const wrapper = shallow(<BankcardList/>)
  expect(wrapper.find('.btn.btn-secondary').text()).toBe('添加银行/信用卡')
})

it('点击添加银行卡的按钮路由地址应该是 /bankcard-add', () => {
  const wrapper = shallow(<BankcardList/>)
  expect(wrapper.find('.btn.btn-secondary').parent().props('href').to).toBe('/bankcard-add')
})