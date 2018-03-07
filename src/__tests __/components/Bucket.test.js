import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bucket from '../../components/Bucket';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const enzymeWrapper = mount(<Bucket title="Hi" description="you" />);
  expect(enzymeWrapper.find('li')).toHaveLength(1);
});
