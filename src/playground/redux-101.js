import { createStore } from "redux";

//! Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decramentCount = ({ decramentBy = 1 } = {}) => ({
  type: "DECREMENT",
  decramentBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

// Reducers
// 1.Reducers are pure functions-
// 2. Never change state or action-- return an object representing the new state

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decramentBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//! Actions - An object that gets sent to the store, and describes the action we like to take
//* Increment, decrament, reset
// console.log(store.getState());

//? Increment the count

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decramentCount());

store.dispatch(decramentCount({ decramentBy: 10 }));

store.dispatch(setCount({ count: 101 }));
