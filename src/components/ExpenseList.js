import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.filters.text}
      {props.expenses.length}
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state.expenses[0].description);
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};
//Higher Order Component
export default connect(mapStateToProps)(ExpenseList);
