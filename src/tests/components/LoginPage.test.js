import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('[data-test="gmail"]').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

test('should call startLoginGit on button click', () => {
    const startLoginGit = jest.fn();
    const wrapper = shallow(<LoginPage startLoginGit={startLoginGit} />);
    wrapper.find('[data-test="github"]').simulate('click');
    expect(startLoginGit).toHaveBeenCalledTimes(1);
});
