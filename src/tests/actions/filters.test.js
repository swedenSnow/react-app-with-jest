import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should generate set text filter object with text value', () => {
  const text = 'Something in';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// const add = (a, b) => a + b;
// const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// test('should add to numbers', () => {
//   const result = add(3, 4);
//   //   if (result !== 7) {
//   //     throw new Error(`You added 4 and 3 the result was ${result}. Expect 7`);
//   //   }
//   //? asserstions methods from Jest instead
//   expect(result).toBe(7);
// });

// test('should generate greeting from name', () => {
//   const greet = generateGreeting('Hani');
//   expect(greet).toBe('Hello Hani!');
// });

// test('should generate greeting from  no name', () => {
//   const greet = generateGreeting();
//   expect(greet).toBe('Hello Anonymous!');
// });
