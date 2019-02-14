import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

//! First type of testing action objects
// test('testing another simply action edit expense object', () => {
//   const action = editExpense('123abc', { note: 'New note value' });
//   expect(action).toEqual({
//       type: 'EDIT_EXPENSE',
//       id: '123abc',
//       updates: {
//           note: 'New note value',
//       },
//   });
// });

// it('should setup add expense with provided values', () => {
//     const expenseData = {
//         description: 'Kaffe',
//         amount: 29500,
//         createdAt: 2000, //! from 1970
//         note: 'Dyrt Java!',
//     };
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             // id: expect.any(String),
//         },
//     });
// });
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: undefined,
    });
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: 'fakeoy',
        createdAt: 20000,
        amount: 29500,
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount,
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should NOT edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '55',
        updates: {
            amount,
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
