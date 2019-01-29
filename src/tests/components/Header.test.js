//! react-test-renderer
// ?a lib that allows us to renderer our components in just javscrict code.
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

test('should render Header with an <h1></h1>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
});

test('should render Header to contain Budget text', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toContain('Budget');
});
