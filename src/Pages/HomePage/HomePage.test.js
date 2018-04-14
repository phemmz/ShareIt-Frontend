import React from 'react';

import HomePage from './HomePage';

test('Render a div', () => {
  const wrapper = shallow(<HomePage />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('div').length).toBe(1);
});
