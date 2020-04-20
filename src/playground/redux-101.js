import { createStore } from "redux";
console.log("Playground Redux");
const store = createStore((state = { count: 0 }, action) => {
  // console.log("running store");

  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };

    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
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

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 20,
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "SET",
  count: 111,
});
