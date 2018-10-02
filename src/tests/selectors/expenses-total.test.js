// import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const selectExpenses = selectExpensesTotal([]);
  expect(selectExpenses).toBe(0);
});

test('should add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should add up multiple expense', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
