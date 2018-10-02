import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary single expense correct', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary multiple expenses correct', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={53636363} />
  );
  expect(wrapper).toMatchSnapshot();
});
