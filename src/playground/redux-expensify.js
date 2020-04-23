// console.log("EXPENSIFY REDUX")
import { createStore, combineReducers } from "redux";
import { v1 as uuidv1 } from "uuid";

//ADD_EXPENSES
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv1(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
    },
  };
};
//REMOVE_EXPENSES
const removeExpense = ({ id } = {}) => {
  console.log("removeExpenseId: ", id);
  return {
    type: "REMOVE_EXPENSE",
      id: id
  };
};
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
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(data => data.id != action.id);
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

//Store Creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filers: filterReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: "Redux" }));
const expenseTwo = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
console.log("ExpenseOneId: ", expenseOne.expense.id);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
