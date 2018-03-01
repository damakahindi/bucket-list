import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SignUp from './SignUp';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = mount(<SignUp />);
  const p = wrapper.find('div').length;
  expect(p).toBeGreaterThan(1);
});
