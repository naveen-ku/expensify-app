import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

//addExpense ->Water bill
store.dispatch(addExpense({ description: "Water Bill", amount: 1500 ,createdAt:2000}));
// console.log(store.getState());

//addExpense ->Gas bill
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
// console.log(store.getState());

//addExpense ->Rent bill
store.dispatch(addExpense({ description: "Rent Bill", amount: 5000 }));
// console.log(store.getState());

//setTextFilter
// store.dispatch(setTextFilter("water"));
// console.log(store.getState());

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

//getVisibleExpenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log("visibleExpenses: ", visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
