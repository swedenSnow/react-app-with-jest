//!react-test-renderer
//?a lib that allows us to renderer our components in just javscrict code.
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

test('should render Header correct', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  //simple test for h1 text
  //   expect(wrapper.find('h1').text()).toBe('Expensify');

  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  //   console.log(renderer.getRenderOutput());
});
