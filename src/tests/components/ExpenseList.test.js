import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper.find('ExpenseListItem')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty msg', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper.find('span').text()).toBe('No Expenses');
    expect(wrapper).toMatchSnapshot();
});
