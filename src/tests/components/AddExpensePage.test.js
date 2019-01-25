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

test('should handle onSubmit correct', async () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    await expect(history.push).toHaveBeenLastCalledWith('/');
    await expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
