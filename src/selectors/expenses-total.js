import moment from 'moment';

export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, currentvalue) => sum + currentvalue, 0);
};
