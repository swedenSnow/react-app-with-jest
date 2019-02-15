import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

//! If not mocking moment lib the time would be inconsistant // since point in time will change
test('should render ExpenseForm correct', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensForm with expense data correct', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    // console.log(wrapper.state('error'));
    expect(wrapper.state('error')).toBe('Please enter a valid description ');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            target: { value },
        });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value },
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: { value },
        });
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find('input')
        .at(1)
        .simulate('change', {
            target: { value },
        });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onsubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    //   onSubmitSpy('Hani', 'Stockholm');
    //   expect(onSubmitSpy).toHaveBeenCalledWith('Hani', 'Stockholm');
    const wrapper = shallow(
        <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calenderFocused')).toBe(focused);
});
