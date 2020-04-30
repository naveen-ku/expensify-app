import React from "react";
import { connect } from "react-redux";
import ExpneseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        return <ExpneseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state.expenses[0].description);
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
//Higher Order Component
export default connect(mapStateToProps)(ExpenseList);
