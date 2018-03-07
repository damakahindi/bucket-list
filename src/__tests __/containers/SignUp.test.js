import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUp } from '../../containers/SignUp';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const dashboard = shallow(<SignUp />);
  expect(dashboard.find('.App-google')).toHaveLength(1);
});
