// console.log("EXPENSIFY REDUX")
import { createStore, combineReducers } from "redux";

//ADD_EXPENSES
//REMOVE_EXPENSES
//EDIT_EXPENSES
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "Date",
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filers: filterReducer,
  })
);
console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "qwqewrteghjgnbv",
      description: "January Rent",
      note: "Bill at the end of the month",
      amount: 1344,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // Date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
