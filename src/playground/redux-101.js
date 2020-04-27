import { createStore } from "redux";
console.log("Playground Redux");

//Function for store.Dispatch => Action Generator
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy,
  };
};  

//Function for store.Dispatch => Action Generator
const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy,
  };
};

//Function for store.Dispatch => Action Generator
const resetCount = () => {
  return {
    type: "RESET",
  };
};

//Function for store.Dispatch => Action Generator
const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count: count,
  };
};

//Reducers
// 1. Reducers are pure functions.
const countReducer = (state = { count: 0 }, action) => {
  // console.log("running store");

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: (state.count = 0),
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

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 111 }));
