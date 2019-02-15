import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../../components/NotfoundPage';

describe('<NotFoundPage/>', () => {
    it('should render the 404 correctly', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a set amount of children', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper.children()).toHaveLength(2);
    });
    // it('should Redirect to landingpage', () => {
    //     const clickSpy = jest.fn();
    //     const history = { push: jest.fn() };
    //     const wrapper = shallow(
    //         <NotFoundPage clickSpy={clickSpy} history={history} />
    //     );
    //     wrapper.find('Link').prop('to')(clickSpy);
    //     expect(history.push).toHaveBeenLastCalledWith('/');
    // });
});
