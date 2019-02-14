import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../components/NotfoundPage';

describe('<NotFoundPage/>', () => {
    it('should render the 404 correctly', () => {
        const wrapper = shallow(<NotFoundPage />);
        console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a set amount of children', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper.children()).toHaveLength(2);
    });
});

// test('should render NotFoundPage correct', () => {
//   const wrapper = shallow(<NotFoundPage />);
// });
