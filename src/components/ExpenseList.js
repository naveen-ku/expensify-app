import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
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
