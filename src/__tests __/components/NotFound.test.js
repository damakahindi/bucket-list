import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../../components/NotFound';

Enzyme.configure({ adapter: new Adapter() });


describe('NotFound Components', () => {
  it('should render self and subcomponents', () => {
    const enzymeWrapper = mount(<NotFound />);
    expect(enzymeWrapper.find('h1').text()).toBe('404 ');
  });
});
