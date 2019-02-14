import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'; //! Instead of writing test data[arr] === in evrery case!

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    //! Expecting 2 results to come back since expense[0]=== 'Gum' dont include 'e'.
    expect(result).toHaveLength(2);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

//! Implementing moment() in fixtures expenses width days apart, instead of secs,
//! So we can sort via sortBy: date
test('should test by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toHaveLength(2);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days'), //! 2days into the future Marty!
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
