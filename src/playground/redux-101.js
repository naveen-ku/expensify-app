import { createStore } from "redux";
console.log("Playground Redux");

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const setCount = ({ count } = {}) => {
  return {
    type: "SET",
    count: count,
  };
};
const store = createStore((state = { count: 0 }, action) => {
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
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 111 }));
