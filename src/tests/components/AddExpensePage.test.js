import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense;
let history;
let wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AddExpensePage startAddExpense={startAddExpense} history={history} />
    );
});

test('should render AddExpensePage correct', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correct', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should greet user name', () => {
    const name = generateGreeting('Hani');
    expect(name).toEqual('Hello Hani!');
});

test('should generate greeting for no name user', () => {
    const res = generateGreeting();
    expect(res).toBe('Hell Anonymous!');
});
