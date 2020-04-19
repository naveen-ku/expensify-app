import { createStore } from "redux";
console.log("Playground Redux");
const store = createStore((state = { count: 0 }, action) => {
  console.log("running store");
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: (state.count = 0),
      };

    default:
      return state;
  }
});
console.log(store.getState());

store.dispatch({
  type: "INCREMENT",
});
console.log(store.getState());

store.dispatch({
  type: "DECREMENT",
});
console.log(store.getState());

store.dispatch({
  type: "DECREMENT",
});
console.log(store.getState());

store.dispatch({
  type: "DECREMENT",
});
console.log(store.getState());

store.dispatch({
  type: "DECREMENT",
});
console.log(store.getState());

store.dispatch({
  type: "RESET",
});
console.log(store.getState());
