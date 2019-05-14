import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FakeLogin from '../views/FakeLogin'

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const wrapper = shallow(<FakeLogin/>);
  expect(wrapper.find('.title').length).toBe(1);
});
