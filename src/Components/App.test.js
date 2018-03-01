import React from 'react';
import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  const p = wrapper.find('div').length;
  expect(p).toBeGreaterThan(1);
});
